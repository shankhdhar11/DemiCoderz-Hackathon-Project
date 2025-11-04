// Donation Page JavaScript

let donations = [
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

function renderDonations() {
    const container = document.getElementById('donationsList');
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const typeFilter = document.getElementById('typeFilter').value;

    let filtered = donations.filter(d => {
        const matchesSearch = d.item.toLowerCase().includes(searchTerm) || 
                            d.location.toLowerCase().includes(searchTerm);
        const matchesType = !typeFilter || d.type === typeFilter;
        return matchesSearch && matchesType;
    });

    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">No donations found matching your criteria.</p>';
        return;
    }

    container.innerHTML = filtered.map(donation => `
        <div class="donation-item">
            <div class="donation-header">
                <div class="donation-title">${donation.item}</div>
                <span class="donation-badge badge-${donation.status}">
                    ${donation.status === 'available' ? '✓ Available' : '⏳ Claimed'}
                </span>
            </div>
            <div class="donation-details">
                <strong>Quantity:</strong> ${donation.quantity}<br>
                <strong>Type:</strong> ${donation.type.charAt(0).toUpperCase() + donation.type.slice(1)}<br>
                <strong>Expiry:</strong> ${new Date(donation.expiry).toLocaleDateString()}<br>
                ${donation.notes ? `<strong>Notes:</strong> ${donation.notes}<br>` : ''}
            </div>
            <div class="donation-location">
                📍 ${donation.location} | 📞 ${donation.contact}
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('donationForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newDonation = {
            id: donations.length + 1,
            item: document.getElementById('foodItem').value,
            quantity: document.getElementById('quantity').value,
            type: document.getElementById('foodType').value,
            expiry: document.getElementById('expiryDate').value,
            location: document.getElementById('location').value,
            contact: document.getElementById('contact').value,
            notes: document.getElementById('notes').value,
            status: 'available'
        };

        donations.unshift(newDonation);
        renderDonations();
        document.getElementById('donationForm').reset();
        alert('Thank you! Your donation has been listed successfully.');
    });

    document.getElementById('searchInput').addEventListener('input', renderDonations);
    document.getElementById('typeFilter').addEventListener('change', renderDonations);

    renderDonations();
});

