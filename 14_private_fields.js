class Account {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}`);
        } else if (amount > this.#balance) {
            console.log("Insufficient balance.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

// Create an instance of the Account class
const account = new Account(100);

// Deposit money
account.deposit(50);
console.log(`Balance: $${account.getBalance()}`);

// Withdraw money
account.withdraw(30);
console.log(`Balance: $${account.getBalance()}`);

// Attempt to withdraw more money than the balance
account.withdraw(200);

// Check final balance
console.log(`Final Balance: $${account.getBalance()}`);
