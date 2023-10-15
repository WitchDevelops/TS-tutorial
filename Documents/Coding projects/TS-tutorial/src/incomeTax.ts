function calculateTax(income: number): number {
    //let x;
    if (income < 0) {
        return -1;
    }
    if (income <= 85_528) {
        return income * 0.18 - 556.52;
    }
    return 14_839.2 + (income - 85_528) * 0.32;
}