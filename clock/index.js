function showData() {
 const date = new Date()
 const hour = date.getHours()
 const min = date.getMinutes()
 const sec= date.getSeconds()
 console.log(`${hour}:${min}:${sec}`)

   const secDeg = sec * 6; // 360 / 60
  const minDeg = min * 6 + sec * 0.1; // smooth minute hand
  const hourDeg = (hour % 12) * 30 + min * 0.5;

 document.querySelector(".hour").style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`
  document.querySelector(".sec").style.transform = `translate(-50%, -100%) rotate(${secDeg}deg)`
    document.querySelector(".min").style.transform = `translate(-50%, -100%) rotate(${minDeg}deg)`
}
showData()

setInterval(showData, 1000);
