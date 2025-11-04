// Dashboard Page Specific JavaScript

// Monthly Donations Trend
const donationsCtx = document.getElementById('donationsChart').getContext('2d');
new Chart(donationsCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Donations (kg)',
            data: [1200, 1900, 3000, 2500, 2800, 3200, 3500, 4000, 3800, 4200, 4500, 4800],
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Food Type Distribution
const foodTypeCtx = document.getElementById('foodTypeChart').getContext('2d');
new Chart(foodTypeCtx, {
    type: 'doughnut',
    data: {
        labels: ['Fresh Produce', 'Cooked Meals', 'Packaged Goods', 'Baked Items', 'Other'],
        datasets: [{
            data: [35, 25, 20, 15, 5],
            backgroundColor: [
                '#4CAF50',
                '#81C784',
                '#66BB6A',
                '#A5D6A7',
                '#C8E6C9'
            ]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// Donations by Region
const regionCtx = document.getElementById('regionChart').getContext('2d');
new Chart(regionCtx, {
    type: 'bar',
    data: {
        labels: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'],
        datasets: [{
            label: 'Donations',
            data: [4500, 3800, 3200, 2800, 1500],
            backgroundColor: '#4CAF50'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Food Waste Reduction
const wasteCtx = document.getElementById('wasteChart').getContext('2d');
new Chart(wasteCtx, {
    type: 'line',
    data: {
        labels: ['2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'Waste (tons)',
            data: [5000, 4200, 3500, 2800, 2200],
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

