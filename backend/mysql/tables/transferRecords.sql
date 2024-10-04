DROP TABLE IF EXISTS transferRecords;

CREATE TABLE transferRecords (
    id INT AUTO_INCREMENT PRIMARY KEY,
    accountFrom INT NOT NULL, -- accounts(id)
    accountTo INT NOT NULL, -- accounts(id)
    currency VARCHAR(3) NOT NULL,         -- Currency code (e.g., USD, GBP, etc.)
    amount DECIMAL(15,2) NOT NULL,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    description VARCHAR(255),
    status ENUM('Pending', 'Completed', 'Failed') NOT NULL DEFAULT 'Pending'
);

INSERT INTO transferRecords (accountFrom, accountTo, currency, amount, description, status)
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
  (5, 10, 'EUR', 12000.00, 'Commission', 'Completed');