
function dataShow(){
  fetch(datas)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err,"error"));
}

dataShow();
