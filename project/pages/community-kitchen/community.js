// Community Kitchen Page JavaScript

// Initialize map
let map;
let markers = [];
let currentFilter = 'all';
let displayedLocations = [];

// Sample data for community kitchens and food drives
const locations = [
    {
        id: 1,
        name: "Hope Community Kitchen",
        type: "kitchen",
        lat: 40.7589,
        lng: -73.9851,
        address: "123 Main Street, Manhattan, NY 10001",
        hours: "Mon-Fri: 9:00 AM - 6:00 PM",
        description: "Serving hot meals daily"
    },
    {
        id: 2,
        name: "Downtown Food Drive",
        type: "drive",
        lat: 40.7282,
        lng: -74.0776,
        address: "456 Park Avenue, Jersey City, NJ 07302",
        hours: "Saturday: 10:00 AM - 2:00 PM",
        description: "Weekly food distribution event"
    },
    {
        id: 3,
        name: "Community Care Kitchen",
        type: "kitchen",
        lat: 40.7505,
        lng: -73.9934,
        address: "789 Broadway, Manhattan, NY 10003",
        hours: "Daily: 8:00 AM - 8:00 PM",
        description: "24/7 community kitchen"
    },
    {
        id: 4,
        name: "Harvest Food Drive",
        type: "drive",
        lat: 40.7614,
        lng: -73.9776,
        address: "321 Central Park West, NY 10025",
        hours: "First Sunday of each month: 11:00 AM - 3:00 PM",
        description: "Monthly food distribution"
    },
    {
        id: 5,
        name: "Unity Kitchen",
        type: "kitchen",
        lat: 40.7489,
        lng: -73.9680,
        address: "654 Lexington Ave, Manhattan, NY 10022",
        hours: "Mon-Sat: 10:00 AM - 7:00 PM",
        description: "Community meals and food assistance"
    },
    {
        id: 6,
        name: "Weekend Food Drive",
        type: "drive",
        lat: 40.7128,
        lng: -74.0060,
        address: "987 Wall Street, Manhattan, NY 10005",
        hours: "Every Sunday: 9:00 AM - 1:00 PM",
        description: "Weekly fresh produce distribution"
    },
    {
        id: 7,
        name: "Sunrise Community Kitchen",
        type: "kitchen",
        lat: 40.7580,
        lng: -73.9855,
        address: "147 5th Avenue, Manhattan, NY 10010",
        hours: "Daily: 7:00 AM - 9:00 PM",
        description: "Breakfast, lunch, and dinner service"
    },
    {
        id: 8,
        name: "Neighborhood Food Pantry Drive",
        type: "drive",
        lat: 40.7282,
        lng: -73.9942,
        address: "258 Greenwich Street, Manhattan, NY 10007",
        hours: "Third Saturday: 12:00 PM - 4:00 PM",
        description: "Monthly pantry essentials distribution"
    }
];

// Create custom icons
const kitchenIcon = L.divIcon({
    className: 'custom-marker',
    html: '<div style="background-color: #22C55E; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; color: white; font-size: 16px;">🍳</div>',
    iconSize: [30, 30],
    iconAnchor: [15, 15]
});

const driveIcon = L.divIcon({
    className: 'custom-marker',
    html: '<div style="background-color: #f59e0b; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; color: white; font-size: 16px;">🚚</div>',
    iconSize: [30, 30],
    iconAnchor: [15, 15]
});

