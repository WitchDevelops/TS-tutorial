function kgToLbs(weight: number | string): number { // this is called union types
    //narrowing
    if (typeof weight === "number") {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}