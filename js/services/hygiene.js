function getHygieneTemplate() {
    return `
      <div class="detail-box">
        <div class="detail-box-title"> Select Items</div>
        <div class="form-group">
          <label>Item <span class="req">*</span></label>
          <select id="he-item"><option value="">Select Item</option><option>Sanitary Napkin</option><option>Feminine Wash</option><option>Hand Sanitizer</option><option>Alcohol (50ml)</option><option>Tissue Pack</option><option>Toothbrush Kit</option></select>
        </div>
        <div class="form-group">
          <label>Quantity <span class="req">*</span></label>
          <input type="number" id="he-qty" min="1" placeholder="">
        </div>
        <button class="add-btn" onclick="addItem('he')">Add Item</button>
        <div class="items-list" id="he-items-list">No items added yet</div>
      </div>`;
}