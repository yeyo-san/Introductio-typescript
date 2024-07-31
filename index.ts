//Golbal variables
type usersType = {
    id: number;
    name: string;
}

const users: usersType[] = [
    {
        id: 1,
        name: 'Yeyo',
    },
    {
        id: 2,
        name: 'Damian',
    }
]

const names: string[] = ['Yeyo', 'Damian', 'Carlos', 'Jerogol'];

const nums: number[] = [22,3,45,6,99,43,77]

//tarea 1
function firstFunctionInTypeScript(a: number): boolean {
    const itsValid : boolean = a % 2 === 0

    return itsValid
}

console.log( firstFunctionInTypeScript(2) );

//tarea 2
function whatTypeOfNumberIs(a: number): string {
    if(a < 0){
        return "The number is negative"
    }else if(a > 0){
        return "The number is positive"
    }else{
        return "The number is zero"
    }
}

console.log( whatTypeOfNumberIs(0) );

//tarea 3
function printNames(names: string[]){
    names.forEach(name => console.log(name));
}

printNames(names);

//tarea 4
const sumNumbers = nums.reduce((acc, currentValue) => acc + currentValue, 0);

console.log("La suma de los numeros es: ", sumNumbers);

//Tarea 5
function concaNames(names: string[]): void{
    console.log(names.join("Chupala"));
    
}

concaNames(names)

//Tarea 6
function printByArray(users: usersType[]){
    users.forEach(user => console.log(user));
    
} 

printByArray(users)

//Tarea 7
function findMaxNumber(nums: number[]): number {
    if(nums.length ===  0){
        throw new Error("Array is empty");
    }

    return Math.max(...nums)
}

const value = findMaxNumber(nums)
console.log(value);

//Tarea 8
interface Car {
    id: number;
    marca: string;
    model: number;
    year: number;
}

const cars: Car[] = [
    {
        id: 1,
        marca: 'Chevrolet',
        model: 2021,
        year: 2021
    },
    {
        id: 2,
        marca: 'Ford',
        model: 2022,
        year: 2022
    }
]

console.log(cars);

//Tarea 9
class CarInformation{
    static formaCarInfo(car: Car): string {
        return `Marca: ${car.marca}, Modelo: ${car.model}, Año: ${car.year}`;
    }
}

cars.forEach(car => {
    const carInfo = CarInformation.formaCarInfo(car)
    console.log(carInfo);
    
});

//Tarea 10
function sumYearCar(car: Car[]): number[] {
    const allCar = car.map(car => {
        return car.year =+ 1
    })
    
    return allCar
}

const newYearCars = sumYearCar(cars)
console.log(newYearCars);

//Tarea 11
const res: string = 'Esta tarea es la misma que la tarea 7'

//12
function identification(a: number, b: number, c:string): string {
    if(typeof a === typeof b && typeof a === c){
        return 'Los valores son del mismo tipo'
    }else{
        return 'Los valores no son del mismo tipo'
    }
}

const respuesta: string = identification(1, 2, "Yeyo")
console.log(respuesta);

//13

