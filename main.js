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

const BUILD_ID = "20260219-constellation-v25-manual-void-countdown";

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
const NEBULA_LAYER_COUNT = 5;
const NEBULA_BASE_Z = -980;
const NEBULA_SPREAD_Z = 340;
const NEBULA_BASE_SCALE = 760;

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
const BLACKHOLE_LENS_SCALE_MULT = 2.65;
const BLACKHOLE_LENS_OPACITY_BASE = 0.085;
const BLACKHOLE_LENS_OPACITY_POWER_MULT = 0.11;
const BLACKHOLE_DISK_SCALE_MULT = 4.45;
const BLACKHOLE_DISK_INNER_SCALE_MULT = 3.05;
const BLACKHOLE_DISK_FLATTEN_BASE = 0.68;
const BLACKHOLE_DISK_FLATTEN_POWER_MULT = 0.08;
const BLACKHOLE_DISK_OPACITY_BASE = 0.12;
const BLACKHOLE_DISK_OPACITY_POWER_MULT = 0.17;
const BLACKHOLE_DISK_ROTATION_SPEED = 0.00094;
const BLACKHOLE_INNER_DISK_ROTATION_SPEED = -0.00142;
const BLACKHOLE_PHOTON_RING_SCALE_MULT = 1.6;
const BLACKHOLE_PHOTON_RING_OPACITY_BASE = 0.18;
const BLACKHOLE_PHOTON_RING_OPACITY_POWER_MULT = 0.13;
const SINGULARITY_IDLE_TRIGGER_MS = 5000;
const SINGULARITY_RAMP_MS = 4200;
const SINGULARITY_MAX_OVERLAY_OPACITY = 0.996;
const SINGULARITY_PULL_FORCE = 320;
const SINGULARITY_CAPTURE_RADIUS_MAX = 220;
const BLACKHOLE_FOOD_LAUNCH_GRACE_MS = 620;
const SPACE_COUNTER_TARGET = 10;
const STAR_COUNTER_WORLD_Z = 6;
const STAR_COUNTER_MARGIN_X = 22;
const STAR_COUNTER_MARGIN_Y = 11;
const STAR_COUNTER_WORLD_SCALE = 40;
const STAR_COUNTER_MAX_POINTS = 4200;
const STAR_COUNTER_TRANSITION_MS = 620;
const STAR_COUNTER_TWINKLE_SPEED = 0.0044;
const STAR_COUNTER_GLYPH_DEPTH = 0.42;
const STAR_COUNTER_DIGIT_WIDTH = 8.8;
const STAR_COUNTER_DIGIT_HEIGHT = 15.8;
const STAR_COUNTER_DIGIT_GAP = 2.8;
const STAR_COUNTER_SEGMENT_POINT_STEP = 0.52;
const STAR_COUNTER_VOID_SCALE = 2.28;
const BIG_BANG_FLASH_MS = 1700;
const BIG_BANG_STAR_BURST_MIN = 2.4;
const BIG_BANG_STAR_BURST_MAX = 8.8;
const BIG_BANG_DEEP_BURST_MIN = 1.2;
const BIG_BANG_DEEP_BURST_MAX = 4.8;
const DUAL_CONSTELLATION_SPLIT_X = 430;
const DUAL_CONSTELLATION_SLIDE_MS = 3600;
const COMPANION_CONSTELLATION_FADE_MS = 1300;
const COMPANION_CONSTELLATION_DRAW_MS = 4200;
const COMPANION_CONSTELLATION_SPARKLE_DECAY_MS = 540;
const COMPANION_CONSTELLATION_SPARKLE_MIN_INTERVAL_MS = 220;
const COMPANION_CONSTELLATION_SPARKLE_MAX_INTERVAL_MS = 680;
const COMPANION_CONSTELLATION_IMAGE_URL = "bayanhuso.png";
const COMPANION_CONSTELLATION_FALLBACK_IMAGE_URL = "husospace.png";

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
const CONSTELLATION_DEPTH_JITTER = 16;
const CONSTELLATION_LINE_DEPTH_SPLIT_Z = -190;
const CONSTELLATION_FAR_LINE_OPACITY_MULT = 0.5;
const CONSTELLATION_VISIBILITY_MULT = 1.12;
const CONSTELLATION_VISIBILITY_POWER_MULT = 0.055;
const CONSTELLATION_DUST_OPACITY_MULT = 1.1;
const CONSTELLATION_NODE_OPACITY_MULT = 1.08;
const CONSTELLATION_LINE_OPACITY_MULT = 0.86;
const CONSTELLATION_ENTRY_FLASH_MS = 1450;
const CONSTELLATION_ENTRY_FLASH_BOOST = 2.3;
const CONSTELLATION_ENTRY_MOVE_MS = 1350;
const CONSTELLATION_ENTRY_STAGGER_MS = 760;
const CONSTELLATION_ENTRY_SIDE_OFFSET = 540;
const CONSTELLATION_ENTRY_SIDE_VARIANCE = 180;
const CONSTELLATION_ENTRY_PERP_JITTER = 26;
const CONSTELLATION_ENTRY_DEPTH_JITTER = 15;
const CONSTELLATION_ENTRY_LINE_REVEAL_DELAY_MS = 180;
const CONSTELLATION_ENTRY_LINE_REVEAL_MS = 5600;
const CONSTELLATION_JOIN_FLASH_DURATION_MS = 420;
const CONSTELLATION_JOIN_FLASH_SIZE = 3.6;
const CONSTELLATION_LINE_DRAW_BRIGHTEN = 1.46;
const CONSTELLATION_LINE_SETTLE_MS = 2400;
const CONSTELLATION_LINE_SETTLE_MIN = 0.74;
const CONSTELLATION_STROKE_GLOW_OPACITY = 0.92;
const CONSTELLATION_STROKE_GLOW_MIN_OPACITY = 0.32;
const CONSTELLATION_STROKE_GLOW_FAR_MULT = 0.72;
const CONSTELLATION_SPARKLE_MIN_INTERVAL_MS = 4200;
const CONSTELLATION_SPARKLE_MAX_INTERVAL_MS = 9800;
const CONSTELLATION_SPARKLE_RISE_MS = 170;
const CONSTELLATION_SPARKLE_DECAY_MS = 840;
const CONSTELLATION_SPARKLE_BOOST = 0.82;
const CONSTELLATION_SPARKLE_BURST_POINTS = 8;
const FOOD_TRAVEL_Z_MIN = -70;
const FOOD_TRAVEL_Z_MAX = 34;
const FOOD_EDGE_PADDING = 18;
const FOOD_TRAVEL_SPEED_MIN = 0.68;
const FOOD_TRAVEL_SPEED_MAX = 1.32;
const FOOD_DIRECTION_JITTER = 0.34;
const FOOD_SPIN_CHANCE = 0.46;
const FOOD_SPIN_SPEED_MIN = 0.0007;
const FOOD_SPIN_SPEED_MAX = 0.0032;
const NEBULA_POINTER_PARALLAX_X = 12;
const NEBULA_POINTER_PARALLAX_Y = 8;
const STAR_TWINKLE_SPEED = 0.00034;
const STAR_TWINKLE_AMPLITUDE = 0.045;
const DEEP_STAR_TWINKLE_AMPLITUDE = 0.03;
const STAR_NEAR_BRIGHTNESS = 1.08;
const STAR_FAR_BRIGHTNESS = 0.58;
const DEEP_STAR_NEAR_BRIGHTNESS = 0.9;
const DEEP_STAR_FAR_BRIGHTNESS = 0.34;
const STAR_GRAV_LENS_COLOR_SHIFT = 0.24;
const STAR_DOPPLER_COLOR_SHIFT = 0.18;
const STAR_PASSIVE_INFLUENCE_RADIUS = 118;
const FOOD_PASSIVE_INFLUENCE_RADIUS = 136;

const SHOOTING_STAR_MIN_INTERVAL_MS = 2000;
const SHOOTING_STAR_MAX_INTERVAL_MS = 5200;
const SHOOTING_STAR_MIN_LIFE_MS = 700;
const SHOOTING_STAR_MAX_LIFE_MS = 1300;
const SHOOTING_STAR_MAX_ACTIVE = 3;
const SHOOTING_STAR_MIN_START_Z = -1250;
const SHOOTING_STAR_MAX_START_Z = -760;
const SHOOTING_STAR_SPEED_Z_MIN = 9.5;
const SHOOTING_STAR_SPEED_Z_MAX = 14.5;
const SHOOTING_STAR_SPEED_XY = 0.55;
const SHOOTING_STAR_FLICKER_SPEED = 0.014;

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
let starColors;
let starTwinklePhase;
let starBaseColors;
let starTwinkleAmp;
let deepStarCount = MIN_DEEP_STAR_COUNT;
let deepStarPositions;
let deepStarDrift;
let deepStarColors;
let deepStarTwinklePhase;
let deepStarBaseColors;
let deepStarTwinkleAmp;

let blackHoleCore;
let blackHoleLensing;
let blackHoleAccretionDisk;
let blackHoleAccretionInnerDisk;
let blackHolePhotonRing;
let singularityOverlay;
let bigBangFlash;
let blackHoleRadius = MIN_BLACKHOLE_RADIUS;
let blackHolePulse = 0;
let blackHolePower = 0;
let singularityCollapse = 0;

let constellationGroup;
let constellationDustMaterial;
let constellationNodeMaterial;
let constellationLineMaterial;
let constellationLineFarMaterial;
let constellationLineStrokeMaterial;
let constellationLineFarStrokeMaterial;
let constellationJoinFlashMaterial;
let constellationJoinFlashGeometry;
let constellationJoinFlashColors;
let constellationJoinFlashIntensity;
let constellationJoinFlashLastMs = performance.now();
let constellationSparkleStartedAtMs = 0;
let constellationSparkleEndAtMs = 0;
let constellationNextSparkleAtMs = performance.now() + 5200;
let constellationEntryState = null;
let constellationReadyAtMs = 0;
const constellationBasePosition = new THREE.Vector3();
let companionConstellation = null;
let companionConstellationLoading = false;
const companionConstellationBasePosition = new THREE.Vector3();
let nebulaGroup;
let nebulaLayers = [];
let shootingStarTexture;
const shootingStars = [];
let nextShootingStarAtMs = 0;

let foodMeshes = [];
let maxActiveFood = FOOD_MAX_ACTIVE;

const pointerTargetNDC = new THREE.Vector2(0, 0);
const pointerSmoothNDC = new THREE.Vector2(0, 0);
const pointerRayPoint = new THREE.Vector3();
const pointerRayDir = new THREE.Vector3(0, 0, -1);
const pointerWorld = new THREE.Vector3();
const singularityVectorA = new THREE.Vector3();
const singularityVectorB = new THREE.Vector3();
const singularityCameraForward = new THREE.Vector3();
const viewportSize = { width: 0, height: 0 };

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
let spaceLaunchCount = 0;
let starCounterGroup = null;
let starCounterPoints = null;
let starCounterGeometry = null;
let starCounterPositions = null;
let starCounterTargetPositions = null;
let starCounterColors = null;
let starCounterPhases = null;
let starCounterBaseIntensity = null;
let starCounterPointCount = 0;
let starCounterTransitionStartedMs = 0;
let starCounterTransitionUntilMs = 0;
let starCounterLastSignature = "";
let starCounterGlowUntilMs = 0;
let starCounterDisplayText = "0";
let counterVoidMode = false;
let voidCounterPrimed = false;
let lastBlackoutSpacePressMs = 0;
let bigBangState = null;
let dualConstellationActive = false;
let dualConstellationActivatedAtMs = 0;
let dualConstellationProgress = 0;
let pendingCompanionFromBlackout = false;
let companionSpawnedFromBlackout = false;
const companionBursts = [];
const counterSourceWorld = new THREE.Vector3();
const counterSourceLocal = new THREE.Vector3();
const counterQuatInverse = new THREE.Quaternion();

function getPlaneHalfExtentsAtZ(zValue) {
    if (!camera) {
        return { halfWidth: 1, halfHeight: 1 };
    }

    const distance = Math.max(0.001, Math.abs(camera.position.z - zValue));
    const halfHeight = Math.tan(THREE.MathUtils.degToRad(camera.fov * 0.5)) * distance;
    const halfWidth = halfHeight * camera.aspect;
    return { halfWidth, halfHeight };
}

function seededUnit(seed) {
    const value = Math.sin(seed) * 43758.5453123;
    return value - Math.floor(value);
}

function assignStarSpectralProfile(index3, baseColorBuffer, twinkleAmpBuffer, starIndex, deepField = false) {
    const sample = Math.random();
    let r = 1;
    let g = 1;
    let b = 1;
    let luminance = 1;
    let twinkleMul = 1;

    if (sample < 0.04) {
        r = 0.66; g = 0.79; b = 1.0;
        luminance = 1.22;
        twinkleMul = 1.18;
    } else if (sample < 0.19) {
        r = 0.76; g = 0.86; b = 1.0;
        luminance = 1.08;
        twinkleMul = 1.06;
    } else if (sample < 0.58) {
        r = 0.95; g = 0.96; b = 1.0;
        luminance = 0.98;
        twinkleMul = 0.9;
    } else if (sample < 0.84) {
        r = 1.0; g = 0.9; b = 0.76;
        luminance = 0.9;
        twinkleMul = 0.86;
    } else {
        r = 1.0; g = 0.78; b = 0.64;
        luminance = 0.82;
        twinkleMul = 0.98;
    }

    const randomBrightness = 0.9 + Math.random() * 0.24;
    const fieldLuma = deepField ? 0.82 : 1;
    const brightness = luminance * randomBrightness * fieldLuma;

    baseColorBuffer[index3] = r * brightness;
    baseColorBuffer[index3 + 1] = g * brightness;
    baseColorBuffer[index3 + 2] = b * brightness;
    twinkleAmpBuffer[starIndex] = twinkleMul * (0.72 + Math.random() * 0.66);
}

function getEntrySideVector(x, y) {
    if (Math.abs(x) >= Math.abs(y)) {
        const sx = x >= 0 ? 1 : -1;
        return { sx, sy: 0, px: 0, py: 1 };
    }

    const sy = y >= 0 ? 1 : -1;
    return { sx: 0, sy, px: 1, py: 0 };
}

function pointKey(x, y, z) {
    return `${x.toFixed(4)}|${y.toFixed(4)}|${z.toFixed(4)}`;
}

function createConstellationJoinFlashData(lineTriplesNear, lineTriplesFar) {
    const positions = [];
    const lookup = new Map();

    const addPoint = (x, y, z) => {
        const key = pointKey(x, y, z);
        if (lookup.has(key)) {
            return;
        }
        lookup.set(key, Math.floor(positions.length / 3));
        positions.push(x, y, z);
    };

    const ingest = (triples) => {
        for (let i = 0; i < triples.length; i += 6) {
            addPoint(triples[i], triples[i + 1], triples[i + 2]);
            addPoint(triples[i + 3], triples[i + 4], triples[i + 5]);
        }
    };

    ingest(lineTriplesNear);
    ingest(lineTriplesFar);
    return { positions, lookup };
}

function sortLineTriplesForEntry(lineTriples, seedOffset) {
    const segmentCount = Math.floor(lineTriples.length / 6);
    if (segmentCount === 0) {
        return [];
    }

    const segments = [];
    for (let i = 0; i < segmentCount; i += 1) {
        const index6 = i * 6;
        const ax = lineTriples[index6];
        const ay = lineTriples[index6 + 1];
        const bx = lineTriples[index6 + 3];
        const by = lineTriples[index6 + 4];
        const mx = (ax + bx) * 0.5;
        const my = (ay + by) * 0.5;
        const side = getEntrySideVector(mx, my);
        const radial = THREE.MathUtils.clamp(
            Math.hypot(mx, my) / (CONSTELLATION_WORLD_WIDTH * 0.72),
            0,
            1
        );
        const sideBias = side.sx !== 0 ? 0.24 : 0.72;
        const noise = seededUnit((i + 1) * 17.417 + seedOffset * 1.73);
        const score = radial * 0.55 + noise * 0.33 + sideBias * 0.12;
        segments.push({
            score,
            values: [
                lineTriples[index6],
                lineTriples[index6 + 1],
                lineTriples[index6 + 2],
                lineTriples[index6 + 3],
                lineTriples[index6 + 4],
                lineTriples[index6 + 5]
            ]
        });
    }

    segments.sort((a, b) => a.score - b.score);

    const ordered = [];
    for (let i = 0; i < segments.length; i += 1) {
        ordered.push(...segments[i].values);
    }
    return ordered;
}

function sortPointTriplesForEntry(pointTriples, seedOffset) {
    const pointCount = Math.floor(pointTriples.length / 3);
    if (pointCount === 0) {
        return [];
    }

    const scored = [];
    for (let i = 0; i < pointCount; i += 1) {
        const index3 = i * 3;
        const x = pointTriples[index3];
        const y = pointTriples[index3 + 1];
        const radial = THREE.MathUtils.clamp(
            Math.hypot(x, y) / (CONSTELLATION_WORLD_WIDTH * 0.72),
            0,
            1
        );
        const noise = seededUnit((i + 1) * 29.117 + seedOffset * 1.91);
        scored.push({
            score: radial * 0.58 + noise * 0.42,
            values: [
                pointTriples[index3],
                pointTriples[index3 + 1],
                pointTriples[index3 + 2]
            ]
        });
    }

    scored.sort((a, b) => a.score - b.score);
    const ordered = [];
    for (let i = 0; i < scored.length; i += 1) {
        ordered.push(...scored[i].values);
    }
    return ordered;
}

function createConstellationEntryPayload(baseTriples, seedOffset, flashLookup = null, entryFlashEnabled = true, sideEntryEnabled = true) {
    const base = new Float32Array(baseTriples);
    const start = new Float32Array(base.length);
    const live = new Float32Array(base.length);
    const delays = new Float32Array(Math.floor(base.length / 3));
    const flashIndices = flashLookup ? new Int32Array(Math.floor(base.length / 3)) : null;
    const completed = new Uint8Array(Math.floor(base.length / 3));

    for (let i = 0; i < delays.length; i += 1) {
        const index3 = i * 3;
        const x = base[index3];
        const y = base[index3 + 1];
        const z = base[index3 + 2];

        const r4 = seededUnit((i + 1) * 53.743 + seedOffset * 1.93);

        if (sideEntryEnabled) {
            const side = getEntrySideVector(x, y);
            const r1 = seededUnit((i + 1) * 11.314 + seedOffset * 0.73);
            const r2 = seededUnit((i + 1) * 23.217 + seedOffset * 1.11);
            const r3 = seededUnit((i + 1) * 37.991 + seedOffset * 1.47);
            const pull = CONSTELLATION_ENTRY_SIDE_OFFSET + r1 * CONSTELLATION_ENTRY_SIDE_VARIANCE;
            const jitter = (r2 - 0.5) * CONSTELLATION_ENTRY_PERP_JITTER;
            const depthJitter = (r3 - 0.5) * CONSTELLATION_ENTRY_DEPTH_JITTER;

            start[index3] = x + side.sx * pull + side.px * jitter;
            start[index3 + 1] = y + side.sy * pull + side.py * jitter;
            start[index3 + 2] = z + depthJitter;

            live[index3] = start[index3];
            live[index3 + 1] = start[index3 + 1];
            live[index3 + 2] = start[index3 + 2];
            delays[i] = r4 * CONSTELLATION_ENTRY_STAGGER_MS;
        } else {
            start[index3] = x;
            start[index3 + 1] = y;
            start[index3 + 2] = z;
            live[index3] = x;
            live[index3 + 1] = y;
            live[index3 + 2] = z;
            delays[i] = 0;
        }
        completed[i] = 0;

        if (flashIndices) {
            const key = pointKey(x, y, z);
            flashIndices[i] = flashLookup.has(key) ? flashLookup.get(key) : -1;
        }
    }

    return {
        base,
        start,
        live,
        delays,
        count: delays.length,
        attribute: null,
        geometry: null,
        segmentCount: 0,
        revealedSegments: 0,
        segmentFlashPairs: null,
        strokeLine: null,
        strokeAttribute: null,
        strokeDrawOpacity: 0,
        entryFlashEnabled,
        sideEntryEnabled,
        flashIndices,
        completed
    };
}

