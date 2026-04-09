let filmDipilih = "";
let hargaFilm = 0;

// pilih film
function pilihFilm(nama,harga){
  filmDipilih = nama;
  hargaFilm = harga;
  alert("Film dipilih: "+nama);
}

// watchlist
function watchlist(nama){
  alert(nama + " masuk watchlist ❤️");
}

// search
document.getElementById("search").addEventListener("keyup", function(){
  let filter = this.value.toLowerCase();
  let films = document.querySelectorAll(".film");

  films.forEach(f=>{
    let text = f.innerText.toLowerCase();
    f.style.display = text.includes(filter) ? "" : "none";
  });
});

// pembayaran
function showPayment(){
  let p = document.getElementById("pembayaran").value;
  let info = document.getElementById("paymentInfo");

  if(p==="ewallet") info.innerHTML="E-Wallet: 08568147815";
  else if(p==="bank") info.innerHTML="Bank BCA: Tidak Tersedia";
  else if(p==="qris") info.innerHTML="<img src='qris.jpg' width='150'>";
  else if(p==="cash") info.innerHTML="Bayar di tempat";
}

// kode random
function kode(){
  let c="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let r="";
  for(let i=0;i<8;i++){
    r+=c[Math.floor(Math.random()*c.length)];
  }
  return r;
}

// hari
function hari(t){
  let h=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
  return h[new Date(t).getDay()];
}

// booking
function booking(){
  let nama = document.getElementById("nama").value;
  let jumlah = document.getElementById("jumlah").value;
  let tanggal = document.getElementById("tanggal").value;

  let k = kode();
  let h = hari(tanggal);

  let makanan = document.querySelectorAll(".makanan input:checked");
  let totalMakanan = 0;

  makanan.forEach(m=>{
    totalMakanan += parseInt(m.value);
  });

  let total = (jumlah * hargaFilm) + totalMakanan;

  document.getElementById("hasil").innerHTML = `
  Nama: ${nama}<br>
  Film: ${filmDipilih}<br>
  Hari: ${h}<br>
  Tanggal: ${tanggal}<br>
  Kode: ${k}<br>
  Total: Rp ${total}
  `;

  let pesan = `Booking Bioskop Mini:
Nama: ${nama}
Film: ${filmDipilih}
Hari: ${h}
Tanggal: ${tanggal}
Kode: ${k}
Total: Rp ${total}`;

  window.open(`https://wa.me/628568147815?text=${encodeURIComponent(pesan)}`);
}