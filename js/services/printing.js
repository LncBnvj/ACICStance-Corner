function getPrintingTemplate() {
    return `
      <div class="detail-box">
        <div class="detail-box-title"> Printing Service Details</div>
        <div class="form-group">
          <label>Upload Document (PDF or DOC/DOCX) <span class="req">*</span></label>
          <div class="file-input-wrap"><button class="file-btn">Choose File</button><span class="file-name">No file chosen</span></div>
        </div>
        <div class="form-group">
          <label>Detected Pages</label>
          <input type="text" placeholder="Pages will be auto-detected" readonly style="background:var(--gray-50);">
        </div>
        <div class="form-group">
          <label>Number of Copies <span class="req">*</span></label>
          <input type="number" placeholder="How many copies do you need?" min="1">
        </div>
        <div class="form-group">
          <label>Color Type <span class="req">*</span></label>
          <select><option value="">Select Color Type</option><option>Black & White</option><option>Color</option></select>
        </div>
        <div class="form-group">
          <label>Pages to Print <span class="req">*</span></label>
          <select><option value="">Select Option</option><option>All Pages</option><option>Specific Pages</option><option>Odd Pages</option><option>Even Pages</option></select>
        </div>
        <div class="form-group">
          <label>Document Size <span class="req">*</span></label>
          <select><option value="">Select Size</option><option>Short (8.5×11)</option><option>Long (8.5×13)</option><option>A4 (8.27×11.69)</option></select>
        </div>
      </div>`;
}