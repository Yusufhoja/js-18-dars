// var sayılar = [34, 67, 49, 20];
// var renkler = sayılar.map(function(sayı) {
//     return sayı > 50 ? "green" : "red";
// });
// document.body.style.backgroundColor = renkler.join(", ");
// console.log(renkler);
// Verilen sayı dizisi


// let sonlar = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];
// function b(son) {
//     return son > 50 ? "background-color: green;" : "background-color: red;";
// }
// function divOlustur(son) {
//     let div = document.createElement("div");
//     div.textContent = son;
//     div.style.cssText = b(son);
//     return div;
// }
// let divler = sonlar.map(divOlustur);
// divler.forEach(function(div) {
//     document.body.appendChild(div);
// });



let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];
let elBody = document.querySelector('body');
data.forEach(element => {
    if (element > 50) {
        let elP = document.createElement('p');
        elP.style.color = 'white';
        elP.style.background = 'green';
        elP.style.fontSize = '20px';
        elP.style.padding = '10px 0';
        elP.style.width = '100%';
        elP.style.textAlign = 'center';
        elBody.style.display = 'flex';
        elBody.style.flexDirection = 'column';
        elBody.style.justifyContent = 'center';
        elBody.style.alignItems = 'center';
        elBody.style.gap = '20px';
        elP.append(element);
        elBody.append(elP);
    } else {
        let elP = document.createElement('p');
        elP.style.color = 'white';
        elP.style.background = 'red';
        elP.style.fontSize = '20px';
        elP.style.padding = '10px 0';
        elP.style.width = '100%';
        elP.style.textAlign = 'center';
        elBody.style.display = 'flex';
        elBody.style.flexDirection = 'column';
        elBody.style.justifyContent = 'center';
        elBody.style.alignItems = 'center';
        elBody.style.gap = '20px';
        elP.append(element);
        elBody.append(elP);
    }
});