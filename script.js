const products = [
    {
        id: 1,
        title: "Shorts moletom Nike TM",
        price: 79.99,
        discount: 15,
        image: "img/niketm.jpg",
    },

    {
        id: 2,
        title: "Conjunto Syna",
        price: 119.99,
        discount: 10, 
        image: "img/conjuntoSyna.jpg",
    },

    {
        id: 3,
        title: "Camisa com estampa Hellstar",
        price: 79.99,
        discount: 5,
        image: "img/hellstar.jpg",
    },

    {
        id: 4,
        title: "Calça cargo masculina",
        price: 127.99, 
        discount: 10,
        image: "img/calcaCargo.jpg",
    },

    {
        id: 5,
        title: "Jaqueta Nike Tech",
        price: 749.99,
        discount: 5,
        image: "img/nikeTech.jpg",
    },

    {
        id: 6,
        title: "Shorts moletom Mainfinnity",
        price: 44.99,
        discount: 3,
        image: "img/shortsManfinity.webp",
    }
]

function createProductCard(product){
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3 class="product-title">${product.title}</h3>
            <div class="product-price">${formatPrice(product.price)}</div>
            <div class="product-discount">${product.discount}% OFF</div>
        </div>
    `
}

function formatPrice(price){
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
}

function renderProduct(products){
    const grid = document.getElementById('productsGrid')

    if (!grid) {
        alert("Elemento #productsGrid não encontrado no HTML");
        return;
    }

    grid.innerHTML = products.map(createProductCard).join('')
}

function searchProducts(){
    const searchInput = document.getElementById('searchInput').value.toLowerCase()

    const filteredProducts = products.filter( product => product.title.toLowerCase().includes(searchInput) )

    renderProduct(filteredProducts)
}

function navigationBar(){
    const buttons = document.querySelectorAll('.search-button')

    buttons.forEach(button =>{
        button.addEventListener('click', () => {
        const buttonText = button.textContent.toLowerCase()

        if (buttonText === "tudo") {
            renderProduct(products)
            return
        }

        const filteredProducts = products.filter( product => product.title.toLowerCase().includes(buttonText) )
        renderProduct(filteredProducts)
    })
    })
}

document.addEventListener('DOMContentLoaded', () => {
    renderProduct(products)
    navigationBar()

    document.getElementById('searchBtn').addEventListener('click', searchProducts)
    document.getElementById('searchInput').addEventListener('keydown', (event) => {
        if (event.key === "Enter"){
            searchProducts()
        }
    })

})