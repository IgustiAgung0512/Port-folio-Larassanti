# Larassanti — Content Creator Portfolio

Portofolio pribadi bertema **pink sakura** untuk Larassanti, S.Si — dibangun dengan HTML, CSS, dan JavaScript murni (tanpa framework, tanpa proses build). Cukup buka `index.html` di browser.

## ✨ Fitur

- **Hero animasi** dengan kelopak sakura berguguran (canvas)
- **Profil** — foto, ringkasan diri, statistik singkat, tombol unduh CV
- **Proyek** — galeri kartu proyek content creator dengan thumbnail asli & modal detail
- **Video Showcase** — galeri video pendek gaya reels dengan pemutar video di modal
- **Pengalaman kerja** — timeline dengan animasi reveal saat discroll
- **Keahlian, Sertifikasi & Organisasi**
- **Kontak** — email, telepon, dan alamat
- Sepenuhnya **responsif** (desktop, tablet, mobile) dan menghormati preferensi `prefers-reduced-motion`

## 📁 Struktur Folder

```
portfolio/
├── index.html              # Struktur & konten halaman
├── style.css                # Semua styling, tema warna, dan breakpoint responsif
├── script.js                 # Interaksi: menu mobile, animasi kelopak, modal proyek & video
├── README.md                 # Dokumen ini
└── assets/
    ├── foto-larassanti.jpeg # Foto profil
    ├── CV_Larassanti.pdf     # File CV yang bisa diunduh pengunjung
    └── videos/
        ├── video1.mp4 … video7.mp4       # Video konten
        └── thumbs/
            └── video1.jpg … video7.jpg   # Thumbnail tiap video
```

> ⚠️ Folder `assets` **wajib** berada tepat di sebelah `index.html`. Kalau strukturnya berubah, gambar/video/CV tidak akan muncul.

## 🚀 Cara Menjalankan

**Opsi 1 — Buka langsung**
Klik dua kali `index.html`, atau drag-drop ke browser.

**Opsi 2 — Live Server (disarankan)**
Kalau pakai VS Code, install ekstensi *Live Server*, klik kanan `index.html` → **Open with Live Server**. Ini menghindari beberapa isu path relatif di sebagian browser.

## 🎨 Kustomisasi Cepat

| Ingin ubah apa? | Di file mana? |
|---|---|
| Warna tema (pink, rose, dsb) | `style.css` → variabel `:root` di bagian paling atas |
| Teks profil, pengalaman, skill | `index.html` → cari section terkait (`#about`, `#experience`, dst) |
| Isi kartu proyek | `index.html` (`.project-card`) **dan** `script.js` (`projectData`) |
| Isi galeri video | `index.html` (`.video-card`) **dan** `script.js` (`videoData`) |
| Foto profil | Ganti file `assets/foto-larassanti.jpeg` (nama file harus sama) |
| File CV yang bisa diunduh | Ganti file `assets/CV_Larassanti.pdf` (nama file harus sama) |

### Menambah 1 Proyek Baru
1. Siapkan gambar thumbnail (disarankan rasio potret) di `assets/`.
2. Duplikasi satu blok `<button class="project-card">…</button>` di `index.html`, ubah `data-project` ke angka urut berikutnya (mulai dari `0`).
3. Tambahkan satu objek baru di array `projectData` pada `script.js`, urutannya harus cocok dengan `data-project`.

### Menambah 1 Video Baru
1. Taruh file video (`videoN.mp4`) di `assets/videos/` dan thumbnail-nya (`videoN.jpg`) di `assets/videos/thumbs/`.
2. Duplikasi satu blok `<button class="video-card">…</button>` di `index.html`, ubah `data-video` ke angka urut berikutnya.
3. Tambahkan satu objek baru `{ src, caption }` di array `videoData` pada `script.js`.

## 🛠️ Troubleshooting

**Gambar/video tidak muncul (kotak kosong / broken image)**
- Pastikan folder `assets` ada persis di sebelah `index.html`.
- Cek nama file — huruf besar/kecil harus sama persis dengan yang tertulis di kode.
- Buka DevTools (`F12`) → tab **Console**/**Network**, cari error `404` untuk tahu file mana yang hilang.

**Perubahan tidak terlihat setelah edit**
- Lakukan hard reload: `Ctrl+Shift+R` (Windows/Linux) atau `Cmd+Shift+R` (Mac), untuk membersihkan cache browser.

## 🧩 Teknologi

- HTML5 semantik
- CSS3 murni (custom properties, grid, flexbox, `clamp()`, animasi)
- JavaScript vanilla (tanpa dependency/library eksternal)
- Font: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond), [Jost](https://fonts.google.com/specimen/Jost), [Dancing Script](https://fonts.google.com/specimen/Dancing+Script) via Google Fonts

---

Dibuat dengan sentuhan sakura ✿ untuk Larassanti, S.Si.
