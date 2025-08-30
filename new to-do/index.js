

function bijaliBill(units){

    if(units>400){
        return 

    }else if(units<=400 && units>=200){
        return "300"
    }else if(units<200 &&units >100){
        return "150"
    }else if(units<100 & units >=0){
  return "34311"
    }

}
console.log(bijaliBill(555))