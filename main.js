const foods = [
    "burger king benim ikilim", "burger king kral ikili", "komagene porsiyon çiğ köfte",
    "arbys", "1.5 adana iskender", "kremalı mantarlı kaşarlı tavuk",
    "kiremitte konya tava", "tavuk incikten iskender", "kızartma bazlama + sucuklu yumurta",
    "mangal söyledik knk et, tavuk ne varsa", "yulaf", "ballı yulaf",
    "tavuklu pilav", "hatay dürüm", "bol malzemos", "ıslak hamburger"
];

const STAR_WARS_SPEED_Z = 0.5; 
const STAR_WARS_SPEED_Y = 0.25; 
const TEXT_TILT_ANGLE = -Math.PI / 3; 
const SPAWN_INTERVAL_MS = 600; 

let activeFoodMeshes = []; 
let particles; 
let spawnInterval;
let energyParticles = [];
let accretionDisk;

let mouseX = 0;
let mouseY = 0;
let mouse3D = new THREE.Vector3();
let isMouseActive = false;
let mouseStillTime = 0;
let lastMouseX = 0;
let lastMouseY = 0;
let blackHoleSize = 80;
let blackHoleFoodSize = 100;
const MAX_BLACKHOLE_SIZE = 800;
const GROWTH_SPEED = 2;
const MOUSE_MOVE_THRESHOLD = 5;

let audioContext;
let humSound;
let isRightClick = false;

let container;
let scene;
let camera;
let renderer;

const particleCount = 45000; 
const positions = new Float32Array(particleCount * 3);
const colors = new Float32Array(particleCount * 3);

function init3D() {
    container = document.getElementById('container');
    
    if (!container) {
        console.error('Container element not found!');
        return;
    }
    
    console.log('Initializing 3D scene...');
    
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    
    console.log('Renderer attached to container');
    
    camera.position.set(0, 10, 60);
    scene.background = new THREE.Color(0x000000); 

    for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 2000;
        positions[i + 1] = (Math.random() - 0.5) * 2000;
        positions[i + 2] = (Math.random() - 0.5) * 2000;
        
        colors[i] = 1;
        colors[i + 1] = 1;
        colors[i + 2] = 1;
    }
    
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const starMat = new THREE.PointsMaterial({
        size: 0.7,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.8,
        vertexColors: true
    });
    particles = new THREE.Points(starGeo, starMat);
    scene.add(particles);

    createAccretionDisk();
    initAudio();

    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('mouseenter', () => isMouseActive = true);
    window.addEventListener('mouseleave', () => {
        isMouseActive = false;
        mouseStillTime = 0;
        blackHoleSize = 80;
        blackHoleFoodSize = 100;
    });
    
    window.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        isRightClick = true;
        setTimeout(() => isRightClick = false, 100);
    });
    
    window.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            triggerSuperBlackHole();
        }
    });
    
    startStarWarsFlow();
}

function createAccretionDisk() {
    const geometry = new THREE.RingGeometry(1, 3, 64);
    const material = new THREE.MeshBasicMaterial({
        color: 0x8B00FF,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending
    });
    accretionDisk = new THREE.Mesh(geometry, material);
    accretionDisk.rotation.x = Math.PI / 2;
    scene.add(accretionDisk);
}

function initAudio() {
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
        console.log("Web Audio API not supported");
    }
}

function playHumSound(intensity) {
    if (!audioContext) return;
    
    if (humSound) {
        humSound.stop();
    }
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(50 + intensity * 100, audioContext.currentTime);
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(intensity * 0.1, audioContext.currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.3);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.3);
    
    humSound = oscillator;
}

function playSwooshSound() {
    if (!audioContext) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.2);
    
    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.2);
}

function playGulpSound() {
    if (!audioContext) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.15);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.15);
}

