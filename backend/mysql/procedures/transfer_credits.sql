DROP PROCEDURE IF EXISTS transfer_credits;

CREATE PROCEDURE transfer_credits(
    IN sender_id INT,
    IN receiver_id INT,
    IN currency VARCHAR(3),
    IN amount DECIMAL(15, 2)
)
BEGIN
    DECLARE sender_balance DECIMAL(15, 2);
    DECLARE receiver_account_id INT;
    DECLARE receiver_exists BOOLEAN;

    -- Start transaction
    START TRANSACTION;

    -- Check if sender has sufficient balance
    SELECT balance INTO sender_balance
    FROM accounts
    WHERE user_id = sender_id AND currency_code = currency
    FOR UPDATE;

    IF sender_balance IS NULL THEN
        ROLLBACK;
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Wrong currency';
    END IF;

    IF sender_balance < amount THEN
        -- If not enough balance, rollback transaction and exit
        ROLLBACK;
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Insufficient balance';
    ELSE
        -- Deduct amount from sender's account
        UPDATE accounts
        SET balance = balance - amount
        WHERE user_id = sender_id AND currency_code = currency;

        -- Check if receiver has an account with the specified currency
        SELECT account_id INTO receiver_account_id
        FROM accounts
        WHERE user_id = receiver_id AND currency_code = currency
        LIMIT 1;

        SET receiver_exists = FOUND_ROWS() > 0;

        IF receiver_exists THEN
            -- If receiver's account exists, update the balance
            UPDATE accounts
            SET balance = balance + amount
            WHERE account_id = receiver_account_id;
        ELSE
            -- If receiver's account does not exist, create a new account for the receiver
            INSERT INTO accounts (user_id, currency_code, balance, account_number, status, created_at, updated_at)
            VALUES (receiver_id, currency, amount, CONCAT(receiver_id, LPAD(FLOOR(RAND() * 1000000000), 10, '0')), 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
        END IF;

        -- Commit the transaction
        COMMIT;
    END IF;
END;