// Maps inputs to conversational output structures
function getBotReply(msg) {
    const m = msg.toLowerCase();
    
    if (m.includes('borrow') || m.includes('device') || m.includes('calculator') || m.includes('charger')) {
        return botReplies.borrow;
    }
    if (m.includes('print') || m.includes('scan') || m.includes('photocopy')) {
        return botReplies.printing;
    }
    if (m.includes('thesis') || m.includes('capstone') || m.includes('binding') || m.includes('slot')) {
        return botReplies.thesis;
    }
    if (m.includes('wifi') || m.includes('wi-fi') || m.includes('internet') || m.includes('globe')) {
        return botReplies.wifi;
    }
    if (m.includes('supplies') || m.includes('ballpen') || m.includes('notebook') || m.includes('folder')) {
        return botReplies.supplies;
    }
    if (m.includes('hygiene') || m.includes('sanitary') || m.includes('alcohol')) {
        return botReplies.hygiene;
    }
    if (m.includes('donat')) {
        return botReplies.donation;
    }
    
    return botReplies.default;
}