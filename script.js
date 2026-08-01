// ---- nav scroll shadow ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ---- mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

function toggleNav(){
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
}

navToggle.addEventListener('click', toggleNav);
navToggle.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' || e.key === ' '){
    e.preventDefault();
    toggleNav();
  }
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
  });
});

// ---- project gallery modal ----
const projectData = [
  {
    tag: 'Sosial Media',
    thumbImg: 'assets/videos/thumbs/video1.jpeg',
    title: 'Konten Feed & Reels — Diva Jewelry',
    role: 'Content Creator & Supervisor',
    tools: 'CapCut, Canva, Instagram',
    desc: 'Merancang dan memproduksi konten feed serta reels harian untuk memperkenalkan koleksi perhiasan, termasuk caption dan jadwal posting agar engagement toko tetap konsisten.'
  },
  {
    tag: 'Video Editing',
    thumbImg: 'assets/videos/thumbs/video4.jpeg',
    title: 'Video Promosi Diskon — Diva Jewelry',
    role: 'Content Creator & Supervisor',
    tools: 'CapCut, Adobe Premiere Rush',
    desc: 'Mengedit video pendek berisi interaksi dengan customer seputar promo, memadukan dialog asli dengan teks dan musik agar menarik untuk dibagikan ke media sosial.'
  },
  {
    tag: 'Fotografi Produk',
    thumbImg: 'assets/videos/thumbs/video2.jpeg',
    title: 'Sesi Foto Produk — Diva Jewelry',
    role: 'Fotografer & Editor',
    tools: 'Kamera Smartphone, Lightroom',
    desc: 'Memotret produk perhiasan dengan pencahayaan dan komposisi rapi, lalu melakukan retouching ringan agar warna dan detail produk tampil maksimal di katalog online.'
  },
  {
    tag: 'Geospasial',
    thumbClass: 'thumb-4',
    title: 'Peta Tematik Daerah Bencana — BPBD',
    role: 'Surveyor & Pemetaan',
    tools: 'ArcGIS, Remote Sensing',
    desc: 'Melakukan survei lokasi bencana dan menyusun pemetaan daerah terdampak sebagai bagian dari internship di BPBD dan Kesbangpol Kota Padang Panjang.'
  },
  {
    tag: 'Behind The Scenes',
    thumbImg: 'assets/videos/thumbs/video3.jpeg',
    title: 'Daily Vlog & Dokumentasi Store',
    role: 'Content Creator',
    tools: 'Smartphone, CapCut',
    desc: 'Mendokumentasikan momen keseharian bersama tim di store — mulai dari persiapan hingga interaksi dengan customer — untuk memperkuat kedekatan brand dengan audiens.'
  },
  {
    tag: 'Laporan Visual',
    thumbClass: 'thumb-6',
    title: 'Laporan Administrasi & Data Store',
    role: 'Admin & Data Handler',
    tools: 'Microsoft Excel, Word',
    desc: 'Menyusun laporan harian, stock opname, dan data administrasi store secara rapi agar mudah dipantau dan digunakan untuk pengambilan keputusan.'
  }
];

const modal = document.getElementById('projectModal');
const modalThumb = document.getElementById('modalThumb');
const modalTag = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalRole = document.getElementById('modalRole');
const modalTools = document.getElementById('modalTools');

let lastFocused = null;

function openModal(index){
  const data = projectData[index];
  if(!data) return;
  if(data.thumbImg){
    modalThumb.className = 'modal-thumb has-image';
    modalThumb.style.backgroundImage = `url('${data.thumbImg}')`;
  } else {
    modalThumb.className = 'modal-thumb ' + data.thumbClass;
    modalThumb.style.backgroundImage = '';
  }
  modalTag.textContent = data.tag;
  modalTitle.textContent = data.title;
  modalDesc.textContent = data.desc;
  modalRole.textContent = data.role;
  modalTools.textContent = data.tools;
  lastFocused = document.activeElement;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-close').focus();
}

function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if(lastFocused) lastFocused.focus();
}

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => openModal(Number(card.dataset.project)));
});

modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

// ---- video showcase modal ----
const videoData = [
  { src: 'assets/videos/video1.mp4', caption: 'Konten Video 1' },
  { src: 'assets/videos/video2.mp4', caption: 'Konten Video 2' },
  { src: 'assets/videos/video3.mp4', caption: 'Konten Video 3' },
  { src: 'assets/videos/video4.mp4', caption: 'Konten Video 4' },
  { src: 'assets/videos/video5.mp4', caption: 'Konten Video 5' },
  { src: 'assets/videos/video6.mp4', caption: 'Konten Video 6' },
  { src: 'assets/videos/video7.mp4', caption: 'Konten Video 7' },
  { src: 'assets/videos/video8.mp4', caption: 'Konten Video 8' }
];

const videoModal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const videoModalCaption = document.getElementById('videoModalCaption');
let lastFocusedVideo = null;

function openVideoModal(index){
  const data = videoData[index];
  if(!data) return;
  videoPlayer.src = data.src;
  videoModalCaption.textContent = data.caption;
  lastFocusedVideo = document.activeElement;
  videoModal.classList.add('open');
  videoModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  videoModal.querySelector('.modal-close').focus();
  videoPlayer.play().catch(() => {});
}

function closeVideoModal(){
  videoModal.classList.remove('open');
  videoModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  videoPlayer.pause();
  videoPlayer.removeAttribute('src');
  videoPlayer.load();
  if(lastFocusedVideo) lastFocusedVideo.focus();
}

document.querySelectorAll('.video-card').forEach(card => {
  card.addEventListener('click', () => openVideoModal(Number(card.dataset.video)));
});

videoModal.querySelectorAll('[data-video-close]').forEach(el => el.addEventListener('click', closeVideoModal));

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && videoModal.classList.contains('open')) closeVideoModal();
});

// ---- timeline reveal on scroll ----
const tlItems = document.querySelectorAll('.tl-item');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.25 });
tlItems.forEach(item => io.observe(item));

// ---- falling sakura petals (responsive density) ----
const canvas = document.getElementById('petals');
const ctx = canvas.getContext('2d');
let w, h, petals = [];

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function petalCountForWidth(width){
  if(width < 480) return 12;
  if(width < 860) return 18;
  return 30;
}

function makePetal(){
  return {
    x: Math.random() * w,
    y: Math.random() * -h,
    size: 8 + Math.random() * 10,
    speedY: 0.4 + Math.random() * 0.9,
    speedX: 0.3 + Math.random() * 0.6,
    swing: Math.random() * Math.PI * 2,
    swingSpeed: 0.01 + Math.random() * 0.02,
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.02,
    opacity: 0.45 + Math.random() * 0.4
  };
}

function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  if(!prefersReducedMotion){
    const target = petalCountForWidth(w);
    if(petals.length < target){
      petals = petals.concat(Array.from({ length: target - petals.length }, makePetal));
    } else {
      petals = petals.slice(0, target);
    }
  }
}

function drawPetal(p){
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.rotation);
  ctx.globalAlpha = p.opacity;
  ctx.fillStyle = '#E17D9C';
  ctx.beginPath();
  ctx.moveTo(0, -p.size / 2);
  ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size / 2, p.size / 2, 0, p.size / 2);
  ctx.bezierCurveTo(-p.size / 2, p.size / 2, -p.size / 2, -p.size / 2, 0, -p.size / 2);
  ctx.fill();
  ctx.restore();
}

function animate(){
  ctx.clearRect(0, 0, w, h);
  petals.forEach(p => {
    p.swing += p.swingSpeed;
    p.y += p.speedY;
    p.x += Math.sin(p.swing) * p.speedX;
    p.rotation += p.rotSpeed;
    if(p.y > h + 20){
      p.y = -20;
      p.x = Math.random() * w;
    }
    drawPetal(p);
  });
  requestAnimationFrame(animate);
}

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(resize, 150);
});

resize();
if(!prefersReducedMotion) animate();
