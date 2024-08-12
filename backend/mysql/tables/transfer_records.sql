DROP TABLE IF EXISTS transfer_records;

CREATE TABLE transfer_records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    account_from INT NOT NULL,
    account_to INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    transfer_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    description VARCHAR(255),
    status ENUM('Pending', 'Completed', 'Failed') NOT NULL DEFAULT 'Pending'
);