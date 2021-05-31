// const { json } = require("express");

console.log("UI INDEX.js")
const addLink = (ev) => {
    console.log("in addLink")
    ev.preventDefault();
    let reqObject = {
        link: document.getElementById('link').value,
        key: document.getElementById('key').value
    }
    document.forms[0].reset();

    console.warn('added', { reqObject });
    let pre = document.querySelector('#msg pre');
    // let post = document.querySelector('#msg post');
    // pre.textContent = '\n' + JSON.stringify(reqObject, '\t', 2);

    axios.post('http://localhost:3000/',
        (reqObject))
        .then(response => {
            console.log(response.data.message);
            if (response.data.link) {
                pre.textContent = '\n' + 'Your Key is added to DB ' + '\t';
            }
            else {
                pre.textContent = '\n' + JSON.stringify(response.data.message, '\t', 4);
            }
        })
        .catch(error => console.error(error));
}

// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('submitButton').addEventListener('click', addLink);
// });
// let ser = new XMLHttpRequest();
// let url = 'https://localhost/3000/';
// ser.open("POST", url, true);
// ser.setRequestHeader('Content-Type', 'application/json');
// let data = JSON.stringify(links);
// ser.send(data);
