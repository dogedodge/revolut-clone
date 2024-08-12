DROP PROCEDURE IF EXISTS get_user_accounts;

CREATE PROCEDURE get_user_accounts(
    IN _user_id INT
)
BEGIN

SELECT * from accounts WHERE user_id = _user_id;

END;