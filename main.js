const foods = [
    "burger king benim ikilim", "burger king kral ikili", "komagene porsiyon çiğ köfte",
    "arbys", "1.5 adana iskender", "kremalı mantarlı kaşarlı tavuk",
    "kiremitte konya tava", "tavuk incikten iskender", "kızartma bazlama + sucuklu yumurta",
    "mangal söyledik knk et, tavuk ne varsa", "yulaf", "ballı yulaf"
];
let activeFoodSprites = []; 
let clickCount = 0; 
let particles; 


const titleText = document.getElementById('title-text');
const besleText = document.getElementById('besle-text');
const container = document.getElementById('container');
const sound = document.getElementById("goatSound");
sound.src = "BRUTA.mp3"; 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
const particleCount = 45000; 
const positions = new Float32Array(particleCount * 3);


function init3D() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    camera.position.z = 5;

    scene.background = new THREE.Color(0x000000); 

    for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 1000;
        positions[i + 1] = (Math.random() - 0.5) * 1000;
        positions[i + 2] = (Math.random() - 0.5) * 1000;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
        color: 0xFFFFFF, 
        size: 0.5,
        sizeAttenuation: true
    });
    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    animateTitle();

    window.addEventListener('resize', onWindowResize, false);
}

function animate() {
    requestAnimationFrame(animate);

    if (particles) {
        const positionsArray = particles.geometry.attributes.position.array;
        for (let i = 2; i < positionsArray.length; i += 3) {
            positionsArray[i] += 0.5; 
            if (positionsArray[i] > camera.position.z) {
                positionsArray[i] -= 1000;
            }
        }
        particles.geometry.attributes.position.needsUpdate = true;
    }

     activeFoodSprites.forEach(sprite => {
        sprite.position.z += 0.5; 
        
        if (sprite.position.z > camera.position.z + 10) {
            scene.remove(sprite);
            activeFoodSprites = activeFoodSprites.filter(s => s !== sprite);
        }
    });


    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


function animateTitle() {
    titleText.classList.remove('hidden');
    // Başlangıçta görünür hale getir
    titleText.style.opacity = '1';

    titleText.style.pointerEvents = 'auto'; 
    titleText.addEventListener('click', onFirstClick);
}

function onFirstClick() {
    titleText.removeEventListener('click', onFirstClick);
    titleText.style.pointerEvents = 'none';

    // ⭐ NİHAİ ÇÖZÜM: Direkt style ile şeffaflık ve görünmezlik
    titleText.style.opacity = '0'; 
    titleText.style.transform = 'none'; // Transformu sıfırla

    sound.currentTime = 0;
    sound.play();

    
    // Yavaşça kaybolma için zamanlayıcı kullanıyoruz
    setTimeout(() => {
        titleText.style.display = 'none';
        
        besleText.classList.remove('hidden');
        gsap.to(besleText, { 
            opacity: 0, duration: 2, delay: 1.5,
            onComplete: () => {
                 besleText.style.display = 'none';
                 renderer.domElement.addEventListener('click', onSceneClick);
            }
        });
    }, 500); // Opaklık değişim süresi (0.5s) sonrası gizle
}


function createTextSprite(text, color = 'yellow', baseScaleX = 15, baseScaleY = 5) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    const fontSize = 64; 
    context.font = `Bold ${fontSize}px Arial`;
    const textMetrics = context.measureText(text);
    const textWidth = textMetrics.width;
    
    const padding = 50; 
    const canvasWidth = textWidth + padding;
    const canvasHeight = 128;
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    context.font = `Bold ${fontSize}px Arial`;
    context.fillStyle = color;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true, color: 0xFFFFFF });
    const sprite = new THREE.Sprite(material);

    const scaleFactor = canvasWidth / 150; 
    sprite.scale.set(baseScaleX * scaleFactor, baseScaleY, 1); 

    sprite.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        camera.position.z - 100 
    );

    scene.add(sprite);
    activeFoodSprites.push(sprite);
}


function onSceneClick(event) {
    clickCount++; 

    const randomFood = foods[Math.floor(Math.random() * foods.length)];
    createTextSprite(randomFood, 'yellow', 15, 5); 

    const minClicks = 5;
    const maxClicks = 10;
    const shouldAddHuso = (clickCount >= minClicks) && (Math.random() < 0.3); 

    if (shouldAddHuso) {
        createTextSprite("Hüsoya Yazar", 'cyan', 25, 8); 
        clickCount = 0; 
    }
}


function onMouseMove2D(e) {
    
}


init3D();
animate();
