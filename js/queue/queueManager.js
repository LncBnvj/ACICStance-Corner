// Validates, tracks updates, and builds fresh real-time tracking list arrays
function submitForm() {
    const name = document.getElementById('field-name').value.trim();
    const sr = document.getElementById('field-srcode').value.trim();
    const section = document.getElementById('field-section').value.trim();
    const svc = document.getElementById('service-select').value;
    
    if (!name || !sr || !section || !svc) { 
        showToast(' Please fill all required fields.'); 
        return; 
    }
    
    showToast(' Log entry submitted successfully!');
    
    // Inject dynamic object node into display structure
    const qList = document.getElementById('queue-list');
    if (qList) {
        const item = document.createElement('div');
        item.className = 'queue-item';
        item.innerHTML = `<div class="queue-info"><div class="name">${name}</div><div class="sub">${svc}</div></div><span class="badge badge-pending">Pending</span>`;
        qList.prepend(item);
    }
    
    // Increment tracking live numeric counters
    const p = document.getElementById('q-pending');
    if (p) p.textContent = parseInt(p.textContent) + 1;
    
    // Pass execution downstream into separate ledger module instances
    if (typeof appendHistoryItem === 'function') {
        appendHistoryItem(svc);
    }
    
    if (typeof earnPoints === 'function') {
        earnPoints(svc);
    }
}

// Connected explicitly to the wireless reservation form block
function reserveDevice() {
    showToast(' Reservation submitted!');
    if (typeof earnPoints === 'function') {
        earnPoints('Device Reservation');
    }
}