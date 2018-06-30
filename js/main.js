// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>

// Declare variable that will 
// store regular expression for email
const button = document.querySelector("form");
const fullname = document.querySelector("full-name");
const message = document.querySelector("message");
const email = document.querySelector("email");

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
function validate()
{
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors
    
    let data = [];
    let error = [];
    
    /*
    +-----------+    
    | FULL NAME |
    +-----------+ */
    // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.

    if(fullname !== "")
    {
        //Come back to this 
        data[0] = fullname;
    }
    else
    {
        error[0] = "No name entered."
    }
    /*
    +-------+    
    | EMAIL | 
    +-------+ */
    // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value
          // to your object "data".
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your outer conditional here.
    
    if(email !== "")
    {
        
        data[1] = email;

    }
    else
    {
        error[2] = "No email entered."
    }
        

    /*
    +---------+    
    | MESSAGE | 
    +---------+ */
    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your conditional here.*/
    
    if(message !== "")
    {
        //Come back to this   
        data[2] = message;
    }
    else
    {
        error[3] = "No message entered."
    }   
               
               
    /*
    +-----------------+
    | FEEDBACK/ERRORS |
    +-----------------+
    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
     End your conditional here.*/
        
    if(error.length < 1 )
    {
        for(let i = 0; i < error.length; i++ )
        {
            console.log(error[i]);
        }
    }
    else
    {
        for(let i = 0; i < data.length; i++ )
        {
            console.log(dat[i]);
        }
    }  
}
// Close your function here
// Register your form to "click" event.
button.addEventListener("submit", validate);
