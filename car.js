function checkDriverAge(age){
    if (age < Number(18)) {
         console.log("sorry you are too young to drive this car. Powering off");
    }
    else if (age > Number(18)) {
         console.log("Powering On. Enjoy the ride!");
    }
    else {
         console.log("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

var age = function(){
    var age = prompt("What is your age?")
    if (age < Number(18)) {
        alert("sorry you are too young to drive this car. Powering off");
    }
    else if (age > Number(18)) {
        alert("Powering On. Enjoy the ride!");
    }
    else {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
