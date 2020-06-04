/*const template = document.getElementById("product-item");
const templateFunction = Handlebars.compile(template);
const element = document.getElementById("container");*/


/*element.innerHTML = templateFunction(
    product: [
        {
            name: 'Department',
            review: 'Excelent',
            price: '$ 1652'
        }
    ]
);*/


const menu = document.getElementById("bars");
const nav = document.getElementById("responsive-menu");
let toggle = false;

menu.addEventListener('click',()=>{

    toggle = !toggle
    if (toggle){
        nav.style.display = "block";
    }else{
        nav.style.display = "none";
    }
    
    
})
