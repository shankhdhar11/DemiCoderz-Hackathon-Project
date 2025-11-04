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

// Farm products data matching the HTML structure
const farmProducts = [
    {
        name: "Organic Tomatoes",
        farmer: "Ramesh Kumar",
        price: "₹80/kg",
        description: "Sun-ripened and pesticide-free tomatoes freshly picked today.",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=60",
        category: "vegetables"
    },
    {
        name: "Alphonso Mangoes",
        farmer: "Rani Devi",
        price: "₹220/kg",
        description: "Premium Ratnagiri Alphonso mangoes, sweet and juicy.",
        image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=60",
        category: "fruits"
    },
    {
        name: "Fresh Spinach (Palak)",
        farmer: "Suresh Yadav",
        price: "₹40/kg",
        description: "Morning harvest, naturally grown and washed.",
        image: "https://images.unsplash.com/photo-1524594154909-5f2c1b0d9f12?auto=format&fit=crop&w=800&q=60",
        category: "vegetables"
    },
    {
        name: "A2 Cow Milk",
        farmer: "Anita Singh",
        price: "₹120/2L",
        description: "Freshly pasteurised A2 milk from grass-fed cows.",
        image: "https://images.unsplash.com/photo-1555992336-03a23c2ba1b6?auto=format&fit=crop&w=800&q=60",
        category: "dairy"
    },
    {
        name: "Crunchy Carrots",
        farmer: "Meena Bai",
        price: "₹60/kg",
        description: "Sweet, crisp carrots grown with organic compost.",
        image: "https://images.unsplash.com/photo-1506801310323-534be5e7bb57?auto=format&fit=crop&w=800&q=60",
        category: "vegetables"
    },
    {
        name: "Holy Basil (Tulsi)",
        farmer: "Ramesh Kumar",
        price: "₹30/bundle",
        description: "Aromatic and medicinal Tulsi leaves for teas & cooking.",
        image: "https://images.unsplash.com/photo-1506801310323-534be5e7bb57?auto=format&fit=crop&w=800&q=60",
        category: "herbs"
    },
    {
        name: "Golden Potatoes",
        farmer: "Vijay Patel",
        price: "₹35/kg",
        description: "Hand-picked golden potatoes, perfect for curries and fries.",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
        category: "vegetables"
    },
    {
        name: "Strawberries",
        farmer: "Neha Joshi",
        price: "₹180/box",
        description: "Sweet mountain strawberries from Mahabaleshwar farms.",
        image: "https://images.unsplash.com/photo-1615475097225-3a4d5e1c0504?auto=format&fit=crop&w=800&q=60",
        category: "fruits"
    },
    {
        name: "Organic Honey",
        farmer: "Ravi Sharma",
        price: "₹350/500g",
        description: "Pure wild forest honey collected naturally, unprocessed.",
        image: "https://images.unsplash.com/photo-1606813903267-4d3d75d5c357?auto=format&fit=crop&w=800&q=60",
        category: "other"
    },
    {
        name: "Free-Range Eggs",
        farmer: "Kiran Devi",
        price: "₹110/dozen",
        description: "Farm-fresh eggs from healthy, outdoor-raised hens.",
        image: "https://images.unsplash.com/photo-1590080875832-123a64f09f04?auto=format&fit=crop&w=800&q=60",
        category: "dairy"
    }
];

function renderProducts() {
    const container = document.querySelector('.grid');
    if (!container) return;

    // Products are already in HTML, so we just need to make them searchable/filterable
    // The HTML structure is static, so we'll keep it as is but add search functionality
    // if needed in the future
}

document.addEventListener('DOMContentLoaded', function() {
    // Farm page products are static in HTML, no dynamic rendering needed
    // But we can add search/filter if needed
    renderProducts();
});

