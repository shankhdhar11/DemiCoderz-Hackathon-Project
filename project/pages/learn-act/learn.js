// Learn & Act Page JavaScript

// Article data with full content
const articlesData = {
    '10-simple-ways': {
        title: '10 Simple Ways to Reduce Food Waste at Home',
        category: 'Food Waste',
        readTime: '5 min read',
        icon: '♻️',
        content: `
            <p>Reducing food waste at home is easier than you think! Here are 10 practical strategies:</p>
            <ol>
                <li><strong>Plan Your Meals:</strong> Create a weekly meal plan and shopping list. This helps you buy only what you need and reduces impulse purchases.</li>
                <li><strong>Store Food Properly:</strong> Learn the best storage methods for different foods. For example, keep potatoes in a cool, dark place and store herbs in water like flowers.</li>
                <li><strong>Use Your Freezer:</strong> Freeze leftovers, bread, and produce that's about to expire. Most foods can be frozen and used later.</li>
                <li><strong>Understand Expiry Dates:</strong> Learn the difference between "best before" (quality) and "use by" (safety) dates. Many foods are still safe after the best before date.</li>
                <li><strong>Donate Surplus Food:</strong> If you have excess food that's still good, donate it to local food banks or use our donation portal.</li>
                <li><strong>Use Scraps Creatively:</strong> Vegetable peels can make stock, stale bread becomes croutons, and overripe fruits are perfect for smoothies.</li>
                <li><strong>Buy Local and Seasonal:</strong> Local, seasonal produce is fresher and lasts longer, reducing waste.</li>
                <li><strong>Portion Control:</strong> Serve smaller portions and allow people to take seconds if needed.</li>
                <li><strong>First In, First Out:</strong> When unpacking groceries, move older items to the front so they get used first.</li>
                <li><strong>Compost:</strong> Turn your food scraps into valuable compost for your garden.</li>
            </ol>
            <p>By implementing these strategies, you can significantly reduce food waste, save money, and help the environment!</p>
        `
    },
    'creative-recipes': {
        title: 'Creative Recipes for Leftovers',
        category: 'Sustainable Cooking',
        readTime: '7 min read',
        icon: '🍴',
        content: `
            <p>Transform your leftovers into delicious new meals with these innovative recipes:</p>
            <h4>1. Vegetable Scrap Stock</h4>
            <p>Save vegetable peels, ends, and scraps. Simmer them with water, bay leaves, and peppercorns for 30-45 minutes. Strain and use as a base for soups and sauces.</p>
            
            <h4>2. Stale Bread Croutons</h4>
            <p>Cut stale bread into cubes, toss with olive oil, garlic, and herbs. Bake at 350°F for 10-15 minutes until golden and crispy.</p>
            
            <h4>3. Leftover Rice Fritters</h4>
            <p>Mix leftover rice with beaten eggs, chopped vegetables, and spices. Form into patties and pan-fry until golden brown on both sides.</p>
            
            <h4>4. Overripe Fruit Smoothies</h4>
            <p>Blend overripe bananas, berries, or other fruits with yogurt or milk. Add honey or dates for sweetness. Freeze in ice cube trays for later use.</p>
            
            <h4>5. Vegetable Frittata</h4>
            <p>Use leftover cooked vegetables in a frittata. Beat eggs, add vegetables and cheese, then bake until set. Great for breakfast or lunch!</p>
            
            <h4>6. Pasta Revamp</h4>
            <p>Transform leftover pasta by adding fresh vegetables, a new sauce, or turning it into a pasta bake with cheese on top.</p>
            
            <p>These recipes not only reduce waste but also add variety to your meals and help you discover new favorite dishes!</p>
        `
    },
    'kitchen-garden': {
        title: 'Starting a Kitchen Garden: A Beginner\'s Guide',
        category: 'Gardening',
        readTime: '10 min read',
        icon: '🌱',
        content: `
            <p>Growing your own herbs and vegetables is rewarding and reduces food waste. Here's how to get started:</p>
            
            <h4>Getting Started</h4>
            <p><strong>Choose Your Space:</strong> You can start with a windowsill, balcony, or small garden plot. Herbs like basil, mint, and parsley grow well in small pots.</p>
            
            <p><strong>Start with Easy Plants:</strong> Begin with herbs (basil, mint, cilantro), leafy greens (lettuce, spinach), or cherry tomatoes. These are forgiving for beginners.</p>
            
            <h4>Essential Supplies</h4>
            <ul>
                <li>Containers with drainage holes (pots, planters, or recycled containers)</li>
                <li>Quality potting soil</li>
                <li>Seeds or seedlings</li>
                <li>Watering can or spray bottle</li>
                <li>Fertilizer (optional, organic is best)</li>
            </ul>
            
            <h4>Basic Care Tips</h4>
            <p><strong>Watering:</strong> Most plants need consistent moisture but not waterlogging. Check soil daily - if it's dry an inch below the surface, it's time to water.</p>
            
            <p><strong>Sunlight:</strong> Most herbs and vegetables need 6-8 hours of sunlight daily. Place near a sunny window or use grow lights.</p>
            
            <p><strong>Harvesting:</strong> Harvest herbs regularly to encourage growth. Pick outer leaves of lettuce first, allowing the center to continue growing.</p>
            
            <h4>Benefits</h4>
            <p>Growing your own food means:</p>
            <ul>
                <li>Fresher ingredients with better flavor</li>
                <li>Reduced packaging waste</li>
                <li>Lower grocery costs</li>
                <li>Connection to your food source</li>
                <li>Reduced transportation emissions</li>
            </ul>
            
            <p>Start small with a few herbs, and you'll be amazed at how easy and rewarding home gardening can be!</p>
        `
    }
};

