/* =========================================
   1. LOGIKA HERO SLIDER (Ganti Background)
========================================= */
const heroSection = document.querySelector(".hero-section");

// Siapkan array gambar (Nanti ganti dengan path gambar aslimu di folder assets/images)
// Tips: Gunakan gambar dengan resolusi baik dan orientasi landscape
const images = [
  "assets/images/wl.jpg", // Gambar 1: Judul Skripsi / Kampus
  "assets/images/walisongo.png", // Gambar 2: Ilustrasi Wali Songo
  "assets/images/pte.jpeg", // Gambar 3: Suasana Belajar / Deep Learning
];

let currentIndex = 0;

function changeHeroImage() {
  // Menambahkan efek transisi halus via JavaScript
  heroSection.style.transition = "background-image 1.5s ease-in-out";

  // Trik UI/UX Profesional:
  // Kita tambahkan linear-gradient (overlay warna hijau gelap) di atas gambar
  // Tujuannya agar teks warna putih di atasnya TETAP TERBACA JELAS walau gambarnya terang
  heroSection.style.backgroundImage = `
        linear-gradient(rgba(6, 95, 70, 0.75), rgba(6, 95, 70, 0.75)), 
        url('${images[currentIndex]}')
    `;

  // Pastikan gambar proporsional dan tidak melar
  heroSection.style.backgroundSize = "cover";
  heroSection.style.backgroundPosition = "center";

  // Pindah ke index gambar selanjutnya, kembali ke 0 jika sudah di ujung
  currentIndex = (currentIndex + 1) % images.length;
}

// Panggil fungsi pertama kali saat web dimuat
changeHeroImage();

// Ubah gambar secara otomatis setiap 5 detik (5000 milidetik)
setInterval(changeHeroImage, 5000);

/* =========================================
   2. EFEK NAVBAR INTERAKTIF SAAT SCROLL
========================================= */
const navbar = document.querySelector(".curved-navbar");

window.addEventListener("scroll", () => {
  // Jika user scroll ke bawah lebih dari 50px, navbar jadi lebih solid dan bayangannya menebal
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.15)";
  } else {
    // Kembali semi-transparan saat di paling atas
    navbar.style.background = "rgba(255, 255, 255, 0.85)";
    navbar.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.08)";
  }
});


/* =========================================
   3. LOGIKA POP-UP MODAL (Bebas Konflik)
========================================= */
// Fungsi untuk membuka modal berdasarkan ID-nya
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        // Mencegah body scroll saat modal terbuka
        document.body.style.overflow = 'hidden'; 
    }
}

// Fungsi untuk menutup modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        // Mengembalikan body scroll
        document.body.style.overflow = 'auto'; 
    }
}

// Fitur Pro: Tutup modal jika user klik di area gelap (luar kotak putih)
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});


  
   
  