function getBorrowingTemplate() {
    return `
      <div class="detail-box">
        <div class="detail-box-title"> Select Items to Borrow</div>
        <div class="form-group">
          <label>Item <span class="req">*</span></label>
          <select id="se-item"><option value="">Select Item</option><option>Calculator</option><option>Extension Cord</option><option>Charger (USB-C)</option><option>Charger (Lightning)</option><option>Mouse</option><option>Keyboard</option><option>HDMI Adapter</option><option>Pocket WiFi</option></select>
        </div>
        <div class="form-group">
          <label>Quantity <span class="req">*</span></label>
          <input type="number" id="se-qty" min="1" placeholder="">
        </div>
        <button class="add-btn" onclick="addItem('se')">Add Item</button>
        <div class="items-list" id="se-items-list">No items added yet</div>
      </div>`;
}