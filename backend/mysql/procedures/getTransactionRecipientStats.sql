DROP PROCEDURE IF EXISTS getTransactionRecipientStats;

CREATE PROCEDURE getTransactionRecipientStats(
    IN _userId INT,
    IN _accountId INT,
    IN _recipient VARCHAR(100)
)
BEGIN

SELECT count(id) AS numOfTrans, sum(amount) AS totalSpent 
  FROM transactionRecords 
  WHERE userId = _userId
  AND accountId = _accountId
  AND recipient = _recipient;

END;