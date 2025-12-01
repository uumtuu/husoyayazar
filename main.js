// --- 1. SABİT TANIMLAMALAR ---
const CENTER_IMAGE_URL = "husospace.png"; 

const images = [
    "/kecihuso.jpg", "/huso1.png", "/malhusoo.gif", "/patapim.gif",
    "/plane-memes.gif", "/husocicek.png", "/husosa.png"
];
const foods = [
    "burger king benim ikilim", "burger king kral ikili", "komagene porsiyon çiğ köfte",
    "arbys", "1.5 adana iskender", "kremalı mantarlı kaşarlı tavuk",
    "kiremitte konya tava", "tavuk incikten iskender", "kızartma bazlama + sucuklu yumurta",
    "mangal söyledik knk et, tavuk ne varsa", "yulaf", "ballı yulaf"
];
let activeFoodSprites = []; 
let clickCount = 0; 
let particles; 


// --- 2. DOM ELEMANLARI ---
const titleText = document.getElementById('title-text');
const besleText = document.getElementById('besle-text');
const container = document.getElementById('container');
const sound = document.getElementById("goatSound");
sound.src = "BRUTA.mp3"; 

// --- 3. THREE.JS VE 3D AYARLAR ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
const particleCount = 45000; 
const positions = new Float32Array(particleCount * 3);
const textureLoader = new THREE.TextureLoader();


// --- 4. 3D BAŞLATMA VE ANİMASYON FONKSİYONLARI ---
function init3D() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    camera.position.z = 5;

    scene.background = new THREE.Color(0x000000); 

    // Yıldızlar (Parçacıklar) Oluşturma
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

    // Ortadaki Silik Resmi Ekle (husospace.png)
    textureLoader.load(
        CENTER_IMAGE_URL, 
        (texture) => {
            console.log(CENTER_IMAGE_URL + " BAŞARILI YÜKLENDİ.");
            const material = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                opacity: 0.4, 
                side: THREE.DoubleSide
            });
            
            const aspect = texture.image.width / texture.image.height;
            const meshWidth = 25; 
            const meshHeight = meshWidth / aspect;

            const geometry = new THREE.PlaneGeometry(meshWidth, meshHeight);
            const centerMesh = new THREE.Mesh(geometry, material);

            centerMesh.position.set(0, 0, camera.position.z - 100); 
            scene.add(centerMesh);
        },
        undefined, 
        (error) => {
            console.error("KRİTİK HATA: " + CENTER_IMAGE_URL + " yüklenemedi. Dosya yolunu veya adını kontrol edin!", error);
        }
    );

    animateTitle();

    window.addEventListener('resize', onWindowResize, false);
}

function animate() {
    requestAnimationFrame(animate);

    // 1. İlerleyen Uzay Tüneli Efekti
    if (particles) {
        const positionsArray = particles.geometry.attributes.position.array;
        for (let i = 2; i < positionsArray.length; i += 3) {
            // ⭐ YENİ HIZ: 0.5
            positionsArray[i] += 0.5; 
            if (positionsArray[i] > camera.position.z) {
                positionsArray[i] -= 1000;
            }
        }
        particles.geometry.attributes.position.needsUpdate = true;
    }

    // 2. Yemek İsimlerinin İleri Doğru Akışı
     activeFoodSprites.forEach(sprite => {
        // ⭐ YEMEK HIZI: 0.5
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


// --- 5. TIKLAMA VE GEÇİŞ FONKSİYONLARI ---

// Aşama 1: "Hüsoya mı Yazar?" Belirme Animasyonu
function animateTitle() {
    titleText.classList.remove('hidden');
    gsap.to(titleText, { 
        opacity: 1, 
        duration: 3, 
        delay: 1,
        onComplete: () => {
             titleText.style.pointerEvents = 'auto'; 
             titleText.addEventListener('click', onFirstClick);
        }
    });
}

// Aşama 2: İlk Tıklama Olayı (KONUM SABİT)
function onFirstClick() {
    titleText.removeEventListener('click', onFirstClick);
    titleText.style.pointerEvents = 'none';

    // 🛑 NİHAİ BAŞLIK HAREKET ENGELİ: Tüm transform verilerini sıfırla
    gsap.set(titleText, { x: 0, y: 0, scale: 1, rotation: 0 }); 

    // Başlık SADECE Opaklık ile kayboluyor. KONUM SABİT.
    gsap.to(titleText, { 
        opacity: 0, 
        duration: 1.5, 
        delay: 0.5 
    });

    // Ses çalma
    sound.currentTime = 0;
    sound.play();


    // "Keçiyi Besle" metnini gizle ve tıklama dinleyicisini başlat
    besleText.classList.remove('hidden');
    gsap.to(besleText, { 
        opacity: 0, duration: 2, delay: 1.5,
        onComplete: () => {
             besleText.style.display = 'none';
             renderer.domElement.addEventListener('click', onSceneClick);
        }
    });
}


// --- 6. 3D ETKİLEŞİM FONKSİYONLARI ---

// Rastgele bir metin (Yemek veya Hüsoya Yazar) oluşturma fonksiyonu
function createTextSprite(text, color = 'yellow', baseScaleX = 15, baseScaleY = 5) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    // Metin boyutunu hesapla
    const fontSize = 64; 
    context.font = `Bold ${fontSize}px Arial`;
    const textMetrics = context.measureText(text);
    const textWidth = textMetrics.width;
    
    // Canvas boyutunu metne göre ayarla
    const padding = 50; 
    const canvasWidth = textWidth + padding;
    const canvasHeight = 128;
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    // Tekrar font ayarını yap ve metni çiz
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

    // ÇOK UZAKTA BAŞLATMA (Geniş dağılım)
    sprite.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        camera.position.z - 100 
    );

    scene.add(sprite);
    activeFoodSprites.push(sprite);
}


// Sahneye Tıklama Olayı (Yemek İsimleri İçin)
function onSceneClick(event) {
    clickCount++; // Tıklama sayacını artır

    // 1. Ses yok, sadece görsel efekt.

    // 2. Rastgele Yemek İsmi Oluşturma
    const randomFood = foods[Math.floor(Math.random() * foods.length)];
    // Varsayılan (Yemek) metnini oluştur
    createTextSprite(randomFood, 'yellow', 15, 5); 

    // 3. 5 ile 10 tıklama arasında rastgele "Hüsoya Yazar" yazısı ekle
    const minClicks = 5;
    const maxClicks = 10;
    const shouldAddHuso = (clickCount >= minClicks) && (Math.random() < 0.3); 

    if (shouldAddHuso) {
        // Hüsoya Yazar için daha büyük bir ölçek ver
        createTextSprite("Hüsoya Yazar", 'cyan', 25, 8); 
        clickCount = 0; // Sayacı sıfırla
    }
}


// Mouse Kaçırma Mantığı (Pasif)
function onMouseMove2D(e) {
    // Bu kısım pasif kalır
}


// Her şeyi başlat
init3D();
animate();
