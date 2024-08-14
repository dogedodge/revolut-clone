DROP TABLE IF EXISTS transfer_records;

CREATE TABLE transfer_records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    account_from INT NOT NULL, -- accounts(id)
    account_to INT NOT NULL, -- accounts(id)
    currency_code VARCHAR(3) NOT NULL,         -- Currency code (e.g., USD, GBP, etc.)
    amount DECIMAL(15,2) NOT NULL,
    transfer_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    description VARCHAR(255),
    status ENUM('Pending', 'Completed', 'Failed') NOT NULL DEFAULT 'Pending'
);

INSERT INTO transfer_records (account_from, account_to, currency_code, amount, description, status)
VALUES
  (1, 9, 'USD', 100.00, 'Monthly payment', 'Completed'),
  (2, 6, 'GBP', 50.00, 'Reimbursement', 'Completed'),
  (3, 7, 'HKD', 750.25, 'Rent payment', 'Completed'),
  (1, 9, 'USD', 200.00, 'Freelance work', 'Completed'),
  (4, 8, 'CNY', 300.50, 'Subscription fee', 'Completed'),
  (2, 6, 'GBP', 80.00, 'Gift', 'Completed'),
  (6, 2, 'GBP', 150.00, 'Salary', 'Completed'),
  (9, 1, 'USD', 400.75, 'Refund', 'Completed'),
  (8, 4, 'CNY', 600.00, 'Loan repayment', 'Completed'),
  (5, 10, 'JPY', 12000.00, 'Commission', 'Completed');