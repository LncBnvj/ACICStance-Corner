// js/services/serviceRenderer.js

function renderServiceDetails() {
    const selectElement = document.getElementById('service-select');
    const detailsContainer = document.getElementById('service-details-container');
    
    if (!selectElement || !detailsContainer) {
        console.warn("⚠️ Rendering aborted: #service-select or #service-details-container missing from DOM.");
        return;
    }
    
    const serviceId = selectElement.value;
    if (!serviceId) {
        detailsContainer.innerHTML = '';
        return;
    }

    // Build the clean track to your html/services/ folder
    const templatePath = `html/services/${serviceId}.html`;
    console.log(`📡 serviceRenderer fetching sub-form: ${templatePath}`);

    fetch(templatePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Could not find sub-form template at: ${templatePath} (Status: ${response.status})`);
            }
            return response.text();
        })
        .then(htmlMarkup => {
            // Inject the customized input elements into the sub-container block safely
            detailsContainer.innerHTML = htmlMarkup;
            console.log(`✅ Sub-form HTML injected for service: "${serviceId}"`);
            
            // 🚀 THE ULTIMATE SAFETY WRAPPER:
            // Explicitly verify if the function exists on the global window scope 
            // to stop the execution block from crashing under any circumstance.
            if (typeof window.initializeSubFormScripts === 'function' || typeof initializeSubFormScripts === 'function') {
                const initFn = window.initializeSubFormScripts || initializeSubFormScripts;
                initFn(serviceId);
            } else {
                console.log(`ℹ️ [Safe Skip] No active layout scripts required for "${serviceId}".`);
            }
        })
        .catch(error => {
            console.error("🛑 Sub-form Rendering Error:", error);
            detailsContainer.innerHTML = `
                <div style="color: #721c24; background-color: #f8d7da; border: 1px solid #f5c6cb; padding: 12px; margin-top: 10px; border-radius: 4px;">
                    <strong>Error rendering fields:</strong> ${error.message}
                </div>
            `;
        });
}