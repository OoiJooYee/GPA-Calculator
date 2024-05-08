/*
********************************************************
* Individual Assignment (JS)				   		   *
* 			                                           *
* Name:OOI JOO YEE     		                           *
* Matric Number:A21EC0218                              *
* Section:09                                           *
********************************************************
*/

/*Assessment item - Task 1*/
/*Based on your understanding, provide a DETAILED description of how function addNewSubject() works

The addNewSubject() function is used to a add a new table row with three columns at the end of the table.
The getElementById function is used to access the element with id=table_body which is from the GPAcalculator.html
and it is the subjects table. 
After that, createElement function is used to create a new row for the table and it is assigned to newTr variable.
Loop is used to store the subject name, credits and marks so when the variable i is less than 3, 
the createElement function with id=td and id=input will be used and will be assigned in the variable td and variable input.
The first iteration will be 0 so the input type will be set as text and the input size will be 30 and it is for subject.
Then, the second and third iteration will be 1 and 2, the input type will be set as number and the input size is 5 
and both are for credit and marks.
After each iteration, appendChild("input") function is called to append input to the table column.
Then, appendChild("td") is called to append the table column into the table row. 
Lastly, the table row will be append into the table by using the function appendChild("newTr").
*/
function addNewSubject() {
    var tbody = document.getElementById("table_body");
    var newTr = document.createElement("tr");
    for (var i = 0; i < 3; ++i) {
        var td = document.createElement("td");
        var input = document.createElement("input");

        if (i == 2 || i == 1) {  
            input.type = "number";
            input.size = "5";
        }else{
            input.type = "text";
            input.size = "30";    
        }

        td.appendChild(input);
        newTr.appendChild(td);
    }
    tbody.appendChild(newTr);
}

/*Assessment item - Task 2*/
/*Based on your understanding, provide a DETAILED description of how function deleteLastSubject() works

The deleteLastSubject() function is used to delete the element at the last row of the table.
Firstly, the getElementId function is to access the element with id=myTable in the GPAcalculator.html.
The table's length will be counted by using the function rows.length and will assigned to the variable x.
If the variable x equals to 1 means that the table only has one row which is the header of the table,
so nothing can be deleted and it will return false.
If the variable x is bigger than 1 which means table has data to delete.
The function deleteRow(x-1) is used to removes the row with specific index. 
The x-1 is used because the row index is start form index 0, so it needs to minus 1 to access the last row.
*/
function deleteLastSubject() {
   
    var x = document.getElementById("myTable").rows.length;
    if (x == 1) {
        return false;
    }
    document.getElementById("myTable").deleteRow(x-1);
}

/*Assessment item - Task 3*/
/*Based on your understanding, provide a DETAILED description of how function sendElementToCalculate() works

The sendElementToCalculate() is used to access the input element and pass the element to the CalculateGPA() function.
The getElementById function is used to access the element with id=myTable in the GPAcalculator.html.
The getElementsByTagName function is used to collect the all the element with tag name="input" from table.
Then, the user input will be set as constant and the user_input variable cannot be changed.
Latly, the user input will be pass to the CalculateGPA() function.
*/
function sendElementToCalculate(){
    var tbody = document.getElementById("table_body");
    const user_input = tbody.getElementsByTagName("input");
    CalculateGPA(user_input);
}





