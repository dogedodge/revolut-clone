DROP PROCEDURE IF EXISTS getTransactionDetail;

CREATE PROCEDURE getTransactionDetail(
    IN _userId INT,
    IN transactionId INT
)
BEGIN

SELECT * FROM transactionRecords WHERE id = transactionId
  AND userId = _userId;

END;