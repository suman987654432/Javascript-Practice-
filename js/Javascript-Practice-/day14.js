let count = 0;
const run = () => {
  setInterval(timer, 50);
};

const timer = () => {
  count = count+1;
  if (count<101) {
    let select = document.querySelector("#suman");
    select.innerHTML = count;
  }
};
