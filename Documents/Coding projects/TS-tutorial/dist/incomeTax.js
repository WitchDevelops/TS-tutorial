"use strict";
function calculateTax(income) {
    if (income < 0) {
        return -1;
    }
    if (income <= 85528) {
        return income * 0.18 - 556.52;
    }
    return 14839.2 + (income - 85528) * 0.32;
}
//# sourceMappingURL=incomeTax.js.map