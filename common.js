// รูปภาพทั้งหมดของเว็บไซต์ (ใช้ร่วมกันทุกหน้า)
window.SITE_IMAGES = {
  heroProfile:      "Earthpic.jpg",
  personalProfile:  "Earthpic2.jpg",
  hobbyFishing:     "fishing.jpg",
  goalLogo:         "mahidol.jpg",
  eduLogo1:         "bt.jpg",
  eduLogo2:         "bbu.jpg",
  eduLogo3:         "bbu.jpg",
  cert1:            "dodehor.png",
  cert2:            "sapa.png",
  cert3:            "tumma.png",
  cert4:            "prayoj.png"
};

function applyImage(imgId, key){
  var img = document.getElementById(imgId);
  var src = window.SITE_IMAGES[key];
  if(img && src){ img.src = src; }
}

function openLB(imgId){
  var el = document.getElementById(imgId);
  if(!el) return;
  var src = el.getAttribute('src');
  if(!src) return;
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightbox').classList.add('open');
}
function closeLB(e){
  if(e.target.id === 'lightbox' || e.target.classList.contains('close')){
    document.getElementById('lightbox').classList.remove('open');
  }
}

document.addEventListener('DOMContentLoaded', function(){
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if(navToggle && navLinks){
    navToggle.addEventListener('click', function(){ navLinks.classList.toggle('open'); });
    navLinks.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ navLinks.classList.remove('open'); });
    });

    // ทำไฮไลต์เมนูตามไฟล์หน้าปัจจุบัน (แทนการอ้างอิงตำแหน่งสกอลล์ เพราะแยกเป็นคนละไฟล์แล้ว)
    var current = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.querySelectorAll('a').forEach(function(a){
      var href = a.getAttribute('href');
      a.classList.toggle('active', href === current);
    });
  }
});
