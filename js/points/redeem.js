const CONVERSION_RATE = 10; 

function openRedeemModal() {
    if (pointsState.balance < CONVERSION_RATE) {
        showToast(`You need at least ${CONVERSION_RATE} points to redeem.`);
        return;
    }
    document.getElementById('redeem-amount').value = '';
    document.getElementById('redeem-globe-number').value = '';
    document.getElementById('redeem-preview').textContent = 'You will receive 0 Globe Rewards points';
    document.getElementById('redeem-modal-overlay').classList.add('show');
}

function closeRedeemModal() {
    document.getElementById('redeem-modal-overlay').classList.remove('show');
}

function handleRedeemAmountInput(value) {
    const amt = parseInt(value) || 0;
    const globePts = Math.floor(amt / CONVERSION_RATE);
    document.getElementById('redeem-preview').textContent = `You will receive ${globePts} Globe Rewards points`;
}

function confirmRedeem() {
    const amt = parseInt(document.getElementById('redeem-amount').value) || 0;
    const globeNumber = document.getElementById('redeem-globe-number').value.trim();
    
    if (!amt || amt < CONVERSION_RATE) { 
        showToast(`Minimum redemption is ${CONVERSION_RATE} points.`); 
        return; 
    }
    if (amt > pointsState.balance) { 
        showToast('You do not have enough points for this request.'); 
        return; 
    }
    if (!globeNumber) { 
        showToast('Please enter your registered Globe/TM number.'); 
        return; 
    }

    pointsState.balance -= amt;
    pointsState.redeemed += amt;
    pointsState.ledger.unshift({
        svc: `Redeemed to ${globeNumber}`,
        pts: amt,
        type: 'redeem',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    });
    
    refreshPointsUI();
    closeRedeemModal();
    showToast(' Redemption request submitted! Processed within 3-5 business days.');
    
    if (typeof savePointsState === 'function') {
        savePointsState();
    }
}