function createSegmentFlashPairs(payload) {
    if (!payload || !payload.flashIndices || payload.segmentCount === 0) {
        return null;
    }

    const pairs = new Int32Array(payload.segmentCount * 2);
    for (let segmentIdx = 0; segmentIdx < payload.segmentCount; segmentIdx += 1) {
        const pointA = segmentIdx * 2;
        const pointB = pointA + 1;
        pairs[segmentIdx * 2] = pointA < payload.flashIndices.length ? payload.flashIndices[pointA] : -1;
        pairs[segmentIdx * 2 + 1] = pointB < payload.flashIndices.length ? payload.flashIndices[pointB] : -1;
    }
    return pairs;
}

function triggerConstellationJoinFlash(flashIndex, strength = 1) {
    if (!constellationJoinFlashIntensity || flashIndex < 0 || flashIndex >= constellationJoinFlashIntensity.length) {
        return;
    }
    constellationJoinFlashIntensity[flashIndex] = Math.max(constellationJoinFlashIntensity[flashIndex], strength);
}

function scheduleNextConstellationSparkle(nowMs) {
    const delayMs = THREE.MathUtils.randFloat(
        CONSTELLATION_SPARKLE_MIN_INTERVAL_MS,
        CONSTELLATION_SPARKLE_MAX_INTERVAL_MS
    );
    constellationNextSparkleAtMs = nowMs + delayMs;
}

function maybeTriggerConstellationSparkle(nowMs) {
    if (nowMs < constellationNextSparkleAtMs) {
        return;
    }

    constellationSparkleStartedAtMs = nowMs;
    constellationSparkleEndAtMs = nowMs + CONSTELLATION_SPARKLE_RISE_MS + CONSTELLATION_SPARKLE_DECAY_MS;
    scheduleNextConstellationSparkle(nowMs);

    if (constellationJoinFlashIntensity && constellationJoinFlashIntensity.length > 0) {
        const burstCount = Math.min(CONSTELLATION_SPARKLE_BURST_POINTS, constellationJoinFlashIntensity.length);
        for (let i = 0; i < burstCount; i += 1) {
            const flashIndex = Math.floor(Math.random() * constellationJoinFlashIntensity.length);
            triggerConstellationJoinFlash(flashIndex, 0.72 + Math.random() * 0.42);
        }
    }
}

function getConstellationSparkleBoost(nowMs) {
    if (nowMs < constellationSparkleStartedAtMs || nowMs >= constellationSparkleEndAtMs) {
        return 1;
    }

    const elapsedMs = nowMs - constellationSparkleStartedAtMs;
    let pulse = 0;
    if (elapsedMs <= CONSTELLATION_SPARKLE_RISE_MS) {
        const riseT = THREE.MathUtils.clamp(elapsedMs / CONSTELLATION_SPARKLE_RISE_MS, 0, 1);
        pulse = riseT * riseT * (3 - 2 * riseT);
    } else {
        const decayT = THREE.MathUtils.clamp(
            1 - ((elapsedMs - CONSTELLATION_SPARKLE_RISE_MS) / CONSTELLATION_SPARKLE_DECAY_MS),
            0,
            1
        );
        pulse = decayT * decayT;
    }
    return 1 + pulse * CONSTELLATION_SPARKLE_BOOST;
}

function updateConstellationJoinFlashes(nowMs) {
    if (!constellationJoinFlashIntensity || !constellationJoinFlashColors || !constellationJoinFlashMaterial || !constellationJoinFlashGeometry) {
        return;
    }

    const deltaMs = Math.max(0, nowMs - constellationJoinFlashLastMs);
    constellationJoinFlashLastMs = nowMs;
    const decay = Math.exp(-deltaMs / CONSTELLATION_JOIN_FLASH_DURATION_MS);

    let activeCount = 0;
    for (let i = 0; i < constellationJoinFlashIntensity.length; i += 1) {
        let intensity = constellationJoinFlashIntensity[i] * decay;
        if (intensity < 0.003) {
            intensity = 0;
        } else {
            activeCount += 1;
        }

        constellationJoinFlashIntensity[i] = intensity;

        const index3 = i * 3;
        if (intensity > 0) {
            const whiteBoost = 0.78 + intensity * 0.22;
            constellationJoinFlashColors[index3] = whiteBoost;
            constellationJoinFlashColors[index3 + 1] = 0.86 + intensity * 0.14;
            constellationJoinFlashColors[index3 + 2] = 1;
        } else {
            constellationJoinFlashColors[index3] = 0;
            constellationJoinFlashColors[index3 + 1] = 0;
            constellationJoinFlashColors[index3 + 2] = 0;
        }
    }

    constellationJoinFlashGeometry.attributes.color.needsUpdate = true;
    constellationJoinFlashMaterial.opacity = activeCount > 0 ? 0.95 : 0;
}

function updateConstellationEntryPayload(payload, elapsedMs) {
    if (!payload || !payload.attribute) {
        return true;
    }

    let complete = true;
    for (let i = 0; i < payload.count; i += 1) {
        const index3 = i * 3;
        const progress = (elapsedMs - payload.delays[i]) / CONSTELLATION_ENTRY_MOVE_MS;

        if (progress <= 0) {
            complete = false;
            continue;
        }

        if (progress >= 1) {
            payload.live[index3] = payload.base[index3];
            payload.live[index3 + 1] = payload.base[index3 + 1];
            payload.live[index3 + 2] = payload.base[index3 + 2];

            if (!payload.completed[i]) {
                payload.completed[i] = 1;
                if (payload.entryFlashEnabled && payload.flashIndices) {
                    triggerConstellationJoinFlash(payload.flashIndices[i], 1);
                }
            }
            continue;
        }

        complete = false;
        const eased = progress * progress * (3 - 2 * progress);
        payload.live[index3] = THREE.MathUtils.lerp(payload.start[index3], payload.base[index3], eased);
        payload.live[index3 + 1] = THREE.MathUtils.lerp(payload.start[index3 + 1], payload.base[index3 + 1], eased);
        payload.live[index3 + 2] = THREE.MathUtils.lerp(payload.start[index3 + 2], payload.base[index3 + 2], eased);
    }

    payload.attribute.needsUpdate = true;
    return complete;
}

function updateConstellationLineDrawRange(payload, elapsedMs) {
    if (!payload || !payload.geometry || payload.segmentCount === 0) {
        return true;
    }

    const revealProgress = THREE.MathUtils.clamp(
        (elapsedMs - CONSTELLATION_ENTRY_LINE_REVEAL_DELAY_MS) / CONSTELLATION_ENTRY_LINE_REVEAL_MS,
        0,
        1
    );
    const segmentProgress = payload.segmentCount * revealProgress;
    const fullSegments = Math.floor(segmentProgress);
    const partial = segmentProgress - fullSegments;
    const previousRevealed = payload.revealedSegments;

    payload.revealedSegments = Math.max(payload.revealedSegments, fullSegments);
    if (payload.revealedSegments > previousRevealed && payload.segmentFlashPairs) {
        for (let segmentIdx = previousRevealed; segmentIdx < payload.revealedSegments; segmentIdx += 1) {
            const index2 = segmentIdx * 2;
            triggerConstellationJoinFlash(payload.segmentFlashPairs[index2], 1);
            triggerConstellationJoinFlash(payload.segmentFlashPairs[index2 + 1], 0.86);
        }
    }

    let drawVertices = payload.revealedSegments * 2;
    if (payload.revealedSegments < payload.segmentCount && partial > 0.00001) {
        const segmentIndex = payload.revealedSegments;
        const index6 = segmentIndex * 6;
        const ax = payload.base[index6];
        const ay = payload.base[index6 + 1];
        const az = payload.base[index6 + 2];
        const bx = payload.base[index6 + 3];
        const by = payload.base[index6 + 4];
        const bz = payload.base[index6 + 5];

        payload.live[index6] = ax;
        payload.live[index6 + 1] = ay;
        payload.live[index6 + 2] = az;
        payload.live[index6 + 3] = THREE.MathUtils.lerp(ax, bx, partial);
        payload.live[index6 + 4] = THREE.MathUtils.lerp(ay, by, partial);
        payload.live[index6 + 5] = THREE.MathUtils.lerp(az, bz, partial);
        drawVertices += 2;
    }

    if (payload.strokeLine && payload.strokeAttribute) {
        if (fullSegments < payload.segmentCount) {
            const segmentIndex = Math.min(payload.segmentCount - 1, fullSegments);
            const index6 = segmentIndex * 6;
            const ax = payload.base[index6];
            const ay = payload.base[index6 + 1];
            const az = payload.base[index6 + 2];
            const bx = payload.base[index6 + 3];
            const by = payload.base[index6 + 4];
            const bz = payload.base[index6 + 5];
            const drawPartial = revealProgress >= 1 ? 1 : partial;

            payload.strokeAttribute.array[0] = ax;
            payload.strokeAttribute.array[1] = ay;
            payload.strokeAttribute.array[2] = az;
            payload.strokeAttribute.array[3] = THREE.MathUtils.lerp(ax, bx, drawPartial);
            payload.strokeAttribute.array[4] = THREE.MathUtils.lerp(ay, by, drawPartial);
            payload.strokeAttribute.array[5] = THREE.MathUtils.lerp(az, bz, drawPartial);
            payload.strokeAttribute.needsUpdate = true;

            payload.strokeDrawOpacity = CONSTELLATION_STROKE_GLOW_MIN_OPACITY +
                (1 - drawPartial) * (CONSTELLATION_STROKE_GLOW_OPACITY - CONSTELLATION_STROKE_GLOW_MIN_OPACITY);
            payload.strokeLine.visible = true;
        } else {
            payload.strokeDrawOpacity = 0;
            payload.strokeLine.visible = false;
        }
    }

    payload.attribute.needsUpdate = true;
    payload.geometry.setDrawRange(0, drawVertices);
    return revealProgress >= 1;
}

function updateConstellationEntryMotion(nowMs) {
    if (!constellationEntryState || !constellationEntryState.active) {
        return;
    }

    const elapsedMs = Math.max(0, nowMs - constellationReadyAtMs);
    const dustDone = updateConstellationEntryPayload(constellationEntryState.dust, elapsedMs);
    const nodeDone = updateConstellationEntryPayload(constellationEntryState.nodes, elapsedMs);
    const nearDone = updateConstellationEntryPayload(constellationEntryState.linesNear, elapsedMs);
    const farDone = updateConstellationEntryPayload(constellationEntryState.linesFar, elapsedMs);
    const nearDrawDone = updateConstellationLineDrawRange(constellationEntryState.linesNear, elapsedMs);
    const farDrawDone = updateConstellationLineDrawRange(constellationEntryState.linesFar, elapsedMs);

    if (dustDone && nodeDone && nearDone && farDone && nearDrawDone && farDrawDone) {
        if (constellationEntryState.linesNear && constellationEntryState.linesNear.geometry) {
            constellationEntryState.linesNear.geometry.setDrawRange(0, constellationEntryState.linesNear.segmentCount * 2);
        }
        if (constellationEntryState.linesFar && constellationEntryState.linesFar.geometry) {
            constellationEntryState.linesFar.geometry.setDrawRange(0, constellationEntryState.linesFar.segmentCount * 2);
        }
        if (constellationEntryState.linesNear && constellationEntryState.linesNear.strokeLine) {
            constellationEntryState.linesNear.strokeLine.visible = false;
        }
        if (constellationEntryState.linesFar && constellationEntryState.linesFar.strokeLine) {
            constellationEntryState.linesFar.strokeLine.visible = false;
        }
        constellationEntryState.active = false;
    }
}

function getViewportDimensions() {
    const viewport = window.visualViewport;
    if (viewport) {
        return {
            width: Math.max(1, Math.round(viewport.width)),
            height: Math.max(1, Math.round(viewport.height))
        };
    }
    return {
        width: Math.max(1, window.innerWidth),
        height: Math.max(1, window.innerHeight)
    };
}