function createEnergyParticle(x, y, z) {
    const geometry = new THREE.SphereGeometry(0.5, 8, 8);
    const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(Math.random() * 0.3 + 0.7, 1, 0.5),
        transparent: true,
        opacity: 1,
        blending: THREE.AdditiveBlending
    });
    
    const particle = new THREE.Mesh(geometry, material);
    particle.position.set(x, y, z);
    particle.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5
    );
    particle.life = 1;
    
    scene.add(particle);
    energyParticles.push(particle);
}

function triggerSuperBlackHole() {
    blackHoleSize = MAX_BLACKHOLE_SIZE * 2;
    blackHoleFoodSize = MAX_BLACKHOLE_SIZE * 2.5;
    
    playHumSound(1);
    
    setTimeout(() => {
        const interval = setInterval(() => {
            blackHoleSize = Math.max(80, blackHoleSize - 20);
            blackHoleFoodSize = Math.max(100, blackHoleFoodSize - 25);
            
            if (blackHoleSize <= 80) {
                clearInterval(interval);
            }
        }, 50);
    }, 3000);
}

function animate() {
    requestAnimationFrame(animate); 

    if (isMouseActive) {
        mouseStillTime += 1/60;
        
        if (mouseStillTime > 0.1) {
            const oldSize = blackHoleSize;
            blackHoleSize = Math.min(MAX_BLACKHOLE_SIZE, blackHoleSize + GROWTH_SPEED);
            blackHoleFoodSize = Math.min(MAX_BLACKHOLE_SIZE * 1.2, blackHoleFoodSize + GROWTH_SPEED * 1.2);
            
            if (Math.floor(oldSize / 50) < Math.floor(blackHoleSize / 50)) {
                playHumSound(blackHoleSize / MAX_BLACKHOLE_SIZE);
            }
        }
    }

    if (accretionDisk && isMouseActive) {
        accretionDisk.position.copy(mouse3D);
        const diskSize = blackHoleSize / 40;
        accretionDisk.scale.set(diskSize, diskSize, diskSize);
        accretionDisk.material.opacity = Math.min(blackHoleSize / 200, 0.6);
        accretionDisk.rotation.z += 0.02 * (blackHoleSize / 100);
    } else if (accretionDisk) {
        accretionDisk.material.opacity = 0;
    }

    for (let i = energyParticles.length - 1; i >= 0; i--) {
        const p = energyParticles[i];
        p.position.add(p.velocity);
        p.life -= 0.02;
        p.material.opacity = p.life;
        p.scale.setScalar(1 + (1 - p.life));
        
        if (p.life <= 0) {
            scene.remove(p);
            p.geometry.dispose();
            p.material.dispose();
            energyParticles.splice(i, 1);
        }
    }

    if (particles) {
        const positionsArray = particles.geometry.attributes.position.array;
        const colorsArray = particles.geometry.attributes.color.array;
        const time = Date.now() * 0.0001;
        
        for (let i = 0; i < positionsArray.length; i += 3) {
            const x = positionsArray[i];
            const y = positionsArray[i + 1];
            const z = positionsArray[i + 2];
            
            positionsArray[i + 2] += 0.5; 
            if (positionsArray[i + 2] > 500) {
                positionsArray[i + 2] -= 2000;
                colorsArray[i] = 1;
                colorsArray[i + 1] = 1;
                colorsArray[i + 2] = 1;
            }
            
            if (isMouseActive) {
                const dx = x - mouse3D.x;
                const dy = y - mouse3D.y;
                const dz = z - mouse3D.z;
                const distanceToMouse = Math.sqrt(dx * dx + dy * dy + dz * dz);
                
                if (distanceToMouse < blackHoleSize) {
                    const pullStrength = (blackHoleSize - distanceToMouse) / blackHoleSize;
                    
                    if (isRightClick) {
                        const pushForce = pullStrength * pullStrength * 3;
                        positionsArray[i] += (dx / distanceToMouse) * pushForce;
                        positionsArray[i + 1] += (dy / distanceToMouse) * pushForce;
                        positionsArray[i + 2] += (dz / distanceToMouse) * pushForce;
                        
                        colorsArray[i] = 1;
                        colorsArray[i + 1] = 0.5;
                        colorsArray[i + 2] = 0;
                    } else {
                        const spiralForce = pullStrength * pullStrength * 2.5;
                        const angle = Math.atan2(dy, dx);
                        const spiralAngle = angle + time * 3 * pullStrength;
                        
                        positionsArray[i] -= Math.cos(spiralAngle) * spiralForce;
                        positionsArray[i + 1] -= Math.sin(spiralAngle) * spiralForce;
                        positionsArray[i + 2] -= (dz / distanceToMouse) * spiralForce * 0.5;
                        
                        const colorPhase = pullStrength;
                        if (colorPhase < 0.33) {
                            colorsArray[i] = 1 - colorPhase * 2;
                            colorsArray[i + 1] = 1 - colorPhase * 2;
                            colorsArray[i + 2] = 1;
                        } else if (colorPhase < 0.66) {
                            const phase = (colorPhase - 0.33) * 3;
                            colorsArray[i] = phase;
                            colorsArray[i + 1] = 0;
                            colorsArray[i + 2] = 1;
                        } else {
                            const phase = (colorPhase - 0.66) * 3;
                            colorsArray[i] = 1;
                            colorsArray[i + 1] = 0;
                            colorsArray[i + 2] = 1 - phase;
                        }
                        
                        if (distanceToMouse < blackHoleSize * 0.2 && Math.random() < 0.05) {
                            createEnergyParticle(x, y, z);
                            playSwooshSound();
                        }
                    }
                }
            }
        }
        particles.geometry.attributes.position.needsUpdate = true;
        particles.geometry.attributes.color.needsUpdate = true;
    }

    activeFoodMeshes.forEach(mesh => {
        mesh.position.z -= STAR_WARS_SPEED_Z; 
        mesh.position.y += STAR_WARS_SPEED_Y;
        
        if (isMouseActive) {
            const dx = mesh.position.x - mouse3D.x;
            const dy = mesh.position.y - mouse3D.y;
            const dz = mesh.position.z - mouse3D.z;
            const distanceToMouse = Math.sqrt(dx * dx + dy * dy + dz * dz);
            
            if (distanceToMouse < blackHoleFoodSize) {
                const pullStrength = (blackHoleFoodSize - distanceToMouse) / blackHoleFoodSize;
                
                if (isRightClick) {
                    const pushForce = pullStrength * pullStrength * 4;
                    mesh.position.x += (dx / distanceToMouse) * pushForce;
                    mesh.position.y += (dy / distanceToMouse) * pushForce;
                    mesh.position.z += (dz / distanceToMouse) * pushForce;
                } else {
                    const force = pullStrength * pullStrength * 3;
                    mesh.position.x -= (dx / distanceToMouse) * force;
                    mesh.position.y -= (dy / distanceToMouse) * force;
                    mesh.position.z -= (dz / distanceToMouse) * force;
                    
                    mesh.rotation.z += pullStrength * 0.1;
                    mesh.rotation.y += pullStrength * 0.05;
                    
                    if (distanceToMouse < blackHoleFoodSize * 0.1) {
                        for (let i = 0; i < 5; i++) {
                            createEnergyParticle(
                                mesh.position.x,
                                mesh.position.y,
                                mesh.position.z
                            );
                        }
                        playGulpSound();
                        
                        scene.remove(mesh);
                        if(mesh.material.map) mesh.material.map.dispose();
                        if(mesh.material) mesh.material.dispose();
                        if(mesh.geometry) mesh.geometry.dispose();
                        activeFoodMeshes = activeFoodMeshes.filter(m => m !== mesh);
                        return;
                    }
                }
            }
        }

        if (mesh.position.z < -600) {
            scene.remove(mesh); 
            if(mesh.material.map) mesh.material.map.dispose();
            if(mesh.material) mesh.material.dispose();
            if(mesh.geometry) mesh.geometry.dispose();
            activeFoodMeshes = activeFoodMeshes.filter(m => m !== mesh);
        }
    });

    renderer.render(scene, camera); 
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event) {
    const deltaX = Math.abs(event.clientX - lastMouseX);
    const deltaY = Math.abs(event.clientY - lastMouseY);
    
    if (deltaX > MOUSE_MOVE_THRESHOLD || deltaY > MOUSE_MOVE_THRESHOLD) {
        mouseStillTime = 0;
        blackHoleSize = Math.max(80, blackHoleSize - 5);
        blackHoleFoodSize = Math.max(100, blackHoleFoodSize - 5);
    }
    
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
    
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    
    mouse3D.set(mouseX, mouseY, 0.5);
    mouse3D.unproject(camera);
    
    const dir = mouse3D.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    mouse3D.copy(camera.position).add(dir.multiplyScalar(distance));
    
    const cursor = document.getElementById('blackhole-cursor');
    if (cursor) {
        cursor.style.left = event.clientX + 'px';
        cursor.style.top = event.clientY + 'px';
        cursor.style.display = 'block';
        
        const cursorSize = Math.min(blackHoleSize * 2, 600);
        cursor.style.width = cursorSize + 'px';
        cursor.style.height = cursorSize + 'px';
        
        const glowIntensity = (blackHoleSize / MAX_BLACKHOLE_SIZE) * 100;
        cursor.style.boxShadow = `
            0 0 ${20 + glowIntensity}px rgba(138, 43, 226, ${0.4 + glowIntensity/200}),
            0 0 ${40 + glowIntensity * 2}px rgba(138, 43, 226, ${0.2 + glowIntensity/200}),
            inset 0 0 ${20 + glowIntensity}px rgba(138, 43, 226, ${0.3 + glowIntensity/200})
        `;
        
        if (blackHoleSize > 400) {
            const opacity = Math.min((blackHoleSize - 400) / 400, 0.7);
            cursor.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
        } else {
            cursor.style.backgroundColor = 'transparent';
        }
    }
}

