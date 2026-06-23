// Local memory runtime single state container instance
let pointsState = {
    balance: 0,
    lifetime: 0,
    redeemed: 0,
    servicesCount: 0,
    ledger: [] 
};

function initPointsEngine() {
    // Hook point to add localStorage parse/hydration lines if required
    refreshPointsUI();
}

function savePointsState() {
    // Optional persistence synchronization location
}

function refreshPointsUI() {
    const balEl = document.getElementById('points-balance');
    const lifeEl = document.getElementById('points-lifetime');
    const redEl = document.getElementById('points-redeemed');
    const svcEl = document.getElementById('points-services');
    const homeBalEl = document.getElementById('home-points-balance');
    const phpEstEl = document.getElementById('points-php-est');
    
    if (balEl) balEl.textContent = pointsState.balance;
    if (lifeEl) lifeEl.textContent = pointsState.lifetime;
    if (redEl) redEl.textContent = pointsState.redeemed;
    if (svcEl) svcEl.textContent = pointsState.servicesCount;
    if (homeBalEl) homeBalEl.textContent = pointsState.balance;
    if (phpEstEl) phpEstEl.textContent = Math.floor(pointsState.balance / 10) + ' Globe pts';

    const ledgerContainer = document.getElementById('points-ledger');
    if (ledgerContainer) {
        if (pointsState.ledger.length === 0) {
            ledgerContainer.innerHTML = '<p style="font-size:0.8rem;color:var(--gray-500);text-align:center;padding:16px 0;">No points activity yet. Avail a service to start earning!</p>';
        } else {
            ledgerContainer.innerHTML = pointsState.ledger.map(entry => `
                <div class="ledger-item">
                  <div class="ledger-info">
                    <div class="svc">${entry.type === 'redeem' ? 'Redemption Request' : entry.svc}</div>
                    <div class="date">${entry.date}</div>
                  </div>
                  <div class="ledger-pts ${entry.type}">${entry.type === 'earn' ? '+' : '-'}${entry.pts} pts</div>
                </div>
            `).join('');
        }
    }

    const redeemBtn = document.getElementById('redeem-trigger-btn');
    if (redeemBtn) redeemBtn.disabled = pointsState.balance < 10;
}