function applyViewportSize(force = false) {
    if (!camera || !renderer) {
        return;
    }

    const next = getViewportDimensions();
    if (!force && next.width === viewportSize.width && next.height === viewportSize.height) {
        return;
    }

    viewportSize.width = next.width;
    viewportSize.height = next.height;
    camera.aspect = next.width / next.height;
    camera.updateProjectionMatrix();
    renderer.setSize(next.width, next.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
}

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

function digitToSevenSegments(char) {
    switch (char) {
        case "0": return [0, 1, 2, 4, 5, 6];
        case "1": return [2, 5];
        case "2": return [0, 2, 3, 4, 6];
        case "3": return [0, 2, 3, 5, 6];
        case "4": return [1, 2, 3, 5];
        case "5": return [0, 1, 3, 5, 6];
        case "6": return [0, 1, 3, 4, 5, 6];
        case "7": return [0, 2, 5];
        case "8": return [0, 1, 2, 3, 4, 5, 6];
        case "9": return [0, 1, 2, 3, 5, 6];
        default: return [];
    }
}

function appendCounterSegmentPoints(target, ax, ay, bx, by, voidMode) {
    const dx = bx - ax;
    const dy = by - ay;
    const length = Math.max(0.0001, Math.hypot(dx, dy));
    const nx = -dy / length;
    const ny = dx / length;
    const laneCount = voidMode ? 5 : 3;
    const halfLane = (laneCount - 1) * 0.5;
    const laneSpacing = voidMode ? 0.28 : 0.2;
    const steps = Math.max(5, Math.floor(length / STAR_COUNTER_SEGMENT_POINT_STEP));
    const dashCycle = voidMode ? 6 : 5;
    const dashOn = voidMode ? 4 : 3;
    const jitter = voidMode ? 0.032 : 0.022;

    for (let lane = 0; lane < laneCount; lane += 1) {
        const laneOffset = (lane - halfLane) * laneSpacing;
        for (let i = 0; i <= steps; i += 1) {
            if ((i % dashCycle) >= dashOn) {
                continue;
            }
            const t = i / Math.max(1, steps);
            const baseX = THREE.MathUtils.lerp(ax, bx, t) + nx * laneOffset;
            const baseY = THREE.MathUtils.lerp(ay, by, t) + ny * laneOffset;
            target.push(
                baseX + THREE.MathUtils.randFloatSpread(jitter),
                baseY + THREE.MathUtils.randFloatSpread(jitter),
                THREE.MathUtils.randFloatSpread(STAR_COUNTER_GLYPH_DEPTH)
            );
        }
    }
}

function buildStarCounterTargetTriples(valueText, voidMode) {
    const scale = voidMode ? STAR_COUNTER_VOID_SCALE : 1;
    const digitWidth = STAR_COUNTER_DIGIT_WIDTH * scale;
    const digitHeight = STAR_COUNTER_DIGIT_HEIGHT * scale;
    const digitGap = STAR_COUNTER_DIGIT_GAP * scale;
    const halfW = digitWidth * 0.5;
    const halfH = digitHeight * 0.5;
    const chars = valueText.split("");
    const totalWidth = chars.length * digitWidth + Math.max(0, chars.length - 1) * digitGap;
    const startX = -totalWidth * 0.5 + halfW;
    const triples = [];

    for (let c = 0; c < chars.length; c += 1) {
        const cx = startX + c * (digitWidth + digitGap);
        const segments = digitToSevenSegments(chars[c]);
        const left = cx - halfW;
        const right = cx + halfW;
        const top = halfH;
        const mid = 0;
        const bottom = -halfH;
        const hInset = digitWidth * 0.18;
        const vInset = digitHeight * 0.07;
        const vl = left + hInset * 0.45;
        const vr = right - hInset * 0.45;
        const ht = top - vInset;
        const hb = bottom + vInset;
        const segmentLines = [
            [left + hInset, ht, right - hInset, ht],  // A
            [vl, ht, vl, mid],                        // B
            [vr, ht, vr, mid],                        // C
            [left + hInset, mid, right - hInset, mid],// D
            [vl, mid, vl, hb],                        // E
            [vr, mid, vr, hb],                        // F
            [left + hInset, hb, right - hInset, hb]   // G
        ];

        for (let s = 0; s < segments.length; s += 1) {
            const line = segmentLines[segments[s]];
            appendCounterSegmentPoints(triples, line[0], line[1], line[2], line[3], voidMode);
        }
    }

    const rawCount = Math.floor(triples.length / 3);
    if (rawCount <= STAR_COUNTER_MAX_POINTS) {
        return triples;
    }

    const stride = Math.ceil(rawCount / STAR_COUNTER_MAX_POINTS);
    const sampled = [];
    for (let i = 0; i < rawCount; i += stride) {
        const index3 = i * 3;
        sampled.push(triples[index3], triples[index3 + 1], triples[index3 + 2]);
    }
    return sampled;
}

function getCounterGlyphSize(valueText, voidMode) {
    const scale = voidMode ? STAR_COUNTER_VOID_SCALE : 1;
    const text = String(valueText && valueText.length ? valueText : "0");
    const digitCount = Math.max(1, text.length);
    return {
        width: (digitCount * STAR_COUNTER_DIGIT_WIDTH + Math.max(0, digitCount - 1) * STAR_COUNTER_DIGIT_GAP) * scale,
        height: STAR_COUNTER_DIGIT_HEIGHT * scale
    };
}

function seedCounterPointFromScene(index3, tx, ty, tz, voidMode) {
    const hasNearStars = Boolean(starPositions && starCount > 0);
    const hasDeepStars = Boolean(deepStarPositions && deepStarCount > 0);

    if (!starCounterGroup || (!hasNearStars && !hasDeepStars)) {
        const spawnSpread = voidMode ? 2.6 : 1.1;
        starCounterPositions[index3] = tx + THREE.MathUtils.randFloatSpread(spawnSpread);
        starCounterPositions[index3 + 1] = ty + THREE.MathUtils.randFloatSpread(spawnSpread);
        starCounterPositions[index3 + 2] = tz + THREE.MathUtils.randFloatSpread(0.8);
        return;
    }

    const useDeep = hasDeepStars && (!hasNearStars || Math.random() < 0.34);
    if (useDeep) {
        const starIndex = Math.floor(Math.random() * deepStarCount);
        const sourceIndex3 = starIndex * 3;
        counterSourceWorld.set(
            deepStarPositions[sourceIndex3],
            deepStarPositions[sourceIndex3 + 1],
            deepStarPositions[sourceIndex3 + 2]
        );
    } else {
        const starIndex = Math.floor(Math.random() * starCount);
        const sourceIndex3 = starIndex * 3;
        counterSourceWorld.set(
            starPositions[sourceIndex3],
            starPositions[sourceIndex3 + 1],
            starPositions[sourceIndex3 + 2]
        );
    }

    counterSourceLocal.copy(counterSourceWorld).sub(starCounterGroup.position);
    counterQuatInverse.copy(starCounterGroup.quaternion).invert();
    counterSourceLocal.applyQuaternion(counterQuatInverse);

    const scaleX = Math.max(0.001, starCounterGroup.scale.x);
    const scaleY = Math.max(0.001, starCounterGroup.scale.y);
    const scaleZ = Math.max(0.001, starCounterGroup.scale.z);
    counterSourceLocal.set(
        counterSourceLocal.x / scaleX,
        counterSourceLocal.y / scaleY,
        counterSourceLocal.z / scaleZ
    );

    const pull = voidMode ? 0.08 : 0.12;
    starCounterPositions[index3] = THREE.MathUtils.lerp(counterSourceLocal.x, tx, pull);
    starCounterPositions[index3 + 1] = THREE.MathUtils.lerp(counterSourceLocal.y, ty, pull);
    starCounterPositions[index3 + 2] = THREE.MathUtils.lerp(counterSourceLocal.z, tz, pull) + THREE.MathUtils.randFloatSpread(0.12);
}

function createStarCounterUI() {
    if (starCounterGroup || !scene) {
        return;
    }

    const group = new THREE.Group();
    const pointCapacity = STAR_COUNTER_MAX_POINTS;
    starCounterPositions = new Float32Array(pointCapacity * 3);
    starCounterTargetPositions = new Float32Array(pointCapacity * 3);
    starCounterColors = new Float32Array(pointCapacity * 3);
    starCounterPhases = new Float32Array(pointCapacity);
    starCounterBaseIntensity = new Float32Array(pointCapacity);

    for (let i = 0; i < pointCapacity; i += 1) {
        const index3 = i * 3;
        starCounterPositions[index3] = THREE.MathUtils.randFloatSpread(22);
        starCounterPositions[index3 + 1] = THREE.MathUtils.randFloatSpread(8);
        starCounterPositions[index3 + 2] = THREE.MathUtils.randFloatSpread(1.2);
        starCounterTargetPositions[index3] = 0;
        starCounterTargetPositions[index3 + 1] = 0;
        starCounterTargetPositions[index3 + 2] = 0;
        starCounterPhases[i] = Math.random() * Math.PI * 2;
        starCounterBaseIntensity[i] = 0.72 + Math.random() * 0.34;
    }

    starCounterGeometry = new THREE.BufferGeometry();
    starCounterGeometry.setAttribute("position", new THREE.BufferAttribute(starCounterPositions, 3));
    starCounterGeometry.setAttribute("color", new THREE.BufferAttribute(starCounterColors, 3));
    starCounterGeometry.setDrawRange(0, 0);

    const material = new THREE.PointsMaterial({
        size: 0.38,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.88,
        depthWrite: false,
        depthTest: false,
        vertexColors: true,
        blending: THREE.AdditiveBlending
    });
    starCounterPoints = new THREE.Points(starCounterGeometry, material);
    starCounterPoints.renderOrder = 1250;
    group.add(starCounterPoints);

    starCounterGroup = group;
    starCounterPointCount = 0;
    starCounterTransitionStartedMs = performance.now();
    starCounterTransitionUntilMs = starCounterTransitionStartedMs;
    updateStarCounterDisplay();
    scene.add(group);
}

function updateStarCounterDisplay() {
    if (!starCounterGeometry || !starCounterPositions || !starCounterTargetPositions) {
        return;
    }

    const value = String(Math.max(0, spaceLaunchCount));
    starCounterDisplayText = value;
    const signature = `${counterVoidMode ? "V" : "N"}:${value}`;
    const signatureChanged = signature !== starCounterLastSignature;
    const targetTriples = buildStarCounterTargetTriples(value, counterVoidMode);
    const nextCount = Math.min(STAR_COUNTER_MAX_POINTS, Math.floor(targetTriples.length / 3));
    const oldCount = starCounterPointCount;

    for (let i = 0; i < nextCount; i += 1) {
        const index3 = i * 3;
        const tx = targetTriples[index3];
        const ty = targetTriples[index3 + 1];
        const tz = targetTriples[index3 + 2];
        starCounterTargetPositions[index3] = tx;
        starCounterTargetPositions[index3 + 1] = ty;
        starCounterTargetPositions[index3 + 2] = tz;

        if (i >= oldCount || signatureChanged) {
            seedCounterPointFromScene(index3, tx, ty, tz, counterVoidMode);
            starCounterPhases[i] = Math.random() * Math.PI * 2;
        }
        starCounterBaseIntensity[i] = 0.66 + Math.random() * 0.46;
    }

    for (let i = nextCount; i < oldCount; i += 1) {
        const index3 = i * 3;
        starCounterTargetPositions[index3] = starCounterPositions[index3] + THREE.MathUtils.randFloatSpread(0.8);
        starCounterTargetPositions[index3 + 1] = starCounterPositions[index3 + 1] + THREE.MathUtils.randFloatSpread(0.8);
        starCounterTargetPositions[index3 + 2] = starCounterPositions[index3 + 2] + THREE.MathUtils.randFloatSpread(0.4);
    }

    starCounterPointCount = nextCount;
    starCounterGeometry.setDrawRange(0, starCounterPointCount);
    starCounterGeometry.attributes.position.needsUpdate = true;
    if (starCounterGeometry.attributes.color) {
        starCounterGeometry.attributes.color.needsUpdate = true;
    }

    starCounterTransitionStartedMs = performance.now();
    starCounterTransitionUntilMs = starCounterTransitionStartedMs + STAR_COUNTER_TRANSITION_MS;
    starCounterLastSignature = signature;
}

function updateStarCounterVisual(nowMs) {
    if (!starCounterGroup || !starCounterPoints || !starCounterGeometry || !camera) {
        return;
    }
    starCounterGroup.visible = true;

    const { halfWidth, halfHeight } = getPlaneHalfExtentsAtZ(STAR_COUNTER_WORLD_Z);
    const blackout = isSingularityBlackout();
    if (counterVoidMode) {
        starCounterGroup.position.set(
            camera.position.x,
            camera.position.y,
            STAR_COUNTER_WORLD_Z
        );
    } else {
        starCounterGroup.position.set(
            camera.position.x + halfWidth - STAR_COUNTER_MARGIN_X,
            camera.position.y + halfHeight - STAR_COUNTER_MARGIN_Y,
            STAR_COUNTER_WORLD_Z
        );
    }
    starCounterGroup.quaternion.copy(camera.quaternion);
    if (counterVoidMode) {
        const size = getCounterGlyphSize(starCounterDisplayText, true);
        const fitX = (halfWidth * 1.9) / Math.max(1, size.width);
        const fitY = (halfHeight * 1.9) / Math.max(1, size.height);
        const uniform = Math.max(0.001, Math.min(fitX, fitY));
        starCounterGroup.scale.set(uniform, uniform, 1);
    } else {
        starCounterGroup.scale.set(STAR_COUNTER_WORLD_SCALE / 36, STAR_COUNTER_WORLD_SCALE / 36, 1);
    }

    if (singularityCollapse > 0.0001 && !blackout) {
        pointerAtZ(STAR_COUNTER_WORLD_Z, singularityVectorA);
        const pullLerp = THREE.MathUtils.clamp(0.02 + singularityCollapse * 0.22, 0, 0.5);
        starCounterGroup.position.lerp(singularityVectorA, pullLerp);
    }

    const transitionDuration = Math.max(1, starCounterTransitionUntilMs - starCounterTransitionStartedMs);
    const transitionProgress = THREE.MathUtils.clamp(
        (nowMs - starCounterTransitionStartedMs) / transitionDuration,
        0,
        1
    );
    const settle = (counterVoidMode ? 0.22 : 0.28) + transitionProgress * 0.24;
    const twinkle = 0.74 + Math.sin(nowMs * 0.0039 + 0.4) * 0.12 + Math.sin(nowMs * 0.0066 + 1.8) * 0.06;
    const glowLeft = Math.max(0, starCounterGlowUntilMs - nowMs);
    const glowBoost = glowLeft > 0 ? THREE.MathUtils.clamp(glowLeft / 360, 0, 1) : 0;
    const warmUnlock = spaceLaunchCount >= SPACE_COUNTER_TARGET ? 1 : 0;

    for (let i = 0; i < starCounterPointCount; i += 1) {
        const index3 = i * 3;
        const tx = starCounterTargetPositions[index3];
        const ty = starCounterTargetPositions[index3 + 1];
        const tz = starCounterTargetPositions[index3 + 2];

        starCounterPositions[index3] = THREE.MathUtils.lerp(starCounterPositions[index3], tx, settle);
        starCounterPositions[index3 + 1] = THREE.MathUtils.lerp(starCounterPositions[index3 + 1], ty, settle);
        starCounterPositions[index3 + 2] = THREE.MathUtils.lerp(starCounterPositions[index3 + 2], tz, settle * 0.92);

        const phase = starCounterPhases[i] + nowMs * STAR_COUNTER_TWINKLE_SPEED;
        const sparkle = 0.76 + Math.sin(phase) * 0.18;
        const brightness = THREE.MathUtils.clamp(
            starCounterBaseIntensity[i] * sparkle * twinkle + glowBoost * 0.38,
            0,
            1.25
        );

        const baseR = 0.82 + warmUnlock * 0.16;
        const baseG = 0.9 + warmUnlock * 0.03;
        const baseB = 1 - warmUnlock * 0.24;
        starCounterColors[index3] = THREE.MathUtils.clamp(baseR * brightness, 0, 1);
        starCounterColors[index3 + 1] = THREE.MathUtils.clamp(baseG * brightness, 0, 1);
        starCounterColors[index3 + 2] = THREE.MathUtils.clamp(baseB * brightness, 0, 1);
    }

    if (starCounterPointCount < STAR_COUNTER_MAX_POINTS) {
        for (let i = starCounterPointCount; i < Math.min(STAR_COUNTER_MAX_POINTS, starCounterPointCount + 16); i += 1) {
            const index3 = i * 3;
            starCounterColors[index3] = 0;
            starCounterColors[index3 + 1] = 0;
            starCounterColors[index3 + 2] = 0;
        }
    }

    starCounterGeometry.attributes.position.needsUpdate = true;
    if (starCounterGeometry.attributes.color) {
        starCounterGeometry.attributes.color.needsUpdate = true;
    }

    starCounterPoints.material.opacity = THREE.MathUtils.clamp(0.74 + glowBoost * 0.26, 0.54, 1);
    starCounterPoints.material.size = counterVoidMode ? 0.56 : 0.38;
}

function setCounterVoidMode(active) {
    if (counterVoidMode === active) {
        return;
    }
    counterVoidMode = active;
    updateStarCounterDisplay();
}

function isSingularityBlackout() {
    if (singularityCollapse >= 0.92) {
        return true;
    }
    if (singularityOverlay && singularityOverlay.material && singularityOverlay.material.opacity >= 0.95) {
        return true;
    }
    return false;
}

function cancelVoidCountdown() {
    voidCounterPrimed = false;
    lastBlackoutSpacePressMs = 0;
}

function handleBlackoutSpacePress(nowMs = performance.now()) {
    if (!isSingularityBlackout()) {
        return false;
    }

    setCounterVoidMode(true);
    voidCounterPrimed = true;
    lastBlackoutSpacePressMs = nowMs;

    if (spaceLaunchCount <= 0) {
        return true;
    }

    spaceLaunchCount = Math.max(0, spaceLaunchCount - 1);
    starCounterGlowUntilMs = nowMs + 220;
    updateStarCounterDisplay();

    if (spaceLaunchCount <= 0) {
        triggerBigBang(nowMs);
    }
    return true;
}

function triggerBigBang(nowMs = performance.now()) {
    if (!scene || !camera) {
        return;
    }

    bigBangState = { startedAtMs: nowMs };
    cancelVoidCountdown();
    voidCounterPrimed = false;
    lastBlackoutSpacePressMs = 0;
    setCounterVoidMode(false);

    spaceLaunchCount = 0;
    starCounterGlowUntilMs = nowMs + 520;
    updateStarCounterDisplay();

    pendingCompanionFromBlackout = false;
    companionSpawnedFromBlackout = false;
    dualConstellationActive = false;
    dualConstellationProgress = 0;
    dualConstellationActivatedAtMs = 0;
    if (companionConstellation) {
        disposeCompanionConstellation();
    }

    for (let i = shootingStars.length - 1; i >= 0; i -= 1) {
        removeShootingStar(i);
    }
    for (let i = foodMeshes.length - 1; i >= 0; i -= 1) {
        removeFoodAt(i);
    }

    const centerX = camera.position.x;
    const centerY = camera.position.y;
    const centerZ = 0;

    if (starPositions && starVelX && starVelY) {
        for (let i = 0; i < starCount; i += 1) {
            const index3 = i * 3;
            starPositions[index3] = centerX + THREE.MathUtils.randFloatSpread(5);
            starPositions[index3 + 1] = centerY + THREE.MathUtils.randFloatSpread(5);
            starPositions[index3 + 2] = centerZ + THREE.MathUtils.randFloatSpread(56);

            const angle = Math.random() * Math.PI * 2;
            const speed = THREE.MathUtils.randFloat(BIG_BANG_STAR_BURST_MIN, BIG_BANG_STAR_BURST_MAX);
            starVelX[i] = Math.cos(angle) * speed;
            starVelY[i] = Math.sin(angle) * speed;
            starDrift[i] = 0.8 + Math.random() * 1.2;
        }
        if (stars && stars.geometry && stars.geometry.attributes.position) {
            stars.geometry.attributes.position.needsUpdate = true;
        }
    }

    if (deepStarPositions && deepStarDrift) {
        for (let i = 0; i < deepStarCount; i += 1) {
            const index3 = i * 3;
            deepStarPositions[index3] = centerX + THREE.MathUtils.randFloatSpread(8);
            deepStarPositions[index3 + 1] = centerY + THREE.MathUtils.randFloatSpread(8);
            deepStarPositions[index3 + 2] = centerZ - 80 + THREE.MathUtils.randFloatSpread(120);
            deepStarDrift[i] = THREE.MathUtils.randFloat(BIG_BANG_DEEP_BURST_MIN, BIG_BANG_DEEP_BURST_MAX);
        }
        if (deepStars && deepStars.geometry && deepStars.geometry.attributes.position) {
            deepStars.geometry.attributes.position.needsUpdate = true;
        }
    }

    if (constellationEntryState) {
        snapConstellationPayloadToBase(constellationEntryState.dust);
        snapConstellationPayloadToBase(constellationEntryState.nodes);
        snapConstellationPayloadToBase(constellationEntryState.linesNear);
        snapConstellationPayloadToBase(constellationEntryState.linesFar);
    }

    singularityCollapse = 0;
    blackHolePower = 0;
    blackHoleRadius = MIN_BLACKHOLE_RADIUS;
    lastPointerMoveMs = nowMs;

    if (singularityOverlay) {
        singularityOverlay.material.opacity = 0;
        singularityOverlay.visible = false;
    }
}

function updateVoidCounterCountdown(nowMs) {
    const blackout = isSingularityBlackout();
    if (!blackout) {
        cancelVoidCountdown();
        return;
    }

    if (!voidCounterPrimed && spaceLaunchCount > 0 && !bigBangState) {
        voidCounterPrimed = true;
        lastBlackoutSpacePressMs = nowMs;
    }
}

function updateBigBang(nowMs) {
    if (!bigBangState || !bigBangFlash || !camera) {
        return;
    }

    const progress = THREE.MathUtils.clamp((nowMs - bigBangState.startedAtMs) / BIG_BANG_FLASH_MS, 0, 1);

    const overlayDistance = 0.33;
    camera.getWorldDirection(singularityCameraForward);
    singularityVectorA.copy(camera.position).addScaledVector(singularityCameraForward, overlayDistance);
    const halfHeight = Math.tan(THREE.MathUtils.degToRad(camera.fov * 0.5)) * overlayDistance;
    const halfWidth = halfHeight * camera.aspect;
    const scaleMul = 1 + progress * 2.8;

    bigBangFlash.position.copy(singularityVectorA);
    bigBangFlash.quaternion.copy(camera.quaternion);
    bigBangFlash.scale.set(halfWidth * 2.1 * scaleMul, halfHeight * 2.1 * scaleMul, 1);

    let opacity;
    if (progress < 0.18) {
        opacity = progress / 0.18;
    } else {
        const tail = 1 - ((progress - 0.18) / 0.82);
        opacity = Math.max(0, tail * tail * 0.95);
    }
    bigBangFlash.material.opacity = opacity;
    bigBangFlash.visible = opacity > 0.002;

    if (progress >= 1) {
        bigBangState = null;
        bigBangFlash.visible = false;
        bigBangFlash.material.opacity = 0;
    }
}

function updateDualConstellationProgress(nowMs) {
    if (!dualConstellationActive) {
        dualConstellationProgress = 0;
        return;
    }

    const t = THREE.MathUtils.clamp(
        (nowMs - dualConstellationActivatedAtMs) / DUAL_CONSTELLATION_SLIDE_MS,
        0,
        1
    );
    dualConstellationProgress = t * t * (3 - 2 * t);
}

function incrementSpaceCounter(nowMs = performance.now()) {
    spaceLaunchCount += 1;
    starCounterGlowUntilMs = nowMs + 360;
    updateStarCounterDisplay();

    if (!dualConstellationActive && !companionConstellationLoading && !companionConstellation && spaceLaunchCount >= SPACE_COUNTER_TARGET) {
        pendingCompanionFromBlackout = false;
        loadCompanionConstellationFromImage(
            COMPANION_CONSTELLATION_IMAGE_URL,
            COMPANION_CONSTELLATION_FALLBACK_IMAGE_URL
        );
    }
}

function loadCompanionConstellationFromImage(imageUrl, fallbackUrl = null) {
    if (companionConstellation || companionConstellationLoading) {
        return;
    }

    companionConstellationLoading = true;
    const image = new Image();
    image.decoding = "async";
    image.onload = () => {
        companionConstellationLoading = false;
        if (spaceLaunchCount < SPACE_COUNTER_TARGET) {
            return;
        }
        buildCompanionConstellation(image);
    };
    image.onerror = () => {
        companionConstellationLoading = false;
        if (fallbackUrl && fallbackUrl !== imageUrl) {
            console.warn(`${imageUrl} okunamadi, ${fallbackUrl} ile devam ediliyor.`);
            loadCompanionConstellationFromImage(fallbackUrl, null);
            return;
        }
        console.warn("Companion constellation gorseli yuklenemedi.");
    };
    image.src = imageUrl;
}

function extractConstellationTriples(image) {
    const scanScale = Math.min(1, CONSTELLATION_SCAN_MAX_WIDTH / image.width);
    const scanWidth = Math.max(96, Math.floor(image.width * scanScale));
    const scanHeight = Math.max(64, Math.floor(image.height * scanScale));

    const canvas = document.createElement("canvas");
    canvas.width = scanWidth;
    canvas.height = scanHeight;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) {
        return null;
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
            const wz = -190 + (Math.random() - 0.5) * (CONSTELLATION_DEPTH_JITTER * 2);
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
        return null;
    }

    const nodeCount = Math.floor(nodeTriples.length / 3);
    const lineTriples = [];
    const lineTriplesFar = [];
    const pushLine = (ax, ay, az, bx, by, bz) => {
        const midpointZ = (az + bz) * 0.5;
        if (midpointZ < CONSTELLATION_LINE_DEPTH_SPLIT_Z) {
            lineTriplesFar.push(ax, ay, az, bx, by, bz);
            return;
        }
        lineTriples.push(ax, ay, az, bx, by, bz);
    };
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
            pushLine(ax, ay, az, bx, by, bz);
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
            if (j === i || linkCounts[j] >= CONSTELLATION_MAX_LINKS_PER_NODE) {
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
            pushLine(ax, ay, az, bx, by, bz);
            linkCounts[i] += 1;
            linkCounts[bestJ] += 1;
        }
    }

    return {
        worldWidth,
        worldHeight,
        dustTriples,
        nodeTriples,
        lineTriples: sortLineTriplesForEntry(lineTriples, 31),
        lineTriplesFar: sortLineTriplesForEntry(lineTriplesFar, 37)
    };
}

