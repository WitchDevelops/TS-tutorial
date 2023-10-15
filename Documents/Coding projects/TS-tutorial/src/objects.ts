// DRY rewrite
type Employee = { // this is called type alias
    readonly id: number, //make it read only
    name?: string, //make it optional
    retire: (date: Date) => void //void means it doesn't return anything
}

let employee: Employee = {
    id: 1,
    retire: (date: Date) => {
        console.log(date);
    }
}

employee.name = "Domi";


