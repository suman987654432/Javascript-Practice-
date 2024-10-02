let store = "";
function calculate(arg){
    store = store + arg;
    document.querySelector('#showval').innerHTML = store;    
}
function output(){
    document.querySelector('#showval').innerHTML = eval(store);    

}

function sq(){
    document.querySelector('#showval').innerHTML = store*store;    

}

function root(){
    document.querySelector('#showval').innerHTML = store*1.414;    

}

function ac(){
    store ="";
    document.querySelector('#showval').innerHTML = store;    

}

function del(){
    store = store.slice(0,store.length-1);
    document.querySelector('#showval').innerHTML = store;    


}