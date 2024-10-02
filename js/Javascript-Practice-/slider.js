let count = 0;
const slider = ()=>{
    setInterval(runslider,4000);

}
const runslider = ()=>{
    if(count === 0){
        let selectart = document.querySelector('#sliderarticle');
        selectart.style.marginLeft = "-600px";
        selectart.style.transition = "margin-left 1s";
        count = count +1;

    }
    else if(count ===1){
        let selectart = document.querySelector('#sliderarticle');
        selectart.style.marginLeft = "-1200px";
        selectart.style.transition = "margin-left 1s";
        count = count +1;

        
    }
    else if(count ===2){
        let selectart = document.querySelector('#sliderarticle');
        selectart.style.marginLeft = "-1800px";
        selectart.style.transition = "margin-left 1s";
        count = count +1;

        
    }
    else if(count ===3){
        let selectart = document.querySelector('#sliderarticle');
        selectart.style.marginLeft = "-2400px";
        selectart.style.transition = "margin-left 1s";
        count = count +1;

        
    }
    else if(count ===4){
        let selectart = document.querySelector('#sliderarticle');
        selectart.style.marginLeft = "-3000px";
        selectart.style.transition = "margin-left 1s";
        count = count +1;

        
    }
}