# Checklist System

## Setup Instructions
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the server: `node server.js`.

## Usage
- Visit `http://localhost:3000` in your browser.
- Click "Evaluate Checklist" to view the checklist results.

## Adding New Rules
- Add new rules in `config/rules.js` using the same structure:
  ```javascript
  {
    id: 'ruleId',
    description: 'Description of the rule',
    check: (data) => {
      // Logic to evaluate rule
      return true or false;
    },
  }
