"use strict";

// DOM element references
const transactions = document.getElementById("transactions");
const tbody = document.querySelector("tbody");
const showError = document.getElementById("error");
const totalAmount = document.getElementById("calculateAmount");
const clear = document.getElementById("clear");
const insights = document.getElementById("insights");

// Initial checks
let char = []; // [amount, date, category]
let count = 0;
let tbodyinner = tbody.innerHTML;

if (tbodyinner === "") {
  transactions.innerHTML = `<h3>No Recent Transactions</h3>`;
}

// Hide UI initially
totalAmount.classList.add("invisible");
showError.classList.add("invisible");
clear.classList.add("invisible");
insights.classList.add("invisible");

/* ---------------------------------------------------------
    VALIDATION FUNCTION
--------------------------------------------------------- */
function validateExpenseInput(amount, date) {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const currentDate = `${year}-${month}-${day}`;

  amount = amount.replace(/ +/g, "");

  if (amount.trim() === "" && date.trim() === "") {
    return {
      valid: false,
      msg: `Oops!, No parameter found in Amount and Date`,
    };
  }
  if (amount <= 0 || isNaN(amount) || amount.length > 9) {
    return { valid: false, msg: `Oops!, Invalid Parameter in Amount` };
  }
  if (date.trim() === "") {
    return { valid: false, msg: `Oops!, No value found in Date` };
  }
  if (date > currentDate) {
    return { valid: false, msg: `Oops!, Date cannot be in the future` };
  }

  return { valid: true, msg: "" };
}

/* ---------------------------------------------------------
    ADD EXPENSE TO ARRAY
--------------------------------------------------------- */
function addExpenseToArray(amount, date, category) {
  char.push(amount, date, category);
  count++;
}

/* ---------------------------------------------------------
    CALCULATE TOTAL
--------------------------------------------------------- */
function calculateTotal(expenses) {
  let total = 0;
  for (let i = 0; i < expenses.length; i += 3) {
    total += Number(expenses[i]);
  }
  return total;
}

/* ---------------------------------------------------------
    UPDATE TABLE UI
--------------------------------------------------------- */
function updateExpenseTable() {
  tbody.innerHTML += `
        <tr>
            <td>$${char[char.length - 3]}</td>
            <td>${char[char.length - 2]}</td>
            <td>${char[char.length - 1]}</td>
        </tr>
    `;
}

/* ---------------------------------------------------------
    SHOW INSIGHTS (average + warnings)
--------------------------------------------------------- */
function showInsights(total, count) {
  insights.classList.remove("invisible");

  if (total > 1000) {
    insights.innerHTML = `<h3 style="color:red;">Warning: High Spending!</h3>`;
    return;
  }

  if (count > 1) {
    const avg = total / (char.length / 3);
    insights.innerHTML = `<h3>Average expense amount is $${avg.toFixed(
      2
    )}</h3>`;
  }
}

/* ---------------------------------------------------------
    MAIN FUNCTION — pushToArray()
--------------------------------------------------------- */
const pushToArray = () => {
  const amount = document.getElementById("expense-amount").value;
  const date = document.getElementById("expenseDate").value;
  const selectBox = document.getElementById("select-expense");
  const category = selectBox.options[selectBox.value].text;

  // Validate
  const result = validateExpenseInput(amount, date);

  if (!result.valid) {
    showError.classList.remove("invisible");
    showError.style.color = "red";
    showError.innerHTML = `<h3>${result.msg}</h3>`;

    if (result.msg.includes("Date")) {
      expenseDate.showPicker();
    }
    return;
  }

  // Passed validation
  showError.classList.add("invisible");
  transactions.classList.add("invisible");
  clear.classList.remove("invisible");
  totalAmount.classList.remove("invisible");

  addExpenseToArray(amount, date, category);

  const total = calculateTotal(char);

  totalAmount.innerHTML = `<h2>Total amount spent is $${total}</h2>`;

  updateExpenseTable();

  showInsights(total, count);

  // Reset inputs
  document.getElementById("expense-amount").value = "";
  document.getElementById("expenseDate").value = "";
  document.getElementById("select-expense").value = "0";
};

/* ---------------------------------------------------------
    CLEAR TABLE
--------------------------------------------------------- */
const clearTable = () => {
  char = [];
  tbody.innerHTML = "";
  transactions.classList.remove("invisible");
  clear.classList.add("invisible");
  totalAmount.classList.add("invisible");
  showError.classList.add("invisible");
  insights.classList.add("invisible");

  showError.innerHTML = "";
  insights.innerHTML = "";
  count = 0;
};

/* ---------------------------------------------------------
    THEME TOGGLER
--------------------------------------------------------- */
const bgtheme = () => {
  document.querySelector("body").classList.toggle("theme");
};