/*Assessment item - Task 4*/
/*Based on your understanding, provide a DETAILED description of how function CalculateGPA() works.
/*Also, please add a validation (using regular expression that validates the input for Subject Name must entirely composed of alphabets (lowercase or uppercase, spaces allowed)  

The CalculateGPA() function is used to validate the element passed based on the different table columns.
The variables totalCredits and totalPoints are assigned as 0 and the length of the variable will be get the user's input length.
The loop iteration will be increased by three after each iteration which means it hols three elements in a row.

If the validation failed, it will return false and cannot submit. Once all the validation become true, 
the form submission will be successful.

The first element is the subject name and the subject name is set to be not null which means the subject name must entirely alphabet.
If the subject name is null, alert function will display the pop up message to prompt the user to enter the name of subject, 
and it is set to red color to attract user's attention.
To check the subject name is only composed alphabet, the subject name enter by user will compare with the expression /^[a-zA-Z ]+$/.
In this expression, the ^symbol represents the start of the string, [a-zA-Z ]+ represent only character a to z or A to Z or blank,
the symbol $ means the end of the string.
So, if the user enter the subject name with non alphabets charcter, the alert function will display the pop up message and prompt the user to only
enter the alphabet and the border color is set to red to attract user's attention.

The second element is credit hour. The credit hour is checked to ensure it is not null and ensure it is a whole number.
If the credit hour is validated, it will parse to float data type first and then added to the totalCredit.
It will parse to float data type as it will divide the totalPoints and get the GPA where the GPA needs to have floating point.

The third element is marks. The marks is checked to be not null.
If the marks is validated, the marks will be passed to the getPoint() function to get the respective GPA.
The GPA of the marks will be multiplied with the credit hours and added to the totalPoints variable.

After finishing the loop, the GPA is calculated bydividing the totalPoints with the totalCredits. 
The getelementByClassName function is used to access the element with class="output" from GPAcalculator.html.
There are two element in the class="output".
The first element is inserted with totalCredits using innerHTML function.
The second element is inserted with GPA using innerHTML function and the toPrecision is used to set the GPA to only 3 digits which is 2 decimal points.
*/
function CalculateGPA(user_input) {

    var totalCredits = 0;
    var totalPoints = 0;
    var length = user_input.length;
    
    

    for (var i = 0; i < length; i += 3) {
        
        if (user_input[i].value == "") {
            alert("Please Enter The Name of The Subject!");
            user_input[i].style.borderColor = 'red';
            return false;
        }
        else{
            user_input[i].style.borderColor = 'green';

            //validation
            if(user_input.value.match(/^[a-zA-Z ]+$/)==null)
            {
                alert("Please Ensure The Name Of Subject Only Using Alphabet!");
                user_input[i].style.borderColor='red';
                return false;
            }
            
        }  
        
        if (user_input[i+1].value == ""){
            alert("Please Insert Value of The Credit");
            user_input[i+1].style.borderColor = 'red';
            return false;
        }else if (user_input[i+1].value%1 != 0) {
            alert("The Value of Credit Must Be In Whole Number!");
            user_input[i+1].style.borderColor = 'red';
             
        }
        else{
            user_input[i+1].style.borderColor = 'green';
            var credit = parseFloat(user_input[i+1].value); 
            totalCredits += credit;
        }  

        
        
        var marks = user_input[i+2].value;
        if (marks == "") {
            alert("Please fill in the marks");
            user_input[i+2].style.borderColor = 'red';
            return false;
        }
        else{
            user_input[i+2].style.borderColor = 'green';
        }
        totalPoints += credit*getPoint(marks);
        
       
    }
    var GPA = totalPoints/totalCredits;
      
    const calculator_output = document.getElementsByClassName("output");
    calculator_output[0].innerHTML = totalCredits;
    calculator_output[1].innerHTML = GPA.toPrecision(3);
}


function getPoint(marks) {
    
    if (marks >= 80) {
        return 4.00;
    }
    else if (marks >= 75){
        return 3.67;
    }
    else if (marks >= 70){
        return 3.33;
    }
    else if (marks >= 65){
        return 3.00;
    }
    else if (marks >= 60){
        return 2.67;
    }
    else if (marks >= 55){
        return 2.33;
    }
    else if (marks >= 50){
        return 2.00;
    }
    else if (marks >= 45){
        return 1.67;
    }
    else if (marks >= 40){
        return 1.33;
    }
    else if (marks >= 35){
        return 1.00;
    }
    else if (marks >= 30){
        return 0.67;
    }
    else if (marks >= 0){
        return 0.00;
    }
}