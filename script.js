'use strict';

// DOM element references
const transactions = document.getElementById('transactions');
const tbody = document.querySelector('tbody');
const showError = document.getElementById('error');
const totalAmount = document.getElementById('calculateAmount');
const clear = document.getElementById('clear');

// Get initial table body content
let tbodyinner = document.querySelector('tbody').innerHTML;

// Array to store expense entries (amount, date, and category)
let char = [];

// Show message if no transactions exist
if (tbodyinner === '') {
    console.log(transactions.innerHTML = `<h3>No Recent Transactions</h3>`)
}

// Initially hide UI elements
totalAmount.classList.add('invisible');
showError.classList.add('invisible');
clear.classList.add('invisible');

/**
 * Handles the addition of a new expense entry
 * Validates input, updates the UI, and maintains the expense records
 */
const pushToArray = () => {
    // Get input values
    const dateOfExpense = document.getElementById('expense-date').value;
    const selectAttr = document.getElementById('select-expense').value;
    const selectElement = document.getElementById('select-expense');
    const selectedText = selectElement.options[selectAttr].text;

    // Get current date for validation
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Add 1 because getMonth() is 0-indexed
    const day = now.getDate();
    const currentDate = `${year}-${month}-${day}`;

    // Initialize variables for expense calculation
    let total = 0;
    let amount = document.getElementById('expense-amount').value;

    // Clean up amount input by removing all spaces
    amount = amount.replace(/ +/g, '');

    // Set error message color
    showError.style.color = 'red';

    // Input validation
    if (amount.trim() === '' && dateOfExpense.trim() === '') {
        // Both amount and date are empty
        showError.classList.remove('invisible');
        showError.innerHTML = `<h3>No parameter found in Amount and Date</h3>`;
    } else if (amount <= 0 || isNaN(amount) || amount.length > 9) {
        // Amount is invalid (negative, non-numeric, or too large)
        showError.classList.remove('invisible');
        showError.innerHTML = `<h3>Invalid Parameter in Amount</h3>`;
    } else if (dateOfExpense.trim() === '') {
        // Date is empty
        showError.classList.remove('invisible');
        showError.innerHTML = `<h3>No value found in Date</h3>`;
    } else if (dateOfExpense > currentDate) {
        // Date is in the future
        showError.classList.remove('invisible');
        showError.innerHTML = `<h3>Date cannot be in the future</h3>`;
    }
    else {
        // All validation passed, update UI elements visibility
        totalAmount.classList.add('visible');
        showError.classList.add('invisible');
        transactions.classList.add('invisible');
        clear.classList.remove('invisible');
        totalAmount.classList.remove('invisible');

        // Store expense details in array
        // Format: [amount1, date1, category1, amount2, date2, category2, ...]
        char.push(amount);
        char.push(dateOfExpense);
        char.push(selectedText);

        // Calculate total expenses by summing amounts (every 3rd item in array)
        for (let i = 0; i < char.length; i += 3) {
            total += Number(char[i]);
        }

        // Update total amount display
        totalAmount.innerHTML = `<h2>Total amount spent is $${total}</h2>`;

        // Add new row to expense table
        // Uses the last 3 items added to the char array
        console.log(tbody.innerHTML += `
            <tr>
                <td>$${char[char.length - 3]}</td>
                <td>${char[char.length - 1]}</td>
                <td>${char[char.length - 2]}</td>
                <td><button type="button" id="delete-row" onclick="deleteRow()">Delete Row</button></td>
            </tr>
        `);
        // <td><button type="button" id="delete-row" onclick="deleteRow()">Delete Row</button></td>

        // Reset form inputs after successful addition
        document.getElementById("expense-amount").value = '';
        document.getElementById("expense-date").value = '';
        document.getElementById('select-expense').value = '0';
    }
}

/**
 * Clears all expense entries and resets the UI
 * - Empties the expense array
 * - Clears the table
 * - Resets visibility of UI elements
 */
const clearTable = () => {
    char = [];  // Reset expense array
    document.querySelector('tbody').innerHTML = '';  // Clear table

    // Reset UI elements visibility
    transactions.classList.remove('invisible');
    document.getElementById('clear').classList.add('invisible');
    totalAmount.classList.add('invisible');
}

/**
 * Deletes a single row from the expense table
 * Note: Current implementation has limitations and could be improved
 * to properly remove the corresponding data from the char array
 */

// const deleteRow = () => {
//     document.querySelector('body').classList.toggle('mode')
// }


//button to change the body theme
const bgtheme = () => {
    document.querySelector('body').classList.toggle('theme')
}