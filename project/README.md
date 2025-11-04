# NourishNet - Hackathon Project

A comprehensive web platform designed to address food security and hunger through multiple interconnected features.

## 🏗️ Project Structure

```
project/
│
├── index.html                       # 🏠 Main homepage (hub for navigation to all sections)
│
├── pages/                           # 🌐 Individual feature pages
│   ├── donation/                    # 🍱 Food Donation Portal
│   │   ├── donation.html
│   │   ├── donation.js
│   │   └── donation.css
│   │
│   ├── community-kitchen/           # 🗺 Community Kitchen & Event Locator
│   │   ├── community.html
│   │   ├── community.js
│   │   └── community.css
│   │
│   ├── dashboard/                   # 📊 Hunger Awareness Dashboard
│   │   ├── dashboard.html
│   │   ├── dashboard.js
│   │   └── dashboard.css
│   │
│   ├── farm-to-table/               # 🧑‍🌾 Farm-to-Table Section
│   │   ├── farm.html
│   │   ├── farm.js
│   │   └── farm.css
│   │
│   ├── zero-waste/                  # ⏰ Zero Waste Tracker
│   │   ├── zero.html
│   │   ├── zero.js
│   │   └── zero.css
│   │
│   └── learn-act/                   # 📚 Learn & Act Page
│       ├── learn.html
│       ├── learn.js
│       └── learn.css
│
├── assets/                          # 🎨 Shared resources (usable by all pages)
│   ├── css/
│   │   ├── reset.css                # Normalize/reset styles
│   │   └── global.css               # Shared layout, navbar, footer, colors
│   │
│   ├── js/
│   │   └── main.js                  # Shared JS (navbar logic, theme, animations)
│   │
│   ├── images/                      # Logos, icons, backgrounds, etc.
│   │
│   └── data/                        # Optional JSON or data files for charts, demo data
│
├── components/                      # ⚙️ Reusable HTML snippets (if you modularize)
│   └── navbar.html
│
└── README.md                        # 🧾 Project overview, setup instructions for teammates
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- No server required - can run directly from file system
- For local development, a simple HTTP server is recommended

### Running Locally

#### Option 1: Direct File Opening
Simply open `index.html` in your web browser.

#### Option 2: Using a Local Server (Recommended)

**Python:**
```bash
cd project
python -m http.server 8000
```
Then navigate to `http://localhost:8000`

**Node.js (with http-server):**
```bash
cd project
npx http-server -p 8000
```

**VS Code Live Server:**
Install the "Live Server" extension and right-click `index.html` → "Open with Live Server"

## 📋 Features

### 1. 🍱 Food Donation Portal
- List surplus food items
- Connect donors with NGOs
- Search and filter available donations
- Real-time donation tracking

### 2. 🗺️ Community Kitchen & Event Locator
- Interactive map showing nearby locations
- Filter by kitchen type or food drives
- Search functionality
- Location details and hours

### 3. 📊 Hunger Awareness Dashboard
- Interactive charts and statistics
- Visual representation of hunger data
- Donation trends
- Food waste metrics

### 4. 🧑‍🌾 Farm-to-Table Section
- Browse fresh produce from local farmers
- Filter by category
- Product details and pricing
- Direct farmer contact

### 5. ⏰ Zero Waste Tracker
- Track grocery expiry dates
- Color-coded alerts (fresh/expiring/expired)
- Statistics dashboard
- LocalStorage persistence

### 6. 📚 Learn & Act Page
- Educational articles
- Practical tips for reducing waste
- Interactive quiz
- Tabbed interface

## 🛠️ Development

### Adding a New Page

1. Create a new folder in `pages/` with your feature name
2. Create `feature-name.html`, `feature-name.css`, and `feature-name.js`
3. Link to shared CSS and JS:
   ```html
   <link rel="stylesheet" href="../../assets/css/reset.css">
   <link rel="stylesheet" href="../../assets/css/global.css">
   <link rel="stylesheet" href="feature-name.css">
   
   <script src="../../assets/js/main.js"></script>
   <script src="feature-name.js"></script>
   ```
4. Add navigation link to `index.html` and all other pages

### Styling Guidelines

- Use CSS variables from `global.css` for colors and spacing
- Follow the existing design patterns
- Ensure responsive design (mobile-first approach)
- Use consistent border-radius (20px), shadows, and transitions

### JavaScript Guidelines

- Use modern ES6+ syntax
- Keep functions modular and reusable
- Add error handling where appropriate
- Comment complex logic

## 📝 Notes for Teammates

### File Organization
- Each feature has its own folder with HTML, CSS, and JS files
- Shared resources are in `assets/` folder
- Update navigation links when adding new pages

### Paths
- From root: `pages/feature/file.html`
- From pages folder: `../../assets/` for shared resources
- Use relative paths consistently

### Adding Features
- Keep the modular structure
- Don't duplicate code - use shared CSS/JS
- Test all navigation links
- Ensure mobile responsiveness

## 🔧 Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with CSS variables and modern features
- **JavaScript (ES6+)** - Interactivity
- **Leaflet.js** - Interactive maps (Community Kitchen page)
- **Chart.js** - Data visualization (Dashboard page)
- **LocalStorage API** - Data persistence (Zero Waste Tracker)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Follow the existing folder structure
2. Keep code modular and well-commented
3. Test across different browsers
4. Ensure responsive design works on mobile devices

## 📄 License

This project is created for the hackathon. All rights reserved.

## 👥 Team

Created for the DemiCoderz Hackathon - Food Security & Hunger Challenge

---

**Happy Coding! 🚀**

