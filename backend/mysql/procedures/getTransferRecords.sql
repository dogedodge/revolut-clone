DROP PROCEDURE IF EXISTS getTransferRecords;

CREATE PROCEDURE getTransferRecords(
    IN _account_id INT
)
BEGIN

SELECT * FROM transferRecords WHERE accountFrom = _account_id OR accountTo = _account_id;

END;

