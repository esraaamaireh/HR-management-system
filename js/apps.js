'use strict';

function getRandomIdforsalary(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
var num = 1;
var netsalary;
var sum = 0;
var n;
var level;
var sarr = [];
var salary;
var imageurl1;

function getId(n) {//Create a method to generate a unique four digits employee id number.

    var string = "" + num;
    var pad = "0000";
    n = pad.substring(0, pad.length - string.length) + string;
    num++;
    return n;
}

function getSalary(level) {//You will create a method for calculating the salary using the provided table by generating a random number between the minimum and maximum salary for each leve
    if (level === 'senior')

        return getRandomIdforsalary(1500, 2000);
    else if (level == 'mid-senior')

        return getRandomIdforsalary(1000, 1500);
    else if (level == 'mid-senior')

        ;

    else if (level == 'jenior')
        return getRandomIdforsalary(500, 1000);

};

var ghazi = {
    fullName: 'Ghazi Samer',
    department: 'Administration',
    level: 'senior',
    employeeID: function ()
   {    return  getId() ;
      

 }
    ,
    salary: function () {
       return getSalary('senior');
      },
    imageurl1,

    netsalarymethod: function () {
        return netSalary(net)
    }

}
console.log(ghazi);

let lana = {
    fullName: 'Lana Ali'
    ,
    department: 'Finance',
    level: 'senior',
    employeeID: function () {
       return getId();


    }
    ,
    salary: function () { return getSalary('senior')},
    imageurl1,
    netsalarymethod: function () {
        return netSalary(net)
    }

}
console.log(lana
);
let tamara = {
    fullName: ' Tamara Ayoub '
    ,
    department: 'Marketing',
    level: 'senior',
    employeeID: function() {
        return getId();


    }
    ,
    salary: function () {return getSalary('senior')},
    imageurl1,
    netsalarymethod: function () {
        return netSalary(net)
    }

}

console.log(tamara);
let safi = {
    fullName: 'Safi Walid',
    department: 'Administration',
    level: 'mid-senior',
 employeeID: function() {
     return  getId(n);


    }
    ,
    salary: function () {
        return   getSalary('mid-senior')
    },
    imageurl1,
    netsalarymethod: function () {
        return netSalary(net)
    }

}
console.log(safi
);

let omar = {
    fullName: 'Omar Zaid'
    ,
    department: 'Development',
    level: 'senior',
    employeeID: function () {
        return getId(n);


    },
    salary: function () { return  getSalary('senior')},
    imageurl1,
    netsalarymethod: function () {return  netSalary(net) 
}

}; console.log(omar
);

let rana = {
    fullName: ' Rana Saleh   '
    ,
    department: 'Development',
    level: 'jenior',
    employeeID: function () {
        return getId(n);


    }
    ,
    salary: function () { return getSalary('jenior')},
    imageurl1,
    netsalarymethod: function () {
        return netSalary(net)
    }

};console.log(rana);
let hadi = {

    fullName: ' Hadi Ahmad    '
    ,
    department: 'Finance',
    level: 'mid-senior',
    employeeID: function () {
        return   getId(n);


    }
    ,
    salary: function () {return getSalary('mid-senior')},
    imageurl1,
    netsalarymethod: function () {
        return netSalary(net)
    }

}; console.log(hadi


);
var net;
function netSalary(net) {
    sum = ghazi.salary() + tamara.salary() + lana.salary() + safi.salary() + hadi.salary() + rana.salary() + omar.salary();


    return net = (sum - (sum * .075))
}

console.log("The net salary is  " + netSalary(net))




document.getElementById("1").innerHTML = ' Employee name  ' + ghazi.fullName + ' Employee salary    ' + ghazi.salary('senior') + '\n';//You will create a render method to render each employee's name with their salary on the home page using document. write() or you can use innerHTML to display them.
document.getElementById("2").innerHTML = ' Employee name ' + lana.fullName + ' Employee salary ' + lana.salary('senior') + '\n';
document.getElementById("3").innerHTML = ' Employee name ' + tamara.fullName + ' Employee salary ' + tamara.salary('senior') + '\n';
document.getElementById("4").innerHTML = ' Employee name ' + safi.fullName + ' Employee salary ' + safi.salary('mid-senior') + '\n';
document.getElementById("5").innerHTML = ' Employee name ' + omar.fullName + ' Employee salary ' + omar.salary('senior') + '\n';
document.getElementById("6").innerHTML = ' Employee name ' + rana.fullName + ' Employee salary ' + rana.salary('jenior') + '\n';
document.getElementById("7").innerHTML = ' Employee name ' + hadi.fullName + ' Employee salary ' + hadi.salary('mid-senior') + '\n';
