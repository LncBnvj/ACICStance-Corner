// Local isolated cache buffer for dynamic sub-items layout states
const itemLists = { ss: [], se: [], he: [] };

function addItem(prefix) {
    const item = document.getElementById(prefix + '-item').value;
    const qty = document.getElementById(prefix + '-qty').value;
    
    if (!item || !qty || qty < 1) { 
        showToast(' Please select an item and quantity.'); 
        return; 
    }
    
    itemLists[prefix].push({ item, qty });
    renderItems(prefix);
    document.getElementById(prefix + '-qty').value = '';
}

function removeItem(prefix, idx) {
    itemLists[prefix].splice(idx, 1);
    renderItems(prefix);
}