// Updates the localized items badges array
function renderItems(prefix) {
    const list = document.getElementById(prefix + '-items-list');
    if (!list) return;
    
    if (itemLists[prefix].length === 0) { 
        list.innerHTML = 'No items added yet'; 
        list.classList.remove('has-items'); 
        return; 
    }
    
    list.classList.add('has-items');
    list.innerHTML = itemLists[prefix].map((it, i) =>
        `<span class="item-tag">${it.item} × ${it.qty}<button onclick="removeItem('${prefix}',${i})"></button></span>`
    ).join('');
}