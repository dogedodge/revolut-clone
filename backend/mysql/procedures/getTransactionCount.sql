DROP PROCEDURE IF EXISTS getTransactionCount;

CREATE PROCEDURE getTransactionCount(
    IN _userId INT,
    IN _accountId INT
)
BEGIN

SELECT count(id) FROM transactionRecords WHERE userId = _userId AND accountId = _accountId;

END;