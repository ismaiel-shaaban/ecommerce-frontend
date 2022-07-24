const enableLoader = () => {
       let loader =  document.getElementById("loader");
       if(loader){
            loader.style.display = "flex";
       }
}

const disableLoader = () => {
    let loader =  document.getElementById("loader");
    if(loader){
         loader.style.display = "none";
    }
}

export default {
    enableLoader ,
    disableLoader
}
