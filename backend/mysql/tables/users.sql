DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password CHAR(64) NOT NULL,
  phoneNumber VARCHAR(15),
  sessionToken CHAR(36),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp of account creation
  updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Timestamp of last update
);

INSERT INTO users (firstName, lastName, email, password, phoneNumber) VALUES
('John', 'Doe', 'john.doe@example.com', SHA2('John', 256), '555-1234'),
('Jane', 'Smith', 'jane.smith@example.com', SHA2('Jane', 256), '555-5678'),
('Michael', 'Johnson', 'michael.johnson@example.com', SHA2('Michael', 256), '555-8765'),
('Emily', 'Davis', 'emily.davis@example.com', SHA2('Emily', 256), '555-4321'),
('David', 'Wilson', 'david.wilson@example.com', SHA2('David', 256), '555-1357'),
('Sophia', 'Martinez', 'sophia.martinez@example.com', SHA2('Sophia', 256), '555-2468'),
('James', 'Anderson', 'james.anderson@example.com', SHA2('James', 256), '555-7890'),
('Olivia', 'Thomas', 'olivia.thomas@example.com', SHA2('Olivia', 256), '555-6789'),
('Liam', 'Jackson', 'liam.jackson@example.com', SHA2('Liam', 256), '555-3456'),
('Ava', 'White', 'ava.white@example.com', SHA2('Ava', 256), '555-9876');