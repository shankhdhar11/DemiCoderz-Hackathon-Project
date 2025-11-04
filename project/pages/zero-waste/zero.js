// Zero Waste Page JavaScript - Updated for new card design

const foodImages = {
    'milk': 'https://images.unsplash.com/photo-1585238341986-9e3b1c7a54e2?auto=format&fit=crop&w=800&q=60',
    'tomatoes': 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=60',
    'honey': 'https://images.unsplash.com/photo-1606813903267-4d3d75d5c357?auto=format&fit=crop&w=800&q=60',
    'eggs': 'https://images.unsplash.com/photo-1590080875832-123a64f09f04?auto=format&fit=crop&w=800&q=60',
    'bread': 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=800&q=60',
    'spinach': 'https://images.unsplash.com/photo-1613145993488-7ee70324a0f3?auto=format&fit=crop&w=800&q=60',
    'yogurt': 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9e?auto=format&fit=crop&w=800&q=60',
    'bananas': 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=60',
    'default': 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=60'
};

function getFoodImage(name) {
    const lowerName = name.toLowerCase();
    for (const [key, url] of Object.entries(foodImages)) {
        if (lowerName.includes(key)) {
            return url;
        }
    }
    return foodImages.default;
}

function getItemStatus(expiryDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const expiry = new Date(expiryDate);
    expiry.setHours(0, 0, 0, 0);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return 'expired';
    if (diffDays <= 3) return 'soon';
    return 'fresh';
}

function formatExpiryDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}

let items = JSON.parse(localStorage.getItem('groceryItems')) || [
    {
        id: 1,
        name: "Milk (2L)",
        expiryDate: new Date(Date.now() + 3 * 86400000).toISOString().split('T')[0],
        status: "soon"
    },
    {
        id: 2,
        name: "Tomatoes",
        expiryDate: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
        status: "fresh"
    },
    {
        id: 3,
        name: "Honey Jar",
        expiryDate: new Date(Date.now() + 180 * 86400000).toISOString().split('T')[0],
        status: "fresh"
    },
    {
        id: 4,
        name: "Eggs (12 pcs)",
        expiryDate: new Date(Date.now() - 2 * 86400000).toISOString().split('T')[0],
        status: "expired"
    },
    {
        id: 5,
        name: "Bread Loaf",
        expiryDate: new Date(Date.now() + 2 * 86400000).toISOString().split('T')[0],
        status: "soon"
    },
    {
        id: 6,
        name: "Spinach",
        expiryDate: new Date(Date.now() + 5 * 86400000).toISOString().split('T')[0],
        status: "fresh"
    },
    {
        id: 7,
        name: "Yogurt Cup",
        expiryDate: new Date(Date.now() + 1 * 86400000).toISOString().split('T')[0],
        status: "soon"
    },
    {
        id: 8,
        name: "Bananas",
        expiryDate: new Date(Date.now() - 1 * 86400000).toISOString().split('T')[0],
        status: "expired"
    }
];

function updateItemStatuses() {
    items.forEach(item => {
        item.status = getItemStatus(item.expiryDate);
    });
    saveItems();
}

function renderItems() {
    const container = document.querySelector('.tracker-grid');
    if (!container) return;
    
    updateItemStatuses();
    
    // Sort items: expired first, then expiring soon, then fresh
    const sortedItems = [...items].sort((a, b) => {
        const statusOrder = { expired: 0, soon: 1, fresh: 2 };
        return statusOrder[a.status] - statusOrder[b.status];
    });

    container.innerHTML = sortedItems.map(item => {
        const statusClass = item.status;
        const statusText = {
            expired: 'Expired',
            soon: 'Expiring Soon',
            fresh: 'Fresh'
        };

        return `
            <div class="card">
                <div class="card-header" style="background-image: url('${getFoodImage(item.name)}');"></div>
                <div class="card-body">
                    <h3>${item.name}</h3>
                    <p>Expiry: ${formatExpiryDate(item.expiryDate)}</p>
                    <span class="status ${statusClass}">${statusText[item.status]}</span>
                </div>
            </div>
        `;
    }).join('');
}

function saveItems() {
    localStorage.setItem('groceryItems', JSON.stringify(items));
}

// Add item form (if needed - can be added as a modal or separate section)
function addItemForm() {
    // This can be implemented as a modal or inline form
    const name = prompt('Enter item name:');
    if (!name) return;
    
    const expiryInput = prompt('Enter expiry date (YYYY-MM-DD):');
    if (!expiryInput) return;
    
    const newItem = {
        id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
        name: name,
        expiryDate: expiryInput,
        status: getItemStatus(expiryInput)
    };
    
    items.push(newItem);
    renderItems();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderItems();
    
    // Add click handler to add new items (can be triggered by a button)
    // For now, items are stored in localStorage and persist across sessions
});
