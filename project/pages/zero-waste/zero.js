// Zero Waste Page Specific JavaScript

let items = JSON.parse(localStorage.getItem('groceryItems')) || [
    {
        id: 1,
        name: "Milk",
        purchaseDate: "2024-12-01",
        expiryDate: "2024-12-08",
        category: "dairy",
        status: "expiring"
    },
    {
        id: 2,
        name: "Bread",
        purchaseDate: "2024-12-03",
        expiryDate: "2024-12-10",
        category: "bakery",
        status: "fresh"
    },
    {
        id: 3,
        name: "Tomatoes",
        purchaseDate: "2024-11-28",
        expiryDate: "2024-12-05",
        category: "produce",
        status: "expired"
    }
];

function getItemStatus(expiryDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const expiry = new Date(expiryDate);
    expiry.setHours(0, 0, 0, 0);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return 'expired';
    if (diffDays <= 3) return 'expiring';
    return 'fresh';
}

function updateItemStatuses() {
    items.forEach(item => {
        item.status = getItemStatus(item.expiryDate);
    });
}

function renderItems() {
    const container = document.getElementById('itemList');
    updateItemStatuses();
    saveItems();

    if (items.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">No items tracked yet. Add your first item to get started!</p>';
        return;
    }

    // Sort items: expired first, then expiring, then fresh
    const sortedItems = [...items].sort((a, b) => {
        const statusOrder = { expired: 0, expiring: 1, fresh: 2 };
        return statusOrder[a.status] - statusOrder[b.status];
    });

    container.innerHTML = sortedItems.map(item => {
        const statusText = {
            expired: 'Expired',
            expiring: 'Expiring Soon',
            fresh: 'Fresh'
        };
        const statusClass = `status-${item.status}`;
        const cardClass = item.status;

        const expiryDate = new Date(item.expiryDate);
        const today = new Date();
        const diffTime = expiryDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        let daysText = '';
        if (diffDays < 0) {
            daysText = `Expired ${Math.abs(diffDays)} day${Math.abs(diffDays) !== 1 ? 's' : ''} ago`;
        } else if (diffDays === 0) {
            daysText = 'Expires today!';
        } else {
            daysText = `${diffDays} day${diffDays !== 1 ? 's' : ''} remaining`;
        }

        return `
            <div class="item-card ${cardClass}">
                <div class="item-header">
                    <div class="item-name">${item.name}</div>
                    <span class="item-status ${statusClass}">${statusText[item.status]}</span>
                </div>
                <div class="item-details">
                    <strong>Category:</strong> ${item.category.charAt(0).toUpperCase() + item.category.slice(1)}<br>
                    <strong>Purchase Date:</strong> ${new Date(item.purchaseDate).toLocaleDateString()}<br>
                    <strong>Expiry Date:</strong> ${expiryDate.toLocaleDateString()}<br>
                    <strong>Status:</strong> ${daysText}
                </div>
                <div class="item-actions">
                    <button class="btn-small btn-consume" onclick="consumeItem(${item.id})">✓ Consumed</button>
                    <button class="btn-small btn-delete" onclick="deleteItem(${item.id})">🗑️ Remove</button>
                </div>
            </div>
        `;
    }).join('');

    updateStats();
}

function updateStats() {
    const total = items.length;
    const expiring = items.filter(i => i.status === 'expiring').length;
    const expired = items.filter(i => i.status === 'expired').length;

    document.getElementById('totalItems').textContent = total;
    document.getElementById('expiringCount').textContent = expiring;
    document.getElementById('expiredCount').textContent = expired;
}

function saveItems() {
    localStorage.setItem('groceryItems', JSON.stringify(items));
}

function consumeItem(id) {
    items = items.filter(i => i.id !== id);
    renderItems();
}

function deleteItem(id) {
    if (confirm('Are you sure you want to remove this item?')) {
        items = items.filter(i => i.id !== id);
        renderItems();
    }
}

document.getElementById('itemForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const newItem = {
        id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
        name: document.getElementById('itemName').value,
        purchaseDate: document.getElementById('purchaseDate').value,
        expiryDate: document.getElementById('expiryDate').value,
        category: document.getElementById('category').value,
        status: getItemStatus(document.getElementById('expiryDate').value)
    };

    items.push(newItem);
    renderItems();
    document.getElementById('itemForm').reset();
    
    // Set default dates
    document.getElementById('purchaseDate').valueAsDate = new Date();
    const expiryDefault = new Date();
    expiryDefault.setDate(expiryDefault.getDate() + 7);
    document.getElementById('expiryDate').valueAsDate = expiryDefault;
});

// Set default dates
document.getElementById('purchaseDate').valueAsDate = new Date();
const expiryDefault = new Date();
expiryDefault.setDate(expiryDefault.getDate() + 7);
document.getElementById('expiryDate').valueAsDate = expiryDefault;

renderItems();

