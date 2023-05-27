'use strict';

var num = 1;
var n; var netsalary;
var sum = 0;

const allEmployee = [];

function Employee(fullName, department, level, imageurl1) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;


    this.imageurl1 = imageurl1;
   
    allEmployee.push(this);


};
Employee.prototype.render = function () {


    let divE = document.createElement("div");
    let main = document.getElementsByClassName("main1")[0];
  

    main.appendChild(divE);

    let imgE = document.createElement("img");
    imgE.setAttribute("src", this.imageurl1);
    imgE.style.width = "300px";
    imgE.style.height = "300px";
    divE.appendChild(imgE);
let employeeName = document.createElement("h4");
    employeeName.textContent = ` Name : ${this.fullName}`;
    divE.appendChild(employeeName);
    let employeeId = document.createElement("h4");
    employeeId.textContent = `ID: ${this.employeeID()}`;
    divE.appendChild(employeeId);
    let departMent = document.createElement("h4");
    departMent.textContent = ` Department : ${this.department} `;
    divE.appendChild(departMent); 
    let eLevel = document.createElement("h4");
    eLevel.textContent = ` Level  : ${this.level} `;
    divE.appendChild(eLevel);  
    let eSalary = document.createElement("h4");
    eSalary.textContent = ` Salary : ${this.salary()}`;
    divE.appendChild(eSalary);


//styling 
    divE.style.border = "1px solid";
    divE.style.borderRadius ="10px"
        divE.style.backgroundColor = "FFF8DE";
    divE.style.alignContent = "inline";
    divE.style.justifyItems="space-evenly;"
 
    

};
Employee.prototype.employeeID = function () {
    var string = "" + num;
    var pad = "0000";
    n = pad.substring(0, pad.length - string.length) + string;
    num++;
    return n;

};
Employee.prototype.salary = function () {
    if (this.level == 'senior')

        return getRandomIdForSalary(1500, 2000)
    else if (this.level == 'mid-senior')

        return getRandomIdForSalary(1000, 1500)

    else if (this.level == 'jenior')
        return getRandomIdForSalary(500, 1000)

};


let ghazi = new Employee(
    'Ghazi Samer',
    'Administration',
    'senior',
    "./asset/Ghazi.jpg");



let lana = new Employee('Lana Ali', 'Finance', 'senior', "./asset/Lana.jpg");



let tamara = new Employee(' Tamara Ayoub ', 'Marketing', 'senior', "./asset/Tamara.jpg");


let safi = new Employee(' Safi Walid ', 'Administration', 'mid-senior', "./asset/Safi.jpg");

let omar = new Employee('Omar Zaid', 'Development', 'senior', "./asset/Omar.jpg");

let rana = new Employee(' Rana Saleh   ', 'Development', 'jenior', "./asset/Rana.jpg");

let hadi = new Employee(' Hadi Ahmad    ', 'Finance', 'senior', "./asset/Hadi.jpg");









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


for (let i = 0; i < allEmployee.length; i++) {
    allEmployee[i].render();
};
