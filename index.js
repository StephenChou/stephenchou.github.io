const button = document.getElementById("button");
const body = document.getElementsByTagName('body')
const nav_links = document.querySelectorAll('#nav_links li')


button.addEventListener('click', (e)=>{body[0].style.backgroundColor = "black";})