function disposeCompanionConstellation() {
    if (!companionConstellation || !companionConstellation.group) {
        return;
    }

    scene.remove(companionConstellation.group);
    companionConstellation.group.traverse((child) => {
        if (child.geometry) {
            child.geometry.dispose();
        }
        if (child.material) {
            child.material.dispose();
        }
    });
    companionConstellation = null;
}

function triggerCompanionBurst(nowMs = performance.now()) {
    if (!scene || !companionConstellation || !companionConstellation.group) {
        return;
    }

    const payloads = [
        companionConstellation.nodePayload,
        companionConstellation.dustPayload
    ];
    const samples = [];

    for (let p = 0; p < payloads.length; p += 1) {
        const payload = payloads[p];
        if (!payload || !payload.live) {
            continue;
        }
        const step = p === 0 ? 1 : 4;
        for (let i = 0; i < payload.live.length; i += 3 * step) {
            samples.push(payload.live[i], payload.live[i + 1], payload.live[i + 2]);
            if (samples.length >= 720) {
                break;
            }
        }
        if (samples.length >= 720) {
            break;
        }
    }

    if (samples.length < 18) {
        return;
    }

    const count = Math.floor(samples.length / 3);
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const group = companionConstellation.group;
    const center = new THREE.Vector3(
        group.position.x,
        group.position.y,
        group.position.z
    );

    for (let i = 0; i < count; i += 1) {
        const idx3 = i * 3;
        const localX = samples[idx3];
        const localY = samples[idx3 + 1];
        const localZ = samples[idx3 + 2];
        const worldX = group.position.x + localX * CONSTELLATION_SCALE;
        const worldY = group.position.y + localY * CONSTELLATION_SCALE;
        const worldZ = group.position.z + localZ * 0.1;

        positions[idx3] = worldX;
        positions[idx3 + 1] = worldY;
        positions[idx3 + 2] = worldZ;

        const dx = worldX - center.x;
        const dy = worldY - center.y;
        const dist = Math.hypot(dx, dy) + 0.0001;
        const nx = dx / dist;
        const ny = dy / dist;
        const speed = 0.42 + Math.random() * 1.32;
        velocities[idx3] = nx * speed + (Math.random() - 0.5) * 0.22;
        velocities[idx3 + 1] = ny * speed + (Math.random() - 0.5) * 0.22;
        velocities[idx3 + 2] = (Math.random() - 0.5) * 0.14;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
        color: 0xeaf4ff,
        size: 1.5,
        transparent: true,
        opacity: 0.96,
        depthWrite: false,
        depthTest: true,
        blending: THREE.AdditiveBlending
    });
    const points = new THREE.Points(geometry, material);
    points.renderOrder = 24;
    scene.add(points);

    companionBursts.push({
        points,
        geometry,
        material,
        positions,
        velocities,
        bornMs: nowMs,
        lifeMs: 980
    });
}

function updateCompanionBursts(delta, nowMs) {
    for (let i = companionBursts.length - 1; i >= 0; i -= 1) {
        const burst = companionBursts[i];
        const age = nowMs - burst.bornMs;
        const t = age / burst.lifeMs;
        if (t >= 1) {
            scene.remove(burst.points);
            burst.geometry.dispose();
            burst.material.dispose();
            companionBursts.splice(i, 1);
            continue;
        }

        const drag = Math.pow(0.94, delta);
        for (let p = 0; p < burst.positions.length; p += 3) {
            burst.velocities[p] *= drag;
            burst.velocities[p + 1] *= drag;
            burst.velocities[p + 2] *= drag;
            burst.positions[p] += burst.velocities[p] * delta;
            burst.positions[p + 1] += burst.velocities[p + 1] * delta;
            burst.positions[p + 2] += burst.velocities[p + 2] * delta;
        }
        burst.geometry.attributes.position.needsUpdate = true;
        burst.material.opacity = THREE.MathUtils.clamp(1 - t * t, 0, 1);
    }
}

function handleBlackholeBreakByPointer(nowMs = performance.now()) {
    const hadCompanion = Boolean(companionConstellation);
    if (hadCompanion) {
        triggerCompanionBurst(nowMs);
        disposeCompanionConstellation();
        dualConstellationActive = false;
        dualConstellationProgress = 0;
        dualConstellationActivatedAtMs = 0;
    }

    const shouldResetCounter =
        hadCompanion ||
        (spaceLaunchCount > SPACE_COUNTER_TARGET && (counterVoidMode || singularityCollapse > 0.18));
    if (shouldResetCounter) {
        spaceLaunchCount = 0;
        updateStarCounterDisplay();
    }

    companionSpawnedFromBlackout = false;
    pendingCompanionFromBlackout = false;
    cancelVoidCountdown();
    setCounterVoidMode(false);
    if (constellationEntryState) {
        snapConstellationPayloadToBase(constellationEntryState.dust);
        snapConstellationPayloadToBase(constellationEntryState.nodes);
        snapConstellationPayloadToBase(constellationEntryState.linesNear);
        snapConstellationPayloadToBase(constellationEntryState.linesFar);
    }

    lastPointerMoveMs = nowMs;
    singularityCollapse = 0;
    blackHolePower = 0;
}

function buildCompanionConstellation(image) {
    if (!scene) {
        return;
    }

    const triples = extractConstellationTriples(image);
    if (!triples) {
        console.warn("Companion constellation verisi olusturulamadi.");
        return;
    }

    disposeCompanionConstellation();

    const group = new THREE.Group();
    const readyAtMs = performance.now();
    const orderedDustTriples = sortPointTriplesForEntry(triples.dustTriples, 43);
    const orderedNodeTriples = sortPointTriplesForEntry(triples.nodeTriples, 47);

    const dustBase = new Float32Array(orderedDustTriples);
    const dustLive = new Float32Array(dustBase);
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute("position", new THREE.BufferAttribute(dustLive, 3));
    dustGeometry.setDrawRange(0, 0);
    const dustMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1.04,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        depthTest: true,
        blending: THREE.AdditiveBlending
    });
    const dustPoints = new THREE.Points(dustGeometry, dustMaterial);
    dustPoints.renderOrder = 2;
    group.add(dustPoints);

    const nodeBase = new Float32Array(orderedNodeTriples);
    const nodeLive = new Float32Array(nodeBase);
    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(nodeLive, 3));
    nodeGeometry.setDrawRange(0, 0);
    const nodeMaterial = new THREE.PointsMaterial({
        color: 0xe6f2ff,
        size: 2.16,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        depthTest: true,
        blending: THREE.AdditiveBlending
    });
    const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
    nodePoints.renderOrder = 3;
    group.add(nodePoints);

    let nearLineMaterial = null;
    let farLineMaterial = null;
    let nearLinePayload = null;
    let farLinePayload = null;
    let nearLineGeometry = null;
    let farLineGeometry = null;

    if (triples.lineTriples.length > 0) {
        const nearLineBase = new Float32Array(triples.lineTriples);
        const nearLineLive = new Float32Array(nearLineBase);
        nearLineGeometry = new THREE.BufferGeometry();
        nearLineGeometry.setAttribute("position", new THREE.BufferAttribute(nearLineLive, 3));
        nearLineGeometry.setDrawRange(0, 0);
        nearLineMaterial = new THREE.LineBasicMaterial({
            color: 0xc7daec,
            transparent: true,
            opacity: 0,
            depthWrite: false,
            depthTest: true,
            blending: THREE.NormalBlending
        });
        const nearLines = new THREE.LineSegments(nearLineGeometry, nearLineMaterial);
        nearLines.renderOrder = 1;
        group.add(nearLines);
        nearLinePayload = {
            base: nearLineBase,
            live: nearLineLive,
            count: Math.floor(nearLineLive.length / 3),
            attribute: nearLineGeometry.attributes.position,
            geometry: nearLineGeometry,
            segmentCount: Math.floor(nearLineBase.length / 6)
        };
    }

    if (triples.lineTriplesFar.length > 0) {
        const farLineBase = new Float32Array(triples.lineTriplesFar);
        const farLineLive = new Float32Array(farLineBase);
        farLineGeometry = new THREE.BufferGeometry();
        farLineGeometry.setAttribute("position", new THREE.BufferAttribute(farLineLive, 3));
        farLineGeometry.setDrawRange(0, 0);
        farLineMaterial = new THREE.LineBasicMaterial({
            color: 0xafc3d8,
            transparent: true,
            opacity: 0,
            depthWrite: false,
            depthTest: true,
            blending: THREE.NormalBlending
        });
        const farLines = new THREE.LineSegments(farLineGeometry, farLineMaterial);
        farLines.renderOrder = 0;
        group.add(farLines);
        farLinePayload = {
            base: farLineBase,
            live: farLineLive,
            count: Math.floor(farLineLive.length / 3),
            attribute: farLineGeometry.attributes.position,
            geometry: farLineGeometry,
            segmentCount: Math.floor(farLineBase.length / 6)
        };
    }

    let sparklePayload = null;
    if (orderedNodeTriples.length > 0) {
        const orderedNodeCount = Math.floor(orderedNodeTriples.length / 3);
        const sampleCount = Math.max(16, Math.min(260, Math.floor(orderedNodeCount * 0.48)));
        const step = Math.max(1, Math.floor(orderedNodeCount / sampleCount));
        const sparklePositions = [];
        for (let i = 0; i < orderedNodeCount; i += step) {
            const index3 = i * 3;
            sparklePositions.push(
                orderedNodeTriples[index3],
                orderedNodeTriples[index3 + 1],
                orderedNodeTriples[index3 + 2]
            );
            if (sparklePositions.length / 3 >= sampleCount) {
                break;
            }
        }

        if (sparklePositions.length >= 3) {
            const sparkleGeometry = new THREE.BufferGeometry();
            sparkleGeometry.setAttribute("position", new THREE.Float32BufferAttribute(sparklePositions, 3));
            const sparkleColors = new Float32Array(sparklePositions.length);
            sparkleGeometry.setAttribute("color", new THREE.BufferAttribute(sparkleColors, 3));
            const sparkleMaterial = new THREE.PointsMaterial({
                size: 3.2,
                transparent: true,
                opacity: 0,
                depthWrite: false,
                depthTest: true,
                blending: THREE.AdditiveBlending,
                vertexColors: true
            });
            const sparklePoints = new THREE.Points(sparkleGeometry, sparkleMaterial);
            sparklePoints.renderOrder = 8;
            group.add(sparklePoints);

            sparklePayload = {
                geometry: sparkleGeometry,
                colors: sparkleColors,
                intensity: new Float32Array(Math.floor(sparklePositions.length / 3)),
                material: sparkleMaterial,
                lastMs: readyAtMs,
                nextMs: readyAtMs + THREE.MathUtils.randFloat(
                    COMPANION_CONSTELLATION_SPARKLE_MIN_INTERVAL_MS,
                    COMPANION_CONSTELLATION_SPARKLE_MAX_INTERVAL_MS
                )
            };
        }
    }

    const mouthLocalX = (CONSTELLATION_MOUTH_U - 0.5) * triples.worldWidth;
    const mouthLocalY = (0.5 - CONSTELLATION_MOUTH_V) * triples.worldHeight;

    companionConstellationBasePosition.set(
        CONSTELLATION_MOUTH_TARGET_X - mouthLocalX * CONSTELLATION_SCALE,
        CONSTELLATION_MOUTH_TARGET_Y - mouthLocalY * CONSTELLATION_SCALE,
        CONSTELLATION_TARGET_Z
    );

    group.scale.set(CONSTELLATION_SCALE, CONSTELLATION_SCALE, 1);
    group.position.copy(companionConstellationBasePosition);
    group.rotation.x = -0.02;
    group.rotation.z = -0.006;

    companionConstellation = {
        group,
        readyAtMs,
        dustMaterial,
        nodeMaterial,
        nearLineMaterial,
        farLineMaterial,
        sparkle: sparklePayload,
        drawDone: false,
        dustPayload: {
            base: dustBase,
            live: dustLive,
            count: Math.floor(dustLive.length / 3),
            attribute: dustGeometry.attributes.position,
            geometry: dustGeometry
        },
        nodePayload: {
            base: nodeBase,
            live: nodeLive,
            count: Math.floor(nodeLive.length / 3),
            attribute: nodeGeometry.attributes.position,
            geometry: nodeGeometry
        },
        nearLinePayload,
        farLinePayload
    };

    scene.add(group);
    dualConstellationActive = true;
    dualConstellationActivatedAtMs = performance.now();
    companionSpawnedFromBlackout = pendingCompanionFromBlackout;
    pendingCompanionFromBlackout = false;
}

function updateCompanionConstellation(nowMs, delta = 1) {
    if (!companionConstellation || !companionConstellation.group) {
        return;
    }

    const drawProgress = THREE.MathUtils.clamp(
        (nowMs - companionConstellation.readyAtMs) / COMPANION_CONSTELLATION_DRAW_MS,
        0,
        1
    );
    const fadeProgress = THREE.MathUtils.clamp(
        (nowMs - companionConstellation.readyAtMs) / COMPANION_CONSTELLATION_FADE_MS,
        0,
        1
    );
    const collapse = singularityCollapse;
    const collapseVisibility = Math.max(0, 1 - collapse * 0.995);
    const powerBoost = 1 + blackHolePower * CONSTELLATION_VISIBILITY_POWER_MULT;
    const pulse = 0.92 + Math.sin(nowMs * 0.0019 + 0.7) * 0.06 + Math.sin(nowMs * 0.0035 + 1.8) * 0.03;
    const drawFlash = 1 + (1 - drawProgress) * 0.9;
    const dualBoost = dualConstellationActive ? 1.4 : 1;
    const visibilityBoost = CONSTELLATION_VISIBILITY_MULT * powerBoost * collapseVisibility * drawFlash * dualBoost;

    companionConstellation.dustMaterial.opacity = Math.min(
        0.46,
        (0.043 + pulse * 0.013) * fadeProgress * drawProgress * visibilityBoost * CONSTELLATION_DUST_OPACITY_MULT
    );
    companionConstellation.nodeMaterial.opacity = Math.min(
        0.76,
        (0.11 + pulse * 0.026) * fadeProgress * drawProgress * visibilityBoost * CONSTELLATION_NODE_OPACITY_MULT
    );

    const nearLineOpacity = Math.min(
        0.52,
        (0.048 + pulse * 0.014) * fadeProgress * drawProgress * visibilityBoost * CONSTELLATION_LINE_OPACITY_MULT
    );
    if (companionConstellation.nearLineMaterial) {
        companionConstellation.nearLineMaterial.opacity = nearLineOpacity;
    }
    if (companionConstellation.farLineMaterial) {
        companionConstellation.farLineMaterial.opacity = nearLineOpacity * CONSTELLATION_FAR_LINE_OPACITY_MULT;
    }

    if (companionConstellation.dustPayload && companionConstellation.dustPayload.geometry) {
        companionConstellation.dustPayload.geometry.setDrawRange(
            0,
            Math.floor(companionConstellation.dustPayload.count * drawProgress)
        );
    }
    if (companionConstellation.nodePayload && companionConstellation.nodePayload.geometry) {
        companionConstellation.nodePayload.geometry.setDrawRange(
            0,
            Math.floor(companionConstellation.nodePayload.count * drawProgress)
        );
    }
    if (companionConstellation.nearLinePayload && companionConstellation.nearLinePayload.geometry) {
        const segmentCount = companionConstellation.nearLinePayload.segmentCount || 0;
        const revealSegments = Math.floor(segmentCount * drawProgress);
        companionConstellation.nearLinePayload.geometry.setDrawRange(0, revealSegments * 2);
    }
    if (companionConstellation.farLinePayload && companionConstellation.farLinePayload.geometry) {
        const segmentCount = companionConstellation.farLinePayload.segmentCount || 0;
        const revealSegments = Math.floor(segmentCount * drawProgress);
        companionConstellation.farLinePayload.geometry.setDrawRange(0, revealSegments * 2);
    }

    if (companionConstellation.sparkle) {
        const sparkle = companionConstellation.sparkle;
        const deltaMs = Math.max(0, nowMs - sparkle.lastMs);
        sparkle.lastMs = nowMs;
        const decay = Math.exp(-deltaMs / COMPANION_CONSTELLATION_SPARKLE_DECAY_MS);

        if (nowMs >= sparkle.nextMs && sparkle.intensity.length > 0) {
            const burstCount = Math.min(8, sparkle.intensity.length);
            for (let i = 0; i < burstCount; i += 1) {
                const index = Math.floor(Math.random() * sparkle.intensity.length);
                sparkle.intensity[index] = Math.max(sparkle.intensity[index], 0.72 + Math.random() * 0.5);
            }
            sparkle.nextMs = nowMs + THREE.MathUtils.randFloat(
                COMPANION_CONSTELLATION_SPARKLE_MIN_INTERVAL_MS,
                COMPANION_CONSTELLATION_SPARKLE_MAX_INTERVAL_MS
            );
        }

        let activeCount = 0;
        for (let i = 0; i < sparkle.intensity.length; i += 1) {
            let intensity = sparkle.intensity[i] * decay;
            if (intensity < 0.002) {
                intensity = 0;
            } else {
                activeCount += 1;
            }
            sparkle.intensity[i] = intensity;
            const index3 = i * 3;
            if (intensity > 0) {
                sparkle.colors[index3] = 0.84 + intensity * 0.16;
                sparkle.colors[index3 + 1] = 0.9 + intensity * 0.1;
                sparkle.colors[index3 + 2] = 1;
            } else {
                sparkle.colors[index3] = 0;
                sparkle.colors[index3 + 1] = 0;
                sparkle.colors[index3 + 2] = 0;
            }
        }
        sparkle.geometry.attributes.color.needsUpdate = true;
        sparkle.material.opacity = activeCount > 0
            ? THREE.MathUtils.clamp(0.26 + drawProgress * 0.62, 0, 0.98) * fadeProgress * collapseVisibility
            : 0;
    }

    const splitOffsetX = dualConstellationProgress * DUAL_CONSTELLATION_SPLIT_X;
    const companionBaseX = companionConstellationBasePosition.x - splitOffsetX;
    companionConstellation.group.position.set(
        companionBaseX,
        companionConstellationBasePosition.y,
        companionConstellationBasePosition.z
    );
    companionConstellation.group.scale.set(CONSTELLATION_SCALE, CONSTELLATION_SCALE, 1);
    companionConstellation.group.rotation.x = -0.02;
    companionConstellation.group.rotation.z = -0.006;

    if (collapse > 0.0001) {
        pointerAtZ(companionConstellationBasePosition.z, singularityVectorB);
        const sinkLocalX = (singularityVectorB.x - companionBaseX) / CONSTELLATION_SCALE;
        const sinkLocalY = (singularityVectorB.y - companionConstellationBasePosition.y) / CONSTELLATION_SCALE;
        pullConstellationPayload(companionConstellation.dustPayload, sinkLocalX, sinkLocalY, collapse, delta);
        pullConstellationPayload(companionConstellation.nodePayload, sinkLocalX, sinkLocalY, collapse, delta);
        pullConstellationPayload(companionConstellation.nearLinePayload, sinkLocalX, sinkLocalY, collapse, delta);
        pullConstellationPayload(companionConstellation.farLinePayload, sinkLocalX, sinkLocalY, collapse, delta);
    } else {
        restoreConstellationPayload(companionConstellation.dustPayload, delta, 0.16);
        restoreConstellationPayload(companionConstellation.nodePayload, delta, 0.16);
        restoreConstellationPayload(companionConstellation.nearLinePayload, delta, 0.18);
        restoreConstellationPayload(companionConstellation.farLinePayload, delta, 0.18);
    }
}

