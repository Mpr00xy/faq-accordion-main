let para = document.querySelectorAll('.ele > p');
let content = document.querySelectorAll('.ele > span');
let image = document.querySelectorAll('.ele > p > img');

console.log(para.length);
console.log(content.length);
console.log(image);


for (let i = 0; i < para.length; i++) {
    para[i].addEventListener("click", function () {
        for (let j = 0; j < content.length; j++) {
            content[j].classList.remove("active");
            content[j].style.display = "none";
            image[j].src = "./assets/images/icon-plus.svg";
            
        }

        content[i].classList.add("active");
        content[i].style.display = "block";
        image[i].src = "./assets/images/icon-minus.svg";
    });
}
