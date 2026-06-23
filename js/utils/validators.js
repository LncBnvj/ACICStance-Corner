// Global pattern match expression verifiers
function isValidSRCode(code) {
    const pattern = /^\d{2}-\d{5}$/;
    return pattern.test(code.trim());
}