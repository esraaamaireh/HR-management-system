'use strict';

var num = 1;
var n; var netsalary;
var sum = 0;
const earr = [];

function Employee(fullName, department, level, imageurl1) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;


    this.imageurl = imageurl1;
    earr.push(this);
    console.log(earr);


}
Employee.prototype.render = function () {
    document.write(`</br> </br> </br> <div class ="data" :>Employee name :  ${ghazi.fullName}  Department: ${ghazi.department} Employee salary : ${ghazi.salary('senior')}    <\div></br> 
    <div class ="data" :> Employee name :  ${lana.fullName}  Department: ${lana.department}. Employee salary : ${lana.salary('senior')}<\div></br>
 </br>   <div class ="data" :> Employee name :  ${tamara.fullName}  Department: ${tamara.department}. Employee salary : ${tamara.salary('senior')}<\div></br>
  </br> <div class ="data" :>  Employee name :  ${safi.fullName}  Department: ${safi.department}. Employee salary : ${safi.salary('senior')}<\div></br>
   </br><div class ="data" :>  Employee name : ${omar.fullName}  Department: ${omar.department}. Employee salary : ${omar.salary('senior')}<\div></br>
 </br> <div class ="data" :>   Employee name :  ${rana.fullName}  Department: ${rana.department}. Employee salary : ${rana.salary('senior')}<\div></br>
 </br>  <div class ="data" :>  Employee name :  ${hadi.fullName}  Department: ${hadi.department}. Employee salary : ${hadi.salary('senior')}<div></br>`);

}

Employee.prototype.employeeID = function () {
    var string = "" + num;
    var pad = "0000";
    n = pad.substring(0, pad.length - string.length) + string;
    num++;
    return n;

}
Employee.prototype.salary = function (level) {
    if (level == 'senior')

        return getRandomIdForSalary(1500, 2000)
    else if (level == 'mid-senior')

        return getRandomIdForSalary(1000, 1500)

    else if (level == 'jenior')
        return getRandomIdForSalary(500, 1000)

}
    ;
var ghazi = new Employee('Ghazi Samer', 'Administration', 'senior', 'ghazi photo ');

console.log(ghazi.employeeID(n));

let lana = new Employee('Lana Ali', 'Finance', 'senior', 'lana photo ');

console.log('Emolyee id is ' + lana.employeeID(n));

let tamara = new Employee(' Tamara Ayoub ', 'Marketing', 'senior', 'tamara photo ');
console.log('Emolyee id is ' + tamara.employeeID(n));

let safi = new Employee(' Safi Walid ', 'Administration', 'mid-senior', 'safi photo ');
console.log('Emolyee id is ' + safi.employeeID(n));
let omar = new Employee('Omar Zaid', 'Development', 'senior', 'omar photo ');
console.log('Emolyee id is ' + omar.employeeID(n));
let rana = new Employee(' Rana Saleh   ', 'Development', 'jenior', 'rana photo ');
console.log('Emolyee id is ' + rana.employeeID(n) + 'employee salary ' + rana.salary('jenior'));
let hadi = new Employee(' Hadi Ahmad    ', 'Finance', 'senior', 'hadi photo ');
console.log('Emolyee id is ' + hadi.employeeID(n));












////net salary calculating
function getRandomIdForSalary(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

var net;

function netSalary(net) {
    sum = ghazi.salary('senior') + lana.salary('senior') + tamara.salary('senior') + safi.salary('mid-senior') + omar.salary('senior') + rana.salary('jenior') + hadi.salary('senior');


    return net = (sum - (sum * .075))
} console.log("The net salary of all employees is  " + netSalary(net))


ghazi.render();