// Add markers to map
function addMarkers(locationsToShow) {
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    locationsToShow.forEach(location => {
        const icon = location.type === 'kitchen' ? kitchenIcon : driveIcon;
        const marker = L.marker([location.lat, location.lng], { icon })
            .addTo(map)
            .bindPopup(`
                <div style="min-width: 200px;">
                    <h3 style="margin: 0 0 10px 0; color: #333;">${location.name}</h3>
                    <p style="margin: 5px 0; color: #666; font-size: 14px;">📍 ${location.address}</p>
                    <p style="margin: 5px 0; color: #888; font-size: 13px;">🕐 ${location.hours}</p>
                    <p style="margin: 5px 0; color: #555; font-size: 13px;">${location.description}</p>
                </div>
            `);
        
        marker.on('click', () => {
            const card = document.getElementById(`location-${location.id}`);
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.style.animation = 'pulse 0.5s';
            }
        });

        markers.push(marker);
    });

    if (locationsToShow.length > 0) {
        const group = new L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.1));
    }
}

// Render location cards
function renderLocationCards(locationsToShow) {
    const container = document.getElementById('locationCards');
    container.innerHTML = '';

    if (locationsToShow.length === 0) {
        container.innerHTML = '<div class="loading">No locations found matching your criteria.</div>';
        return;
    }

    locationsToShow.forEach(location => {
        const card = document.createElement('div');
        card.className = 'location-card';
        card.id = `location-${location.id}`;
        card.onclick = () => {
            map.setView([location.lat, location.lng], 15);
            markers.find(m => {
                const latlng = m.getLatLng();
                return Math.abs(latlng.lat - location.lat) < 0.0001 && 
                       Math.abs(latlng.lng - location.lng) < 0.0001;
            })?.openPopup();
        };

        const typeText = location.type === 'kitchen' ? 'Community Kitchen' : 'Food Drive';
        const icon = location.type === 'kitchen' ? '🍳' : '🚚';

        card.innerHTML = `
            <div style="display: flex; align-items: start; justify-content: space-between;">
                <h3>${icon} ${location.name}</h3>
                <span class="type ${location.type}">${typeText}</span>
            </div>
            <div class="address">📍 ${location.address}</div>
            <div class="hours">🕐 ${location.hours}</div>
            <p style="margin-top: 0.5rem; color: #555; font-size: 0.9rem;">${location.description}</p>
        `;

        container.appendChild(card);
    });
}

// Update statistics
function updateStats() {
    const total = displayedLocations.length;
    const kitchens = displayedLocations.filter(l => l.type === 'kitchen').length;
    const drives = displayedLocations.filter(l => l.type === 'drive').length;

    document.getElementById('totalLocations').textContent = total;
    document.getElementById('kitchenCount').textContent = kitchens;
    document.getElementById('driveCount').textContent = drives;
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize map
    map = L.map('map').setView([40.7128, -74.0060], 12);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    displayedLocations = [...locations];

    // Filter functionality
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;

            if (currentFilter === 'all') {
                displayedLocations = [...locations];
            } else {
                displayedLocations = locations.filter(l => l.type === currentFilter);
            }

            const searchTerm = document.getElementById('searchBar').value.toLowerCase();
            if (searchTerm) {
                displayedLocations = displayedLocations.filter(l => 
                    l.name.toLowerCase().includes(searchTerm) ||
                    l.address.toLowerCase().includes(searchTerm)
                );
            }

            addMarkers(displayedLocations);
            renderLocationCards(displayedLocations);
            updateStats();
        });
    });

    // Search functionality
    document.getElementById('searchBar').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        if (currentFilter === 'all') {
            displayedLocations = locations.filter(l => 
                l.name.toLowerCase().includes(searchTerm) ||
                l.address.toLowerCase().includes(searchTerm)
            );
        } else {
            displayedLocations = locations
                .filter(l => l.type === currentFilter)
                .filter(l => 
                    l.name.toLowerCase().includes(searchTerm) ||
                    l.address.toLowerCase().includes(searchTerm)
                );
        }

        addMarkers(displayedLocations);
        renderLocationCards(displayedLocations);
        updateStats();
    });

    // Try to get user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                map.setView([latitude, longitude], 13);
            },
            () => {
                console.log('Location access denied, using default location');
            }
        );
    }

    // Initialize
    addMarkers(displayedLocations);
    renderLocationCards(displayedLocations);
    updateStats();
});

