const foods = [
    "burger king benim ikilim",
    "burger king kral ikili",
    "komagene porsiyon çiğ köfte",
    "arbys",
    "1.5 adana iskender",
    "kremalı mantarlı kaşarlı tavuk",
    "kiremitte konya tava",
    "tavuk incikten iskender",
    "kızartma bazlama + sucuklu yumurta",
    "mangal söyledik knk et, tavuk ne varsa",
    "yulaf",
    "ballı yulaf",
    "tavuklu pilav",
    "hatay dürüm",
    "bol malzemos",
    "ıslak hamburger"
];

const BUILD_ID = "20260217-constellation-v8-fullscreen-background-blend";

const BASE_STAR_COUNT = 22000;
const MIN_STAR_COUNT = 7000;
const STAR_FIELD_WIDTH = 2200;
const STAR_FIELD_HEIGHT = 1600;
const STAR_FIELD_DEPTH = 2400;
const STAR_SPEED_Z = 0.62;
const DEEP_STAR_RATIO = 0.52;
const MIN_DEEP_STAR_COUNT = 3800;
const DEEP_STAR_FIELD_WIDTH = STAR_FIELD_WIDTH * 1.8;
const DEEP_STAR_FIELD_HEIGHT = STAR_FIELD_HEIGHT * 1.7;
const DEEP_STAR_FIELD_DEPTH = STAR_FIELD_DEPTH * 1.45;
const DEEP_STAR_SPEED_Z = 0.22;

const FOOD_SPEED_Z = 0.55;
const FOOD_SPEED_Y = 0.30;
const FOOD_TILT_X = -Math.PI / 3;
const FOOD_SPAWN_INTERVAL_MS = 820;
const FOOD_MAX_ACTIVE = 64;
const SPAWN_MAX_PER_FRAME = 5;

const MIN_BLACKHOLE_RADIUS = 4;
const MAX_BLACKHOLE_RADIUS = 18;
const BLACKHOLE_LERP = 0.26;
const BLACKHOLE_GROW_START_MS = 260;
const BLACKHOLE_GROW_FULL_MS = 3600;
const BLACKHOLE_POWER_START_MS = 520;
const BLACKHOLE_POWER_RATE = 0.85;
const BLACKHOLE_POWER_MAX = 4.2;
const TOUCH_HOLD_MS = 420;
const POWER_RESET_THRESHOLD_MOUSE_PX = 3;
const POWER_RESET_THRESHOLD_TOUCH_PX = 9;

const STAR_INFLUENCE_MULT = 2.9;
const STAR_MIN_INFLUENCE_RADIUS = 22;
const STAR_HORIZON_MULT = 0.5;
const STAR_PULL_FORCE = 3.0;
const STAR_SWIRL_FORCE = 1.45;
const STAR_PUSH_FORCE = 2.6;
const STAR_GRAVITY_BASE = 58;
const STAR_DRAG = 0.92;
const STAR_HORIZON_CAPTURE_MULT = 1.08;

const FOOD_INFLUENCE_MULT = 3.35;
const FOOD_MIN_INFLUENCE_RADIUS = 28;
const FOOD_HORIZON_MULT = 0.64;
const FOOD_PULL_FORCE = 2.8;
const FOOD_SWIRL_FORCE = 1.15;
const FOOD_PUSH_FORCE = 2.4;
const FOOD_FLOW_POWER_MULT = 0.7;
const FOOD_SPAWN_POWER_MULT = 0.78;
const FOOD_MIN_SPAWN_INTERVAL_MS = 240;
const FOOD_GRAVITY_BASE = 58;
const FOOD_DRAG = 0.86;
const FOOD_HORIZON_CAPTURE_MULT = 1.1;

const CONSTELLATION_SCAN_MAX_WIDTH = 560;
const CONSTELLATION_WORLD_WIDTH = 360;
const CONSTELLATION_SCALE = 3.15;
const CONSTELLATION_TARGET_Z = -240;
const CONSTELLATION_MOUTH_U = 0.505;
const CONSTELLATION_MOUTH_V = 0.358;
const CONSTELLATION_MOUTH_TARGET_X = 0;
const CONSTELLATION_MOUTH_TARGET_Y = 6;
const CONSTELLATION_FADE_MS = 980;
const CONSTELLATION_NODE_LINK_DISTANCE = 23.5;
const CONSTELLATION_MAX_LINKS_PER_NODE = 3;

let scene;
let camera;
let renderer;
let stars;
let deepStars;
let starCount = BASE_STAR_COUNT;
let starPositions;
let starDrift;
let starVelX;
let starVelY;
let deepStarCount = MIN_DEEP_STAR_COUNT;
let deepStarPositions;
let deepStarDrift;

let blackHoleCore;
let blackHoleRadius = MIN_BLACKHOLE_RADIUS;
let blackHolePulse = 0;
let blackHolePower = 0;

let constellationGroup;
let constellationDustMaterial;
let constellationNodeMaterial;
let constellationLineMaterial;
let constellationReadyAtMs = 0;
const constellationBasePosition = new THREE.Vector3();

let foodMeshes = [];
let maxActiveFood = FOOD_MAX_ACTIVE;

const pointerTargetNDC = new THREE.Vector2(0, 0);
const pointerSmoothNDC = new THREE.Vector2(0, 0);
const pointerRayPoint = new THREE.Vector3();
const pointerRayDir = new THREE.Vector3(0, 0, -1);
const pointerWorld = new THREE.Vector3();

