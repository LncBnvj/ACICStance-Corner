// js/router.js
// Handles routing side effects and contextual landing paths
function goToService(svc) {
    // Forward the exact service string parameter (e.g. 'printing-service') 
    // down to the page switcher module, along with your navigation tab highlighting.
    if (typeof showPage === 'function') {
        showPage(svc, document.querySelectorAll('.nav-tab')[1]);
    } else {
        console.error("showPage function is not available globally.");
    }
}