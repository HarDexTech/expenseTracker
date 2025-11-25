# Expense Tracker

A simple and user-friendly web application to track your daily expenses, calculate spending totals, and get insights about your spending habits.

## Features

- **Add Expenses**: Easily add expense entries with amount, category, and date
- **Expense Categories**: Choose from predefined categories:
  - Food
  - Transportation
  - Entertainment
  - Bills
- **Total Calculation**: Automatically calculates the total amount spent across all expenses
- **Date Validation**: Ensures dates are not in the future and validates all inputs
- **Spending Insights**: Displays average spending and alerts for high spending (over $1000)
- **Clear All**: Remove all expenses and reset the tracker
- **Theme Toggle**: Switch between light and dark themes for comfortable viewing
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Project Structure

```
expenseTracker/
├── index.html          # Main HTML structure
├── scr.js             # Main JavaScript logic
├── styles.css         # Styling and theme definitions
├── responsive.css     # Responsive design rules
├── assets/            # Images and other assets
└── README.md          # This file
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or dependencies required

### Installation

1. Clone or download the project files
2. Open `index.html` in your web browser
3. Start tracking your expenses!

## How to Use

### Adding an Expense

1. Enter the **Amount** in the input field
2. Select an **Expense Category** from the dropdown
3. Choose the **Date** of the expense (cannot be a future date)
4. Click the **Add Expense** button

### Viewing Your Expenses

- All expenses appear in a table below the input form
- The total spent is displayed prominently
- Average spending and spending alerts appear automatically

### Managing Expenses

- **Clear Table**: Click the "Clear Table" button to remove all expenses and start over
- **Theme Toggle**: Click the theme icon in the top-right corner to switch between light and dark modes

## Validation Rules

The application validates input before adding expenses:

| Validation                                        | Error Message                           |
| ------------------------------------------------- | --------------------------------------- |
| Missing amount & date                             | "No parameter found in Amount and Date" |
| Invalid amount (negative, non-numeric, too large) | "Invalid Parameter in Amount"           |
| Missing date                                      | "No value found in Date"                |
| Future date                                       | "Date cannot be in the future"          |

## Technical Details

### Technologies Used

- **HTML5**: Page structure
- **CSS3**: Styling and animations
- **Vanilla JavaScript**: Logic and interactivity

### Key Functions

- `pushToArray()` - Validates input and adds expense to the array
- `validateExpenseInput()` - Validates all expense parameters
- `calculateTotal()` - Computes total expenses
- `updateExpenseTable()` - Renders expenses in the table
- `showInsights()` - Displays spending insights and warnings
- `clearTable()` - Resets all data and UI
- `bgtheme()` - Toggles between light and dark themes

### Data Storage

Expenses are stored in a `char` array with the following structure:

```
[amount1, date1, category1, amount2, date2, category2, ...]
```

## Insights Feature

- **Average Spending**: Calculated and displayed when more than one expense is added
- **High Spending Warning**: Alert appears when total spending exceeds $1000

## Theme Customization

The app uses CSS variables for easy theme customization:

- `--bgColor`: Light background color
- `--text`: Text color
- `--peripherals`: Dark background color
- `--defWidth`: Default element width

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

Potential features for future versions:

- Delete individual expense entries
- Edit existing expenses
- Export data to CSV
- Monthly/yearly spending reports
- Category-wise spending breakdown
- Local storage persistence
- Budget setting and alerts
- Charts and visualizations

## License

This project is open source and available for personal use.

## Author

HarDexTech

## Support

For issues or suggestions, please create an issue in the repository.

---

**Happy Tracking!** 💰