let pointerInside = false;
let isRightPointerDown = false;
let lastPointerMoveMs = performance.now();
let lastFrameMs = performance.now();
let spawnAccumulatorMs = 0;
let touchHoldTimer = null;
let touchHoldPointerId = null;
let touchHoldActivated = false;
let powerAnchorClientX = null;
let powerAnchorClientY = null;

function resolvePerformanceProfile() {
    const coarsePointer = typeof window.matchMedia === "function" && window.matchMedia("(pointer: coarse)").matches;
    const cores = Number(navigator.hardwareConcurrency || 0);
    const deviceMemory = Number(navigator.deviceMemory || 0);
    const dpr = Number(window.devicePixelRatio || 1);

    let starMultiplier = 1;
    let foodMultiplier = 1;

    if (coarsePointer) {
        starMultiplier *= 0.74;
        foodMultiplier *= 0.86;
    }
    if (cores && cores <= 4) {
        starMultiplier *= 0.72;
        foodMultiplier *= 0.9;
    } else if (cores && cores <= 6) {
        starMultiplier *= 0.87;
    }
    if (deviceMemory && deviceMemory <= 4) {
        starMultiplier *= 0.72;
        foodMultiplier *= 0.9;
    }
    if (dpr > 1.6) {
        starMultiplier *= 0.86;
    }

    starCount = Math.max(MIN_STAR_COUNT, Math.min(BASE_STAR_COUNT, Math.round(BASE_STAR_COUNT * starMultiplier)));
    deepStarCount = Math.max(MIN_DEEP_STAR_COUNT, Math.round(starCount * DEEP_STAR_RATIO));
    maxActiveFood = Math.max(28, Math.round(FOOD_MAX_ACTIVE * foodMultiplier));
}

function init() {
    const container = document.getElementById("container");
    if (!container) {
        return;
    }

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.1, 2800);
    camera.position.set(0, 6, 75);

    renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.domElement.style.touchAction = "none";
    renderer.domElement.style.cursor = "none";
    container.appendChild(renderer.domElement);

    console.info("[husoyayazar] build", BUILD_ID);

    resolvePerformanceProfile();
    loadConstellationFromImage("husospace.png");
    createStars();
    createDeepStars();
    createBlackHoleVisual();

    for (let i = 0; i < 4; i += 1) {
        spawnFoodRow();
    }

    bindEvents();
    animate();
}

function bindEvents() {
    window.addEventListener("resize", onWindowResize);

    renderer.domElement.addEventListener("pointerenter", () => {
        pointerInside = true;
        powerAnchorClientX = null;
        powerAnchorClientY = null;
    });

    renderer.domElement.addEventListener("pointerleave", () => {
        pointerInside = false;
        clearPointerPushState();
    });

    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerCancel);
    window.addEventListener("blur", clearPointerPushState);

    renderer.domElement.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

    window.addEventListener("keydown", (event) => {
        if (event.code === "Space") {
            event.preventDefault();
            blackHolePulse = Math.max(blackHolePulse, 11);
        }
    });
}

function clearTouchHoldTimer() {
    if (touchHoldTimer !== null) {
        window.clearTimeout(touchHoldTimer);
        touchHoldTimer = null;
    }
}

function clearPointerPushState() {
    clearTouchHoldTimer();
    isRightPointerDown = false;
    touchHoldPointerId = null;
    touchHoldActivated = false;
    blackHolePower = 0;
    powerAnchorClientX = null;
    powerAnchorClientY = null;
}

function onPointerDown(event) {
    pointerInside = true;
    onPointerMove(event);

    if (event.pointerType === "touch") {
        clearTouchHoldTimer();
        touchHoldPointerId = event.pointerId;
        touchHoldActivated = false;
        touchHoldTimer = window.setTimeout(() => {
            touchHoldActivated = true;
            isRightPointerDown = true;
        }, TOUCH_HOLD_MS);
        return;
    }

    if (event.button === 2) {
        isRightPointerDown = true;
        return;
    }

    if (event.button === 0) {
        spawnFoodRow();
    }
}

function onPointerUp(event) {
    if (event.pointerType === "touch") {
        if (touchHoldPointerId === null || event.pointerId !== touchHoldPointerId) {
            return;
        }

        clearTouchHoldTimer();
        if (!touchHoldActivated) {
            spawnFoodRow();
        }
        isRightPointerDown = false;
        touchHoldPointerId = null;
        touchHoldActivated = false;
        return;
    }

    if (event.button === 2) {
        isRightPointerDown = false;
    }
}

function onPointerCancel(event) {
    if (event.pointerType !== "touch") {
        return;
    }
    clearPointerPushState();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
}

function onPointerMove(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const now = performance.now();

    pointerTargetNDC.x = x * 2 - 1;
    pointerTargetNDC.y = -(y * 2 - 1);
    pointerInside = true;

    if (powerAnchorClientX === null || powerAnchorClientY === null) {
        powerAnchorClientX = event.clientX;
        powerAnchorClientY = event.clientY;
        lastPointerMoveMs = now;
        blackHolePower = 0;
        return;
    }

    const dx = event.clientX - powerAnchorClientX;
    const dy = event.clientY - powerAnchorClientY;
    const threshold = event.pointerType === "touch"
        ? POWER_RESET_THRESHOLD_TOUCH_PX
        : POWER_RESET_THRESHOLD_MOUSE_PX;
    const movedEnough = (dx * dx + dy * dy) >= threshold * threshold;

    if (movedEnough) {
        powerAnchorClientX = event.clientX;
        powerAnchorClientY = event.clientY;
        lastPointerMoveMs = now;
        blackHolePower = 0;
    }
}

