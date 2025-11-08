// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{const id=a.getAttribute('href').slice(1);const el=document.getElementById(id);if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}});
});

// Hover-to-play video + fullscreen
const vid = document.getElementById('introVideo');
const fsBtn = document.getElementById('fsBtn');

if (vid) {
  // Play on hover (desktop)
  vid.addEventListener('mouseenter', () => { try { vid.play(); } catch(e){} });
  vid.addEventListener('mouseleave', () => { try { vid.pause(); vid.currentTime = 0; } catch(e){} });

  // For touch devices: tap to play/pause
  vid.addEventListener('click', () => {
    if (vid.paused) { vid.play(); } else { vid.pause(); }
  });
}

// Fullscreen handler
if (fsBtn && vid) {
  fsBtn.addEventListener('click', () => {
    const rfs = vid.requestFullscreen || vid.webkitRequestFullscreen || vid.msRequestFullscreen;
    if (rfs) rfs.call(vid);
  });
}
