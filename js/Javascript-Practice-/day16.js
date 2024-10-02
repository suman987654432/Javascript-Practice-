let str=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere impeditvoluptatibus dicta sed rem eos beatae nesciunt quisquam! Voluptate, aspernaturaperiam ratione dolores totam modi vel debitis incidunt esse repellendus"

let a = "";
for (let i in str) {
  if (i > 42 && i < 90) {
    if (str[i] !== " ") {
      a = a + str[i];
    }
  } else {
    a = a + str[i];
  }
}
console.log(a);
