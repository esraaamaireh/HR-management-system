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


    // let divE = document.createElement("div");
    let main = document.getElementsByClassName("main1")[0];


    let divA = document.createElement("div");
    // main.appendChild(divA);

    let divM = document.createElement("div");

    let divF = document.createElement("div");

    let divD = document.createElement("div");
    main.appendChild(divA)[1];
    main.appendChild(divM)[3];
    main.appendChild(divF)[4];
    main.appendChild(divD)[2];





    if (this.department === "Administration") {

        let imgE = document.createElement("img");
        imgE.setAttribute("src", this.imageurl1);
        imgE.style.width = "300px";
        imgE.style.height = "300px";
        imgE.style.paddingTop = '10px';
        divA.appendChild(imgE);
        let employeeName = document.createElement("h4");
        employeeName.textContent = ` Name : ${this.fullName}`;
        divA.appendChild(employeeName);
        let employeeId = document.createElement("h4");
        employeeId.textContent = `ID: ${this.employeeID()}`;
        divA.appendChild(employeeId);
        let departMent = document.createElement("h4");
        departMent.textContent = ` Department : ${this.department} `;
        divA.appendChild(departMent);
        let eLevel = document.createElement("h4");
        eLevel.textContent = ` Level  : ${this.level} `;
        divA.appendChild(eLevel);
        let eSalary = document.createElement("h4");
        eSalary.textContent = ` Salary : ${this.salary()}`;
        divA.appendChild(eSalary);
        divA.style.border = "1px solid";
        divA.style.borderRadius = "10px"
        divA.style.backgroundColor = " rgb(176, 160, 158)";
     
        divA.style.justifyItems = "space-evenly;"

    }
    if (this.department === "Finance") {


        let imgE = document.createElement("img");
        imgE.setAttribute("src", this.imageurl1);
        imgE.style.width = "300px";
        imgE.style.height = "300px";
        divF.appendChild(imgE);
        let employeeName = document.createElement("h4");
        employeeName.textContent = ` Name : ${this.fullName}`;
        divF.appendChild(employeeName);
        let employeeId = document.createElement("h4");
        employeeId.textContent = `ID: ${this.employeeID()}`;
        divF.appendChild(employeeId);
        let departMent = document.createElement("h4");
        departMent.textContent = ` Department : ${this.department} `;
        divF.appendChild(departMent);
        let eLevel = document.createElement("h4");
        eLevel.textContent = ` Level  : ${this.level} `;
        divF.appendChild(eLevel);
        let eSalary = document.createElement("h4");
        eSalary.textContent = ` Salary : ${this.salary()}`;
        divF.appendChild(eSalary);
        divF.style.border = "1px solid";
        divF.style.borderRadius = "10px"
        divF.style.backgroundColor = "#C0DBEA";
        divF.style.alignContent = "inline";
        divF.style.justifyItems = "space-evenly;"
       
    }
    if (this.department === "Marketing") {



        let imgE = document.createElement("img");
        imgE.setAttribute("src", this.imageurl1);
        imgE.style.width = "300px";
        imgE.style.height = "300px";
        divM.appendChild(imgE);
        let employeeName = document.createElement("h4");
        employeeName.textContent = ` Name : ${this.fullName}`;
        divM.appendChild(employeeName);
        let employeeId = document.createElement("h4");
        employeeId.textContent = `ID: ${this.employeeID()}`;
        divM.appendChild(employeeId);
        let departMent = document.createElement("h4");
        departMent.textContent = ` Department : ${this.department} `;
        divM.appendChild(departMent);
        let eLevel = document.createElement("h4");
        eLevel.textContent = ` Level  : ${this.level} `;
        divM.appendChild(eLevel);
        let eSalary = document.createElement("h4");
        eSalary.textContent = ` Salary : ${this.salary()}`;
        divM.appendChild(eSalary);
        divM.style.border = "1px solid";
        divM.style.borderRadius = "10px"
        divF.style.backgroundColor = "rgb(174, 226, 255)";
        divM.style.alignContent = "inline";
        divM.style.justifyItems = "space-evenly;"

    }
    if (this.department === "Development") {



        let imgE = document.createElement("img");
        imgE.setAttribute("src", this.imageurl1);
        imgE.style.width = "300px";
        imgE.style.height = "300px";
        divD.appendChild(imgE);
        let employeeName = document.createElement("h4");
        employeeName.textContent = ` Name : ${this.fullName}`;
        divD.appendChild(employeeName);
        let employeeId = document.createElement("h4");
        employeeId.textContent = `ID: ${this.employeeID()}`;
        divD.appendChild(employeeId);
        let departMent = document.createElement("h4");
        departMent.textContent = ` Department : ${this.department} `;
        divD.appendChild(departMent);
        let eLevel = document.createElement("h4");
        eLevel.textContent = ` Level  : ${this.level} `;
        divD.appendChild(eLevel);
        let eSalary = document.createElement("h4");
        eSalary.textContent = ` Salary : ${this.salary()}`;
        divD.appendChild(eSalary);
        divD.style.border = "1px solid";
        divD.style.borderRadius = "10px"
        divD.style.backgroundColor = "rgb(231, 203, 203)";
      
   

    }
    //styling 




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

let safi = new Employee(' Safi Walid ', 'Administration', 'mid-senior', "./asset/Safi.jpg");

let lana = new Employee('Lana Ali', 'Finance', 'senior', "./asset/Lana.jpg");

let hadi = new Employee(' Hadi Ahmad    ', 'Finance', 'senior', "./asset/Hadi.jpg");






let omar = new Employee('Omar Zaid', 'Development', 'senior', "./asset/Omar.jpg");

let rana = new Employee(' Rana Saleh   ', 'Development', 'jenior', "./asset/Rana.jpg");


let tamara = new Employee(' Tamara Ayoub ', 'Marketing', 'senior', "./asset/Tamara.jpg");








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



