'use strict';

function getRandomId(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}
var num = 1;
var netsalary;
var sum = 0;

var level;
var sarr = [];

function getId(n) {//Create a method to generate a unique four digits employee id number.

    var string = "" + num;
    var pad = "0000";
    n = pad.substring(0, pad.length - string.length) + string;
    num++;
    return n;
}

function getSalary(level) {//You will create a method for calculating the salary using the provided table by generating a random number between the minimum and maximum salary for each leve
if (level=='senior')

   return getRandomId(1500,2000);
    else if (level=='mid-senior')
    
    return getRandomId(1000,1500);
    else if (level=='mid-senior')
    
    ;
  
    else if (level=='jenior')
    return getRandomId(500,1000);

 }
function Employee(fullName, department, level, employeeID, salary, imageurl1) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.employeeID = employeeID;
    this.salary = salary;


    sarr.push(salary);
    this.imageurl1 = imageurl1;

console.log(this);
        
           
}
let ghazi = new Employee('Ghazi Samer', 'Administration', 'senior', getId(), getSalary('senior'));
let lana = new Employee('Lana Ali', 'Finance', 'senior', getId(), getSalary('senior'),);
let tamara = new Employee('Tamara Ayoub ', 'Marketing', 'senior', getId(), getSalary('senior'),)
let safi = new Employee('Safi Walid	', 'Administration', 'mid-senior', getId(), getSalary('mid-senior'),)
let omar = new Employee('Omar Zaid', 'Development', 'senior', getId(), getSalary('senior'),)
let rana = new Employee('Rana Saleh ', 'Development', 'jenior', getId(), getSalary('jenior'),)
let hadi = new Employee('Hadi Ahmad ', 'Finance', 'mid-senior', getId(), getSalary('mid-senior'),)
  







var newArray = sarr.concat(newArray);
{
    for (let index = 1; index < sarr.length; index++) {

        sum = sum + newArray[index]

      
    }
    
    netsalary = (sum - (sum * .075))//After calculating the random salary you should calculate the net salary where the tax percent is 7.5.
    console.log("The net salary is  " + netsalary)
}

document.getElementById("demo").innerHTML =
    ' Employee name    ' + ghazi.fullName + ' Employee salary    ' + ghazi.salary + '\n' + //You will create a render method to render each employee's name with their salary on the home page using document. write() or you can use innerHTML to display them.
    ' Employee name ' + lana.fullName + ' Employee salary ' + lana.salary + '\n' +
    ' Employee name ' + tamara.fullName + ' Employee salary ' + tamara.salary + '\n' +
    ' Employee name ' + safi.fullName + ' Employee salary ' + safi.salary + '\n' +
    ' Employee name ' + omar.fullName + ' Employee salary ' + omar.salary + '\n' +
    ' Employee name ' + rana.fullName + ' Employee salary ' + rana.salary + '\n' +
    ' Employee name ' + hadi.fullName + ' Employee salary ' + hadi.salary + '\n';