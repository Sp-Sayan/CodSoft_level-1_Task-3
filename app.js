
    // Get a reference to the output input field
    const outputField = document.querySelector('.output');

    // Get all the number buttons (buttons with class 'btn')
    const numberButtons = document.querySelectorAll('.btn:not(.blue-bg, .delete)');

    // Add click event listeners to each number button
    numberButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Append the clicked number to the current value in the output field
            outputField.value += this.value;
            
        });
    });

    // Function to clear the output field when the 'C' button is clicked
    document.querySelector('.btn[value="C"]').addEventListener('click', function() {
        outputField.value = '';
    });

        //Function to delete the last character when the 'DE' button is clicked
    document.querySelector('.btn[value="DE"]').addEventListener('click', function() {
        outputField.value = outputField.value.slice(0,-1);
    });

    // Function to calculate and display the result when the '=' button is clicked
    document.querySelector('.btn[value="="]').addEventListener('click', function() {
       if(outputField.value == ''){
        alert("Please Enter a Number first!");
       }
       else{
        try {
            outputField.value = eval(outputField.value);
        } catch (error) {
            outputField.value = 'ERROR';
        }
       }
    });

