function getContestTemplate() {
    return `
      <div class="detail-box">
        <div class="detail-box-title"> Academic Contest Support Details</div>
        <div class="form-group">
          <label>Competition Name <span class="req">*</span></label>
          <input type="text" placeholder="ex. National Programming Competition 2025">
        </div>
        <div class="form-group">
          <label>Competition Organizer <span class="req">*</span></label>
          <input type="text" placeholder="ex. National Computing Society">
        </div>
        <div class="form-group">
          <label>Coach (Optional)</label>
          <input type="text" placeholder="ex. Prof. Juan Dela Cruz">
        </div>
        <div class="form-group">
          <label>Email of Focal Person <span class="req">*</span></label>
          <input type="email" placeholder="ex. juan.delacruz@g.batstate-u.edu.ph">
        </div>
        <div class="form-group">
          <label>Team Members (If team competition, put N/A if none)</label>
          <textarea placeholder="List team members, one per line or N/A"></textarea>
        </div>
        <div class="form-group">
          <label>Official Endorsement from University President <span class="req">*</span></label>
          <div class="file-input-wrap"><button class="file-btn">Choose File</button><span class="file-name">No file chosen</span></div>
        </div>
        <div class="form-group">
          <label>Official Endorsement from College Dean <span class="req">*</span></label>
          <div class="file-input-wrap"><button class="file-btn">Choose File</button><span class="file-name">No file chosen</span></div>
        </div>
      </div>`;
}

// Separate helper specifically mapped to the supplementary supplies entry path
function getSuppliesTemplate() {
    return `
      <div class="detail-box">
        <div class="detail-box-title"> Select Items</div>
        <div class="form-group">
          <label>Item <span class="req">*</span></label>
          <select id="ss-item"><option value="">Select Item</option><option>Ballpen</option><option>Notebook</option><option>Folder</option><option>Bond Paper (5 sheets)</option><option>Pencil</option><option>Eraser</option><option>Ruler</option></select>
        </div>
        <div class="form-group">
          <label>Quantity <span class="req">*</span></label>
          <input type="number" id="ss-qty" min="1" placeholder="">
        </div>
        <button class="add-btn" onclick="addItem('ss')">Add Item</button>
        <div class="items-list" id="ss-items-list">No items added yet</div>
      </div>`;
}