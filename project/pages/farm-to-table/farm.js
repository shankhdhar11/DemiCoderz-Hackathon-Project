// Farm to Table Page Specific JavaScript

const products = [
    {
        id: 1,
        name: "Fresh Tomatoes",
        farm: "Green Valley Farm",
        category: "vegetables",
        price: "$3.99/lb",
        description: "Organic, vine-ripened tomatoes picked fresh daily. Perfect for salads and cooking.",
        availability: "available",
        icon: "🍅"
    },
    {
        id: 2,
        name: "Organic Carrots",
        farm: "Sunshine Farm",
        category: "vegetables",
        price: "$2.49/lb",
        description: "Crisp, sweet organic carrots. Great for snacking or cooking.",
        availability: "available",
        icon: "🥕"
    },
    {
        id: 3,
        name: "Fresh Strawberries",
        farm: "Berry Fields",
        category: "fruits",
        price: "$4.99/lb",
        description: "Sweet, juicy strawberries. Picked at peak ripeness.",
        availability: "limited",
        icon: "🍓"
    },
    {
        id: 4,
        name: "Organic Basil",
        farm: "Herb Garden Co.",
        category: "herbs",
        price: "$2.99/bunch",
        description: "Aromatic fresh basil perfect for pesto and Italian dishes.",
        availability: "available",
        icon: "🌿"
    },
    {
        id: 5,
        name: "Fresh Milk",
        farm: "Dairy Farm Fresh",
        category: "dairy",
        price: "$5.99/gallon",
        description: "Farm-fresh whole milk, pasteurized and delivered daily.",
        availability: "available",
        icon: "🥛"
    },
    {
        id: 6,
        name: "Organic Wheat",
        farm: "Golden Fields Farm",
        category: "grains",
        price: "$6.99/lb",
        description: "Stone-ground organic wheat flour. Perfect for baking.",
        availability: "available",
        icon: "🌾"
    },
    {
        id: 7,
        name: "Fresh Corn",
        farm: "Harvest Valley",
        category: "vegetables",
        price: "$1.99/ear",
        description: "Sweet corn picked fresh. Great for grilling or boiling.",
        availability: "limited",
        icon: "🌽"
    },
    {
        id: 8,
        name: "Organic Apples",
        farm: "Orchard Hill",
        category: "fruits",
        price: "$3.49/lb",
        description: "Crisp, sweet organic apples. Multiple varieties available.",
        availability: "available",
        icon: "🍎"
    }
];

function renderProducts() {
    const container = document.getElementById('productsGrid');
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;

    let filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.farm.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || product.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem; grid-column: 1 / -1;">No products found matching your criteria.</p>';
        return;
    }

    container.innerHTML = filtered.map(product => `
        <div class="product-card">
            <div class="product-icon">${product.icon}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-farm">📍 ${product.farm}</div>
            <div class="product-price">${product.price}</div>
            <div class="product-description">${product.description}</div>
            <span class="product-availability ${product.availability}">
                ${product.availability === 'available' ? '✓ In Stock' : '⚠ Limited Stock'}
            </span>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchInput').addEventListener('input', renderProducts);
    document.getElementById('categoryFilter').addEventListener('change', renderProducts);
    renderProducts();
});

