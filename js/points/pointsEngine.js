const POINT_RATES = {
    'Printing Service': 5,
    'School Supplies Granting': 8,
    'School Essentials Borrowing': 6,
    'Hygiene Essentials Granting': 8,
    'Thesis/Capstone Binding': 20,
    'Donation Drive': 25,
    'Academic Contest Support': 30,
    'Device Reservation': 5
};

function earnPoints(svc) {
    const pts = POINT_RATES[svc] || 5;
    pointsState.balance += pts;
    pointsState.lifetime += pts;
    pointsState.servicesCount += 1;
    
    pointsState.ledger.unshift({
        svc: svc,
        pts: pts,
        type: 'earn',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    });
    
    refreshPointsUI();
    showToast(`+${pts} aCICSt Points earned!`);
    
    if (typeof savePointsState === 'function') {
        savePointsState();
    }
}