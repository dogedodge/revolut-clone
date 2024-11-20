DROP PROCEDURE IF EXISTS accountAddCredit;

CREATE PROCEDURE accountAddCredit(
    IN user_id INT,
    IN account_id INT,
    IN recipient VARCHAR(32),
    IN amount DECIMAL(15, 2)
)
BEGIN

  DECLARE acc_currency VARCHAR(3);
  DECLARE transaction_record_id INT;

  START TRANSACTION;

  SELECT currency INTO acc_currency
    FROM accounts
    WHERE id = account_id AND userId = user_id
    FOR UPDATE;
  
  IF acc_currency IS NULL THEN
    ROLLBACK;
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Account not exist';
  ELSE
    UPDATE accounts
      SET balance = balance + amount
      WHERE id = account_id AND userId = user_id;
    
    INSERT INTO transactionRecords (userId, accountId, recipient, category, currency, amount, card)
      VALUES
      (user_id, account_id, recipient, 'Deposit', acc_currency, amount, 'Apple Pay');
    
    SET transaction_record_id = LAST_INSERT_ID();
    COMMIT;

    SELECT * from transactionRecords WHERE id = transaction_record_id;
  
  END IF;

END;