function createStars() {
    starPositions = new Float32Array(starCount * 3);
    starDrift = new Float32Array(starCount);
    starVelX = new Float32Array(starCount);
    starVelY = new Float32Array(starCount);

    for (let i = 0; i < starCount; i += 1) {
        const index3 = i * 3;
        resetStar(index3, false, i);
        starDrift[i] = 0.65 + Math.random() * 0.75;
        starVelX[i] = 0;
        starVelY[i] = 0;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));

    const starMaterial = new THREE.PointsMaterial({
        color: 0xf5fbff,
        size: 0.78,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.48,
        depthWrite: false
    });

    stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
}

function resetStar(index3, moveToBack, starIndex = Math.floor(index3 / 3)) {
    starPositions[index3] = (Math.random() - 0.5) * STAR_FIELD_WIDTH;
    starPositions[index3 + 1] = (Math.random() - 0.5) * STAR_FIELD_HEIGHT;

    if (moveToBack) {
        starPositions[index3 + 2] = -STAR_FIELD_DEPTH * 0.55 - Math.random() * STAR_FIELD_DEPTH * 0.4;
    } else {
        starPositions[index3 + 2] = (Math.random() - 0.5) * STAR_FIELD_DEPTH;
    }

    if (starVelX && starVelY) {
        starVelX[starIndex] = 0;
        starVelY[starIndex] = 0;
    }
}

function createDeepStars() {
    deepStarPositions = new Float32Array(deepStarCount * 3);
    deepStarDrift = new Float32Array(deepStarCount);

    for (let i = 0; i < deepStarCount; i += 1) {
        const index3 = i * 3;
        resetDeepStar(index3, false);
        deepStarDrift[i] = 0.52 + Math.random() * 0.88;
    }

    const deepGeometry = new THREE.BufferGeometry();
    deepGeometry.setAttribute("position", new THREE.BufferAttribute(deepStarPositions, 3));

    const deepMaterial = new THREE.PointsMaterial({
        color: 0xbdd6f7,
        size: 0.62,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.22,
        depthWrite: false
    });

    deepStars = new THREE.Points(deepGeometry, deepMaterial);
    deepStars.renderOrder = 0;
    scene.add(deepStars);
}

function resetDeepStar(index3, moveToBack) {
    deepStarPositions[index3] = (Math.random() - 0.5) * DEEP_STAR_FIELD_WIDTH;
    deepStarPositions[index3 + 1] = (Math.random() - 0.5) * DEEP_STAR_FIELD_HEIGHT;

    if (moveToBack) {
        deepStarPositions[index3 + 2] = -DEEP_STAR_FIELD_DEPTH * 0.58 - Math.random() * DEEP_STAR_FIELD_DEPTH * 0.34;
    } else {
        deepStarPositions[index3 + 2] = (Math.random() - 0.5) * DEEP_STAR_FIELD_DEPTH;
    }
}

function createBlackHoleTexture() {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d");

    const gradient = context.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        size / 2
    );
    gradient.addColorStop(0, "rgba(0,0,0,1)");
    gradient.addColorStop(0.58, "rgba(0,0,0,0.995)");
    gradient.addColorStop(0.7, "rgba(20,10,0,0.92)");
    gradient.addColorStop(0.82, "rgba(180,110,28,0.22)");
    gradient.addColorStop(0.9, "rgba(60,35,12,0.1)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");

    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    return texture;
}

function createBlackHoleVisual() {
    const holeTexture = createBlackHoleTexture();
    blackHoleCore = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.MeshBasicMaterial({
            map: holeTexture,
            transparent: true,
            depthWrite: false,
            depthTest: false
        })
    );
    blackHoleCore.renderOrder = 100;
    blackHoleCore.position.set(0, 0, 3);
    scene.add(blackHoleCore);
}

function loadConstellationFromImage(imageUrl) {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => {
        buildConstellation(image);
    };
    image.onerror = () => {
        console.warn("husospace.png okunamadi, takimyildiz katmani atlandi.");
    };
    image.src = imageUrl;
}

function luminancePercentile(lum, percentile) {
    const bins = new Uint32Array(256);
    for (let i = 0; i < lum.length; i += 1) {
        const idx = Math.max(0, Math.min(255, Math.floor(lum[i] * 255)));
        bins[idx] += 1;
    }

    const target = Math.max(1, Math.floor(lum.length * percentile));
    let cumulative = 0;
    for (let i = 0; i < bins.length; i += 1) {
        cumulative += bins[i];
        if (cumulative >= target) {
            return i / 255;
        }
    }
    return 1;
}

