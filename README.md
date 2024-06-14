# Car Leasing Calculator

This project is a Car Leasing Calculator web application that allows users to calculate the total leasing cost, down payment, monthly installment, and interest rate based on their input. The application is built using HTML, CSS, and JavaScript.

## Features
- Input fields for car type, car value, lease period, and down payment percentage.
- Synchronized sliders and input fields for car value and down payment percentage.
- Dynamic calculation of total leasing cost, down payment, monthly installment, and interest rate.
- Validation of user inputs with error messages.

## Approach

### HTML
The HTML structure consists of a form with input fields for selecting the car type, entering the car value, selecting the lease period, and entering the down payment percentage. Two sliders are used to adjust the car value and down payment percentage dynamically. A results section displays the calculated leasing details.

### CSS
The CSS provides styling for the layout and appearance of the form and results. Flexbox is used to create a responsive layout, and media queries adjust the layout for smaller screens. Specific styles are added for labels, inputs, sliders, and error messages.

### JavaScript
The JavaScript code binds the input fields and sliders, ensuring they are synchronized. It also performs the calculations for the leasing details and updates the results section dynamically. Input validation is implemented to ensure that user inputs are within valid ranges.

## Structure

### HTML
The `index.html` file contains the structure of the form and the results section.

### CSS
The `styles.css` file contains the styles for the layout, input fields, sliders, and results.

### JavaScript
The `script.js` file contains the logic for synchronizing inputs and sliders, validating inputs, and calculating leasing details.

## Usage
1. Open `index.html` in a web browser.
2. Select the car type from the dropdown.
3. Enter the car value or use the slider to adjust it (within the range €10,000 - €200,000).
4. Select the lease period from the dropdown.
5. Enter the down payment percentage or use the slider to adjust it (within the range 10% - 50%).
6. The results section will dynamically display the total leasing cost, down payment, monthly installment, and interest rate based on the inputs.

## Validation
- Car value must be between €10,000 and €200,000.
- Down payment percentage must be between 10% and 50%.
- Error messages are displayed if inputs are out of range or invalid.

## Styling
- Flexbox is used for a responsive layout.
- Media queries adjust the layout for screens smaller than 1200px and 768px.
- Labels, inputs, sliders, and error messages are styled for a clean and user-friendly interface.
