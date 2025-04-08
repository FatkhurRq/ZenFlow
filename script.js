document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menuToggle");
    const navList = document.querySelector("nav ul");
  
    if (toggle && navList) {
      toggle.addEventListener("click", () => {
        navList.classList.toggle("show");
      });
    }
  
    // Deteksi stres (kode sebelumnya tetap dipertahankan)
    const btn = document.getElementById('startFaceDetection');
    const status = document.getElementById('statusMessage');
  
    if (btn && status) {
      btn.addEventListener('click', () => {
        status.innerHTML = "🔍 Deteksi wajah dimulai...";
        btn.disabled = true;
        btn.innerText = "Mendeteksi...";
  
        setTimeout(() => {
          const hasil = Math.floor(Math.random() * 100);
          let pesan = "";
  
          if (hasil < 30) {
            pesan = "😊 Tingkat stres Anda rendah. Tetap jaga semangat!";
          } else if (hasil < 70) {
            pesan = "😐 Tingkat stres sedang. Luangkan waktu untuk relaksasi.";
          } else {
            pesan = "😣 Tingkat stres tinggi! Disarankan untuk segera relaksasi.";
          }
  
          status.innerHTML = `<strong>Skor Stres:</strong> ${hasil}/100<br>${pesan}`;
          btn.disabled = false;
          btn.innerText = "Mulai Deteksi";
        }, 2500);
      });
    }
  });
  