// Modal functions
function openArticleModal(articleId) {
    const article = articlesData[articleId];
    if (!article) return;
    
    const modal = document.getElementById('articleModal');
    document.getElementById('modalTitle').textContent = article.title;
    document.getElementById('modalMeta').innerHTML = `<span>${article.category}</span> <span>${article.readTime}</span>`;
    document.getElementById('modalBody').innerHTML = article.content;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeArticleModal() {
    const modal = document.getElementById('articleModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('articleModal');
    if (e.target === modal) {
        closeArticleModal();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabItems = document.querySelectorAll('.tab-item');
    const articleGrid = document.querySelector('.article-grid');
    
    // Initial content with working Read More buttons
    const articlesContent = `
        <div class="article-card">
            <div class="card-icon">
                <span class="icon">♻️</span>
            </div>
            <div class="card-meta">
                <span>Food Waste</span>
                <span>5 min read</span>
            </div>
            <h3 class="card-title">10 Simple Ways to Reduce Food Waste at Home</h3>
            <p class="card-description">Discover easy strategies to minimize food waste in your kitchen and save money.</p>
            <button class="read-more-button" onclick="openArticleModal('10-simple-ways')">Read More</button>
        </div>

        <div class="article-card">
            <div class="card-icon">
                <span class="icon">🍴</span>
            </div>
            <div class="card-meta">
                <span>Sustainable Cooking</span>
                <span>7 min read</span>
            </div>
            <h3 class="card-title">Creative Recipes for Leftovers</h3>
            <p class="card-description">Transform your leftovers into delicious new meals with these innovative recipes.</p>
            <button class="read-more-button" onclick="openArticleModal('creative-recipes')">Read More</button>
        </div>

        <div class="article-card">
            <div class="card-icon">
                <span class="icon">🌱</span>
            </div>
            <div class="card-meta">
                <span>Gardening</span>
                <span>10 min read</span>
            </div>
            <h3 class="card-title">Starting a Kitchen Garden: A Beginner's Guide</h3>
            <p class="card-description">Learn how to grow your own herbs and vegetables, even in small spaces.</p>
            <button class="read-more-button" onclick="openArticleModal('kitchen-garden')">Read More</button>
        </div>
    `;

    const tipsContent = `
        <div class="article-card" style="flex-basis: 100%;">
            <div class="card-icon">
                <span class="icon">💡</span>
            </div>
            <h3 class="card-title">Food Waste Reduction Tips</h3>
            <div class="card-description" style="text-align: left;">
                <p><strong>1. Plan Your Meals</strong><br>Create a weekly meal plan and shopping list to avoid buying unnecessary items.</p>
                <p><strong>2. Store Food Properly</strong><br>Learn the best storage methods for different foods to extend their shelf life.</p>
                <p><strong>3. Use Your Freezer</strong><br>Freeze leftovers, bread, and produce that's about to expire.</p>
                <p><strong>4. Understand Expiry Dates</strong><br>Learn the difference between "best before" and "use by" dates.</p>
                <p><strong>5. Donate Surplus Food</strong><br>If you have excess food that's still good, donate it to local food banks.</p>
                <p><strong>6. Use Scraps Creatively</strong><br>Vegetable peels can make stock, stale bread becomes croutons.</p>
                <p><strong>7. Buy Local and Seasonal</strong><br>Local, seasonal produce is fresher and lasts longer.</p>
                <p><strong>8. Portion Control</strong><br>Serve smaller portions and allow people to take seconds if needed.</p>
            </div>
        </div>
    `;

    const quizzesContent = `
        <div class="article-card" style="flex-basis: 100%;">
            <div class="card-icon">
                <span class="icon">🧩</span>
            </div>
            <h3 class="card-title">Test Your Knowledge</h3>
            <div id="quizContainer" style="text-align: left;">
                <div id="quizQuestion" style="font-size: 1.2em; margin-bottom: 1rem; font-weight: bold;"></div>
                <div id="quizOptions" style="margin-bottom: 1rem;"></div>
                <button id="quizSubmit" class="read-more-button" style="display: none;">Submit Answer</button>
                <div id="quizResult" style="margin-top: 1rem; padding: 1rem; border-radius: 5px; display: none;"></div>
                <button id="quizNext" class="read-more-button" style="display: none; margin-top: 1rem;">Next Question</button>
            </div>
        </div>
    `;

    const quizzes = [
        {
            question: "What percentage of global food production is wasted annually?",
            options: ["10%", "25%", "33%", "50%"],
            correct: 2
        },
        {
            question: "Which food item is wasted the most in households?",
            options: ["Meat", "Bread", "Fruits & Vegetables", "Dairy"],
            correct: 2
        },
        {
            question: "What is the best way to store fresh herbs?",
            options: ["In the refrigerator door", "In a plastic bag in the fridge", "In water like flowers", "In the freezer"],
            correct: 2
        },
        {
            question: "How many people face hunger globally?",
            options: ["200 million", "500 million", "800 million", "1 billion"],
            correct: 2
        }
    ];

    let currentQuiz = 0;
    let selectedAnswer = null;
    let score = 0;

    function loadQuiz() {
        if (currentQuiz >= quizzes.length) {
            document.getElementById('quizContainer').innerHTML = `
                <h3 style="text-align: center; color: var(--primary-green);">Quiz Complete!</h3>
                <p style="text-align: center; font-size: 1.2em; margin: 1rem 0;">You scored ${score} out of ${quizzes.length}!</p>
                <button onclick="resetQuiz()" class="read-more-button" style="display: block; margin: 0 auto;">Take Quiz Again</button>
            `;
            return;
        }

        const quiz = quizzes[currentQuiz];
        document.getElementById('quizQuestion').textContent = quiz.question;
        
        const optionsHtml = quiz.options.map((option, index) => `
            <div onclick="selectQuizAnswer(${index})" id="option-${index}" 
                 style="padding: 0.75rem; margin: 0.5rem 0; border: 2px solid var(--border-color); border-radius: 5px; cursor: pointer; transition: all 0.3s;">
                ${option}
            </div>
        `).join('');
        
        document.getElementById('quizOptions').innerHTML = optionsHtml;
        document.getElementById('quizSubmit').style.display = 'block';
        document.getElementById('quizNext').style.display = 'none';
        document.getElementById('quizResult').style.display = 'none';
        selectedAnswer = null;
    }

    window.selectQuizAnswer = function(index) {
        selectedAnswer = index;
        document.querySelectorAll('#quizOptions > div').forEach((opt, i) => {
            opt.style.borderColor = i === index ? 'var(--primary-green)' : 'var(--border-color)';
            opt.style.background = i === index ? 'var(--hover-bg)' : 'transparent';
        });
    };

    window.submitQuizAnswer = function() {
        if (selectedAnswer === null) {
            alert('Please select an answer!');
            return;
        }

        const quiz = quizzes[currentQuiz];
        const resultDiv = document.getElementById('quizResult');
        const submitBtn = document.getElementById('quizSubmit');
        const nextBtn = document.getElementById('quizNext');
        
        if (!resultDiv || !submitBtn || !nextBtn) return;
        
        const isCorrect = selectedAnswer === quiz.correct;

        if (isCorrect) {
            score++;
            resultDiv.style.background = 'var(--hover-bg)';
            resultDiv.style.color = 'var(--primary-green)';
            resultDiv.innerHTML = '✓ Correct! Well done!';
        } else {
            resultDiv.style.background = '#ffebee';
            resultDiv.style.color = '#c62828';
            resultDiv.innerHTML = `✗ Incorrect. The correct answer is: ${quiz.options[quiz.correct]}`;
        }

        resultDiv.style.display = 'block';
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'block';
    };

    window.nextQuiz = function() {
        currentQuiz++;
        loadQuiz();
    };

    window.resetQuiz = function() {
        currentQuiz = 0;
        score = 0;
        loadQuiz();
    };

    // Tab switching
    tabItems.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabItems.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Update content based on tab
            if (index === 0) { // Articles
                articleGrid.innerHTML = articlesContent;
            } else if (index === 1) { // Tips
                articleGrid.innerHTML = tipsContent;
            } else if (index === 2) { // Quizzes
                articleGrid.innerHTML = quizzesContent;
                setTimeout(() => {
                    loadQuiz();
                    // Set up button handlers after content is loaded
                    const quizSubmitBtn = document.getElementById('quizSubmit');
                    const quizNextBtn = document.getElementById('quizNext');
                    if (quizSubmitBtn) {
                        quizSubmitBtn.onclick = window.submitQuizAnswer;
                    }
                    if (quizNextBtn) {
                        quizNextBtn.onclick = window.nextQuiz;
                    }
                }, 100);
            }
        });
    });
});
