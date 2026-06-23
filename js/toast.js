// Global notifications controller UI banner
function showToast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    
    t.textContent = msg;
    t.classList.add('show');
    
    // Dismiss automatically after 3000ms
    setTimeout(() => {
        t.classList.remove('show');
    }, 3000);
}