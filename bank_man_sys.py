class BankAccount:
    def __init__(self, account_number, account_holder, checking_bal=0, savings_bal=0, interest_rate=0.078):
        self.account_number = account_number
        self.account_holder = account_holder
        self.checking_bal = checking_bal
        self.savings_bal = savings_bal
        self.interest_rate = interest_rate

    def _validate_amount(self, amount):
        return amount > 0

    def _validate_account_type(self, account_type):
        return account_type in ("Checking", "Savings")

    def _validate_sufficient_funds(self, amount, account_type):
        if account_type == "Checking":
            return amount <= self.checking_bal
        elif account_type == "Savings":
            return amount <= self.savings_bal
        return False

    def deposit(self, amount, account_type):
        if not self._validate_amount(amount) or not self._validate_account_type(account_type):
            print("Invalid input.")
            return

        if account_type == "Checking":
            self.checking_bal += amount
            print(f"Deposited ${amount} into Checking. New Checking balance: ${self.checking_bal}")
        elif account_type == "Savings":
            self.savings_bal += amount
            print(f"Deposited ${amount} into Savings. New Savings balance: ${self.savings_bal}")

    def withdraw(self, amount, account_type):
        if not self._validate_amount(amount) or not self._validate_account_type(account_type):
            print("Invalid input.")
            return

        if not self._validate_sufficient_funds(amount, account_type):
            print("Insufficient funds or invalid withdrawal amount.")
            return

        if account_type == "Checking":
            self.checking_bal -= amount
            print(f"Withdrew ${amount} from Checking. New Checking balance: ${self.checking_bal}")
        elif account_type == "Savings":
            self.savings_bal -= amount
            print(f"Withdrew ${amount} from Savings. New Savings balance: ${self.savings_bal}")

    def check_balance(self, account_type):
        if not self._validate_account_type(account_type):
            print("Invalid Account Type.")
            return

        if account_type == "Checking":
            print(f"Checking Account balance for {self.account_holder}: ${self.checking_bal}")
        elif account_type == "Savings":
            print(f"Savings Account balance for {self.account_holder}: ${self.savings_bal}")

    def transfer_funds(self, from_account_type, to_account_type, amount):
        if not self._validate_amount(amount) or not self._validate_account_type(from_account_type) or not self._validate_account_type(to_account_type):
            print("Invalid input.")
            return

        if not self._validate_sufficient_funds(amount, from_account_type):
            print("Insufficient funds or invalid transfer amount.")
            return

        if from_account_type == "Checking" and to_account_type == "Savings":
            self.checking_bal -= amount
            self.savings_bal += amount
            print(f"Transferred ${amount} from Checking to Savings.")
        elif from_account_type == "Savings" and to_account_type == "Checking":
            self.savings_bal -= amount
            self.checking_bal += amount
            print(f"Transferred ${amount} from Savings to Checking.")
        else:
            print("Invalid Account Type for transfer.")

    def loan(self, amount):
        overall_balance = self.checking_bal + self.savings_bal
        if amount > 0:
            if overall_balance < 10000:
                print(f"{self.account_holder}, Your account balance needs to be at least $10,000 in order to be approved for the loan\n")
            else:
                print(f"Congratulations, {self.account_holder}! Your loan has been approved.")
                self.deposit(amount, "Checking")
                print(f"The requested amount has been added to your Checking account. Checking Balance: {self.checking_bal}")
                print(f"Amount owed to the bank after 1 year at an interest rate of {self.interest_rate * 100}% = {amount * (1 + self.interest_rate)}\n")
        else:
            print("Invalid Loan Amount")

class PersonalDetails(BankAccount):
    def __init__(self, account_number, account_holder, phone_number, address, id_number):
        super().__init__(account_number, account_holder)
        self.phone_number = phone_number
        self.address = address
        self.id_number = id_number

    def display_details(self):
        print(f"Hello {self.account_holder}, Here are your requested details: ")
        print(f"Phone Number: {self.phone_number}")
        print(f"Address: {self.address}")
        print(f"ID Provided: {self.id_number}\n")


# Create bank accounts
def create_account():
    account_number = input("Enter account number: ")
    account_holder = input("Enter account holder name: ")
    checking_bal = float(input("Enter initial checking balance: "))
    savings_bal = float(input("Enter initial savings balance: "))
    return BankAccount(account_number, account_holder, checking_bal, savings_bal)

def create_personal_details(account):
    phone_number = input("Enter phone number: ")
    address = input("Enter address: ")
    id_number = input("Enter ID number: ")
    return PersonalDetails(account.account_number, account.account_holder, phone_number, address, id_number)

def main():
    accounts = []
    while True:
        print("Options:")
        print("1. Create an account")
        print("2. Perform operations on an account")
        print("3. Display personal details")
        print("4. Exit")
        choice = input("Enter your choice: ")

        if choice == "1":
            account = create_account()
            accounts.append(account)
            print("Account created successfully.")
        elif choice == "2":
            if not accounts:
                print("No accounts available. Please create an account first.")
                continue

            account_number = input("Enter account number: ")
            account = next((acc for acc in accounts if acc.account_number == account_number), None)
            if account:
                print("Options:")
                print("1. Deposit")
                print("2. Withdraw")
                print("3. Transfer funds")
                print("4. Get a loan")
                print("5. Check balance")
                operation = input("Enter the operation you want to perform: ")
                if operation == "1":
                    amount = float(input("Enter the deposit amount: "))
                    account_type = input("Enter account type (Checking/Savings): ")
                    account.deposit(amount, account_type)
                elif operation == "2":
                    amount = float(input("Enter the withdrawal amount: "))
                    account_type = input("Enter account type (Checking/Savings): ")
                    account.withdraw(amount, account_type)
                elif operation == "3":
                    from_account_type = input("Enter source account type (Checking/Savings): ")
                    to_account_type = input("Enter destination account type (Checking/Savings): ")
                    amount = float(input("Enter the transfer amount: "))
                    account.transfer_funds(from_account_type, to_account_type, amount)
                elif operation == "4":
                    amount = float(input("Enter the loan amount: "))
                    account.loan(amount)
                elif operation == "5":
                    account_type = input("Enter account type (Checking/Savings): ")
                    account.check_balance(account_type)
                else:
                    print("Invalid operation.")
            else:
                print("Account not found.")
        elif choice == "3":
            if not accounts:
                print("No accounts available. Please create an account first.")
                continue

            account_number = input("Enter account number: ")
            account = next((acc for acc in accounts if acc.account_number == account_number), None)
            if account:
                personal_details = create_personal_details(account)
                personal_details.display_details()
            else:
                print("Account not found.")
        elif choice == "4":
            break
        else:
            print("Invalid choice. Please select a valid option.")

if __name__ == "__main__":
    main()