function startStarWarsFlow() {
    renderer.domElement.addEventListener('click', onSceneClick);
    spawnInterval = setInterval(() => {
        spawnFoodRow();
    }, SPAWN_INTERVAL_MS);
}

function spawnFoodRow() {
    const randomVal = Math.random();
    const shuffledFoods = [...foods].sort(() => 0.5 - Math.random());
    
    if (randomVal > 0.4) {
        createFoodMesh(shuffledFoods[0], 0); 
    } else {
        createFoodMesh(shuffledFoods[0], -40); 
        createFoodMesh(shuffledFoods[1], 40);
    }
}

function onSceneClick(event) {
    spawnFoodRow(); 
}

function createFoodMesh(text, xPos) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    const fontSize = 60; 
    context.font = `Bold ${fontSize}px Arial`;
    const textMetrics = context.measureText(text);
    const canvasWidth = textMetrics.width + 40;
    const canvasHeight = 100;
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    context.font = `Bold ${fontSize}px Arial`;
    context.fillStyle = '#ffce00'; 
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    
    const planeWidth = canvasWidth / 15; 
    const planeHeight = canvasHeight / 15;
    
    const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
    const material = new THREE.MeshBasicMaterial({ 
        map: texture, 
        transparent: true, 
        side: THREE.DoubleSide
    });
    
    const mesh = new THREE.Mesh(geometry, material);

    const randomZOffset = Math.random() * 20; 

    mesh.position.set(xPos, -30, 40 + randomZOffset);
    mesh.rotation.x = TEXT_TILT_ANGLE; 

    scene.add(mesh);
    activeFoodMeshes.push(mesh);
    
    return mesh;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM ready, starting 3D...');
        init3D();
        animate();
    });
} else {
    console.log('DOM already ready, starting 3D...');
    init3D();
    animate();
}

window.addEventListener('error', (e) => {
    console.error('Global error:', e.message, e.filename, e.lineno);
});
