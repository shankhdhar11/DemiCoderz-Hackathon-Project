// Donation Page JavaScript

let donations = JSON.parse(localStorage.getItem('donations')) || [
    {
        id: 1,
        item: "Fresh Vegetables Bundle",
        quantity: "15 kg",
        type: "fresh",
        expiry: "2024-12-15",
        location: "Downtown, Manhattan",
        contact: "contact@example.com",
        notes: "Mixed vegetables, all fresh from local farm",
        status: "available"
    },
    {
        id: 2,
        item: "Cooked Meals",
        quantity: "30 servings",
        type: "cooked",
        expiry: "2024-12-10",
        location: "Brooklyn, NY",
        contact: "555-0123",
        notes: "Prepared today, ready to serve",
        status: "available"
    },
    {
        id: 3,
        item: "Packaged Bread",
        quantity: "50 loaves",
        type: "packaged",
        expiry: "2024-12-20",
        location: "Queens, NY",
        contact: "555-0456",
        notes: "From local bakery, still sealed",
        status: "available"
    }
];

function formatDate(dateString) {
    if (!dateString) return 'N/A';
    try {
        const date = new Date(dateString);
        const today = new Date();
        const diffTime = date - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays < 0) return 'Expired';
        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Tomorrow';
        if (diffDays <= 7) return `In ${diffDays} days`;
        return date.toLocaleDateString();
    } catch {
        return dateString;
    }
}

function calculateDistance() {
    // Simulate distance calculation
    return (Math.random() * 3 + 0.5).toFixed(1);
}

function renderDonations() {
    const container = document.getElementById('donationsList');
    if (!container) return;

    // Add default donations if list is empty
    if (donations.length === 0) {
        donations = [
            {
                id: 1,
                item: "Fresh Vegetables",
                quantity: "5 kg",
                type: "fresh",
                expiry: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
                location: "Downtown",
                contact: "555-0001",
                notes: "Assorted vegetables",
                status: "available"
            },
            {
                id: 2,
                item: "Bakery Items",
                quantity: "Assorted bread and pastries",
                type: "baked",
                expiry: new Date().toISOString().split('T')[0], // Today
                location: "Market Street",
                contact: "555-0002",
                notes: "Fresh from bakery",
                status: "available"
            },
            {
                id: 3,
                item: "Canned Goods",
                quantity: "Various canned vegetables and soups",
                type: "packaged",
                expiry: new Date(Date.now() + 180 * 86400000).toISOString().split('T')[0], // 6 months
                location: "North Side",
                contact: "555-0003",
                notes: "Long shelf life",
                status: "available"
            },
            {
                id: 4,
                item: "Cooked Meals",
                quantity: "10 portions of lasagna",
                type: "cooked",
                expiry: new Date().toISOString().split('T')[0], // Today
                location: "Community Center",
                contact: "555-0004",
                notes: "Prepared today",
                status: "available"
            },
            {
                id: 5,
                item: "Baked Goods",
                quantity: "A dozen bagels and muffins",
                type: "baked",
                expiry: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
                location: "Bakery Lane",
                contact: "555-0005",
                notes: "Fresh baked",
                status: "available"
            }
        ];
        localStorage.setItem('donations', JSON.stringify(donations));
    }

    if (donations.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">No donations available yet.</p>';
        return;
    }

    container.innerHTML = donations.map(donation => {
        const distance = calculateDistance();
        const expiryText = formatDate(donation.expiry);
        
        return `
            <div class="donation-item">
                <h4>${donation.item}</h4>
                <p>${donation.quantity}</p>
                <p class="best-before">Best before: ${expiryText}</p>
                <span class="distance">${distance} km away</span>
            </div>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('donationForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const foodType = document.getElementById('food-type').value;
            const quantity = document.getElementById('quantity').value;
            const expiry = document.getElementById('best-before').value;
            const location = document.getElementById('pickup-location').value;
            const details = document.getElementById('details').value;
            
            if (!foodType || !quantity || !expiry || !location) {
                alert('Please fill in all required fields.');
                return;
            }
            
            const newDonation = {
                id: donations.length > 0 ? Math.max(...donations.map(d => d.id)) + 1 : 1,
                item: foodType,
                quantity: quantity,
                type: 'other',
                expiry: expiry,
                location: location,
                contact: 'Contact donor',
                notes: details || '',
                status: 'available'
            };

            donations.unshift(newDonation);
            localStorage.setItem('donations', JSON.stringify(donations));
            renderDonations();
            form.reset();
            alert('Thank you! Your donation has been listed successfully.');
        });
    }

    renderDonations();
});

