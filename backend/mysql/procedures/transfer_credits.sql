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
    DECLARE transfer_record_id INT;

    -- Start transaction
    START TRANSACTION;

    -- Check if sender has sufficient balance
    SELECT balance INTO sender_balance
    FROM accounts
    WHERE user_id = sender_id AND currencyCode = currency
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
        WHERE user_id = sender_id AND currencyCode = currency;

        -- Check if receiver has an account with the specified currency
        SELECT id INTO receiver_account_id
        FROM accounts
        WHERE user_id = receiver_id AND currencyCode = currency
        LIMIT 1;

        SET receiver_exists = FOUND_ROWS() > 0;

        IF receiver_exists THEN
            -- If receiver's account exists, update the balance
            UPDATE accounts
            SET balance = balance + amount
            WHERE id = receiver_account_id;
        ELSE
            -- If receiver's account does not exist, create a new account for the receiver
            INSERT INTO accounts (user_id, currencyCode, balance, account_number, status, createdAt, updateAt)
            VALUES (receiver_id, currency, amount, CONCAT(receiver_id, LPAD(FLOOR(RAND() * 1000000000), 10, '0')), 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
        END IF;

        -- Insert a transfer record
        INSERT INTO transferRecords (accountFrom, accountTo, currencyCode, amount)
        VALUES (
            (SELECT id FROM accounts WHERE user_id = sender_id AND currencyCode = currency),
            (SELECT id FROM accounts WHERE user_id = receiver_id AND currencyCode = currency),
            currency,
            amount
        );
        SET transfer_record_id = LAST_INSERT_ID();

        -- Commit the transaction
        COMMIT;

        -- return transfer record
        SELECT * from transferRecords WHERE id = transfer_record_id;
    END IF;
END;