function buildConstellation(image) {
    const scanScale = Math.min(1, CONSTELLATION_SCAN_MAX_WIDTH / image.width);
    const scanWidth = Math.max(96, Math.floor(image.width * scanScale));
    const scanHeight = Math.max(64, Math.floor(image.height * scanScale));

    const canvas = document.createElement("canvas");
    canvas.width = scanWidth;
    canvas.height = scanHeight;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) {
        return;
    }

    context.drawImage(image, 0, 0, scanWidth, scanHeight);
    const pixels = context.getImageData(0, 0, scanWidth, scanHeight).data;
    const pixelCount = scanWidth * scanHeight;
    const lum = new Float32Array(pixelCount);

    for (let i = 0; i < pixelCount; i += 1) {
        const p = i * 4;
        const r = pixels[p];
        const g = pixels[p + 1];
        const b = pixels[p + 2];
        lum[i] = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    }

    const lumThreshold = luminancePercentile(lum, 0.972);
    const contrastThreshold = 0.0105;
    const rawMask = new Uint8Array(pixelCount);

    for (let y = 0; y < scanHeight; y += 1) {
        const yUp = Math.max(0, y - 1);
        const yDown = Math.min(scanHeight - 1, y + 1);
        for (let x = 0; x < scanWidth; x += 1) {
            const xLeft = Math.max(0, x - 1);
            const xRight = Math.min(scanWidth - 1, x + 1);
            const idx = y * scanWidth + x;

            const localCross = (
                lum[y * scanWidth + xLeft] +
                lum[y * scanWidth + xRight] +
                lum[yUp * scanWidth + x] +
                lum[yDown * scanWidth + x]
            ) * 0.25;
            const contrast = lum[idx] - localCross;

            if (lum[idx] >= lumThreshold && contrast >= contrastThreshold) {
                rawMask[idx] = 1;
            }
        }
    }

    const mask = new Uint8Array(pixelCount);
    for (let y = 0; y < scanHeight; y += 1) {
        for (let x = 0; x < scanWidth; x += 1) {
            const idx = y * scanWidth + x;
            if (!rawMask[idx]) {
                continue;
            }
            let neighbors = 0;
            for (let oy = -1; oy <= 1; oy += 1) {
                const py = y + oy;
                if (py < 0 || py >= scanHeight) {
                    continue;
                }
                for (let ox = -1; ox <= 1; ox += 1) {
                    if (ox === 0 && oy === 0) {
                        continue;
                    }
                    const px = x + ox;
                    if (px < 0 || px >= scanWidth) {
                        continue;
                    }
                    if (rawMask[py * scanWidth + px]) {
                        neighbors += 1;
                    }
                }
            }
            if (neighbors >= 1) {
                mask[idx] = 1;
            }
        }
    }

    const worldWidth = CONSTELLATION_WORLD_WIDTH;
    const worldHeight = worldWidth * (scanHeight / scanWidth);
    const dustTriples = [];
    const nodeTriples = [];
    const nodeGridX = [];
    const nodeGridY = [];

    for (let y = 0; y < scanHeight; y += 1) {
        for (let x = 0; x < scanWidth; x += 1) {
            const idx = y * scanWidth + x;
            if (!mask[idx]) {
                continue;
            }

            const hash = ((x * 73856093) ^ (y * 19349663) ^ ((x + y) * 83492791)) >>> 0;
            const brightnessBoost = THREE.MathUtils.clamp((lum[idx] - lumThreshold) * 6.2, 0, 1);
            const dustChance = THREE.MathUtils.clamp(0.56 + brightnessBoost * 0.34, 0.42, 0.95);
            if ((hash % 1000) / 1000 > dustChance) {
                continue;
            }

            const wx = (x / (scanWidth - 1) - 0.5) * worldWidth;
            const wy = (0.5 - y / (scanHeight - 1)) * worldHeight;
            const wz = -190 + (Math.random() - 0.5) * 3.4;
            dustTriples.push(wx, wy, wz);

            const nodeChance = THREE.MathUtils.clamp(0.24 + brightnessBoost * 0.46, 0.18, 0.82);
            if (((hash >>> 11) % 1000) / 1000 <= nodeChance) {
                nodeTriples.push(
                    wx + (Math.random() - 0.5) * 1.1,
                    wy + (Math.random() - 0.5) * 1.1,
                    wz + (Math.random() - 0.5) * 2.0
                );
                nodeGridX.push(wx);
                nodeGridY.push(wy);
            }
        }
    }

    if (dustTriples.length < 220 || nodeTriples.length < 140) {
        return;
    }

    const nodeCount = Math.floor(nodeTriples.length / 3);
    const lineTriples = [];
    const cellSize = CONSTELLATION_NODE_LINK_DISTANCE;
    const maxDistSq = cellSize * cellSize;
    const linkCounts = new Uint8Array(nodeCount);
    const cellMap = new Map();

    for (let i = 0; i < nodeCount; i += 1) {
        const x = nodeGridX[i];
        const y = nodeGridY[i];
        const cx = Math.floor((x + worldWidth * 0.5) / cellSize);
        const cy = Math.floor((y + worldHeight * 0.5) / cellSize);
        const key = `${cx}:${cy}`;
        if (!cellMap.has(key)) {
            cellMap.set(key, []);
        }
        cellMap.get(key).push(i);
    }

    for (let i = 0; i < nodeCount; i += 1) {
        if (linkCounts[i] >= CONSTELLATION_MAX_LINKS_PER_NODE) {
            continue;
        }

        const ax = nodeTriples[i * 3];
        const ay = nodeTriples[i * 3 + 1];
        const az = nodeTriples[i * 3 + 2];
        const cx = Math.floor((nodeGridX[i] + worldWidth * 0.5) / cellSize);
        const cy = Math.floor((nodeGridY[i] + worldHeight * 0.5) / cellSize);
        const candidates = [];

        for (let oy = -1; oy <= 1; oy += 1) {
            for (let ox = -1; ox <= 1; ox += 1) {
                const key = `${cx + ox}:${cy + oy}`;
                const bucket = cellMap.get(key);
                if (!bucket) {
                    continue;
                }
                for (let b = 0; b < bucket.length; b += 1) {
                    const j = bucket[b];
                    if (j <= i || linkCounts[j] >= CONSTELLATION_MAX_LINKS_PER_NODE) {
                        continue;
                    }

                    const bx = nodeTriples[j * 3];
                    const by = nodeTriples[j * 3 + 1];
                    const dx = bx - ax;
                    const dy = by - ay;
                    const distSq = dx * dx + dy * dy;
                    if (distSq < 1.2 || distSq > maxDistSq) {
                        continue;
                    }
                    candidates.push([distSq, j]);
                }
            }
        }

        candidates.sort((a, b) => a[0] - b[0]);
        for (let c = 0; c < candidates.length; c += 1) {
            if (linkCounts[i] >= CONSTELLATION_MAX_LINKS_PER_NODE) {
                break;
            }

            const distSq = candidates[c][0];
            const j = candidates[c][1];
            if (linkCounts[j] >= CONSTELLATION_MAX_LINKS_PER_NODE) {
                continue;
            }

            const keepChance = THREE.MathUtils.clamp(0.9 - (distSq / maxDistSq) * 0.32, 0.45, 0.92);
            const pairHash = (((i + 1) * 73856093) ^ ((j + 1) * 19349663)) >>> 0;
            if ((pairHash % 1000) / 1000 > keepChance) {
                continue;
            }

            const bx = nodeTriples[j * 3];
            const by = nodeTriples[j * 3 + 1];
            const bz = nodeTriples[j * 3 + 2];

            lineTriples.push(ax, ay, az, bx, by, bz);
            linkCounts[i] += 1;
            linkCounts[j] += 1;
        }
    }

    const extendedMaxDistSq = maxDistSq * 2.25;
    for (let i = 0; i < nodeCount; i += 1) {
        if (linkCounts[i] > 0) {
            continue;
        }

        const ax = nodeTriples[i * 3];
        const ay = nodeTriples[i * 3 + 1];
        const az = nodeTriples[i * 3 + 2];

        let bestJ = -1;
        let bestDistSq = Infinity;
        for (let j = 0; j < nodeCount; j += 1) {
            if (j === i) {
                continue;
            }
            if (linkCounts[j] >= CONSTELLATION_MAX_LINKS_PER_NODE) {
                continue;
            }
            const bx = nodeTriples[j * 3];
            const by = nodeTriples[j * 3 + 1];
            const dx = bx - ax;
            const dy = by - ay;
            const distSq = dx * dx + dy * dy;
            if (distSq < 1.2 || distSq > extendedMaxDistSq) {
                continue;
            }
            if (distSq < bestDistSq) {
                bestDistSq = distSq;
                bestJ = j;
            }
        }

        if (bestJ >= 0) {
            const bx = nodeTriples[bestJ * 3];
            const by = nodeTriples[bestJ * 3 + 1];
            const bz = nodeTriples[bestJ * 3 + 2];
            lineTriples.push(ax, ay, az, bx, by, bz);
            linkCounts[i] += 1;
            linkCounts[bestJ] += 1;
        }
    }

    if (constellationGroup) {
        scene.remove(constellationGroup);
        constellationGroup.traverse((child) => {
            if (child.geometry) {
                child.geometry.dispose();
            }
        });
    }
    if (constellationDustMaterial) {
        constellationDustMaterial.dispose();
    }
    if (constellationNodeMaterial) {
        constellationNodeMaterial.dispose();
    }
    if (constellationLineMaterial) {
        constellationLineMaterial.dispose();
        constellationLineMaterial = null;
    }

    constellationGroup = new THREE.Group();

    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute("position", new THREE.Float32BufferAttribute(dustTriples, 3));
    constellationDustMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1.06,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        depthTest: true,
        blending: THREE.AdditiveBlending
    });
    const dustPoints = new THREE.Points(dustGeometry, constellationDustMaterial);
    dustPoints.renderOrder = 2;
    constellationGroup.add(dustPoints);

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute("position", new THREE.Float32BufferAttribute(nodeTriples, 3));
    constellationNodeMaterial = new THREE.PointsMaterial({
        color: 0xe6f2ff,
        size: 2.2,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        depthTest: true,
        blending: THREE.AdditiveBlending
    });
    const nodePoints = new THREE.Points(nodeGeometry, constellationNodeMaterial);
    nodePoints.renderOrder = 3;
    constellationGroup.add(nodePoints);

    if (lineTriples.length > 0) {
        const lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(lineTriples, 3));
        constellationLineMaterial = new THREE.LineBasicMaterial({
            color: 0xc7daec,
            transparent: true,
            opacity: 0,
            depthWrite: false,
            depthTest: true,
            blending: THREE.NormalBlending
        });
        const lines = new THREE.LineSegments(lineGeometry, constellationLineMaterial);
        lines.renderOrder = 1;
        constellationGroup.add(lines);
    }

    const mouthLocalX = (CONSTELLATION_MOUTH_U - 0.5) * worldWidth;
    const mouthLocalY = (0.5 - CONSTELLATION_MOUTH_V) * worldHeight;

    constellationGroup.scale.set(CONSTELLATION_SCALE, CONSTELLATION_SCALE, 1);
    constellationBasePosition.set(
        CONSTELLATION_MOUTH_TARGET_X - mouthLocalX * CONSTELLATION_SCALE,
        CONSTELLATION_MOUTH_TARGET_Y - mouthLocalY * CONSTELLATION_SCALE,
        CONSTELLATION_TARGET_Z
    );
    constellationGroup.position.copy(constellationBasePosition);
    constellationGroup.rotation.x = -0.02;
    constellationGroup.rotation.z = -0.006;
    constellationReadyAtMs = performance.now();
    scene.add(constellationGroup);
}

