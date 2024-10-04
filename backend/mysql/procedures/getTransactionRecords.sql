DROP PROCEDURE IF EXISTS getTransactionRecords;

CREATE PROCEDURE getTransactionRecords(
    IN _userId INT,
    IN _accountId INT,
    IN queryLimit INT,
    IN queryOffset INT
)
BEGIN

SELECT * FROM transactionRecords WHERE userId = _userId
  AND accountId = _accountId
  ORDER BY id DESC
  LIMIT queryLimit OFFSET queryOffset;

END;