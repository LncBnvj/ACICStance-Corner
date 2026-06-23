// Central localized system timestamp compiler strings
function getFormattedCurrentDate() {
    return new Date().toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
    });
}