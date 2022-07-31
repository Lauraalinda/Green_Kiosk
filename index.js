document.body.style.backgroundColor="silver";
document.getElementById("title").style.color="green";

var heading=document.getElementById("title3");
heading.innerHTML=heading.innerHTML.toUpperCase();
var heading2=document.getElementById("title3");
heading.innerHTML=heading.innerHTML.toUpperCase();

let fruits=document.getElementById("fruList");
console.log(fruits);
let child = document.createElement("li");
let features =document.createTextNode("pineapples");
child.appendChild(features)
fruits.appendChild(child)


let vegie=document.getElementById("vegList");
console.log(vegie);
let list_element = document.createElement("li");
let features_element = document.createTextNode("cabbages");
list_element.appendChild(features_element )
vegie.appendChild(list_element)


// const image=document.createElement("img");
// image.src='/images/cabbage.jpg'
// child.append(image)
// 
