function init() {
    const container = document.getElementById("container");
    if (!container) {
        return;
    }

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const initialViewport = getViewportDimensions();
    viewportSize.width = initialViewport.width;
    viewportSize.height = initialViewport.height;

    camera = new THREE.PerspectiveCamera(72, initialViewport.width / initialViewport.height, 0.1, 2800);
    camera.position.set(0, 6, 75);

    renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setSize(initialViewport.width, initialViewport.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.domElement.style.touchAction = "none";
    renderer.domElement.style.cursor = "none";
    renderer.domElement.style.outline = "none";
    renderer.domElement.tabIndex = 0;
    container.appendChild(renderer.domElement);
    renderer.domElement.focus({ preventScroll: true });
    window.focus();

    pointerInside = true;

    console.info("[husoyayazar] build", BUILD_ID);

    resolvePerformanceProfile();
    createStarCounterUI();
    loadConstellationFromImage("husospace.png");
    createStars();
    createDeepStars();
    createNebulaLayer();
    createBlackHoleVisual();
    scheduleNextShootingStar(performance.now() + 800);

    for (let i = 0; i < 4; i += 1) {
        spawnFoodRow();
    }

    bindEvents();
    applyViewportSize(true);
    animate();
}

function bindEvents() {
    window.addEventListener("resize", onWindowResize);
    window.addEventListener("orientationchange", onWindowResize);
    if (window.visualViewport) {
        window.visualViewport.addEventListener("resize", onWindowResize);
        window.visualViewport.addEventListener("scroll", onWindowResize);
    }

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
        if (event.code === "Space" || event.key === " " || event.key === "Spacebar") {
            event.preventDefault();
            if (event.repeat) {
                return;
            }
            const now = performance.now();
            if (bigBangState) {
                return;
            }
            if (isSingularityBlackout()) {
                handleBlackoutSpacePress(now);
                return;
            }

            setCounterVoidMode(false);
            registerUserActivity(now);
            blackHolePulse = Math.max(blackHolePulse, 11);
            spawnFoodFromBlackHole();
            incrementSpaceCounter(now);
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
    singularityCollapse = 0;
    powerAnchorClientX = null;
    powerAnchorClientY = null;
}

function registerUserActivity(nowMs = performance.now()) {
    lastPointerMoveMs = nowMs;
    singularityCollapse = 0;
}

function onPointerDown(event) {
    if (renderer && renderer.domElement) {
        renderer.domElement.focus({ preventScroll: true });
    }
    registerUserActivity(performance.now());
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
    applyViewportSize();
}

function onPointerMove(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) {
        return;
    }
    const x = THREE.MathUtils.clamp((event.clientX - rect.left) / rect.width, 0, 1);
    const y = THREE.MathUtils.clamp((event.clientY - rect.top) / rect.height, 0, 1);
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
        if (singularityCollapse > 0.18 || isSingularityBlackout()) {
            handleBlackholeBreakByPointer(now);
            return;
        }
        registerUserActivity(now);
        blackHolePower = 0;
        setCounterVoidMode(false);
    }
}