function spawnFoodRow() {
    const shuffledFoods = [...foods].sort(() => 0.5 - Math.random());

    if (Math.random() > 0.42) {
        createFoodMesh(shuffledFoods[0], THREE.MathUtils.randFloatSpread(30));
    } else {
        createFoodMesh(shuffledFoods[0], -22 + Math.random() * 7);
        createFoodMesh(shuffledFoods[1], 22 - Math.random() * 7);
    }

    while (foodMeshes.length > maxActiveFood) {
        removeFoodAt(0);
    }
}

function createFoodMesh(text, xPos) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const fontSize = 62;
    context.font = `700 ${fontSize}px "Arial Black", Arial, sans-serif`;

    const width = Math.ceil(context.measureText(text).width + 64);
    const height = 118;
    canvas.width = width;
    canvas.height = height;

    context.font = `700 ${fontSize}px "Arial Black", Arial, sans-serif`;
    context.textAlign = "center";
    context.textBaseline = "middle";

    context.strokeStyle = "rgba(0, 0, 0, 0.65)";
    context.lineWidth = 8;
    context.strokeText(text, width / 2, height / 2);

    context.fillStyle = "#ffd040";
    context.fillText(text, width / 2, height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;

    const geometry = new THREE.PlaneGeometry(width / 16, height / 16);
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
        opacity: 0.96
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(xPos, -64, 58 + Math.random() * 18);
    mesh.rotation.x = FOOD_TILT_X;
    mesh.userData = {
        vx: 0,
        vy: 0,
        captured: false
    };

    scene.add(mesh);
    foodMeshes.push(mesh);
}

