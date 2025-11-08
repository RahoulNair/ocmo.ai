// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{const id=a.getAttribute('href').slice(1);const el=document.getElementById(id);if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}});
});

// Hover-to-play video + fullscreen + mute toggle
const vid = document.getElementById('introVideo');
const fsBtn = document.getElementById('fsBtn');
const muteBtn = document.getElementById('muteBtn');

if (vid) {
  // Play on hover (desktop)
  vid.addEventListener('mouseenter', () => { try { vid.play(); } catch(e){} });
  vid.addEventListener('mouseleave', () => { try { vid.pause(); vid.currentTime = 0; } catch(e){} });

  // For touch devices: tap to play/pause
  vid.addEventListener('click', () => {
    if (vid.paused) { vid.play(); } else { vid.pause(); }
  });
}

if (muteBtn && vid) {
  const updateIcon = () => { muteBtn.textContent = vid.muted ? '🔇' : '🔊'; };
  updateIcon();
  muteBtn.addEventListener('click', () => {
    // Clicking counts as a user gesture → browsers allow audio
    vid.muted = !vid.muted;
    if (vid.paused) { vid.play(); }
    updateIcon();
  });
}

// Fullscreen handler
if (fsBtn && vid) {
  fsBtn.addEventListener('click', () => {
    const rfs = vid.requestFullscreen || vid.webkitRequestFullscreen || vid.msRequestFullscreen;
    if (rfs) rfs.call(vid);
  });
}
