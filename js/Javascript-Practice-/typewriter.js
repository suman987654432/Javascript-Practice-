let count = 0;
let store = "";
let str = "suman kumar singh";

const tpw = () => {
    setInterval(run, 100); 
}
const run = () => {
    if (count < str.length) { 
        let s = document.querySelector('#output');
        store += str[count];
        s.innerHTML = store;
        count++;
    }
}
