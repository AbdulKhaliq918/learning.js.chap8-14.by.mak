//clear statement
function clearStatement() {
    document.getElementById("inputBox").innerHTML = "";
}
//clear output
function clearOutput() {
    document.getElementById("outputBox").innerHTML = "";
}
//Concatenate Some Strings
function concatenate() {
    let num1 = prompt("Enter Any Word")
    let num2 = +prompt("Enter Any Number")
    let sum = num1 + num2
    console.log("Concatenate result : " + sum);
    document.getElementById("inputBox").innerHTML = "<b>Before Concatenate: </b>" + num1 + " + " + num2;
    document.getElementById("outputBox").innerHTML = "<b>After Concatenate: </b>" + sum;
}
//Ask Name From User
function askName() {
    let name = prompt("Enter Your Full Name")
    document.getElementById("inputBox").innerHTML = "Your Full Name is....!";
    document.getElementById("outputBox").innerHTML = name;
    console.log("Your Full Name is..." + name);

    if (name === "abdulkhaliq") {
        alert(" Your name is very Superior!")
        console.log("abdulkhaliq. Your name is very Superior!");
    }
    else {
        alert(" Your name is  Good!")
        console.log(name + ". Your name is  Good!");

    }
}
//Comparison Operators
function comparison() {
    let num1 = +prompt("Enter First number");
    let num2 = +prompt("Enter Second number");
    let operator = prompt("Select an operator to use (<,>,<=,>=,=,!=) ");
    if (operator === "<") {
        let output = num1 < num2
        document.getElementById("inputBox").innerHTML = num1 + "< " + num2;
        document.getElementById("outputBox").innerHTML = output;
        console.log(num1 + " < " + num2 + "(" + output + ")");
    }
    else if (operator === ">") {
        let output = num1 > num2
        document.getElementById("inputBox").innerHTML = num1 + "> " + num2;
        document.getElementById("outputBox").innerHTML = output;
        console.log(num1 + " > " + num2 + "(" + output + ")");
    }
    else if (operator === "<=") {
        let output = num1 <= num2
        document.getElementById("inputBox").innerHTML = num1 + "<= " + num2;
        document.getElementById("outputBox").innerHTML = output;
        console.log(num1 + " <= " + num2 + "(" + output + ")");
    }
    else if (operator === ">=") {
        let output = num1 >= num2
        document.getElementById("inputBox").innerHTML = num1 + ">= " + num2;
        document.getElementById("outputBox").innerHTML = output;
        console.log(num1 + " >= " + num2 + "(" + output + ")");
    }
    else if (operator === "=") {
        let output = num1 == num2
        document.getElementById("inputBox").innerHTML = num1 + "=" + num2;
        document.getElementById("outputBox").innerHTML = output;
        console.log(num1 + " = " + num2 + "(" + output + ")");
    }
    else if (operator === "!=") {
        let output = num1 != num2
        document.getElementById("inputBox").innerHTML = num1 + "!= " + num2;
        document.getElementById("outputBox").innerHTML = output;
        console.log(num1 + " != " + num2 + "(" + output + ")");
    } else {
        document.getElementById("inputBox").innerHTML = " Please select from these opertors... <b>(<,>,<=,>=,=,!=)</b>";
        document.getElementById("outputBox").innerHTML = "You write &#10090 " + operator + " &#10091 Which is not a <b>Comparison Operator.</b>";
        console.log("You write ( " + operator + " ) Which is not a Comparison Operator.");
        alert("Invalid Operator");
    }

}
//If Else If
function ifElse() {
    let number = +prompt("Enter your obtain marks between '1 to 100' ");
    let grade;
    if (number >= 90 && number <= 100) {
        document.getElementById("inputBox").innerHTML = "Grade :<b> A+</b> ";
        document.getElementById("outputBox").innerHTML = "<b>Total Marks: </b> " + number;
        console.log("Mark= " + number + " , Grade=A+");
        alert("Your Grade is A+");


    }
    else if (number >= 80 && number <= 89) {
        document.getElementById("inputBox").innerHTML = "Grade :<b> A</b> ";
        document.getElementById("outputBox").innerHTML = "<b>Total Marks: </b> " + number;
        console.log("Mark= " + number + " , Grade=A");
        alert("Your Grade is A");


    }
    else if (number >= 70 && number <= 79) {
        document.getElementById("inputBox").innerHTML = "Grade :<b> B+</b> ";
        document.getElementById("outputBox").innerHTML = "<b>Total Marks: </b> " + number;
        console.log("Mark= " + number + " , Grade=B+");
        alert("Your Grade is B+");


    }
    else if (number >= 60 && number <= 69) {
        document.getElementById("inputBox").innerHTML = "Grade : <b> B</b>";
        document.getElementById("outputBox").innerHTML = "<b>Total Marks: </b> " + number;
        console.log("Mark= " + number + " , Grade=B");
        alert("Your Grade is B");


    }
    else if (number >= 50 && number <= 59) {
        document.getElementById("inputBox").innerHTML = "Grade : <b> C</b> ";
        document.getElementById("outputBox").innerHTML = "<b>Total Marks: </b> " + number;
        console.log("Mark= " + number + " , Grade=C");
        alert("Your Grade is C");


    }
    else if (number >= 40 && number <= 49) {
        document.getElementById("inputBox").innerHTML = "Grade : <b> D</b> ";
        document.getElementById("outputBox").innerHTML = "<b>Total Marks: </b> " + number;
        console.log("Mark= " + number + " , Grade=D");
        alert("Your Grade is D");
    } else if (number >= 0 && number <= 39) {
        document.getElementById("inputBox").innerHTML = "Grade : <b> F</b> ";
        document.getElementById("outputBox").innerHTML = "<b>Total Marks: </b> " + number;
        console.log("Mark= " + number + " , Grade=F");
        alert("Your Grade is F");


    } else {
        document.getElementById("inputBox").innerHTML = " <b> Invalid Number.</b>";
        document.getElementById("outputBox").innerHTML = "<b>Total Marks: </b> 0 ";
        console.log("Your marks is invalid");
        alert("Your marks is invalid");


    }
}
// Testing Sets of Condition
function testSets() {
    let num1 = +prompt("Enter First Number");
    let num2 = +prompt("Enter Second Number");
    let num3 = +prompt("Enter Third Number");
    let bigger;
    if (num1 >= num2 && num1 >= num3) {
        bigger = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        bigger = num2;

    } else {
        bigger = num3;
    }
    document.getElementById("inputBox").innerHTML = "Number1 = " + num1 + "<br> Number2 = " + num2 + "<br> Number3 = " + num3;
    console.log("The Largest Number is " + bigger);
    alert("The Largest Number is " + bigger);
    document.getElementById("outputBox").innerHTML = "<b>The Largest Number is </b>" + bigger;
}
// If statement Nested
function ifStatement() {
    let age = +prompt("Please enter your Age:", "9");
    if (age >= 18 && age <= 75) {
        let weight = +prompt("How much do you weight?", "15");
        if (weight >= 15 && weight < 40) {
            console.log("Your age is (" + age + ") and Your are a weak guy .");
            document.getElementById("inputBox").innerHTML = "Your age is &#10090 " + age + " &#10091. <br> Your weight is &#10090 " + weight + " &#10091. ";
            document.getElementById("outputBox").innerHTML = "Your are a <b>Weak Guy. &#128543;</b> ";
            alert("Your are Weak Guy. ");
        } else if (weight >= 40 && weight <= 70) {
            console.log("Your age is (" + age + ") and Your are a smart guy. ");
            document.getElementById("inputBox").innerHTML = "Your age is &#10090 " + age + " &#10091. <br> Your weight is &#10090 " + weight + " &#10091. ";
            document.getElementById("outputBox").innerHTML = "Your are a <b>Smart Guy. &#128526;</b> ";
            alert("Your are Smart Guy. ");

        } else if (weight > 70) {
            console.log("Your age is (" + age + ") and Your are a Fat guy. ");
            document.getElementById("inputBox").innerHTML = "Your age is &#10090 " + age + " &#10091 . <br> Your weight is &#10090 " + weight + " &#10091. ";
            document.getElementById("outputBox").innerHTML = "Your are a <b>Fat Guy. &#129323;</b> ";
            alert("Your are Fat Guy. ");

        }
        else {
            console.log("Your age is (" + age + ") and Your are a very weak guy. ");
            document.getElementById("inputBox").innerHTML = "Your age is &#10090 " + age + " &#10091 . <br> Your weight is &#10090 " + weight + " &#10091. ";
            document.getElementById("outputBox").innerHTML = "Your are a <b>Very Weak Guy. &#128543</b> ";
            alert("Your are very Weak Guy. ");

        }
    }
    else if (age > 75) {
        console.log("Your age is (" + age + ") and Your are a older guy. ");
        document.getElementById("inputBox").innerHTML = " Your age is  &#10090 " + age + " &#10091.";
        document.getElementById("outputBox").innerHTML = "Your are a <b>Older Guy. &#128116;</b> ";
        alert("Your are Older Guy. ");

    }
    else {
        console.log("Your age is (" + age + ") and Your are under 18 years old! ");
        document.getElementById("inputBox").innerHTML = "Your age is &#10090 " + age + " &#10091.";
        document.getElementById("outputBox").innerHTML = "Your are <b>Baby.</b> &#128118";
        alert("Your are under 18 years old!");

    }


}

// Login
function login() {
    alert("Please Login First ?");
    document.getElementById("inputBox").innerHTML = " ";
    document.getElementById("outputBox").innerHTML = " ";
}
// sign
function sign() {
    alert("Welcome ! Please make your account .");
    document.getElementById("inputBox").innerHTML = " ";
    document.getElementById("outputBox").innerHTML = " ";
}