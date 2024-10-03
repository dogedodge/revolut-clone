DROP PROCEDURE IF EXISTS getUserAccounts;

CREATE PROCEDURE getUserAccounts(
    IN _userId INT
)
BEGIN

SELECT * FROM accounts WHERE userId = _userId;

END;