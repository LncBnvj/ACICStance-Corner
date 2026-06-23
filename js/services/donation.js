function getDonationTemplate() {
    return `
      <div class="detail-box">
        <div class="detail-box-title"> Donation Drive Details</div>
        <div class="form-group"><label>Items to Donate</label></div>
        <div class="checkbox-group">
          <label class="checkbox-label"><input type="checkbox"> Non-perishable Food</label>
          <label class="checkbox-label"><input type="checkbox"> Clothes</label>
          <label class="checkbox-label"><input type="checkbox"> School Supplies</label>
          <label class="checkbox-label"><input type="checkbox"> Medical Supplies</label>
        </div>
        <div class="form-group">
          <label>Other Items (Optional)</label>
          <textarea placeholder="List any other items you'd like to donate, one per line"></textarea>
        </div>
        <div class="form-group">
          <label>Upload Photos of Donations</label>
          <div class="file-input-wrap"><button class="file-btn">Choose Files</button><span class="file-name">No file chosen</span></div>
          <p style="font-size:0.72rem;color:var(--gray-500);margin-top:4px;">You can select multiple photos</p>
        </div>
      </div>`;
}