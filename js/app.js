// js/app.js
// Entry point for application initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize points balance from storage or fresh instance
    if (typeof initPointsEngine === 'function') {
        initPointsEngine();
    }
    
    // Set up global modal input monitoring hooks
    setupModalInputListeners();
    
    // Set up global dropdown changes for service details
    setupDropdownListeners();

    // 🚀 Load your layout partials and setup starting states
    initializeApplicationView();
});

// Polyfill dynamic modal handler inside app core
function setupModalInputListeners() {
    document.addEventListener('input', (e) => {
        if (e.target && e.target.id === 'redeem-amount') {
            if (typeof handleRedeemAmountInput === 'function') {
                handleRedeemAmountInput(e.target.value);
            }
        }
    });
}

// Intercepts active dropdown signals dynamically
function setupDropdownListeners() {
    document.addEventListener('change', (e) => {
        if (e.target && e.target.id === 'service-select') {
            if (typeof renderServiceDetails === 'function') {
                renderServiceDetails(); 
            } else {
                console.error("renderServiceDetails function could not be found globally.");
            }
        }
    });
}

// 🚀 FIXED: Dynamic template partial loading sequence
function initializeApplicationView() {
    console.log("📡 Fetching shell layout templates...");

    // Map matching your index.html placeholder IDs and folder assets
    const partials = [
        { id: 'loader-container', path: 'html/partials/loader.html' },
        { id: 'header-container', path: 'html/partials/header.html' },
        { id: 'nav-container', path: 'html/partials/navigation.html' },
        { id: 'toast-placeholder', path: 'html/partials/toast.html' },
        { id: 'modal-placeholder', path: 'html/partials/redeem-model.html' },
        { id: 'footer-container', path: 'html/partials/footer.html' }
    ];

    // Fetch all files in parallel
    Promise.all(partials.map(partial => {
        const container = document.getElementById(partial.id);
        if (!container) return Promise.resolve(); // Skip safely if placeholder missing

        return fetch(partial.path)
            .then(response => {
                if (!response.ok) throw new Error(`Status ${response.status} for ${partial.path}`);
                return response.text();
            })
            .then(htmlMarkup => {
                container.innerHTML = htmlMarkup;
                console.log(`✨ Partials loaded: #${partial.id}`);
            })
            .catch(err => {
                console.error(`🛑 Partial Load Error [${partial.id}]:`, err);
            });
    })).then(() => {
        console.log("✅ Shell loading complete. Booting layout view controller.");

        // Attach navigation events now that the partial is loaded
        if (typeof initializeNavigation === 'function') {
            initializeNavigation();
            console.log("🚀 Navigation listeners attached.");
        } else {
            console.error("initializeNavigation function not found. Make sure navigation.js is loaded and correct.");
        }

        // Trigger home screen ONLY after your navigation nodes exist in the DOM
        if (typeof showPage === 'function') {
            const homeTab = document.querySelector('.nav-tab'); 
            showPage('home', homeTab); 
        } else {
            console.warn("showPage function not found. Make sure pageSwitch.js is loaded.");
        }
    });
}