//get the string from the page
//controller function
function getValue() {

    document.getElementById("alert").classList.add("invisible")
   let userString = document.getElementById("userString").value;

   let revString = reverseString(userString);

   displayString(revString);
}

//reverse the string
//logic function
function reverseString(userString) {

    let revString = [];


    // reverse a string using a for loop
    //AKA "decrementing for loop". 
    //This starts at the end of the array and goes backwards to 
    //zero rather than starting at zero and going forward.
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
        
    }

    return revString;

}

//display the reversed string to the user
//view function
function displayString(revString) {



    //write to the page
    document.getElementById("message").innerHTML = `Your String Reversed Is: ${revString}`;
    //show the alert box
    document.getElementById("alert").classList.remove("invisible");

}