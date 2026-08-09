document.addEventListener('DOMContentLoaded', () => {
  // 1. Hero Video Toggle Logic
  const video = document.getElementById('hero-video');
  const btn = document.getElementById('toggle-video');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');

  if (btn && video) {
    btn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playIcon?.classList.add('hidden');
        pauseIcon?.classList.remove('hidden');
      } else {
        video.pause();
        playIcon?.classList.remove('hidden');
        pauseIcon?.classList.add('hidden');
      }
    });
  }

  // 2. Dynamic Image Ribbon Logic
  const allImages = [
    "2024-4.jpeg",
    "2015-1.jpeg",
    "2015-2.jpeg",
    "2015.jpeg",
    "2016-1.jpeg",
    "2016.jpeg",
    "2017-1.jpeg",
    "2017.jpeg",
    "2018.jpeg",
    "2019.jpeg",
    "2023.jpeg",
    "2023-1.jpeg"
  ];

  function renderRibbon() {
    const ribbon = document.getElementById('image-ribbon');
    if (!ribbon) return;

    // Randomly shuffle images
    const shuffled = [...allImages].sort(() => Math.random() - 0.5);
    
    // Duplicate array to ensure seamless looping
    const displayList = [...shuffled, ...shuffled];

    ribbon.innerHTML = '';
    displayList.forEach(src => {
      const div = document.createElement('div');
      div.className = "w-48 h-32 shrink-0 rounded-2xl overflow-hidden border border-slate-700/50 shadow-md bg-slate-900";
      div.innerHTML = `<img src="./images/${src}" alt="Conference Photo" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">`;
      ribbon.appendChild(div);
    });
  }

  renderRibbon();
});