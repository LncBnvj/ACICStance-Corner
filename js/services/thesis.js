function getThesisTemplate() {
    return `
      <div class="detail-box">
        <div class="detail-box-title"> Thesis/Capstone Binding Details</div>
        <div class="form-group">
          <label>Title of Thesis/Capstone</label>
          <input type="text" placeholder="ex. AI-Powered Student Management System">
        </div>
        <div class="form-group">
          <label>Proponents</label>
          <textarea placeholder="List proponents, one per line"></textarea>
        </div>
        <div class="form-group">
          <label>Block</label>
          <input type="text" placeholder="ex. CS-4101">
        </div>
        <div class="form-group">
          <label>GSuite Account of Leader</label>
          <input type="email" placeholder="22-01234@g.batstate-u.edu.ph">
        </div>
        <div class="form-group">
          <label>Name of Thesis/Capstone Adviser</label>
          <input type="text" placeholder="">
        </div>
        <div class="form-group">
          <label>Signed Approval Sheet</label>
          <div class="file-input-wrap"><button class="file-btn">Choose File</button><span class="file-name">No file chosen</span></div>
        </div>
        <div class="slot-badge">Available Slots: 12/12</div>
      </div>`;
}