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

const container = document.getElementById('container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

const particleCount = 45000; 
const positions = new Float32Array(particleCount * 3);

function init3D() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    
    camera.position.set(0, 10, 60);
    scene.background = new THREE.Color(0x000000); 

    const textureLoader = new THREE.TextureLoader();
    
    textureLoader.load('husospace.png', function(texture) {
        
        const imgAspect = texture.image.width / texture.image.height;
        
        const dist = 300; 
        const vFOV = THREE.Math.degToRad(camera.fov); 
        const visibleHeight = 2 * Math.tan(vFOV / 2) * dist;
        
        const scale = 1.2; 
        
        const geometry = new THREE.PlaneGeometry(visibleHeight * imgAspect * scale, visibleHeight * scale);
        
        const material = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            opacity: 1.0, 
            blending: THREE.AdditiveBlending,
            side: THREE.DoubleSide,
            depthWrite: false
        });

        const bgMesh = new THREE.Mesh(geometry, material);
        bgMesh.position.set(0, 20, -250); 
        bgMesh.renderOrder = -1;
        scene.add(bgMesh);

    }, undefined, function(err) {
        console.log("Resim yüklenemedi (Sorun yok, sadece yıldızlar görünecek).");
    });

    for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 1500;
        positions[i + 1] = (Math.random() - 0.5) * 1500;
        positions[i + 2] = (Math.random() - 0.5) * 1500;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starMat = new THREE.PointsMaterial({
        color: 0xFFFFFF, 
        size: 0.7,
        sizeAttenuation: true
    });
    particles = new THREE.Points(starGeo, starMat);
    scene.add(particles);

    window.addEventListener('resize', onWindowResize, false);
    
    startStarWarsFlow();
}

function animate() {
    requestAnimationFrame(animate); 

    if (particles) {
        const positionsArray = particles.geometry.attributes.position.array;
        for (let i = 2; i < positionsArray.length; i += 3) {
            positionsArray[i] += 0.3; 
            if (positionsArray[i] > 500) {
                positionsArray[i] -= 1500;
            }
        }
        particles.geometry.attributes.position.needsUpdate = true;
    }

    activeFoodMeshes.forEach(mesh => {
        mesh.position.z -= STAR_WARS_SPEED_Z; 
        mesh.position.y += STAR_WARS_SPEED_Y;

        if (mesh.position.z < -500) {
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

init3D();
animate();
