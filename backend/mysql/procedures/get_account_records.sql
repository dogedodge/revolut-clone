DROP PROCEDURE IF EXISTS get_account_records;

CREATE PROCEDURE get_account_records(
    IN _account_id INT
)
BEGIN

-- SELECT * from accounts WHERE user_id = _user_id;
SELECT * FROM transferRecords WHERE accountFrom = _account_id OR accountTo = _account_id;

END;

