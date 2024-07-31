DROP PROCEDURE IF EXISTS user_login;
CREATE PROCEDURE user_login(
    IN _email VARCHAR(100),
    IN _password CHAR(64)
)
BEGIN

DECLARE user_id INT;
-- DECLARE error_code INT;
-- SET error_code = 1;

SELECT id INTO user_id
    FROM users WHERE email = _email AND password = _password;

IF user_id IS NULL THEN
    -- SELECT error_code AS error; 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Invalid email or password';
ELSE
    UPDATE users SET session_token = UUID() WHERE id = user_id;
    SELECT * FROM users WHERE id = user_id;
END IF;

END;