function removeFoodAt(index) {
    const mesh = foodMeshes[index];
    if (!mesh) {
        return;
    }

    scene.remove(mesh);
    if (mesh.material && mesh.material.map) {
        mesh.material.map.dispose();
    }
    if (mesh.material) {
        mesh.material.dispose();
    }
    if (mesh.geometry) {
        mesh.geometry.dispose();
    }

    foodMeshes.splice(index, 1);
}

function updatePointerRay() {
    pointerRayPoint.set(pointerSmoothNDC.x, pointerSmoothNDC.y, 0.5);
    pointerRayPoint.unproject(camera);
    pointerRayDir.copy(pointerRayPoint).sub(camera.position).normalize();

    if (Math.abs(pointerRayDir.z) < 0.0001) {
        pointerRayDir.z = pointerRayDir.z < 0 ? -0.0001 : 0.0001;
    }
}

function pointerAtZ(zValue, target) {
    const t = (zValue - camera.position.z) / pointerRayDir.z;
    target.set(
        camera.position.x + pointerRayDir.x * t,
        camera.position.y + pointerRayDir.y * t,
        zValue
    );
    return target;
}

function updateBlackHole(delta, nowMs) {
    const idleMs = nowMs - lastPointerMoveMs;
    let targetRadius = 0;
    let targetPower = 0;

    if (pointerInside) {
        const growProgress = THREE.MathUtils.clamp(
            (idleMs - BLACKHOLE_GROW_START_MS) / (BLACKHOLE_GROW_FULL_MS - BLACKHOLE_GROW_START_MS),
            0,
            1
        );
        const smoothGrow = growProgress * growProgress * (3 - 2 * growProgress);
        targetRadius = THREE.MathUtils.lerp(MIN_BLACKHOLE_RADIUS, MAX_BLACKHOLE_RADIUS, smoothGrow);

        const powerSeconds = Math.max(0, (idleMs - BLACKHOLE_POWER_START_MS) / 1000);
        targetPower = Math.min(BLACKHOLE_POWER_MAX, powerSeconds * BLACKHOLE_POWER_RATE);
    }

    if (blackHolePulse > 0) {
        targetRadius += blackHolePulse;
        blackHolePulse = Math.max(0, blackHolePulse - 1.8 * delta);
    }

    blackHoleRadius = THREE.MathUtils.lerp(blackHoleRadius, targetRadius, 0.05 * delta);
    const powerLerp = targetPower < blackHolePower ? 0.34 : 0.06;
    blackHolePower = THREE.MathUtils.lerp(blackHolePower, targetPower, powerLerp * delta);
    pointerSmoothNDC.lerp(pointerTargetNDC, BLACKHOLE_LERP * delta);
    updatePointerRay();

    pointerAtZ(3, pointerWorld);

    const visualRadius = Math.max(0.001, blackHoleRadius);
    blackHoleCore.visible = visualRadius > 0.04;

    blackHoleCore.position.copy(pointerWorld);

    blackHoleCore.quaternion.copy(camera.quaternion);

    blackHoleCore.scale.set(visualRadius, visualRadius, 1);
}

function updateDeepStars(delta) {
    if (!deepStars || !deepStarPositions || !deepStarDrift) {
        return;
    }

    for (let i = 0; i < deepStarCount; i += 1) {
        const index3 = i * 3;
        deepStarPositions[index3 + 2] += DEEP_STAR_SPEED_Z * deepStarDrift[i] * delta;

        if (deepStarPositions[index3 + 2] > 660) {
            resetDeepStar(index3, true);
        }
    }

    deepStars.geometry.attributes.position.needsUpdate = true;
}

