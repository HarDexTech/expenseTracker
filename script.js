'use strict';
const transactions = document.getElementById('transactions');
const tbody = document.querySelector('tbody');
let tbodyinner = document.querySelector('tbody').innerHTML;
let char = [];

if (tbodyinner === '') {
    console.log(transactions.innerHTML = `<h3>No Recent Transactions</h3>`)
}

const pushToArray = () => {
    let total = 0;
    const showError = document.getElementById('error');
    let amount = document.getElementById('expense-amount').value;
    const dateOfExpense = document.getElementById('expense-date').value;
    const totalAmount = document.getElementById('calculateAmount');
    const selectAttr = document.getElementById('select-expense').value;
    const selectElement = document.getElementById('select-expense');
    const selectedText = selectElement.options[selectAttr].text;

    amount = amount.replace(/ +/g, '');/*replace all spaces in amount input with '' */
    showError.style.color = 'red';
    if (amount.trim() === '' && dateOfExpense.trim() === '') {
        showError.style.display = 'block';
        console.error(showError.innerHTML = `<h3>No parameter found in Amount and Date</h3>`);
    } else if (amount <= 0 || isNaN(amount) || amount.length > 9) {
        showError.style.display = 'block';
        console.error(showError.innerHTML = `<h3>Invalid Parameter in Amount</h3>`);
    } else if (dateOfExpense.trim() === '') {
        showError.style.display = 'block';
        console.error(showError.innerHTML = `<h3>No value found in Date</h3>`);
    } else {
        showError.style.display = 'none';
        transactions.style.display = `none`;
        document.getElementById('calculateAmount').style.display = `block`

        //adds the value in the input to the array 'char'
        char.push(amount);
        char.push(dateOfExpense);
        char.push(selectedText);

        //to calculate the total amount on expenses
        for (let i = 0; i < char.length; i += 3) {
            total += Number(char[i]);
        }
        console.log(totalAmount.innerHTML = `<h2>Total amount spent is $${total}</h2>`);
        console.log(total)

        console.log(tbody.innerHTML += `
            <tr>
                <td>$${char[char.length - 3]}</td>
                <td>${char[char.length - 1]}</td>
                <td>${char[char.length - 2]}</td>
                <td><button type="button" id="delete-row" onclick="deleteRow()">Delete Row</button></td>
            </tr>
        `);/*adds data to rows and keeps appending table row once the add expense button is clicked */
        document.getElementById("expense-amount").value = '';
        document.getElementById("expense-date").value = '';
        document.getElementById('select-expense').value = '0';
        document.getElementById('clear').style.display = `block`
    }
}

//Button for clearing the table body
const clearTable = () => {
    char = [];//updates the current value of char
    document.querySelector('tbody').innerHTML = ``;
    transactions.style.display = `block`;
    document.getElementById('clear').style.display = `none`
    document.getElementById('calculateAmount').style.display = `none`;
}

//button for deleting table rows in the table body
const deleteRow = () => alert('hi')

// const transactions = document.getElementById('transactions');
// let char = [];
// if (char.length === 0)
//     transactions.innerHTML = `<h3>No Recent Transactions</h3>`
// const pushToArray = () => {
//     let total = 0;
//     const showError = document.getElementById('error');
//     let amount = document.getElementById('expense-amount').value;
//     const dateOfExpense = document.getElementById('expense-date').value;
//     const totalAmount = document.getElementById('calculateAmount');
//     const selectAttr = document.getElementById('select-expense').value;
//     const selectElement = document.getElementById('select-expense');
//     const selectedText = selectElement.options[selectAttr].text;
//     const tbody = document.querySelector('tbody');

//     amount = amount.replace(/ +/g, '');
//     showError.style.color = 'red';
//     if (amount.trim() === '' && dateOfExpense.trim() === '') {
//         showError.style.display = 'block';
//         console.error(showError.innerHTML = `<h3>No parameter found in Amount and Date</h3>`);
//     } else if (amount <= 0 || isNaN(amount) || amount.length > 9) {
//         showError.style.display = 'block';
//         console.error(showError.innerHTML = `<h3>Invalid Parameter in Amount</h3>`);
//     } else if (dateOfExpense.trim() === '') {
//         showError.style.display = 'block';
//         console.error(showError.innerHTML = `<h3>No value found in Date</h3>`);
//     } else {
//         showError.style.display = 'none';
//         transactions.style.display = `none`;

//         char.push(amount);
//         char.push(dateOfExpense);
//         char.push(selectedText);

//         for (let i = 0; i < char.length; i += 3) {
//             total += Number(char[i]);
//         }
//         totalAmount.innerHTML = `<h2>Total amount spent is $${total}</h2>`;

//         tbody.innerHTML += `
//             <tr>
//                 <td>$${char[char.length - 3]}</td>
//                 <td>${char[char.length - 1]}</td>
//                 <td>${char[char.length - 2]}</td>
//             </tr>
//         `

//         document.getElementById("expense-amount").value = '';
//         document.getElementById("expense-date").value = '';
//         document.getElementById('select-expense').value = '0';
//         document.getElementById('clear').style.display = `block`
//     }
// }

// const clearTable = () => {
//     char = [];
// }

// event-listener

// const expenseBtn = document.getElementById('expense-button');
// const transactions = document.getElementById('transactions');
// const tbody = document.querySelector('tbody');
// let tbodyinner = document.querySelector('tbody').innerHTML;
// let char = [];

// if (tbodyinner === '') {
//     transactions.innerHTML = `<h3>No Recent Transactions</h3>`
// }

// function pushToArray() {
//     const showError = document.getElementById('error');
//     const dateOfExpense = document.getElementById('expense-date').value;
//     const totalAmount = document.getElementById('calculateAmount');
//     const selectAttr = document.getElementById('select-expense').value;
//     const selectElement = document.getElementById('select-expense');
//     const selectedText = selectElement.options[selectAttr].text;
//     let amount = document.getElementById('expense-amount').value;
//     let total = 0;

//     amount = amount.replace(/ +/g, '');
//     showError.style.color = 'red';
//     if (amount.trim() === '' && dateOfExpense.trim() === '') {
//         showError.style.display = 'block';
//         console.log(showError.innerHTML = `<h3>No parameter found in Amount and Date</h3>`);
//     } else if (amount <= 0 || isNaN(amount) || amount.length > 9) {
//         showError.style.display = 'block';
//         showError.innerHTML = `<h3>Invalid Parameter in Amount</h3>`;
//     } else if (dateOfExpense.trim() === '') {
//         showError.style.display = 'block';
//         showError.innerHTML = `<h3>No value found in Date</h3>`;
//     } else {
//         showError.style.display = 'none';
//         transactions.style.display = `none`;
//         document.getElementById('calculateAmount').style.display = `block`

//         char.push(amount);
//         char.push(dateOfExpense);
//         char.push(selectedText);

//         for (let i = 0; i < char.length; i += 3) {
//             total += Number(char[i]);
//         }
//         totalAmount.innerHTML = `<h2>Total amount spent is $${total}</h2>`;

//         tbody.innerHTML += `
//             <tr>
//                 <td>$${char[char.length - 3]}</td>
//                 <td>${char[char.length - 1]}</td>
//                 <td>${char[char.length - 2]}</td>
//             </tr>
//         `
//         document.getElementById("expense-amount").value = '';
//         document.getElementById("expense-date").value = '';
//         document.getElementById('select-expense').value = '0';
//         document.getElementById('clear').style.display = `block`
//     }
// }
// expenseBtn.addEventListener('click', pushToArray);