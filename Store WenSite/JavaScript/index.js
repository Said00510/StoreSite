let products =[
    {
        hot: "HOT",
        titulo: "Conjunto Gucci",
        imagen: "../img/women-2.jpeg",
        precio:  "130.00",
        precioDiscount: '120.00',
    
    },
    {
        hot: "",
        titulo: "Conjunto Prada",
        imagen: "../img/women-3.jpeg",
        precio:  "150.00",
        precioDiscount: '140.00',
    
    },
    {
        hot: "HOT",
        titulo: "Conjunto Gucci",
        imagen: "../img/cloth-1.png",
        precio:  "200.00",
        precioDiscount: '170.00',
    
    },
    {
        hot: "",
        titulo: "Conjunto Gucci",
        imagen: "../img/cloth-2.jpeg",
        precio:  "170.00",
        precioDiscount: '150.00',
    
    },
    {
        hot: "HOT",
        titulo: "Conjunto Gucci",
        imagen: "../img/cloth-3.jpeg",
        precio:  "110.00",
        precioDiscount: '100.00',
    
    },
] 


let productsMan =[
    {
        hot: "HOT",
        titulo: "Conjunto Hombre",
        imagen: "../img/men-1.jpg",
        precio:  "130.00",
        precioDiscount: '120.00',
    
    },
    {
        hot: "",
        titulo: "Conjunto Hombre",
        imagen: "../img/men-2.jpg",
        precio:  "180.00",
        precioDiscount: '150.00',
    
    },
    {
        hot: "HOT",
        titulo: "Conjunto de Gafas",
        imagen: "../img/sunglasses-3.jpeg",
        precio:  "70.00",
        precioDiscount: '50.00',
    
    },
    {
        hot: "HOT",
        titulo: "Conjunto Hombre",
        imagen: "../img/shoes-3.jpeg",
        precio:  "120.00",
        precioDiscount: '110.00',
    
    },
    {
        hot: "",
        titulo: "Conjunto Hombre",
        imagen: "../img/shoes-2.jpeg",
        precio:  "100.00",
        precioDiscount: '80.00',
    
    },
]    


let productsSpecial =[
    {
        hot: "HOT",
        titulo: "Conjunto Especial",
        imagen: "../img/special-1.jpg",
        precio:  "280.00",
        precioDiscount: '230.00',
    
    },
    {
        hot: "",
        titulo: "Conjunto Especial",
        imagen: "../img/special-2.jpg",
        precio:  "220.00",
        precioDiscount: '200.00',
    
    },
    {
        hot: "",
        titulo: "Conjunto Especial",
        imagen: "../img/special-4.jpg",
        precio:  "200.00",
        precioDiscount: '18.00',
    
    },
    {
        hot: "HOT",
        titulo: "Conjunto Especial",
        imagen: "../img/sneaker-4.jpg",
        precio:  "300.00",
        precioDiscount: '230.00',
    
    },
    {
        hot: "",
        titulo: "Conjunto Especial",
        imagen: "../img/sunglasses-3.jpeg",
        precio:  "250.00",
        precioDiscount: '200.00',
    
    },
    {
        hot: "",
        titulo: "Conjunto Especial",
        imagen: "../img/shoes-1.png",
        precio:  "250.00",
        precioDiscount: '200.00',
    
    },
]    

//toggle reset btn 
function toggleResetBtn(){
    const resetBtn = document.querySelector('.reset');
    resetBtn.classList.toggle('active');
};

//SWITCH LEFT, RIGHT AND MID partes of banner
function switchBanner(name){
    const banner = document.getElementById('banner');
    if(!banner.classList.contains(name)){
        banner.className = 'banner';
        banner.classList.add(name);
        //toggle reset
        toggleResetBtn();
    }
};

//Reset btn

function resetBanner(){
    const banner = document.getElementById('banner');
    banner.className = 'banner';
    toggleResetBtn();
};

//insertar productos

function cargarProductos(){
    const contenedorProducts = document.querySelector('.product-container');


    products.forEach(product => {

        const div = document.createElement('DIV');
        div.classList.add('product-item', 'filter-women');
        div.innerHTML = `

        ${product.hot ? `<span class="hot">${product.hot}</span>` : ''}
            <img src="${product.imagen}" alt="">
            <div class="product-info">
                <!-- Rating of 5 stars -->
                <ul class="product-rating">
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                </ul>
                <h4>${product.titulo}</h4>
                <p>
                    <span class="cross">${product.precio}$</span>
                    <span class="price">${product.precioDiscount}$</span>
                </p>
            </div>
            <a href="#" class="add-to-bag">
                <i class="bi bi-bag-plus"></i>
            </a>
        `;


        contenedorProducts.appendChild(div);
    });





    productsMan.forEach(product => {

        const divMan = document.createElement('DIV');
        divMan.classList.add('product-item', 'filter-men');
        divMan.innerHTML = `

        ${product.hot ? `<span class="hot">${product.hot}</span>` : ''}
            <img src="${product.imagen}" alt="">
            <div class="product-info">
                <!-- Rating of 5 stars -->
                <ul class="product-rating">
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                </ul>
                <h4>${product.titulo}</h4>
                <p>
                    <span class="cross">${product.precio}$</span>
                    <span class="price">${product.precioDiscount}$</span>
                </p>
            </div>
            <a href="#" class="add-to-bag">
                <i class="bi bi-bag-plus"></i>
            </a>
        `;


        contenedorProducts.appendChild(divMan);
    });




    productsSpecial.forEach(product => {

        const divSpecial = document.createElement('DIV');
        divSpecial.classList.add('product-item', 'filter-special');
        divSpecial.innerHTML = `

        ${product.hot ? `<span class="hot">${product.hot}</span>` : ''}
            <img src="${product.imagen}" alt="">
            <div class="product-info">
                <!-- Rating of 5 stars -->
                <ul class="product-rating">
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                    <li><i class="bi bi-star"></i></li>
                </ul>
                <h4>${product.titulo}</h4>
                <p>
                    <span class="cross">${product.precio}$</span>
                    <span class="price">${product.precioDiscount}$</span>
                </p>
            </div>
            <a href="#" class="add-to-bag">
                <i class="bi bi-bag-plus"></i>
            </a>
        `;


        contenedorProducts.appendChild(divSpecial);
    });

}

cargarProductos();

//SCROLL & Back btn
const header = document.getElementById('header'),
      backBtn = document.querySelector('.back-btn');

function posiciones(){
    const scrollY = window.scrollY;

    if(scrollY >= 270){
        header.classList.add('header-scrolled')
        backBtn.classList.add('active-btn')

    }else{
        header.classList.remove('header-scrolled')
        backBtn.classList.remove('active-btn')
    }
}

function scrollHome(){
    window.scrollTo(0,0);
}

window.addEventListener("scroll", posiciones)

function toggleMenu(){
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');
        menu.classList.toggle('active');
        if(menu.click){
            navMobile.classList.toggle('active')
        }
}