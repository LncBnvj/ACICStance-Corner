// Structural tab highlighting or context helpers for secondary controls
function updateNavigationActiveState(tabElement) {
    if (!tabElement) return;
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    tabElement.classList.add('active');
}