function submitname(e) {
  //   e.preventDefault();  we can use
  let value = parseInt(document.querySelector(".name").value);
  let value1 = parseInt(document.querySelector(".name1").value);
  let value2 = parseInt(document.querySelector(".name2").value);
  let output = document.querySelector(".output");
  console.log("Name:", value);
  console.log("Course:", value1);

  if (value > value1 && value > value2) {
    output.innerHTML = "num 1 is greater" + value;
  } else if (value1 > value && value1 > value2) {
    output.innerHTML = "num2  is greater" + value1;
  } else {
    output.innerHTML = "num3  is greater" + value2;
  }

  return false;
}
