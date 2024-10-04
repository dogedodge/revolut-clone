DROP TABLE IF EXISTS transactionRecords;

CREATE TABLE transactionRecords (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL, -- users(id)
    accountId INT NOT NULL, -- accounts(id)
    recipient VARCHAR(100) NOT NULL,
    category VARCHAR(20) NOT NULL,
    currency VARCHAR(3) NOT NULL,         -- Currency code (e.g., USD, GBP, etc.)
    amount DECIMAL(15,2) NOT NULL,
    card VARCHAR(20) NOT NULL,
    status ENUM('Pending', 'Completed', 'Failed') NOT NULL DEFAULT 'Pending',
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO transactionRecords (userId, accountId, recipient, category, currency, amount, card, status)
VALUES
(1, 1, 'mcdonalds', 'Restaurants', 'USD', 12.50, 'Visa', 'Completed'),
(1, 1, 'kfc', 'Restaurants', 'USD', 15.75, 'MasterCard', 'Completed'),
(1, 1, 'starbucks', 'Restaurants', 'USD', 5.00, 'Visa', 'Pending'),
(1, 1, 'tesco', 'Groceries', 'USD', 45.20, 'American Express', 'Completed'),
(1, 1, 'sainsburys', 'Groceries', 'USD', 30.00, 'MasterCard', 'Failed'),
(1, 1, 'waitrose', 'Groceries', 'USD', 25.50, 'Visa', 'Completed'),
(1, 1, 'mcdonalds', 'Restaurants', 'USD', 8.00, 'Visa', 'Pending'),
(1, 1, 'kfc', 'Restaurants', 'USD', 20.00, 'MasterCard', 'Completed'),
(1, 1, 'starbucks', 'Restaurants', 'USD', 10.00, 'Visa', 'Completed'),
(1, 1, 'tesco', 'Groceries', 'USD', 60.00, 'American Express', 'Pending'),
(1, 1, 'sainsburys', 'Groceries', 'USD', 15.50, 'MasterCard', 'Failed'),
(1, 1, 'waitrose', 'Groceries', 'USD', 35.00, 'Visa', 'Completed'),
(1, 1, 'mcdonalds', 'Restaurants', 'USD', 9.99, 'Visa', 'Completed'),
(1, 1, 'kfc', 'Restaurants', 'USD', 11.25, 'MasterCard', 'Completed'),
(1, 1, 'starbucks', 'Restaurants', 'USD', 4.75, 'Visa', 'Failed');