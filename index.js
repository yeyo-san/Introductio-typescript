var users = [
    {
        id: 1,
        name: 'Yeyo',
    },
    {
        id: 2,
        name: 'Damian',
    }
];
var names = ['Yeyo', 'Damian', 'Carlos', 'Jerogol'];
var nums = [22, 3, 45, 6, 99, 43, 77];
//tarea 1
function firstFunctionInTypeScript(a) {
    var itsValid = a % 2 === 0;
    return itsValid;
}
console.log(firstFunctionInTypeScript(2));
//tarea 2
function whatTypeOfNumberIs(a) {
    if (a < 0) {
        return "The number is negative";
    }
    else if (a > 0) {
        return "The number is positive";
    }
    else {
        return "The number is zero";
    }
}
console.log(whatTypeOfNumberIs(0));
//tarea 3
function printNames(names) {
    names.forEach(function (name) { return console.log(name); });
}
printNames(names);
//tarea 4
var sumNumbers = nums.reduce(function (acc, currentValue) { return acc + currentValue; }, 0);
console.log("La suma de los numeros es: ", sumNumbers);
//Tarea 5
function concaNames(names) {
    console.log(names.join("Chupala"));
}
concaNames(names);
//Tarea 6
function printByArray(users) {
    users.forEach(function (user) { return console.log(user); });
}
printByArray(users);
//Tarea 7
function findMaxNumber(nums) {
    if (nums.length === 0) {
        throw new Error("Array is empty");
    }
    return Math.max.apply(Math, nums);
}
var value = findMaxNumber(nums);
console.log(value);
var cars = [
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
];
console.log(cars);
//Tarea 9
var CarInformation = /** @class */ (function () {
    function CarInformation() {
    }
    CarInformation.formaCarInfo = function (car) {
        return "Marca: ".concat(car.marca, ", Modelo: ").concat(car.model, ", A\u00F1o: ").concat(car.year);
    };
    return CarInformation;
}());
cars.forEach(function (car) {
    var carInfo = CarInformation.formaCarInfo(car);
    console.log(carInfo);
});
//Tarea 10
function sumYearCar(car) {
    var allCar = car.map(function (car) {
        return car.year = +1;
    });
    return allCar;
}
var newYearCars = sumYearCar(cars);
console.log(newYearCars);
//Tarea 11
var res = 'Esta tarea es la misma que la tarea 7';
//12
function identification(a, b, c) {
    if (typeof a === typeof b && typeof a === c) {
        return 'Los valores son del mismo tipo';
    }
    else {
        return 'Los valores no son del mismo tipo';
    }
}
var respuesta = identification(1, 2, "Yeyo");
console.log(respuesta);
//13
