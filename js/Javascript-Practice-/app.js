window.data = () => {
    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;
    const mobile = document.querySelector('#mob').value;

    const result = {
        name,
        age,
        mobile
    };

    console.log(result);
};

window.sub = () => {
    alert("Submitted!");
};
