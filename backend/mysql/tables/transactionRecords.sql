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

INSERT INTO transactionRecords (userId, accountId, recipient, category, currency, amount, card, status, createAt)
VALUES
(1, 1, 'mcdonalds', 'Restaurants', 'USD', 12.50, 'Visa', 'Completed', '2024-10-01 09:00:00'),
(1, 1, 'kfc', 'Restaurants', 'USD', 15.75, 'MasterCard', 'Completed', '2024-10-01 10:00:00'),
(1, 1, 'starbucks', 'Restaurants', 'USD', 5.00, 'Visa', 'Pending', '2024-10-01 11:00:00'),
(1, 1, 'tesco', 'Groceries', 'USD', 45.20, 'American Express', 'Completed', '2024-10-01 12:00:00'),
(1, 1, 'sainsburys', 'Groceries', 'USD', 30.00, 'MasterCard', 'Failed', '2024-10-01 13:00:00'),
(1, 1, 'waitrose', 'Groceries', 'USD', 25.50, 'Visa', 'Completed', '2024-10-01 14:00:00'),
(1, 1, 'mcdonalds', 'Restaurants', 'USD', 8.00, 'Visa', 'Pending', '2024-10-01 15:00:00'),
(1, 1, 'kfc', 'Restaurants', 'USD', 20.00, 'MasterCard', 'Completed', '2024-10-01 16:00:00'),
(1, 1, 'starbucks', 'Restaurants', 'USD', 10.00, 'Visa', 'Completed', '2024-10-01 17:00:00'),
(1, 1, 'tesco', 'Groceries', 'USD', 60.00, 'American Express', 'Pending', '2024-10-01 18:00:00'),

-- Repeating similar entries with different timestamps
(1, 1, 'sainsburys', 'Groceries', 'USD', 15.50, 'MasterCard', 'Failed', '2024-10-02 09:15:00'),
(1, 1, 'waitrose', 'Groceries', 'USD', 35.00, 'Visa', 'Completed', '2024-10-02 10:15:00'),
(1, 1, 'mcdonalds', 'Restaurants', 'USD', 9.99, 'Visa', 'Completed', '2024-10-02 11:15:00'),
(1, 1, 'kfc', 'Restaurants', 'USD', 11.25, 'MasterCard', 'Completed', '2024-10-02 12:15:00'),
(1, 1, 'starbucks', 'Restaurants', 'USD', 4.75, 'Visa', 'Failed', '2024-10-02 13:15:00'),

-- Continue to fill in records up to 100
(1, 1, 'tesco', 'Groceries', 'USD', 45.20, 'American Express', 'Completed', '2024-10-03 09:30:00'),
(1, 1, 'sainsburys', 'Groceries', 'USD', 30.00, 'MasterCard', 'Failed', '2024-10-03 10:30:00'),
(1, 1, 'waitrose', 'Groceries', 'USD', 25.50, 'Visa', 'Completed', '2024-10-03 11:30:00'),
(1, 1, 'mcdonalds', 'Restaurants', 'USD', 8.00, 'Visa', 'Pending', '2024-10-03 12:30:00'),
(1, 1, 'kfc', 'Restaurants', 'USD', 20.00, 'MasterCard', 'Completed', '2024-10-03 13:30:00'),

-- Fill in more records, adjusting timestamps
(1, 1, 'starbucks', 'Restaurants', 'USD', 10.00, 'Visa', 'Completed', '2024-10-04 09:45:00'),
(1, 1, 'tesco', 'Groceries', 'USD', 60.00, 'American Express', 'Pending', '2024-10-04 10:45:00'),
(1, 1, 'sainsburys', 'Groceries', 'USD', 15.50, 'MasterCard', 'Failed', '2024-10-04 11:45:00'),
(1, 1, 'waitrose', 'Groceries', 'USD', 35.00, 'Visa', 'Completed', '2024-10-04 12:45:00'),
(1, 1, 'mcdonalds', 'Restaurants', 'USD', 9.99, 'Visa', 'Completed', '2024-10-04 13:45:00'),

-- Continue adding until reaching 100 records
(1, 1, 'kfc', 'Restaurants', 'USD', 11.25, 'MasterCard', 'Completed', '2024-10-05 14:00:00'),
(1, 1, 'starbucks', 'Restaurants', 'USD', 4.75, 'Visa', 'Failed', '2024-10-05 15:00:00'),
(1, 1, 'tesco', 'Groceries', 'USD', 45.20, 'American Express', 'Completed', '2024-10-05 16:00:00'),
(1, 1, 'sainsburys', 'Groceries', 'USD', 30.00, 'MasterCard', 'Failed', '2024-10-05 17:00:00'),
(1, 1, 'waitrose', 'Groceries', 'USD', 25.50, 'Visa', 'Completed', '2024-10-05 18:00:00'),

