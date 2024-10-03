DROP TABLE IF EXISTS accounts;

-- Create the accounts table
CREATE TABLE IF NOT EXISTS accounts (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Unique account ID
    userId INT NOT NULL,                      -- Foreign key to users table
    currencyCode VARCHAR(3) NOT NULL,         -- Currency code (e.g., USD, GBP, etc.)
    balance DECIMAL(15, 2) DEFAULT 0.00,       -- Account balance
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp of account creation
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Timestamp of last update
    accountNumber VARCHAR(20) NOT NULL UNIQUE, -- Unique account number
    status ENUM('active', 'inactive', 'closed') DEFAULT 'active' -- Account status

    -- Foreign key constraint
    -- CONSTRAINT fk_userId FOREIGN KEY (userId) REFERENCES users(id)
);

-- Create an index on the userId column to improve query performance
CREATE INDEX idx_userId ON accounts(userId);

-- Insert mock data into the accounts table
INSERT INTO accounts (userId, currencyCode, balance, accountNumber, status)
VALUES
    (1, 'USD', 1000.50, '1234567890', 'active'),
    (2, 'GBP', 1500.75, '2345678901', 'active'),
    (3, 'HKD', 2000.00, '3456789012', 'active'),
    (4, 'CNY', 2500.25, '4567890123', 'active'),
    (5, 'JPY', 300000.00, '5678901234', 'active'),
    (1, 'GBP', 1200.00, '6789012345', 'inactive'),
    (2, 'HKD', 2200.00, '7890123456', 'active'),
    (3, 'CNY', 1800.50, '8901234567', 'active'),
    (4, 'USD', 1900.75, '9012345678', 'closed'),
    (5, 'JPY', 500000.00, '0123456789', 'active');
