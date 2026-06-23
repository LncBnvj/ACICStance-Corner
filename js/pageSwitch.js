// js/pageSwitch.js
function showPage(id, tab) {
    console.log("--- 🔄 PAGE SWITCH TRIGGERED ---");
    console.log("Requested View ID:", id);
    
    const viewContainer = document.getElementById('view-container');
    if (!viewContainer) {
        console.error("🛑 CRITICAL: Could not find #view-container in index.html");
        return;
    }

    // 1. Unified service catalog validation checklist
    const serviceList = [
        'printing-service', 
        'school-suppplies', 
        'borrowing-service', 
        'hygiene-service', 
        'thesis-binding', 
        'donation-drive', 
        'contests-support'
    ];

    // Redirect core services to use the unified form page layout
    let pageIdToFetch = id;
    if (serviceList.includes(id)) {
        console.log(`🎯 Match found: "${id}" is a service. Fetching master framework: log-entry.html`);
        pageIdToFetch = 'log-entry'; 
    }

    // Construct path trace
    let pagePath = `html/pages/${pageIdToFetch}.html`;
    console.log("📡 Fetching network file path:", pagePath);

    // 2. Clear previous error flags and fetch content
    fetch(pagePath)
        .then(response => {
            console.log(`🌐 Server Response for ${pageIdToFetch}:`, response.status, response.statusText);
            if (!response.ok) {
                throw new Error(`Failed to read file at "${pagePath}". Verify that the file is named exactly that and is located in your html/pages folder.`);
            }
            return response.text();
        })
        .then(htmlContent => {
            // 1. Inject the raw content into the view container
            viewContainer.innerHTML = htmlContent;
            console.log(`✅ Markup for "${pageIdToFetch}" successfully injected into DOM.`);

            // 🚀 THE VISIBILITY FIX:
            // Find the child container that was just injected and force it to be active
            const newlyInjectedPage = viewContainer.querySelector('.page');
            if (newlyInjectedPage) {
                newlyInjectedPage.classList.add('active');
                console.log(`👁️ Forced visibility class '.active' onto injected page layout.`);
            }

            // 2. Post-render data binding for services dropdown
            if (serviceList.includes(id)) {
                setTimeout(() => {
                    const sel = document.getElementById('service-select');
                    if (sel) {
                        sel.value = id;
                        console.log(`⚙️ Dropdown menu value explicitly forced to: "${id}"`);
                        
                        if (typeof renderServiceDetails === 'function') {
                            renderServiceDetails();
                        }
                    }
                }, 50);
            }
        })
        .catch(error => {
            console.error("🛑 ROUTING CRASH DETECTED:", error);
            // Print error directly onto screen to bypass invisible errors
            viewContainer.innerHTML = `
                <div style="background: #fff5f5; color: #c53030; padding: 24px; margin: 20px; border-radius: 8px; border: 2px dashed #f5c6cb; font-family: sans-serif;">
                    <h3 style="margin-top: 0;">❌ Route Loading Failed</h3>
                    <p><strong>Attempted ID:</strong> ${id}</p>
                    <p><strong>Target File Path:</strong> ${pagePath}</p>
                    <p style="background: #eee; padding: 10px; border-radius: 4px; font-family: monospace; color: #333;">${error.message}</p>
                    <button onclick="showPage('home', null)" style="background: #3182ce; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Return to Home Screen</button>
                </div>
            `;
        });

    // 4. Update Navigation active UI visual tab states cleanly
    if (tab) {
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    }
    window.scrollTo(0, 0);
}