function updateStars(delta) {
    const positions = starPositions;
    const hasInfluence = blackHoleRadius > 0.5;

    const cameraX = camera.position.x;
    const cameraY = camera.position.y;
    const cameraZ = camera.position.z;
    const rayX = pointerRayDir.x;
    const rayY = pointerRayDir.y;
    const rayZ = pointerRayDir.z;

    const influenceRadius = Math.max(
        STAR_MIN_INFLUENCE_RADIUS,
        blackHoleRadius * STAR_INFLUENCE_MULT * (1 + blackHolePower * 0.22)
    );
    const influenceRadiusSq = influenceRadius * influenceRadius;
    const horizonRadius = blackHoleRadius * STAR_HORIZON_MULT * (1 + blackHolePower * 0.1);
    const captureRadius = horizonRadius * STAR_HORIZON_CAPTURE_MULT;
    const gravityStrength = STAR_GRAVITY_BASE * (1 + blackHolePower * 1.28);
    const pullForceBase = STAR_PULL_FORCE * (1 + blackHolePower * 0.72);
    const swirlForceBase = STAR_SWIRL_FORCE * (1 + blackHolePower * 0.46);
    const drag = Math.pow(STAR_DRAG, delta);

    for (let i = 0; i < starCount; i += 1) {
        const index3 = i * 3;
        let x = positions[index3];
        let y = positions[index3 + 1];
        let z = positions[index3 + 2];
        let vx = starVelX[i];
        let vy = starVelY[i];

        z += STAR_SPEED_Z * starDrift[i] * delta;

        if (z > 620) {
            resetStar(index3, true, i);
            x = positions[index3];
            y = positions[index3 + 1];
            z = positions[index3 + 2];
        }

        if (hasInfluence) {
            const t = (z - cameraZ) / rayZ;
            const mouseX = cameraX + rayX * t;
            const mouseY = cameraY + rayY * t;
            const dx = x - mouseX;
            const dy = y - mouseY;
            const distSq = dx * dx + dy * dy;

            if (distSq < influenceRadiusSq) {
                const dist = Math.sqrt(distSq) + 0.0001;
                if (dist < captureRadius) {
                    resetStar(index3, true, i);
                    x = positions[index3];
                    y = positions[index3 + 1];
                    z = positions[index3 + 2];
                    vx = starVelX[i];
                    vy = starVelY[i];
                    positions[index3] = x;
                    positions[index3 + 1] = y;
                    positions[index3 + 2] = z;
                    continue;
                }

                const nx = dx / dist;
                const ny = dy / dist;
                const falloff = 1 - dist / influenceRadius;
                const inverseDistSq = 1 / (distSq + 14);
                const radialForce = gravityStrength * inverseDistSq * (0.38 + falloff * falloff * 2.6);
                const horizonBoost = 1 + Math.pow(horizonRadius / Math.max(dist, horizonRadius), 2.25) * 2.3;

                if (isRightPointerDown) {
                    const pushForce = radialForce * STAR_PUSH_FORCE;
                    vx += nx * pushForce * delta;
                    vy += ny * pushForce * delta;
                } else {
                    const tx = -ny;
                    const ty = nx;
                    const orbitBias = THREE.MathUtils.clamp(1 - dist / influenceRadius, 0, 1);
                    const pullForce = radialForce * pullForceBase * (1 + orbitBias * 0.55) * horizonBoost;
                    const swirlDampNearCore = THREE.MathUtils.clamp((dist - captureRadius) / (influenceRadius - captureRadius + 0.0001), 0, 1);
                    const swirlForce = radialForce * swirlForceBase * (0.35 + orbitBias * 0.95) * swirlDampNearCore;

                    vx += (-nx * pullForce + tx * swirlForce) * delta;
                    vy += (-ny * pullForce + ty * swirlForce) * delta;
                }
            }
        }

        vx *= drag;
        vy *= drag;
        x += vx * delta;
        y += vy * delta;

        starVelX[i] = vx;
        starVelY[i] = vy;
        positions[index3] = x;
        positions[index3 + 1] = y;
        positions[index3 + 2] = z;
    }

    stars.geometry.attributes.position.needsUpdate = true;
}

