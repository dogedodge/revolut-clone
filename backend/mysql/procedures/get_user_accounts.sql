DROP PROCEDURE IF EXISTS get_user_accounts;

CREATE PROCEDURE get_user_accounts(
    IN _userId INT
)
BEGIN

SELECT * FROM accounts WHERE userId = _userId;

END;