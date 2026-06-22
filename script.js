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
        title: "Camiseta com estampa Hellstar",
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
    },

    {
    id: 7,
    title: "Camiseta Nike ACG",
    price: 79.99,
    discount: 8,
    image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/e1800fe4-6d43-47e5-9c16-63092aa0eff5/M%2BNRG%2BACG%2BSS%2BLBR%2BTEE.png",
    },

    {
    id: 8,
    title: "Moletom Puma Essentials cinza",
    price: 129.99,
    discount: 10,
    image: "https://cdn.shopify.com/s/files/1/0791/1401/0918/files/8214f8faa7d5bb1adca7d18129cb6911.jpg?v=1733973267",
    },

    {
    id: 9,
    title: "Calça jeans Levi's 501 Original",
    price: 199.99,
    discount: 12,
    image: "https://levi.pt/content/img/1690x1690/levis_jeam_masculino_501-original-fit-jeans-00501-0101_one-wash_1.jpg",
    },

    {
    id: 10,
    title: "Tênis Vans Old Skool preto",
    price: 249.99,
    discount: 15,
    image: "https://www.patmenziesshoes.co.nz/cdn/shop/products/vans-old-skool-black-vn-0d3hy28-_vavn-0d3hy28xxx_-01_a9d94a80-582a-481a-9923-d2846dc99277.jpg?v=1707376946&width=1445",
    },

    {
    id: 11,
    title: "Chinelo Havaianas Top preto",
    price: 39.99,
    discount: 5,
    image: "https://www.bigw.com.au/medias/sys_master/images/images/he0/h90/65492190691358.jpg",
    },

    {
    id: 12,
    title: "Moletom Champion Reverse Weave",
    price: 159.99,
    discount: 10,
    image: "https://img01.ztat.net/article/spp-media-p1/4ad086a7554043c4807c002019734145/dcb551f0e4ea4945a02c3f4757e74edc.jpg?filter=packshot&imwidth=762",
    },

    {
    id: 13,
    title: "Camiseta Nike Sportswear",
    price: 69.99,
    discount: 6,
    image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d%2Cc_scale%2Cfl_relative%2Cw_1.0%2Ch_1.0%2Cfl_layer_apply/cc26561f-849f-4ec7-8f44-062561062da7/G%2BNSW%2BTEE%2BOC%2BBOXY%2BCAMP.png",
    },

    {
    id: 14,
    title: "Moletom Puma Essentials preto",
    price: 134.99,
    discount: 9,
    image: "https://cdn.shopify.com/s/files/1/0791/1401/0918/files/1254d122403a8b6e8eb47769c086d93f.jpg?v=1733973756",
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