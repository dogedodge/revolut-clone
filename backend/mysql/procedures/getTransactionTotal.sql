DROP PROCEDURE IF EXISTS getTransactionTotal;

CREATE PROCEDURE getTransactionTotal(
    IN _userId INT,
    IN _accountId INT
)
BEGIN

SELECT count(id) FROM transactionRecords WHERE userId = _userId AND accountId = _accountId;

END;