function createStars() {
    starPositions = new Float32Array(starCount * 3);
    starDrift = new Float32Array(starCount);
    starVelX = new Float32Array(starCount);
    starVelY = new Float32Array(starCount);
    starColors = new Float32Array(starCount * 3);
    starTwinklePhase = new Float32Array(starCount);
    starBaseColors = new Float32Array(starCount * 3);
    starTwinkleAmp = new Float32Array(starCount);

    for (let i = 0; i < starCount; i += 1) {
        const index3 = i * 3;
        resetStar(index3, false, i);
        starDrift[i] = 0.65 + Math.random() * 0.75;
        starVelX[i] = 0;
        starVelY[i] = 0;
        starTwinklePhase[i] = Math.random() * Math.PI * 2;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
        size: 0.78,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.48,
        depthWrite: false,
        vertexColors: true
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

    if (starBaseColors && starTwinkleAmp) {
        assignStarSpectralProfile(index3, starBaseColors, starTwinkleAmp, starIndex, false);
    }

    const depthMix = THREE.MathUtils.clamp((starPositions[index3 + 2] + STAR_FIELD_DEPTH * 0.5) / STAR_FIELD_DEPTH, 0, 1);
    const depthBrightness = STAR_FAR_BRIGHTNESS + (STAR_NEAR_BRIGHTNESS - STAR_FAR_BRIGHTNESS) * depthMix;
    starColors[index3] = THREE.MathUtils.clamp(starBaseColors[index3] * depthBrightness, 0, 1);
    starColors[index3 + 1] = THREE.MathUtils.clamp(starBaseColors[index3 + 1] * depthBrightness, 0, 1);
    starColors[index3 + 2] = THREE.MathUtils.clamp(starBaseColors[index3 + 2] * depthBrightness, 0, 1);

    if (starVelX && starVelY) {
        starVelX[starIndex] = 0;
        starVelY[starIndex] = 0;
    }
    if (starTwinklePhase) {
        starTwinklePhase[starIndex] = Math.random() * Math.PI * 2;
    }
}

function createDeepStars() {
    deepStarPositions = new Float32Array(deepStarCount * 3);
    deepStarDrift = new Float32Array(deepStarCount);
    deepStarColors = new Float32Array(deepStarCount * 3);
    deepStarTwinklePhase = new Float32Array(deepStarCount);
    deepStarBaseColors = new Float32Array(deepStarCount * 3);
    deepStarTwinkleAmp = new Float32Array(deepStarCount);

    for (let i = 0; i < deepStarCount; i += 1) {
        const index3 = i * 3;
        resetDeepStar(index3, false, i);
        deepStarDrift[i] = 0.52 + Math.random() * 0.88;
        deepStarTwinklePhase[i] = Math.random() * Math.PI * 2;
    }

    const deepGeometry = new THREE.BufferGeometry();
    deepGeometry.setAttribute("position", new THREE.BufferAttribute(deepStarPositions, 3));
    deepGeometry.setAttribute("color", new THREE.BufferAttribute(deepStarColors, 3));

    const deepMaterial = new THREE.PointsMaterial({
        size: 0.62,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.22,
        depthWrite: false,
        vertexColors: true
    });

    deepStars = new THREE.Points(deepGeometry, deepMaterial);
    deepStars.renderOrder = 0;
    scene.add(deepStars);
}

function resetDeepStar(index3, moveToBack, starIndex = Math.floor(index3 / 3)) {
    deepStarPositions[index3] = (Math.random() - 0.5) * DEEP_STAR_FIELD_WIDTH;
    deepStarPositions[index3 + 1] = (Math.random() - 0.5) * DEEP_STAR_FIELD_HEIGHT;

    if (moveToBack) {
        deepStarPositions[index3 + 2] = -DEEP_STAR_FIELD_DEPTH * 0.58 - Math.random() * DEEP_STAR_FIELD_DEPTH * 0.34;
    } else {
        deepStarPositions[index3 + 2] = (Math.random() - 0.5) * DEEP_STAR_FIELD_DEPTH;
    }

    if (deepStarBaseColors && deepStarTwinkleAmp) {
        assignStarSpectralProfile(index3, deepStarBaseColors, deepStarTwinkleAmp, starIndex, true);
    }

    const depthMix = THREE.MathUtils.clamp((deepStarPositions[index3 + 2] + DEEP_STAR_FIELD_DEPTH * 0.5) / DEEP_STAR_FIELD_DEPTH, 0, 1);
    const depthBrightness = DEEP_STAR_FAR_BRIGHTNESS + (DEEP_STAR_NEAR_BRIGHTNESS - DEEP_STAR_FAR_BRIGHTNESS) * depthMix;
    deepStarColors[index3] = THREE.MathUtils.clamp(deepStarBaseColors[index3] * depthBrightness, 0, 1);
    deepStarColors[index3 + 1] = THREE.MathUtils.clamp(deepStarBaseColors[index3 + 1] * depthBrightness, 0, 1);
    deepStarColors[index3 + 2] = THREE.MathUtils.clamp(deepStarBaseColors[index3 + 2] * depthBrightness, 0, 1);
    if (deepStarTwinklePhase) {
        deepStarTwinklePhase[starIndex] = Math.random() * Math.PI * 2;
    }
}

function createNebulaTexture(seedOffset = 0) {
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d");

    let seed = (0x8f17a39 ^ (seedOffset * 0x9e3779b9)) >>> 0;
    const seededRandom = () => {
        seed = (seed * 1664525 + 1013904223) >>> 0;
        return seed / 4294967295;
    };

    context.clearRect(0, 0, size, size);
    const patches = 140;
    for (let i = 0; i < patches; i += 1) {
        const x = seededRandom() * size;
        const y = seededRandom() * size;
        const radius = 18 + seededRandom() * 110;
        const alpha = 0.015 + seededRandom() * 0.055;
        const hue = 198 + seededRandom() * 36;
        const saturation = 38 + seededRandom() * 22;
        const lightness = 42 + seededRandom() * 18;

        const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`);
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        context.fillStyle = gradient;
        context.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
}

function createNebulaLayer() {
    if (nebulaGroup) {
        nebulaGroup.traverse((child) => {
            if (child.material) {
                if (child.material.map) {
                    child.material.map.dispose();
                }
                child.material.dispose();
            }
        });
        scene.remove(nebulaGroup);
    }

    nebulaGroup = new THREE.Group();
    nebulaLayers = [];

    for (let i = 0; i < NEBULA_LAYER_COUNT; i += 1) {
        const texture = createNebulaTexture(i + 1);
        const material = new THREE.SpriteMaterial({
            map: texture,
            transparent: true,
            opacity: 0.06 + Math.random() * 0.05,
            depthWrite: false,
            depthTest: true,
            blending: THREE.NormalBlending
        });

        const sprite = new THREE.Sprite(material);
        const scale = NEBULA_BASE_SCALE * (0.82 + Math.random() * 0.58);
        sprite.scale.set(scale, scale * (0.58 + Math.random() * 0.36), 1);
        sprite.position.set(
            (Math.random() - 0.5) * STAR_FIELD_WIDTH * 1.4,
            (Math.random() - 0.5) * STAR_FIELD_HEIGHT * 1.2,
            NEBULA_BASE_Z - Math.random() * NEBULA_SPREAD_Z
        );
        sprite.renderOrder = -1;
        sprite.userData = {
            baseX: sprite.position.x,
            baseY: sprite.position.y,
            driftX: 0.35 + Math.random() * 0.9,
            driftY: 0.3 + Math.random() * 0.75,
            phase: Math.random() * Math.PI * 2,
            baseOpacity: material.opacity
        };
        nebulaLayers.push(sprite);
        nebulaGroup.add(sprite);
    }

    scene.add(nebulaGroup);
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

function createBlackHoleLensingTexture() {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d");

    const ringBase = context.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        size / 2
    );
    ringBase.addColorStop(0, "rgba(0,0,0,0)");
    ringBase.addColorStop(0.44, "rgba(0,0,0,0)");
    ringBase.addColorStop(0.6, "rgba(8,8,8,0.12)");
    ringBase.addColorStop(0.75, "rgba(150,190,255,0.13)");
    ringBase.addColorStop(0.88, "rgba(20,20,24,0.05)");
    ringBase.addColorStop(1, "rgba(0,0,0,0)");
    context.fillStyle = ringBase;
    context.fillRect(0, 0, size, size);

    // Hafif kromatik sapma halkasi.
    const warmRing = context.createRadialGradient(size / 2 + 1.5, size / 2, size * 0.53, size / 2 + 1.5, size / 2, size * 0.94);
    warmRing.addColorStop(0, "rgba(0,0,0,0)");
    warmRing.addColorStop(0.34, "rgba(0,0,0,0)");
    warmRing.addColorStop(0.54, "rgba(255,118,92,0.09)");
    warmRing.addColorStop(0.7, "rgba(0,0,0,0)");
    context.fillStyle = warmRing;
    context.fillRect(0, 0, size, size);

    const coolRing = context.createRadialGradient(size / 2 - 1.5, size / 2, size * 0.49, size / 2 - 1.5, size / 2, size * 0.9);
    coolRing.addColorStop(0, "rgba(0,0,0,0)");
    coolRing.addColorStop(0.32, "rgba(0,0,0,0)");
    coolRing.addColorStop(0.52, "rgba(104,170,255,0.1)");
    coolRing.addColorStop(0.68, "rgba(0,0,0,0)");
    context.fillStyle = coolRing;
    context.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    return texture;
}

function createAccretionDiskTexture(seedOffset = 0, hotness = 0.5) {
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d");
    const center = size * 0.5;
    const pi2 = Math.PI * 2;

    let seed = (0x6f19a73 ^ ((seedOffset + 1) * 0x9e3779b9)) >>> 0;
    const seededRandom = () => {
        seed = (seed * 1664525 + 1013904223) >>> 0;
        return seed / 4294967295;
    };

    context.clearRect(0, 0, size, size);

    const body = context.createRadialGradient(center, center, size * 0.16, center, center, size * 0.5);
    body.addColorStop(0, "rgba(0,0,0,0)");
    body.addColorStop(0.3, `rgba(${Math.floor(210 + hotness * 45)}, ${Math.floor(120 + hotness * 62)}, ${Math.floor(34 + hotness * 24)}, 0.34)`);
    body.addColorStop(0.54, `rgba(${Math.floor(255 - hotness * 25)}, ${Math.floor(170 + hotness * 28)}, ${Math.floor(90 + hotness * 16)}, 0.5)`);
    body.addColorStop(0.72, "rgba(120,165,255,0.22)");
    body.addColorStop(1, "rgba(0,0,0,0)");
    context.fillStyle = body;
    context.fillRect(0, 0, size, size);

    context.globalCompositeOperation = "lighter";
    const streakCount = 220;
    for (let i = 0; i < streakCount; i += 1) {
        const orbit = size * (0.2 + seededRandom() * 0.28);
        const start = seededRandom() * pi2;
        const arc = 0.05 + seededRandom() * 0.26;
        const lineWidth = 0.6 + seededRandom() * 2.8;
        const alpha = 0.045 + seededRandom() * 0.26;
        const hue = 24 + hotness * 24 + seededRandom() * 34;
        const saturation = 72 + seededRandom() * 22;
        const lightness = 52 + hotness * 20 + seededRandom() * 24;
        context.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
        context.lineWidth = lineWidth;
        context.beginPath();
        context.arc(center, center, orbit, start, start + arc);
        context.stroke();
    }

    context.globalCompositeOperation = "destination-out";
    const hole = context.createRadialGradient(center, center, 0, center, center, size * 0.26);
    hole.addColorStop(0, "rgba(0,0,0,0.98)");
    hole.addColorStop(0.42, "rgba(0,0,0,0.88)");
    hole.addColorStop(0.78, "rgba(0,0,0,0.25)");
    hole.addColorStop(1, "rgba(0,0,0,0)");
    context.fillStyle = hole;
    context.fillRect(0, 0, size, size);

    context.globalCompositeOperation = "source-over";
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
}

function createPhotonRingTexture() {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d");
    const center = size * 0.5;

    context.clearRect(0, 0, size, size);
    const ring = context.createRadialGradient(center, center, size * 0.2, center, center, size * 0.5);
    ring.addColorStop(0, "rgba(0,0,0,0)");
    ring.addColorStop(0.48, "rgba(0,0,0,0)");
    ring.addColorStop(0.62, "rgba(255,220,168,0.74)");
    ring.addColorStop(0.7, "rgba(140,188,255,0.34)");
    ring.addColorStop(0.83, "rgba(0,0,0,0)");
    ring.addColorStop(1, "rgba(0,0,0,0)");
    context.fillStyle = ring;
    context.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
}

function createBlackHoleVisual() {
    const holeTexture = createBlackHoleTexture();
    const lensTexture = createBlackHoleLensingTexture();
    const diskTexture = createAccretionDiskTexture(1, 0.58);
    const innerDiskTexture = createAccretionDiskTexture(7, 0.96);
    const photonRingTexture = createPhotonRingTexture();
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

    blackHoleLensing = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.MeshBasicMaterial({
            map: lensTexture,
            transparent: true,
            depthWrite: false,
            depthTest: false
        })
    );
    blackHoleLensing.renderOrder = 99;
    blackHoleLensing.position.set(0, 0, 3);
    blackHoleLensing.visible = false;
    scene.add(blackHoleLensing);

    blackHoleAccretionDisk = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.MeshBasicMaterial({
            map: diskTexture,
            color: 0xffe0ae,
            transparent: true,
            opacity: 0,
            depthWrite: false,
            depthTest: false,
            blending: THREE.AdditiveBlending
        })
    );
    blackHoleAccretionDisk.renderOrder = 96;
    blackHoleAccretionDisk.position.set(0, 0, 3);
    blackHoleAccretionDisk.visible = false;
    scene.add(blackHoleAccretionDisk);

    blackHoleAccretionInnerDisk = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.MeshBasicMaterial({
            map: innerDiskTexture,
            color: 0xfff3d2,
            transparent: true,
            opacity: 0,
            depthWrite: false,
            depthTest: false,
            blending: THREE.AdditiveBlending
        })
    );
    blackHoleAccretionInnerDisk.renderOrder = 97;
    blackHoleAccretionInnerDisk.position.set(0, 0, 3);
    blackHoleAccretionInnerDisk.visible = false;
    scene.add(blackHoleAccretionInnerDisk);

    blackHolePhotonRing = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.MeshBasicMaterial({
            map: photonRingTexture,
            transparent: true,
            opacity: 0,
            depthWrite: false,
            depthTest: false,
            blending: THREE.AdditiveBlending
        })
    );
    blackHolePhotonRing.renderOrder = 101;
    blackHolePhotonRing.position.set(0, 0, 3);
    blackHolePhotonRing.visible = false;
    scene.add(blackHolePhotonRing);

    singularityOverlay = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.MeshBasicMaterial({
            color: 0x000000,
            transparent: true,
            opacity: 0,
            depthWrite: false,
            depthTest: false
        })
    );
    singularityOverlay.renderOrder = 1200;
    singularityOverlay.visible = false;
    scene.add(singularityOverlay);

    bigBangFlash = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0,
            depthWrite: false,
            depthTest: false,
            blending: THREE.AdditiveBlending
        })
    );
    bigBangFlash.renderOrder = 1300;
    bigBangFlash.visible = false;
    scene.add(bigBangFlash);
}

function createShootingStarTexture() {
    const width = 384;
    const height = 28;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, width, height);

    const tail = context.createLinearGradient(0, 0, width, 0);
    tail.addColorStop(0, "rgba(0,0,0,0)");
    tail.addColorStop(0.28, "rgba(120,170,255,0.22)");
    tail.addColorStop(0.62, "rgba(210,236,255,0.82)");
    tail.addColorStop(0.84, "rgba(255,255,255,0.98)");
    tail.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = tail;
    context.fillRect(0, 0, width, height);

    const head = context.createRadialGradient(width * 0.82, height * 0.5, 0, width * 0.82, height * 0.5, height * 1.35);
    head.addColorStop(0, "rgba(255,255,255,1)");
    head.addColorStop(0.24, "rgba(224,240,255,0.95)");
    head.addColorStop(0.58, "rgba(150,200,255,0.32)");
    head.addColorStop(1, "rgba(0,0,0,0)");
    context.fillStyle = head;
    context.fillRect(0, 0, width, height);

    context.globalCompositeOperation = "destination-in";
    const verticalMask = context.createLinearGradient(0, 0, 0, height);
    verticalMask.addColorStop(0, "rgba(0,0,0,0)");
    verticalMask.addColorStop(0.2, "rgba(255,255,255,0.96)");
    verticalMask.addColorStop(0.8, "rgba(255,255,255,0.96)");
    verticalMask.addColorStop(1, "rgba(0,0,0,0)");
    context.fillStyle = verticalMask;
    context.fillRect(0, 0, width, height);
    context.globalCompositeOperation = "source-over";

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
}

function scheduleNextShootingStar(nowMs) {
    const delay = THREE.MathUtils.randFloat(SHOOTING_STAR_MIN_INTERVAL_MS, SHOOTING_STAR_MAX_INTERVAL_MS);
    nextShootingStarAtMs = nowMs + delay;
}

function createShootingStar(nowMs) {
    if (!shootingStarTexture) {
        shootingStarTexture = createShootingStarTexture();
    }

    const length = THREE.MathUtils.randFloat(46, 86);
    const thickness = THREE.MathUtils.randFloat(0.75, 1.65);
    const hue = THREE.MathUtils.randFloat(0.54, 0.63);
    const material = new THREE.MeshBasicMaterial({
        map: shootingStarTexture,
        color: new THREE.Color().setHSL(hue, 0.38, 0.82),
        transparent: true,
        opacity: 0,
        depthWrite: false,
        depthTest: true,
        blending: THREE.AdditiveBlending
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(length, thickness), material);

    const dirX = THREE.MathUtils.randFloatSpread(SHOOTING_STAR_SPEED_XY);
    const dirY = -THREE.MathUtils.randFloat(0.08, SHOOTING_STAR_SPEED_XY * 0.75);
    const dirZ = THREE.MathUtils.randFloat(SHOOTING_STAR_SPEED_Z_MIN, SHOOTING_STAR_SPEED_Z_MAX);

    mesh.position.set(
        THREE.MathUtils.randFloatSpread(STAR_FIELD_WIDTH * 0.96),
        THREE.MathUtils.randFloat(-260, 300),
        THREE.MathUtils.randFloat(SHOOTING_STAR_MIN_START_Z, SHOOTING_STAR_MAX_START_Z)
    );
    mesh.rotation.z = Math.atan2(dirY, dirX);
    mesh.rotation.x = -0.06;

    mesh.userData = {
        vx: dirX,
        vy: dirY,
        vz: dirZ,
        bornMs: nowMs,
        lifeMs: THREE.MathUtils.randFloat(SHOOTING_STAR_MIN_LIFE_MS, SHOOTING_STAR_MAX_LIFE_MS),
        peakOpacity: THREE.MathUtils.randFloat(0.42, 0.68),
        flickerPhase: Math.random() * Math.PI * 2,
        tailStretch: THREE.MathUtils.randFloat(1.05, 2.05),
        hue
    };

    scene.add(mesh);
    shootingStars.push(mesh);
}

function removeShootingStar(index) {
    const mesh = shootingStars[index];
    if (!mesh) {
        return;
    }

    scene.remove(mesh);
    if (mesh.material) {
        mesh.material.dispose();
    }
    if (mesh.geometry) {
        mesh.geometry.dispose();
    }

    shootingStars.splice(index, 1);
}

function updateShootingStars(delta, nowMs) {
    const collapse = singularityCollapse;
    const hasCollapse = collapse > 0.0001;
    const cameraX = camera.position.x;
    const cameraY = camera.position.y;
    const cameraZ = camera.position.z;
    const rayX = pointerRayDir.x;
    const rayY = pointerRayDir.y;
    const rayZ = pointerRayDir.z;
    if (shootingStars.length < SHOOTING_STAR_MAX_ACTIVE && nowMs >= nextShootingStarAtMs) {
        createShootingStar(nowMs);
        scheduleNextShootingStar(nowMs);
    }

    for (let i = shootingStars.length - 1; i >= 0; i -= 1) {
        const star = shootingStars[i];
        const state = star.userData;
        const ageMs = nowMs - state.bornMs;
        const lifeProgress = ageMs / state.lifeMs;

        if (lifeProgress >= 1) {
            removeShootingStar(i);
            continue;
        }

        star.position.x += state.vx * delta;
        star.position.y += state.vy * delta;
        star.position.z += state.vz * delta;

        if (hasCollapse) {
            const t = (star.position.z - cameraZ) / rayZ;
            const sinkX = cameraX + rayX * t;
            const sinkY = cameraY + rayY * t;
            const dx = star.position.x - sinkX;
            const dy = star.position.y - sinkY;
            const dist = Math.sqrt(dx * dx + dy * dy) + 0.0001;
            const collapsePull = THREE.MathUtils.clamp(0.12 + collapse * 1.05, 0, 1.2);
            const pull = (SINGULARITY_PULL_FORCE * collapsePull * 1.35) / (dist + 14);
            star.position.x += (-dx / dist) * pull * delta;
            star.position.y += (-dy / dist) * pull * delta;

            if (dist < 3 + collapse * 38) {
                removeShootingStar(i);
                continue;
            }
        }

        const fadeIn = THREE.MathUtils.clamp(lifeProgress / 0.18, 0, 1);
        const fadeOut = THREE.MathUtils.clamp((1 - lifeProgress) / 0.4, 0, 1);
        const flicker = 0.92 + Math.sin(nowMs * SHOOTING_STAR_FLICKER_SPEED + state.flickerPhase) * 0.08;
        const envelope = Math.min(fadeIn, fadeOut);
        star.material.opacity = state.peakOpacity * envelope * flicker * (1 - collapse * 0.94);
        star.material.color.setHSL(state.hue, 0.4, 0.76 + envelope * 0.2);
        star.scale.set(
            0.84 + envelope * state.tailStretch,
            0.76 + fadeOut * 0.34,
            1
        );

        if (star.position.z > 700 || star.position.y < -460 || Math.abs(star.position.x) > STAR_FIELD_WIDTH * 0.95) {
            removeShootingStar(i);
        }
    }
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
            const wz = -190 + (Math.random() - 0.5) * (CONSTELLATION_DEPTH_JITTER * 2);
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
    const lineTriplesFar = [];
    const pushLine = (ax, ay, az, bx, by, bz) => {
        const midpointZ = (az + bz) * 0.5;
        if (midpointZ < CONSTELLATION_LINE_DEPTH_SPLIT_Z) {
            lineTriplesFar.push(ax, ay, az, bx, by, bz);
            return;
        }
        lineTriples.push(ax, ay, az, bx, by, bz);
    };
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

            pushLine(ax, ay, az, bx, by, bz);
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
            pushLine(ax, ay, az, bx, by, bz);
            linkCounts[i] += 1;
            linkCounts[bestJ] += 1;
        }
    }

    const orderedLineTriples = sortLineTriplesForEntry(lineTriples, 11);
    const orderedFarLineTriples = sortLineTriplesForEntry(lineTriplesFar, 17);
    const joinFlashData = createConstellationJoinFlashData(orderedLineTriples, orderedFarLineTriples);
    const dustEntryPayload = createConstellationEntryPayload(dustTriples, 3);
    const nodeEntryPayload = createConstellationEntryPayload(nodeTriples, 5);
    const nearLineEntryPayload = orderedLineTriples.length > 0
        ? createConstellationEntryPayload(orderedLineTriples, 7, joinFlashData.lookup, false, false)
        : null;
    const farLineEntryPayload = orderedFarLineTriples.length > 0
        ? createConstellationEntryPayload(orderedFarLineTriples, 13, joinFlashData.lookup, false, false)
        : null;

    if (constellationGroup) {
        scene.remove(constellationGroup);
        constellationGroup.traverse((child) => {
            if (child.geometry) {
                child.geometry.dispose();
            }
        });
    }
    constellationEntryState = null;
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
    if (constellationLineFarMaterial) {
        constellationLineFarMaterial.dispose();
        constellationLineFarMaterial = null;
    }
    if (constellationLineStrokeMaterial) {
        constellationLineStrokeMaterial.dispose();
        constellationLineStrokeMaterial = null;
    }
    if (constellationLineFarStrokeMaterial) {
        constellationLineFarStrokeMaterial.dispose();
        constellationLineFarStrokeMaterial = null;
    }
    if (constellationJoinFlashMaterial) {
        constellationJoinFlashMaterial.dispose();
        constellationJoinFlashMaterial = null;
    }
    constellationJoinFlashGeometry = null;
    constellationJoinFlashColors = null;
    constellationJoinFlashIntensity = null;

    constellationGroup = new THREE.Group();

    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute("position", new THREE.BufferAttribute(dustEntryPayload.live, 3));
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
    dustEntryPayload.attribute = dustGeometry.attributes.position;

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(nodeEntryPayload.live, 3));
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
    nodeEntryPayload.attribute = nodeGeometry.attributes.position;

    if (joinFlashData.positions.length > 0) {
        constellationJoinFlashGeometry = new THREE.BufferGeometry();
        constellationJoinFlashGeometry.setAttribute("position", new THREE.Float32BufferAttribute(joinFlashData.positions, 3));
        constellationJoinFlashColors = new Float32Array(joinFlashData.positions.length);
        constellationJoinFlashGeometry.setAttribute("color", new THREE.BufferAttribute(constellationJoinFlashColors, 3));
        constellationJoinFlashIntensity = new Float32Array(Math.floor(joinFlashData.positions.length / 3));
        constellationJoinFlashMaterial = new THREE.PointsMaterial({
            size: CONSTELLATION_JOIN_FLASH_SIZE,
            transparent: true,
            opacity: 0,
            depthWrite: false,
            depthTest: true,
            blending: THREE.AdditiveBlending,
            vertexColors: true
        });
        const joinFlashPoints = new THREE.Points(constellationJoinFlashGeometry, constellationJoinFlashMaterial);
        joinFlashPoints.renderOrder = 6;
        constellationGroup.add(joinFlashPoints);
        constellationJoinFlashLastMs = performance.now();
    }

    if (nearLineEntryPayload) {
        const lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setAttribute("position", new THREE.BufferAttribute(nearLineEntryPayload.live, 3));
        lineGeometry.setDrawRange(0, 0);
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
        constellationLineStrokeMaterial = new THREE.LineBasicMaterial({
            color: 0xf2f8ff,
            transparent: true,
            opacity: 0,
            depthWrite: false,
            depthTest: true,
            blending: THREE.AdditiveBlending
        });
        const strokeGeometry = new THREE.BufferGeometry();
        const strokePositions = new Float32Array(6);
        strokeGeometry.setAttribute("position", new THREE.BufferAttribute(strokePositions, 3));
        const strokeLine = new THREE.LineSegments(strokeGeometry, constellationLineStrokeMaterial);
        strokeLine.visible = false;
        strokeLine.renderOrder = 5;
        constellationGroup.add(strokeLine);
        nearLineEntryPayload.attribute = lineGeometry.attributes.position;
        nearLineEntryPayload.geometry = lineGeometry;
        nearLineEntryPayload.segmentCount = Math.floor(nearLineEntryPayload.base.length / 6);
        nearLineEntryPayload.revealedSegments = 0;
        nearLineEntryPayload.segmentFlashPairs = createSegmentFlashPairs(nearLineEntryPayload);
        nearLineEntryPayload.strokeLine = strokeLine;
        nearLineEntryPayload.strokeAttribute = strokeGeometry.attributes.position;
    }

    if (farLineEntryPayload) {
        const lineGeometryFar = new THREE.BufferGeometry();
        lineGeometryFar.setAttribute("position", new THREE.BufferAttribute(farLineEntryPayload.live, 3));
        lineGeometryFar.setDrawRange(0, 0);
        constellationLineFarMaterial = new THREE.LineBasicMaterial({
            color: 0xafc3d8,
            transparent: true,
            opacity: 0,
            depthWrite: false,
            depthTest: true,
            blending: THREE.NormalBlending
        });
        const farLines = new THREE.LineSegments(lineGeometryFar, constellationLineFarMaterial);
        farLines.renderOrder = 0;
        constellationGroup.add(farLines);
        constellationLineFarStrokeMaterial = new THREE.LineBasicMaterial({
            color: 0xd8e7ff,
            transparent: true,
            opacity: 0,
            depthWrite: false,
            depthTest: true,
            blending: THREE.AdditiveBlending
        });
        const strokeGeometryFar = new THREE.BufferGeometry();
        const strokePositionsFar = new Float32Array(6);
        strokeGeometryFar.setAttribute("position", new THREE.BufferAttribute(strokePositionsFar, 3));
        const strokeLineFar = new THREE.LineSegments(strokeGeometryFar, constellationLineFarStrokeMaterial);
        strokeLineFar.visible = false;
        strokeLineFar.renderOrder = 4;
        constellationGroup.add(strokeLineFar);
        farLineEntryPayload.attribute = lineGeometryFar.attributes.position;
        farLineEntryPayload.geometry = lineGeometryFar;
        farLineEntryPayload.segmentCount = Math.floor(farLineEntryPayload.base.length / 6);
        farLineEntryPayload.revealedSegments = 0;
        farLineEntryPayload.segmentFlashPairs = createSegmentFlashPairs(farLineEntryPayload);
        farLineEntryPayload.strokeLine = strokeLineFar;
        farLineEntryPayload.strokeAttribute = strokeGeometryFar.attributes.position;
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
    constellationSparkleStartedAtMs = 0;
    constellationSparkleEndAtMs = 0;
    scheduleNextConstellationSparkle(constellationReadyAtMs + CONSTELLATION_ENTRY_FLASH_MS);
    constellationEntryState = {
        active: true,
        dust: dustEntryPayload,
        nodes: nodeEntryPayload,
        linesNear: nearLineEntryPayload,
        linesFar: farLineEntryPayload
    };
    scene.add(constellationGroup);
}

function spawnFoodRow() {
    const shuffledFoods = [...foods].sort(() => 0.5 - Math.random());

    if (Math.random() > 0.42) {
        createFoodMesh(shuffledFoods[0]);
    } else {
        createFoodMesh(shuffledFoods[0]);
        createFoodMesh(shuffledFoods[1]);
    }

    while (foodMeshes.length > maxActiveFood) {
        removeFoodAt(0);
    }
}

function createFoodMesh(text) {
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

    const halfMeshWidth = geometry.parameters.width * 0.5;
    const halfMeshHeight = geometry.parameters.height * 0.5;
    const z = THREE.MathUtils.randFloat(FOOD_TRAVEL_Z_MIN, FOOD_TRAVEL_Z_MAX);
    const { halfWidth, halfHeight } = getPlaneHalfExtentsAtZ(z);
    const edge = Math.floor(Math.random() * 4);
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;

    if (edge === 0) {
        startX = -halfWidth - FOOD_EDGE_PADDING - halfMeshWidth;
        startY = THREE.MathUtils.randFloat(-halfHeight, halfHeight);
        endX = halfWidth + FOOD_EDGE_PADDING + halfMeshWidth;
        endY = startY + THREE.MathUtils.randFloatSpread(halfHeight * FOOD_DIRECTION_JITTER);
    } else if (edge === 1) {
        startX = halfWidth + FOOD_EDGE_PADDING + halfMeshWidth;
        startY = THREE.MathUtils.randFloat(-halfHeight, halfHeight);
        endX = -halfWidth - FOOD_EDGE_PADDING - halfMeshWidth;
        endY = startY + THREE.MathUtils.randFloatSpread(halfHeight * FOOD_DIRECTION_JITTER);
    } else if (edge === 2) {
        startY = halfHeight + FOOD_EDGE_PADDING + halfMeshHeight;
        startX = THREE.MathUtils.randFloat(-halfWidth, halfWidth);
        endY = -halfHeight - FOOD_EDGE_PADDING - halfMeshHeight;
        endX = startX + THREE.MathUtils.randFloatSpread(halfWidth * FOOD_DIRECTION_JITTER);
    } else {
        startY = -halfHeight - FOOD_EDGE_PADDING - halfMeshHeight;
        startX = THREE.MathUtils.randFloat(-halfWidth, halfWidth);
        endY = halfHeight + FOOD_EDGE_PADDING + halfMeshHeight;
        endX = startX + THREE.MathUtils.randFloatSpread(halfWidth * FOOD_DIRECTION_JITTER);
    }

    endX = THREE.MathUtils.clamp(
        endX,
        -halfWidth - FOOD_EDGE_PADDING - halfMeshWidth,
        halfWidth + FOOD_EDGE_PADDING + halfMeshWidth
    );
    endY = THREE.MathUtils.clamp(
        endY,
        -halfHeight - FOOD_EDGE_PADDING - halfMeshHeight,
        halfHeight + FOOD_EDGE_PADDING + halfMeshHeight
    );

    const dirX = endX - startX;
    const dirY = endY - startY;
    const length = Math.max(0.0001, Math.hypot(dirX, dirY));
    const speed = THREE.MathUtils.randFloat(FOOD_TRAVEL_SPEED_MIN, FOOD_TRAVEL_SPEED_MAX);
    const spinEnabled = Math.random() <= FOOD_SPIN_CHANCE;
    const spinSpeed = spinEnabled
        ? THREE.MathUtils.randFloat(FOOD_SPIN_SPEED_MIN, FOOD_SPIN_SPEED_MAX) * (Math.random() < 0.5 ? -1 : 1)
        : 0;

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(startX, startY, z);
    mesh.rotation.x = FOOD_TILT_X;
    mesh.rotation.z = THREE.MathUtils.randFloatSpread(0.28);
    const baseVx = (dirX / length) * speed;
    const baseVy = (dirY / length) * speed;
    mesh.userData = {
        baseVx,
        baseVy,
        vx: baseVx,
        vy: baseVy,
        forceVx: 0,
        forceVy: 0,
        travelLength: length,
        traveled: 0,
        spinSpeed
    };

    scene.add(mesh);
    foodMeshes.push(mesh);
}

function spawnFoodFromBlackHole() {
    if (!scene || !camera || foods.length === 0) {
        return;
    }

    const text = foods[Math.floor(Math.random() * foods.length)];
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

    const z = 3;
    pointerAtZ(z, singularityVectorA);

    const angle = Math.random() * Math.PI * 2;
    const speed = THREE.MathUtils.randFloat(2.8, 5.1) + blackHolePower * 0.35;
    const baseVx = Math.cos(angle) * speed;
    const baseVy = Math.sin(angle) * speed;
    const horizonRadius = blackHoleRadius * FOOD_HORIZON_MULT * (1 + blackHolePower * 0.12);
    const captureRadius = Math.max(5, horizonRadius * FOOD_HORIZON_CAPTURE_MULT);
    const launchOffset = captureRadius + THREE.MathUtils.randFloat(2.4, 8.2);
    const { halfWidth, halfHeight } = getPlaneHalfExtentsAtZ(z);
    const travelLength = Math.hypot(halfWidth, halfHeight) * THREE.MathUtils.randFloat(1.05, 1.45);
    const initialTravel = travelLength * 0.06;
    const spinSpeed = THREE.MathUtils.randFloat(FOOD_SPIN_SPEED_MIN, FOOD_SPIN_SPEED_MAX) * (Math.random() < 0.5 ? -1 : 1);

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(
        singularityVectorA.x + Math.cos(angle) * launchOffset,
        singularityVectorA.y + Math.sin(angle) * launchOffset,
        z
    );
    mesh.rotation.x = FOOD_TILT_X;
    mesh.rotation.z = angle + THREE.MathUtils.randFloatSpread(0.22);
    mesh.renderOrder = 12;
    mesh.userData = {
        baseVx,
        baseVy,
        vx: baseVx,
        vy: baseVy,
        forceVx: 0,
        forceVy: 0,
        travelLength,
        traveled: initialTravel,
        spinSpeed,
        captureGraceUntilMs: performance.now() + BLACKHOLE_FOOD_LAUNCH_GRACE_MS
    };

    scene.add(mesh);
    foodMeshes.push(mesh);

    while (foodMeshes.length > maxActiveFood) {
        removeFoodAt(0);
    }
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
    let collapseTarget = 0;

    const growProgress = THREE.MathUtils.clamp(
        (idleMs - BLACKHOLE_GROW_START_MS) / (BLACKHOLE_GROW_FULL_MS - BLACKHOLE_GROW_START_MS),
        0,
        1
    );
    const smoothGrow = growProgress * growProgress * (3 - 2 * growProgress);
    targetRadius = THREE.MathUtils.lerp(MIN_BLACKHOLE_RADIUS, MAX_BLACKHOLE_RADIUS, smoothGrow);

    const powerSeconds = Math.max(0, (idleMs - BLACKHOLE_POWER_START_MS) / 1000);
    targetPower = Math.min(BLACKHOLE_POWER_MAX, powerSeconds * BLACKHOLE_POWER_RATE);

    const collapseRaw = THREE.MathUtils.clamp(
        (idleMs - SINGULARITY_IDLE_TRIGGER_MS) / SINGULARITY_RAMP_MS,
        0,
        1
    );
    collapseTarget = collapseRaw * collapseRaw * (3 - 2 * collapseRaw);

    const collapseLerp = collapseTarget > singularityCollapse ? 0.032 : 0.16;
    singularityCollapse = THREE.MathUtils.lerp(singularityCollapse, collapseTarget, collapseLerp * delta);

    if (blackHolePulse > 0) {
        targetRadius += blackHolePulse;
        blackHolePulse = Math.max(0, blackHolePulse - 1.8 * delta);
    }
    if (singularityCollapse > 0.001) {
        targetRadius += MAX_BLACKHOLE_RADIUS * 2.65 * singularityCollapse;
        targetPower = Math.max(
            targetPower,
            BLACKHOLE_POWER_MAX * (0.38 + singularityCollapse * 0.92)
        );
    }

    blackHoleRadius = THREE.MathUtils.lerp(blackHoleRadius, targetRadius, 0.05 * delta);
    const powerLerp = targetPower < blackHolePower ? 0.34 : 0.06;
    blackHolePower = THREE.MathUtils.lerp(blackHolePower, targetPower, powerLerp * delta);
    pointerSmoothNDC.lerp(pointerTargetNDC, BLACKHOLE_LERP * delta);
    updatePointerRay();

    pointerAtZ(3, pointerWorld);

    const visualRadius = Math.max(0.001, blackHoleRadius);
    const collapse = singularityCollapse;
    const timePulse = 0.92 + Math.sin(nowMs * 0.0053 + blackHolePower * 0.8 + collapse * 2.1) * 0.08;
    blackHoleCore.visible = visualRadius > 0.04 || collapse > 0.01;

    blackHoleCore.position.copy(pointerWorld);
    blackHoleCore.quaternion.copy(camera.quaternion);
    blackHoleCore.scale.set(
        visualRadius * timePulse * (1 + collapse * 0.76),
        visualRadius * timePulse * (1 + collapse * 0.76),
        1
    );
    blackHoleCore.material.opacity = THREE.MathUtils.clamp(0.9 + blackHolePower * 0.05 + collapse * 0.16, 0, 1);

    if (blackHoleLensing) {
        blackHoleLensing.visible = visualRadius > 0.06 || collapse > 0.02;
        blackHoleLensing.position.copy(pointerWorld);
        blackHoleLensing.quaternion.copy(camera.quaternion);

        const lensRadius = visualRadius * BLACKHOLE_LENS_SCALE_MULT * (1 + blackHolePower * 0.12 + collapse * 0.45);
        blackHoleLensing.scale.set(lensRadius, lensRadius, 1);
        blackHoleLensing.material.opacity = THREE.MathUtils.clamp(
            (BLACKHOLE_LENS_OPACITY_BASE + blackHolePower * BLACKHOLE_LENS_OPACITY_POWER_MULT) *
            (0.88 + Math.sin(nowMs * 0.0061) * 0.12) +
            collapse * 0.24,
            0,
            0.62
        );
    }

    const diskVisible = visualRadius > 0.08 || collapse > 0.03;
    const flatten = THREE.MathUtils.clamp(
        BLACKHOLE_DISK_FLATTEN_BASE +
        Math.sin(nowMs * 0.0018 + blackHolePower * 0.6) * 0.045 +
        blackHolePower * BLACKHOLE_DISK_FLATTEN_POWER_MULT -
        collapse * 0.08,
        0.52,
        0.92
    );

    if (blackHoleAccretionDisk) {
        blackHoleAccretionDisk.visible = diskVisible;
        blackHoleAccretionDisk.position.copy(pointerWorld);
        blackHoleAccretionDisk.rotation.set(
            camera.rotation.x,
            camera.rotation.y,
            camera.rotation.z + nowMs * BLACKHOLE_DISK_ROTATION_SPEED
        );

        const diskScale = visualRadius * BLACKHOLE_DISK_SCALE_MULT * (1 + blackHolePower * 0.2 + collapse * 0.6);
        blackHoleAccretionDisk.scale.set(diskScale, diskScale * flatten, 1);

        const beaming = 0.5 + 0.5 * Math.sin(nowMs * 0.0029 + blackHolePower * 0.72);
        blackHoleAccretionDisk.material.opacity = THREE.MathUtils.clamp(
            (BLACKHOLE_DISK_OPACITY_BASE + blackHolePower * BLACKHOLE_DISK_OPACITY_POWER_MULT) *
            (0.78 + beaming * 0.4 + collapse * 0.22),
            0,
            0.92
        );
        blackHoleAccretionDisk.material.color.setRGB(
            1,
            0.72 + beaming * 0.18,
            0.46 + (1 - beaming) * 0.18
        );
    }

    if (blackHoleAccretionInnerDisk) {
        blackHoleAccretionInnerDisk.visible = diskVisible;
        blackHoleAccretionInnerDisk.position.copy(pointerWorld);
        blackHoleAccretionInnerDisk.rotation.set(
            camera.rotation.x,
            camera.rotation.y,
            camera.rotation.z + nowMs * BLACKHOLE_INNER_DISK_ROTATION_SPEED
        );

        const innerScale = visualRadius * BLACKHOLE_DISK_INNER_SCALE_MULT * (1 + blackHolePower * 0.18 + collapse * 0.45);
        blackHoleAccretionInnerDisk.scale.set(innerScale, innerScale * (flatten * 0.9), 1);
        blackHoleAccretionInnerDisk.material.opacity = THREE.MathUtils.clamp(
            (BLACKHOLE_DISK_OPACITY_BASE * 0.9 + blackHolePower * BLACKHOLE_DISK_OPACITY_POWER_MULT * 0.78) *
            (0.82 + Math.sin(nowMs * 0.0064 + 1.6) * 0.18 + collapse * 0.24),
            0,
            0.9
        );
        blackHoleAccretionInnerDisk.material.color.setRGB(1, 0.9, 0.74 + Math.sin(nowMs * 0.0042) * 0.05);
    }

    if (blackHolePhotonRing) {
        blackHolePhotonRing.visible = diskVisible;
        blackHolePhotonRing.position.copy(pointerWorld);
        blackHolePhotonRing.rotation.set(
            camera.rotation.x,
            camera.rotation.y,
            camera.rotation.z + Math.sin(nowMs * 0.0019) * 0.04
        );

        const ringScale = visualRadius * BLACKHOLE_PHOTON_RING_SCALE_MULT * (1 + blackHolePower * 0.12 + collapse * 0.52);
        blackHolePhotonRing.scale.set(ringScale, ringScale * (0.9 + Math.sin(nowMs * 0.0022) * 0.04), 1);
        blackHolePhotonRing.material.opacity = THREE.MathUtils.clamp(
            (BLACKHOLE_PHOTON_RING_OPACITY_BASE + blackHolePower * BLACKHOLE_PHOTON_RING_OPACITY_POWER_MULT) *
            timePulse *
            (1 + collapse * 0.4),
            0,
            0.94
        );
    }

    if (singularityOverlay) {
        const overlayDistance = 0.35;
        camera.getWorldDirection(singularityCameraForward);
        singularityVectorA.copy(camera.position).addScaledVector(singularityCameraForward, overlayDistance);

        const halfHeight = Math.tan(THREE.MathUtils.degToRad(camera.fov * 0.5)) * overlayDistance;
        const halfWidth = halfHeight * camera.aspect;
        singularityOverlay.position.copy(singularityVectorA);
        singularityOverlay.quaternion.copy(camera.quaternion);
        singularityOverlay.scale.set(halfWidth * 2.06, halfHeight * 2.06, 1);

        const overlayOpacity = THREE.MathUtils.clamp(
            Math.pow(collapse, 1.3) * SINGULARITY_MAX_OVERLAY_OPACITY,
            0,
            SINGULARITY_MAX_OVERLAY_OPACITY
        );
        singularityOverlay.material.opacity = overlayOpacity;
        singularityOverlay.visible = overlayOpacity > 0.002;
    }
}

function updateDeepStars(delta, nowMs) {
    if (!deepStars || !deepStarPositions || !deepStarDrift) {
        return;
    }

    const collapse = singularityCollapse;
    const sceneDarkness = 1 - collapse * 0.97;
    const hasCollapse = collapse > 0.0001;
    const cameraX = camera.position.x;
    const cameraY = camera.position.y;
    const cameraZ = camera.position.z;
    const rayX = pointerRayDir.x;
    const rayY = pointerRayDir.y;
    const rayZ = pointerRayDir.z;

    for (let i = 0; i < deepStarCount; i += 1) {
        const index3 = i * 3;
        let x = deepStarPositions[index3];
        let y = deepStarPositions[index3 + 1];
        let z = deepStarPositions[index3 + 2] + DEEP_STAR_SPEED_Z * deepStarDrift[i] * delta;

        if (z > 660) {
            resetDeepStar(index3, true, i);
            x = deepStarPositions[index3];
            y = deepStarPositions[index3 + 1];
            z = deepStarPositions[index3 + 2];
        }

        if (hasCollapse) {
            const t = (z - cameraZ) / rayZ;
            const sinkX = cameraX + rayX * t;
            const sinkY = cameraY + rayY * t;
            const dx = x - sinkX;
            const dy = y - sinkY;
            const dist = Math.sqrt(dx * dx + dy * dy) + 0.0001;
            const collapsePull = THREE.MathUtils.clamp(0.1 + collapse * 1.05, 0, 1.2);
            const pull = (SINGULARITY_PULL_FORCE * collapsePull * 1.15) / (dist + 42);
            x += (-dx / dist) * pull * delta;
            y += (-dy / dist) * pull * delta;

            const captureRadius = 4 + collapse * (SINGULARITY_CAPTURE_RADIUS_MAX * 0.09);
            if (dist < captureRadius) {
                resetDeepStar(index3, true, i);
                x = deepStarPositions[index3];
                y = deepStarPositions[index3 + 1];
                z = deepStarPositions[index3 + 2];
            } else {
                deepStarPositions[index3] = x;
                deepStarPositions[index3 + 1] = y;
                deepStarPositions[index3 + 2] = z;
            }
        } else {
            deepStarPositions[index3] = x;
            deepStarPositions[index3 + 1] = y;
            deepStarPositions[index3 + 2] = z;
        }

        const depthMix = THREE.MathUtils.clamp((deepStarPositions[index3 + 2] + DEEP_STAR_FIELD_DEPTH * 0.5) / DEEP_STAR_FIELD_DEPTH, 0, 1);
        const twinkleAmp = DEEP_STAR_TWINKLE_AMPLITUDE * (deepStarTwinkleAmp ? deepStarTwinkleAmp[i] : 1);
        const twinkle = 1 + Math.sin(nowMs * STAR_TWINKLE_SPEED * 0.86 + deepStarTwinklePhase[i]) * twinkleAmp;
        const depthBrightness = DEEP_STAR_FAR_BRIGHTNESS + (DEEP_STAR_NEAR_BRIGHTNESS - DEEP_STAR_FAR_BRIGHTNESS) * depthMix;
        const brightness = depthBrightness * twinkle * sceneDarkness;
        deepStarColors[index3] = THREE.MathUtils.clamp(deepStarBaseColors[index3] * brightness, 0, 1);
        deepStarColors[index3 + 1] = THREE.MathUtils.clamp(deepStarBaseColors[index3 + 1] * brightness, 0, 1);
        deepStarColors[index3 + 2] = THREE.MathUtils.clamp(deepStarBaseColors[index3 + 2] * brightness, 0, 1);
    }

    deepStars.geometry.attributes.position.needsUpdate = true;
    if (deepStars.geometry.attributes.color) {
        deepStars.geometry.attributes.color.needsUpdate = true;
    }
}

function updateNebula(nowMs) {
    if (!nebulaLayers.length) {
        return;
    }

    const collapse = singularityCollapse;
    const parallaxX = pointerSmoothNDC.x * NEBULA_POINTER_PARALLAX_X;
    const parallaxY = pointerSmoothNDC.y * NEBULA_POINTER_PARALLAX_Y;

    for (let i = 0; i < nebulaLayers.length; i += 1) {
        const layer = nebulaLayers[i];
        const state = layer.userData;
        const depthMul = 0.4 + (i / Math.max(1, nebulaLayers.length - 1)) * 0.75;
        const baseX = state.baseX + Math.sin(nowMs * 0.00002 * state.driftX + state.phase) * 14 + parallaxX * depthMul;
        const baseY = state.baseY + Math.sin(nowMs * 0.000024 * state.driftY + state.phase * 1.3) * 10 + parallaxY * depthMul;
        layer.position.x = baseX;
        layer.position.y = baseY;
        layer.material.opacity = state.baseOpacity * (0.82 + Math.sin(nowMs * 0.00012 + state.phase) * 0.14);

        if (collapse > 0.0001) {
            pointerAtZ(layer.position.z, singularityVectorA);
            const pullLerp = THREE.MathUtils.clamp(0.01 + collapse * 0.18, 0, 0.32);
            layer.position.x = THREE.MathUtils.lerp(layer.position.x, singularityVectorA.x, pullLerp);
            layer.position.y = THREE.MathUtils.lerp(layer.position.y, singularityVectorA.y, pullLerp);
            layer.material.opacity *= Math.max(0, 1 - collapse * 1.4);
        }
    }
}

function updateStars(delta, nowMs) {
    const positions = starPositions;
    const collapse = singularityCollapse;
    const collapsePull = THREE.MathUtils.clamp(0.08 + collapse * 1.12, 0, 1.35);
    const hasCollapse = collapse > 0.0001;
    const hasInfluence = blackHoleRadius > 0.5 || hasCollapse;
    const sceneDarkness = 1 - collapse * 0.97;

    const cameraX = camera.position.x;
    const cameraY = camera.position.y;
    const cameraZ = camera.position.z;
    const rayX = pointerRayDir.x;
    const rayY = pointerRayDir.y;
    const rayZ = pointerRayDir.z;

    const passiveInfluenceRadius =
        STAR_PASSIVE_INFLUENCE_RADIUS +
        blackHoleRadius * 3.2 +
        blackHolePower * 24;
    const influenceRadius = Math.max(
        STAR_MIN_INFLUENCE_RADIUS,
        blackHoleRadius * STAR_INFLUENCE_MULT * (1 + blackHolePower * 0.22),
        passiveInfluenceRadius
    );
    const influenceRadiusSq = influenceRadius * influenceRadius;
    const horizonRadius = blackHoleRadius * STAR_HORIZON_MULT * (1 + blackHolePower * 0.1);
    const captureRadius = horizonRadius * STAR_HORIZON_CAPTURE_MULT;
    const collapseInfluenceRadius = STAR_FIELD_WIDTH * THREE.MathUtils.clamp(0.05 + collapse * 1.1, 0, 1.45);
    const collapseInfluenceRadiusSq = collapseInfluenceRadius * collapseInfluenceRadius;
    const collapseCaptureRadius = 4 + collapse * SINGULARITY_CAPTURE_RADIUS_MAX;
    const gravityStrength = STAR_GRAVITY_BASE * (1 + blackHolePower * 1.28 + collapse * 1.8);
    const pullForceBase = STAR_PULL_FORCE * (1 + blackHolePower * 0.72 + collapse * 1.35);
    const swirlForceBase = STAR_SWIRL_FORCE * (1 + blackHolePower * 0.46);
    const drag = Math.pow(STAR_DRAG, delta);

    for (let i = 0; i < starCount; i += 1) {
        const index3 = i * 3;
        let x = positions[index3];
        let y = positions[index3 + 1];
        let z = positions[index3 + 2];
        let vx = starVelX[i];
        let vy = starVelY[i];
        let lensingStrength = 0;
        let tangentX = 0;
        let tangentY = 0;

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
            const dynamicInfluenceRadiusSq = hasCollapse
                ? Math.max(influenceRadiusSq, collapseInfluenceRadiusSq)
                : influenceRadiusSq;

            if (distSq < dynamicInfluenceRadiusSq) {
                const dist = Math.sqrt(distSq) + 0.0001;
                const dynamicCaptureRadius = Math.max(captureRadius, collapseCaptureRadius);
                if (dist < dynamicCaptureRadius) {
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
                const inverseDistSq = 1 / (distSq + 20);
                const inverseDist = 1 / (dist + 8);
                const collapseFalloff = hasCollapse
                    ? THREE.MathUtils.clamp(1 - (distSq / (collapseInfluenceRadiusSq + 0.0001)), 0, 1)
                    : 0;
                const radialForce = gravityStrength *
                    (inverseDist * 0.08 + inverseDistSq * 8.2) *
                    (0.38 + falloff * falloff * 2.35 + collapseFalloff * collapse * 2.1);
                const horizonBoost = 1 + Math.pow(horizonRadius / Math.max(dist, horizonRadius), 2.25) * 2.3;
                lensingStrength = THREE.MathUtils.clamp(
                    Math.max(1 - dist / influenceRadius, collapseFalloff),
                    0,
                    1
                );
                tangentX = -ny;
                tangentY = nx;

                if (isRightPointerDown && !hasCollapse) {
                    const pushForce = radialForce * STAR_PUSH_FORCE;
                    vx += nx * pushForce * delta;
                    vy += ny * pushForce * delta;
                } else {
                    const orbitBias = THREE.MathUtils.clamp(1 - dist / Math.max(influenceRadius, collapseInfluenceRadius), 0, 1);
                    const pullForce = radialForce * pullForceBase * (1 + orbitBias * 0.55) * horizonBoost;
                    const swirlDampNearCore = THREE.MathUtils.clamp((dist - captureRadius) / (influenceRadius - captureRadius + 0.0001), 0, 1);
                    let swirlForce = radialForce * swirlForceBase * (0.35 + orbitBias * 0.95) * swirlDampNearCore;
                    if (hasCollapse) {
                        const sinkPull = (SINGULARITY_PULL_FORCE * collapsePull * 1.2) / (dist + 16);
                        vx += -nx * sinkPull * delta;
                        vy += -ny * sinkPull * delta;
                        swirlForce *= 0.58;
                    }

                    vx += (-nx * pullForce + tangentX * swirlForce) * delta;
                    vy += (-ny * pullForce + tangentY * swirlForce) * delta;
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

        const depthMix = THREE.MathUtils.clamp((z + STAR_FIELD_DEPTH * 0.5) / STAR_FIELD_DEPTH, 0, 1);
        const depthBrightness = STAR_FAR_BRIGHTNESS + (STAR_NEAR_BRIGHTNESS - STAR_FAR_BRIGHTNESS) * depthMix;
        const twinkleAmp = STAR_TWINKLE_AMPLITUDE * (starTwinkleAmp ? starTwinkleAmp[i] : 1);
        const twinkle = 1 + Math.sin(nowMs * STAR_TWINKLE_SPEED + starTwinklePhase[i]) * twinkleAmp;
        const brightness = depthBrightness * twinkle * sceneDarkness;
        const lensingColor = lensingStrength * lensingStrength;
        const tangentialVelocity = vx * tangentX + vy * tangentY;
        const dopplerShift = lensingStrength > 0
            ? THREE.MathUtils.clamp(tangentialVelocity * 0.04, -1, 1) * lensingStrength
            : 0;
        const sinkTint = 1 - collapse * (0.35 + lensingStrength * 0.55);

        starColors[index3] = THREE.MathUtils.clamp(
            (
                starBaseColors[index3] * brightness +
                lensingColor * STAR_GRAV_LENS_COLOR_SHIFT -
                dopplerShift * STAR_DOPPLER_COLOR_SHIFT * 0.8
            ) * sinkTint,
            0,
            1
        );
        starColors[index3 + 1] = THREE.MathUtils.clamp(
            (
                starBaseColors[index3 + 1] * brightness +
                lensingColor * STAR_GRAV_LENS_COLOR_SHIFT * 0.32
            ) * sinkTint,
            0,
            1
        );
        starColors[index3 + 2] = THREE.MathUtils.clamp(
            (
                starBaseColors[index3 + 2] * brightness -
                lensingColor * STAR_GRAV_LENS_COLOR_SHIFT * 0.62 +
                dopplerShift * STAR_DOPPLER_COLOR_SHIFT
            ) * sinkTint,
            0,
            1
        );
    }

    stars.geometry.attributes.position.needsUpdate = true;
    if (stars.geometry.attributes.color) {
        stars.geometry.attributes.color.needsUpdate = true;
    }
}

function updateFoodMeshes(delta, nowMs = performance.now()) {
    const collapse = singularityCollapse;
    const collapsePull = THREE.MathUtils.clamp(0.1 + collapse * 1.18, 0, 1.4);
    const hasCollapse = collapse > 0.0001;
    const hasInfluence = blackHoleRadius > 0.5 || hasCollapse;

    const cameraX = camera.position.x;
    const cameraY = camera.position.y;
    const cameraZ = camera.position.z;
    const rayX = pointerRayDir.x;
    const rayY = pointerRayDir.y;
    const rayZ = pointerRayDir.z;

    const passiveInfluenceRadius =
        FOOD_PASSIVE_INFLUENCE_RADIUS +
        blackHoleRadius * 3.6 +
        blackHolePower * 28;
    const influenceRadius = Math.max(
        FOOD_MIN_INFLUENCE_RADIUS,
        blackHoleRadius * FOOD_INFLUENCE_MULT * (1 + blackHolePower * 0.24),
        passiveInfluenceRadius
    );
    const influenceRadiusSq = influenceRadius * influenceRadius;
    const horizonRadius = blackHoleRadius * FOOD_HORIZON_MULT * (1 + blackHolePower * 0.12);
    const captureRadius = horizonRadius * FOOD_HORIZON_CAPTURE_MULT;
    const collapseInfluenceRadius = STAR_FIELD_WIDTH * THREE.MathUtils.clamp(0.045 + collapse * 1.02, 0, 1.25);
    const collapseInfluenceRadiusSq = collapseInfluenceRadius * collapseInfluenceRadius;
    const collapseCaptureRadius = 5 + collapse * (SINGULARITY_CAPTURE_RADIUS_MAX * 0.14);
    const gravityStrength = FOOD_GRAVITY_BASE * (1 + blackHolePower * 1.2 + collapse * 1.1);
    const pullForceBase = FOOD_PULL_FORCE * (1 + blackHolePower * 0.75);
    const swirlForceBase = FOOD_SWIRL_FORCE * (1 + blackHolePower * 0.5);
    const flowSpeedMul = 1 + blackHolePower * FOOD_FLOW_POWER_MULT;
    const drag = Math.pow(FOOD_DRAG, delta);

    for (let i = foodMeshes.length - 1; i >= 0; i -= 1) {
        const mesh = foodMeshes[i];
        const state = mesh.userData;
        const launchGraceActive = Boolean(state.captureGraceUntilMs && nowMs < state.captureGraceUntilMs);

        let ax = 0;
        let ay = 0;

        if (hasInfluence && !launchGraceActive) {
            const t = (mesh.position.z - cameraZ) / rayZ;
            const mouseX = cameraX + rayX * t;
            const mouseY = cameraY + rayY * t;
            const dx = mesh.position.x - mouseX;
            const dy = mesh.position.y - mouseY;
            const distSq = dx * dx + dy * dy;
            const dynamicInfluenceRadiusSq = hasCollapse
                ? Math.max(influenceRadiusSq, collapseInfluenceRadiusSq)
                : influenceRadiusSq;

            if (distSq < dynamicInfluenceRadiusSq) {
                const dist = Math.sqrt(distSq) + 0.0001;
                if (dist < Math.max(captureRadius, collapseCaptureRadius)) {
                    removeFoodAt(i);
                    continue;
                }

                const nx = dx / dist;
                const ny = dy / dist;
                const tx = -ny;
                const ty = nx;
                const falloff = 1 - dist / influenceRadius;
                const inverseDistSq = 1 / (distSq + 24);
                const inverseDist = 1 / (dist + 10);
                const radialForce = gravityStrength *
                    (inverseDist * 0.09 + inverseDistSq * 7.4) *
                    (0.34 + falloff * falloff * 2.25);
                const horizonBoost = 1 + Math.pow(horizonRadius / Math.max(dist, horizonRadius), 2.2) * 2.1;

                if (isRightPointerDown && !hasCollapse) {
                    const pushForce = radialForce * FOOD_PUSH_FORCE;
                    ax += nx * pushForce;
                    ay += ny * pushForce;
                } else {
                    const orbitBias = THREE.MathUtils.clamp(1 - dist / influenceRadius, 0, 1);
                    const pullForce = radialForce * pullForceBase * (1 + orbitBias * 0.52) * horizonBoost;
                    const swirlDampNearCore = THREE.MathUtils.clamp(
                        (dist - captureRadius) / (influenceRadius - captureRadius + 0.0001),
                        0,
                        1
                    );
                    const swirlForce = radialForce * swirlForceBase * (0.3 + orbitBias * 0.98) * swirlDampNearCore;

                    ax += -nx * pullForce + tx * swirlForce;
                    ay += -ny * pullForce + ty * swirlForce;
                }

                if (hasCollapse) {
                    const sinkPull = (SINGULARITY_PULL_FORCE * collapsePull * 1.3) / (dist + 22);
                    ax += -nx * sinkPull;
                    ay += -ny * sinkPull;
                    ax += tx * sinkPull * 0.15;
                    ay += ty * sinkPull * 0.15;
                }
            }
        }

        state.forceVx = (state.forceVx + ax * delta) * drag;
        state.forceVy = (state.forceVy + ay * delta) * drag;
        state.vx = state.baseVx * flowSpeedMul + state.forceVx;
        state.vy = state.baseVy * flowSpeedMul + state.forceVy;

        const stepX = state.vx * delta;
        const stepY = state.vy * delta;
        mesh.position.x += stepX;
        mesh.position.y += stepY;
        state.traveled += Math.hypot(stepX, stepY);

        mesh.rotation.z += state.spinSpeed * delta + Math.abs(state.forceVx) * 0.0013;

        const progress = THREE.MathUtils.clamp(state.traveled / Math.max(0.0001, state.travelLength), 0, 1);
        const fadeIn = THREE.MathUtils.clamp(progress / 0.15, 0, 1);
        const fadeOut = THREE.MathUtils.clamp((1 - progress) / 0.22, 0, 1);
        mesh.material.opacity = 0.96 * Math.min(fadeIn, fadeOut) * (1 - collapse * 0.92);

        const { halfWidth, halfHeight } = getPlaneHalfExtentsAtZ(mesh.position.z);
        const limitX = halfWidth + FOOD_EDGE_PADDING + 42;
        const limitY = halfHeight + FOOD_EDGE_PADDING + 36;
        if (
            progress >= 1 ||
            Math.abs(mesh.position.x) > limitX ||
            Math.abs(mesh.position.y) > limitY
        ) {
            removeFoodAt(i);
        }
    }
}

function pullConstellationPayload(payload, sinkLocalX, sinkLocalY, collapse, delta) {
    if (!payload || !payload.live || !payload.attribute || payload.count <= 0) {
        return;
    }

    const radialStep = (0.008 + collapse * 0.055) * delta;
    const swirlStep = (0.002 + collapse * 0.017) * delta;

    for (let i = 0; i < payload.count; i += 1) {
        const index3 = i * 3;
        const x = payload.live[index3];
        const y = payload.live[index3 + 1];

        const dx = sinkLocalX - x;
        const dy = sinkLocalY - y;
        const dist = Math.sqrt(dx * dx + dy * dy) + 0.0001;
        const falloff = 1 / (1 + dist * 0.035);
        const tx = -dy / dist;
        const ty = dx / dist;

        payload.live[index3] += dx * radialStep * falloff + tx * swirlStep * falloff;
        payload.live[index3 + 1] += dy * radialStep * falloff + ty * swirlStep * falloff;
    }

    payload.attribute.needsUpdate = true;
}

function restoreConstellationPayload(payload, delta, restoreSpeed = 0.1) {
    if (!payload || !payload.live || !payload.base || !payload.attribute || payload.count <= 0) {
        return;
    }

    const lerpT = THREE.MathUtils.clamp(restoreSpeed * delta, 0, 1);
    let changed = false;
    for (let i = 0; i < payload.live.length; i += 1) {
        const current = payload.live[i];
        const next = THREE.MathUtils.lerp(current, payload.base[i], lerpT);
        if (Math.abs(next - current) > 0.0001) {
            changed = true;
        }
        payload.live[i] = next;
    }

    if (changed) {
        payload.attribute.needsUpdate = true;
    }
}

function snapConstellationPayloadToBase(payload) {
    if (!payload || !payload.live || !payload.base || !payload.attribute || payload.count <= 0) {
        return;
    }
    payload.live.set(payload.base);
    payload.attribute.needsUpdate = true;
}

function updateConstellation(nowMs, delta = 1) {
    if (!constellationGroup || !constellationDustMaterial || !constellationNodeMaterial) {
        return;
    }

    updateConstellationEntryMotion(nowMs);
    updateConstellationJoinFlashes(nowMs);
    maybeTriggerConstellationSparkle(nowMs);

    const fadeProgress = THREE.MathUtils.clamp(
        (nowMs - constellationReadyAtMs) / CONSTELLATION_FADE_MS,
        0,
        1
    );
    const flashProgress = THREE.MathUtils.clamp(
        (nowMs - constellationReadyAtMs) / CONSTELLATION_ENTRY_FLASH_MS,
        0,
        1
    );
    const entryFlash = 1 + Math.pow(1 - flashProgress, 2) * CONSTELLATION_ENTRY_FLASH_BOOST;
    const sparkleBoost = getConstellationSparkleBoost(nowMs);
    const powerBoost = 1 + blackHolePower * CONSTELLATION_VISIBILITY_POWER_MULT;
    const collapse = singularityCollapse;
    const collapseVisibility = Math.max(0, 1 - collapse * 0.995);
    const dualBoost = dualConstellationActive ? 1.55 : 1;
    const visibilityBoost =
        CONSTELLATION_VISIBILITY_MULT * powerBoost * entryFlash * sparkleBoost * collapseVisibility * dualBoost;
    const pulse =
        0.92 +
        Math.sin(nowMs * 0.0017) * 0.06 +
        Math.sin(nowMs * 0.0032 + 1.1) * 0.03;
    constellationDustMaterial.opacity = Math.min(
        dualConstellationActive ? 0.34 : 0.24,
        (0.045 + pulse * 0.014) * fadeProgress * visibilityBoost * CONSTELLATION_DUST_OPACITY_MULT
    );
    constellationNodeMaterial.opacity = Math.min(
        dualConstellationActive ? 0.66 : 0.44,
        (0.12 + pulse * 0.028) * fadeProgress * visibilityBoost * CONSTELLATION_NODE_OPACITY_MULT
    );

    const nearLineOpacity = Math.min(
        dualConstellationActive ? 0.34 : 0.22,
        (0.05 + pulse * 0.016) * fadeProgress * visibilityBoost * CONSTELLATION_LINE_OPACITY_MULT
    );
    const lineRevealProgress = THREE.MathUtils.clamp(
        (nowMs - constellationReadyAtMs - CONSTELLATION_ENTRY_LINE_REVEAL_DELAY_MS) / CONSTELLATION_ENTRY_LINE_REVEAL_MS,
        0,
        1
    );
    const lineDrawBoost = 1 + (1 - lineRevealProgress) * CONSTELLATION_LINE_DRAW_BRIGHTEN;
    const lineSettleProgress = THREE.MathUtils.clamp(
        (nowMs - constellationReadyAtMs - CONSTELLATION_ENTRY_LINE_REVEAL_DELAY_MS - CONSTELLATION_ENTRY_LINE_REVEAL_MS) / CONSTELLATION_LINE_SETTLE_MS,
        0,
        1
    );
    const lineSettleMul = THREE.MathUtils.lerp(1, CONSTELLATION_LINE_SETTLE_MIN, lineSettleProgress);
    const lineOpacity = Math.min(dualConstellationActive ? 0.52 : 0.34, nearLineOpacity * lineDrawBoost * lineSettleMul);

    if (constellationLineMaterial) {
        constellationLineMaterial.opacity = lineOpacity;
    }
    if (constellationLineFarMaterial) {
        constellationLineFarMaterial.opacity = lineOpacity * CONSTELLATION_FAR_LINE_OPACITY_MULT;
    }
    if (constellationLineStrokeMaterial && constellationEntryState && constellationEntryState.linesNear) {
        const nearStrokeOpacity = constellationEntryState.linesNear.strokeDrawOpacity || 0;
        constellationLineStrokeMaterial.opacity = THREE.MathUtils.clamp(
            nearStrokeOpacity * fadeProgress * visibilityBoost * lineDrawBoost,
            0,
            0.98
        );
    }
    if (constellationLineFarStrokeMaterial && constellationEntryState && constellationEntryState.linesFar) {
        const farStrokeOpacity = constellationEntryState.linesFar.strokeDrawOpacity || 0;
        constellationLineFarStrokeMaterial.opacity = THREE.MathUtils.clamp(
            farStrokeOpacity * fadeProgress * visibilityBoost * lineDrawBoost * CONSTELLATION_STROKE_GLOW_FAR_MULT,
            0,
            0.8
        );
    }

    const splitOffsetX = dualConstellationProgress * DUAL_CONSTELLATION_SPLIT_X;
    const primaryBaseX = constellationBasePosition.x + splitOffsetX;
    const primaryBaseY = constellationBasePosition.y;
    const primaryBaseZ = constellationBasePosition.z;

    constellationGroup.position.set(primaryBaseX, primaryBaseY, primaryBaseZ);
    constellationGroup.scale.set(CONSTELLATION_SCALE, CONSTELLATION_SCALE, 1);
    constellationGroup.rotation.x = -0.02;
    constellationGroup.rotation.z = -0.006;

    if (collapse > 0.0001 && constellationEntryState) {
        pointerAtZ(primaryBaseZ, singularityVectorB);
        const sinkLocalX = (singularityVectorB.x - primaryBaseX) / CONSTELLATION_SCALE;
        const sinkLocalY = (singularityVectorB.y - primaryBaseY) / CONSTELLATION_SCALE;

        pullConstellationPayload(constellationEntryState.dust, sinkLocalX, sinkLocalY, collapse, delta);
        pullConstellationPayload(constellationEntryState.nodes, sinkLocalX, sinkLocalY, collapse, delta);
        pullConstellationPayload(constellationEntryState.linesNear, sinkLocalX, sinkLocalY, collapse, delta);
        pullConstellationPayload(constellationEntryState.linesFar, sinkLocalX, sinkLocalY, collapse, delta);
    } else if (constellationEntryState) {
        restoreConstellationPayload(constellationEntryState.dust, delta, 0.17);
        restoreConstellationPayload(constellationEntryState.nodes, delta, 0.17);
        restoreConstellationPayload(constellationEntryState.linesNear, delta, 0.2);
        restoreConstellationPayload(constellationEntryState.linesFar, delta, 0.2);
    }
}

function animate(nowMs = performance.now()) {
    requestAnimationFrame(animate);

    const frameDeltaMs = nowMs - lastFrameMs;
    lastFrameMs = nowMs;
    const delta = Math.min(frameDeltaMs / 16.666, 2.4);
    updateDualConstellationProgress(nowMs);

    updateBlackHole(delta, nowMs);
    setCounterVoidMode(isSingularityBlackout());
    updateVoidCounterCountdown(nowMs);
    updateStarCounterVisual(nowMs);

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
        // Eski backlog'u biriktirmeden akisa geri don.
        spawnAccumulatorMs = dynamicSpawnInterval * 0.35;
    }

    updateNebula(nowMs);
    updateDeepStars(delta, nowMs);
    updateShootingStars(delta, nowMs);
    updateStars(delta, nowMs);
    updateFoodMeshes(delta, nowMs);

    updateConstellation(nowMs, delta);
    updateCompanionConstellation(nowMs, delta);
    updateCompanionBursts(delta, nowMs);
    updateBigBang(nowMs);

    renderer.render(scene, camera);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

