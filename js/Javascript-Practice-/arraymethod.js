// let arr = [3,56,7,7,89,244];
// let arr1 = [3,56,7,244];

// console.log(arr)

// let strarray = arr.toString();
// console.log(strarray);

// let concatarray = arr.concat(arr1)
// console.log(concatarray);

// let joinarray = arr.join(" ");
// console.log(joinarray);



// let obj = {
//     "name":"deepak",
//     "age":24,
//     "mobile":9399430023
// }

// let obj1 = {
//         "name":"rishab",
//         "age":24,
//         "mobile":9399430023
// };

// let result = {
//     ...obj,
//     ...obj1
// }

// console.log(result)


function data(){
    let name = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;
    let mobile = document.querySelector('#mob').value;
    let obj = {
        "name":"",
        "age":"",
        "mobile":""
    }
    let updobj = {
        "name":name,
        "age":age,
        "mobile":mobile
    }
    let result = {
        ...obj,
        ...updobj
    }
    console.log(result)   
}
function sub(){
    alert("subbiteeddd")
}