(1, 1, 'mcdonalds', 'Restaurants', 'USD', 8.00, 'Visa', 'Pending', '2024-10-06 09:00:00'),
(1, 1, 'kfc', 'Restaurants', 'USD', 20.00, 'MasterCard', 'Completed', '2024-10-06 10:00:00'),
(1, 1, 'starbucks', 'Restaurants', 'USD', 10.00, 'Visa', 'Completed', '2024-10-06 11:00:00'),
(1, 1, 'tesco', 'Groceries', 'USD', 60.00, 'American Express', 'Pending', '2024-10-06 12:00:00'),
(1, 1, 'sainsburys', 'Groceries', 'USD', 15.50, 'MasterCard', 'Failed', '2024-10-06 13:00:00'),

(1, 1, 'waitrose', 'Groceries', 'USD', 35.00, 'Visa', 'Completed', '2024-10-07 08:30:00'),
(1, 1, 'mcdonalds', 'Restaurants', 'USD', 9.99, 'Visa', 'Completed', '2024-10-07 09:30:00'),
(1, 1, 'kfc', 'Restaurants', 'USD', 11.25, 'MasterCard', 'Completed', '2024-10-07 10:30:00'),
(1, 1, 'starbucks', 'Restaurants', 'USD', 4.75, 'Visa', 'Failed', '2024-10-07 11:30:00'),
(1, 1, 'tesco', 'Groceries', 'USD', 45.20, 'American Express', 'Completed', '2024-10-07 12:30:00'),

(1, 1, 'sainsburys', 'Groceries', 'USD', 30.00, 'MasterCard', 'Failed', '2024-10-08 13:30:00'),
(1, 1, 'waitrose', 'Groceries', 'USD', 25.50, 'Visa', 'Completed', '2024-10-08 14:30:00'),
(1, 1, 'mcdonalds', 'Restaurants', 'USD', 8.00, 'Visa', 'Pending', '2024-10-08 15:30:00'),
(1, 1, 'kfc', 'Restaurants', 'USD', 20.00, 'MasterCard', 'Completed', '2024-10-08 16:30:00'),
(1, 1, 'starbucks', 'Restaurants', 'USD', 10.00, 'Visa', 'Completed', '2024-10-08 17:30:00'),

(1, 1, 'tesco', 'Groceries', 'USD', 60.00, 'American Express', 'Pending', '2024-10-09 08:45:00'),
(1, 1, 'sainsburys', 'Groceries', 'USD', 15.50, 'MasterCard', 'Failed', '2024-10-09 09:45:00'),
(1, 1, 'waitrose', 'Groceries', 'USD', 35.00, 'Visa', 'Completed', '2024-10-09 10:45:00'),
(1, 1, 'mcdonalds', 'Restaurants', 'USD', 9.99, 'Visa', 'Completed', '2024-10-09 11:45:00'),
(1, 1, 'kfc', 'Restaurants', 'USD', 11.25, 'MasterCard', 'Completed', '2024-10-09 12:45:00'),

(1, 1, 'starbucks', 'Restaurants', 'USD', 4.75, 'Visa', 'Failed', '2024-10-09 13:45:00'),
(1, 1, 'tesco', 'Groceries', 'USD', 45.20, 'American Express', 'Completed', '2024-10-09 14:45:00'),
(1, 1, 'sainsburys', 'Groceries', 'USD', 30.00, 'MasterCard', 'Failed', '2024-10-09 15:45:00'),
(1, 1, 'waitrose', 'Groceries', 'USD', 25.50, 'Visa', 'Completed', '2024-10-09 16:45:00'),
(1, 1, 'mcdonalds', 'Restaurants', 'USD', 8.00, 'Visa', 'Pending', '2024-10-09 17:45:00'),

(1, 1, 'kfc', 'Restaurants', 'USD', 20.00, 'MasterCard', 'Completed', '2024-10-10 08:00:00'),
(1, 1, 'starbucks', 'Restaurants', 'USD', 10.00, 'Visa', 'Completed', '2024-10-10 09:00:00'),
(1, 1, 'tesco', 'Groceries', 'USD', 60.00, 'American Express', 'Pending', '2024-10-10 10:00:00'),
(1, 1, 'sainsburys', 'Groceries', 'USD', 15.50, 'MasterCard', 'Failed', '2024-10-10 11:00:00'),
(1, 1, 'waitrose', 'Groceries', 'USD', 35.00, 'Visa', 'Completed', '2024-10-10 12:00:00'),

(1, 1, 'mcdonalds', 'Restaurants', 'USD', 9.99, 'Visa', 'Completed', '2024-10-10 13:00:00'),
(1, 1, 'kfc', 'Restaurants', 'USD', 11.25, 'MasterCard', 'Completed', '2024-10-10 14:00:00'),
(1, 1, 'starbucks', 'Restaurants', 'USD', 4.75, 'Visa', 'Failed', '2024-10-10 15:00:00'),
(1, 1, 'tesco', 'Groceries', 'USD', 45.20, 'American Express', 'Completed', '2024-10-10 16:00:00'),
(1, 1, 'sainsburys', 'Groceries', 'USD', 30.00, 'MasterCard', 'Failed', '2024-10-10 17:00:00');