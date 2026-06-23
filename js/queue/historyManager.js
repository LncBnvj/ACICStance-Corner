// Manages history generation transformations
function appendHistoryItem(svc) {
    const hList = document.getElementById('history-list');
    if (!hList) return;
    
    const hi = document.createElement('div');
    hi.className = 'history-item';
    
    const now = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    hi.innerHTML = `<div class="history-info"><div class="svc">${svc}</div><div class="date">${now}</div></div><span class="badge badge-pending">Pending</span>`;
    hList.prepend(hi);
}

function filterHistory(val) {
    // Interface hooks left exposed for future custom local query expansions
}