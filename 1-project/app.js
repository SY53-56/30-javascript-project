window.addEventListener("keydown", function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
   console.log("Key pressed:", e.keyCode);
  if (!audio) return; // stop if no audio found

  audio.currentTime = 0; // ✅ Fix this line: not "currentAudio"
  audio.play();
  
  if (key) {
    key.classList.add("playing");
  }
});

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('transitionend', function(e) {
    if (e.propertyName !== 'transform') return; // Only trigger on transform
    this.classList.remove('playing');
  });
});

   const stop= document.querySelector(".stop")
    const audio = document.querySelectorAll("audio");


    function stopMusic(){
audio.forEach(a=>{
    a.pause()
    a.currentTime = 0
})
 keys.forEach((e)=>{
    
 })
  }