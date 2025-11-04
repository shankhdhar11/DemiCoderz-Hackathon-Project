# Setup Guide for Teammates

## Quick Start

The project structure has been set up. Here's what you need to do to complete the remaining pages:

## ✅ Completed Files

1. **Home Page** (`index.html`) - ✅ Complete
2. **Donation Page** (`pages/donation/`) - ✅ Complete
3. **Community Kitchen Page** (`pages/community-kitchen/`) - ✅ Complete
4. **Shared Assets** (`assets/css/`, `assets/js/`) - ✅ Complete
5. **README.md** - ✅ Complete

## 📝 Remaining Pages to Complete

You need to create the following pages following the same pattern:

### 1. Dashboard Page (`pages/dashboard/`)
- Copy content from `dashboard.html` in root
- Split into: `dashboard.html`, `dashboard.css`, `dashboard.js`
- Use Chart.js for visualizations

### 2. Farm-to-Table Page (`pages/farm-to-table/`)
- Copy content from `farm_to_table.html` in root
- Split into: `farm.html`, `farm.css`, `farm.js`

### 3. Zero Waste Page (`pages/zero-waste/`)
- Copy content from `zero_waste.html` in root
- Split into: `zero.html`, `zero.css`, `zero.js`

### 4. Learn & Act Page (`pages/learn-act/`)
- Copy content from `learn.html` in root
- Split into: `learn.html`, `learn.css`, `learn.js`

## 🔧 How to Create Each Page

### Step 1: Create the HTML File
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title | Food Security Hub</title>
    
    <!-- Shared CSS -->
    <link rel="stylesheet" href="../../assets/css/reset.css">
    <link rel="stylesheet" href="../../assets/css/global.css">
    
    <!-- Page Specific CSS -->
    <link rel="stylesheet" href="page-name.css">
</head>
<body>
    <div class="header">
        <div class="nav-container">
            <a href="../../index.html" class="logo">🍽️ Food Security Hub</a>
            <nav>
                <ul class="nav-links">
                    <!-- Navigation links -->
                </ul>
            </nav>
        </div>
    </div>

    <div class="container">
        <!-- Page content -->
    </div>

    <!-- Shared JS -->
    <script src="../../assets/js/main.js"></script>
    
    <!-- Page Specific JS -->
    <script src="page-name.js"></script>
</body>
</html>
```

### Step 2: Extract CSS
- Take all `<style>` content from the original HTML
- Remove duplicate styles (already in `global.css`)
- Save to `page-name.css`
- Use CSS variables from `global.css` where possible

### Step 3: Extract JavaScript
- Take all `<script>` content from the original HTML
- Wrap initialization code in `DOMContentLoaded` if needed
- Save to `page-name.js`

### Step 4: Update Navigation
- Make sure all navigation links point to correct paths
- Update links in `index.html` if needed

## 📂 Path Reference

From `pages/dashboard/`:
- To shared CSS: `../../assets/css/global.css`
- To shared JS: `../../assets/js/main.js`
- To home: `../../index.html`
- To other pages: `../page-name/file.html`

## 🎨 Styling Tips

1. Use CSS variables from `global.css`:
   - `var(--primary-color)` instead of `#667eea`
   - `var(--bg-white)` instead of `rgba(255, 255, 255, 0.95)`
   - `var(--shadow)` for box shadows

2. Follow existing patterns:
   - Use `.card` class for card containers
   - Use `.btn` class for buttons
   - Use `.page-header` for page titles

## ✅ Checklist for Each Page

- [ ] HTML file created with proper structure
- [ ] CSS extracted to separate file
- [ ] JavaScript extracted to separate file
- [ ] Navigation links updated
- [ ] All paths are relative and correct
- [ ] Page tested in browser
- [ ] Mobile responsive (test on different screen sizes)

## 🚀 Testing

1. Open `index.html` in browser
2. Click through all navigation links
3. Test functionality on each page
4. Check mobile responsiveness
5. Verify all styles load correctly

## 📞 Need Help?

Refer to:
- `pages/donation/donation.html` - Complete example
- `pages/community-kitchen/community.html` - Complete example with map
- `README.md` - Full project documentation

Good luck! 🎉

