document.addEventListener("DOMContentLoaded", () => {
  const faceButton = document.getElementById("startFaceDetection");
  const statusMessage = document.getElementById("statusMessage");

  if (faceButton && statusMessage) {
    faceButton.addEventListener("click", () => {
      statusMessage.innerHTML = "🔍 Deteksi wajah dimulai...";
      faceButton.disabled = true;
      faceButton.innerText = "Mendeteksi...";

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

        statusMessage.innerHTML = `<strong>Skor Stres:</strong> ${hasil}/100<br>${pesan}`;
        faceButton.disabled = false;
        faceButton.innerText = "Mulai Deteksi";
      }, 2500);
    });
  }

  const reportButton = document.querySelector("button[onclick='generateReport()']");
  const reportDisplay = document.getElementById("report");

  if (reportButton && reportDisplay) {
    reportButton.addEventListener("click", () => {
      const random = Math.floor(Math.random() * 100);
      let hasil = "";

      if (random < 30) {
        hasil = "Stres Rendah (Normal)";
      } else if (random < 70) {
        hasil = "Stres Sedang (Perlu Relaksasi)";
      } else {
        hasil = "Stres Tinggi (Waspada)";
      }

      reportDisplay.innerHTML = `<p><strong>Hasil Deteksi:</strong> ${hasil}</p>`;
    });
  }
});