function updateFoodMeshes(delta) {
    const hasInfluence = blackHoleRadius > 0.5;

    const cameraX = camera.position.x;
    const cameraY = camera.position.y;
    const cameraZ = camera.position.z;
    const rayX = pointerRayDir.x;
    const rayY = pointerRayDir.y;
    const rayZ = pointerRayDir.z;

    const influenceRadius = Math.max(
        FOOD_MIN_INFLUENCE_RADIUS,
        blackHoleRadius * FOOD_INFLUENCE_MULT * (1 + blackHolePower * 0.24)
    );
    const influenceRadiusSq = influenceRadius * influenceRadius;
    const horizonRadius = blackHoleRadius * FOOD_HORIZON_MULT * (1 + blackHolePower * 0.12);
    const captureRadius = horizonRadius * FOOD_HORIZON_CAPTURE_MULT;
    const gravityStrength = FOOD_GRAVITY_BASE * (1 + blackHolePower * 1.2);
    const pullForceBase = FOOD_PULL_FORCE * (1 + blackHolePower * 0.75);
    const swirlForceBase = FOOD_SWIRL_FORCE * (1 + blackHolePower * 0.5);
    const flowSpeedMul = 1 + blackHolePower * FOOD_FLOW_POWER_MULT;
    const drag = Math.pow(FOOD_DRAG, delta);

    for (let i = foodMeshes.length - 1; i >= 0; i -= 1) {
        const mesh = foodMeshes[i];
        const state = mesh.userData;

        let ax = 0;
        let ay = 0;

        if (hasInfluence) {
            const t = (mesh.position.z - cameraZ) / rayZ;
            const mouseX = cameraX + rayX * t;
            const mouseY = cameraY + rayY * t;
            const dx = mesh.position.x - mouseX;
            const dy = mesh.position.y - mouseY;
            const distSq = dx * dx + dy * dy;

            if (distSq < influenceRadiusSq) {
                const dist = Math.sqrt(distSq) + 0.0001;
                if (dist < captureRadius) {
                    removeFoodAt(i);
                    continue;
                }

                const nx = dx / dist;
                const ny = dy / dist;
                const tx = -ny;
                const ty = nx;
                const falloff = 1 - dist / influenceRadius;
                const inverseDistSq = 1 / (distSq + 16);
                const radialForce = gravityStrength * inverseDistSq * (0.34 + falloff * falloff * 2.5);
                const horizonBoost = 1 + Math.pow(horizonRadius / Math.max(dist, horizonRadius), 2.2) * 2.1;

                if (isRightPointerDown) {
                    const pushForce = radialForce * FOOD_PUSH_FORCE;
                    ax += nx * pushForce;
                    ay += ny * pushForce;
                } else {
                    const orbitBias = THREE.MathUtils.clamp(1 - dist / influenceRadius, 0, 1);
                    const pullForce = radialForce * pullForceBase * (1 + orbitBias * 0.52) * horizonBoost;
                    const swirlDampNearCore = THREE.MathUtils.clamp((dist - captureRadius) / (influenceRadius - captureRadius + 0.0001), 0, 1);
                    const swirlForce = radialForce * swirlForceBase * (0.3 + orbitBias * 0.98) * swirlDampNearCore;

                    ax += -nx * pullForce + tx * swirlForce;
                    ay += -ny * pullForce + ty * swirlForce;
                    state.captured = true;
                }
            } else if (state.captured) {
                state.captured = false;
            }
        }

        state.vx = (state.vx + ax * delta) * drag;
        state.vy = (state.vy + ay * delta) * drag;

        mesh.position.x += state.vx * delta;
        mesh.position.y += FOOD_SPEED_Y * flowSpeedMul * delta + state.vy * delta;
        mesh.position.z -= FOOD_SPEED_Z * flowSpeedMul * delta;

        mesh.rotation.z += 0.002 * delta + Math.abs(state.vx) * 0.014;

        mesh.material.opacity = THREE.MathUtils.clamp((mesh.position.z + 620) / 640, 0, 0.96);

        if (mesh.position.z < -620 || mesh.position.y > 300) {
            removeFoodAt(i);
        }
    }
}

function updateConstellation(nowMs) {
    if (!constellationGroup || !constellationDustMaterial || !constellationNodeMaterial) {
        return;
    }

    const fadeProgress = THREE.MathUtils.clamp(
        (nowMs - constellationReadyAtMs) / CONSTELLATION_FADE_MS,
        0,
        1
    );
    const pulse = 0.92 + Math.sin(nowMs * 0.0017) * 0.08;
    constellationDustMaterial.opacity = (0.045 + pulse * 0.014) * fadeProgress;
    constellationNodeMaterial.opacity = (0.12 + pulse * 0.028) * fadeProgress;

    if (constellationLineMaterial) {
        constellationLineMaterial.opacity = (0.05 + pulse * 0.016) * fadeProgress;
    }

    constellationGroup.position.x = constellationBasePosition.x + Math.sin(nowMs * 0.00006) * 1.0;
    constellationGroup.position.y = constellationBasePosition.y + Math.sin(nowMs * 0.00008) * 0.9;
    constellationGroup.rotation.z = -0.006 + Math.sin(nowMs * 0.000045) * 0.011;
}

function animate(nowMs = performance.now()) {
    requestAnimationFrame(animate);

    const frameDeltaMs = nowMs - lastFrameMs;
    lastFrameMs = nowMs;
    const delta = Math.min(frameDeltaMs / 16.666, 2.4);

    updateBlackHole(delta, nowMs);

    const dynamicSpawnInterval = Math.max(
        FOOD_MIN_SPAWN_INTERVAL_MS,
        FOOD_SPAWN_INTERVAL_MS / (1 + blackHolePower * FOOD_SPAWN_POWER_MULT)
    );
    const maxBacklog = dynamicSpawnInterval * (SPAWN_MAX_PER_FRAME + 1);
    spawnAccumulatorMs = Math.min(spawnAccumulatorMs + frameDeltaMs, maxBacklog);

    let spawnsThisFrame = 0;
    while (spawnAccumulatorMs >= dynamicSpawnInterval && spawnsThisFrame < SPAWN_MAX_PER_FRAME) {
        spawnAccumulatorMs -= dynamicSpawnInterval;
        spawnFoodRow();
        spawnsThisFrame += 1;
    }
    if (spawnsThisFrame >= SPAWN_MAX_PER_FRAME && spawnAccumulatorMs >= dynamicSpawnInterval) {
        // Eski backlog'u biriktirmeden akışa geri dön.
        spawnAccumulatorMs = dynamicSpawnInterval * 0.35;
    }

    updateDeepStars(delta);
    updateStars(delta);
    updateFoodMeshes(delta);
    updateConstellation(nowMs);

    renderer.render(scene, camera);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
