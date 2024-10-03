DROP PROCEDURE IF EXISTS user_login;

CREATE PROCEDURE user_login(
    IN _email VARCHAR(100),
    IN _password CHAR(64)
)
BEGIN

DECLARE user_id INT;

SELECT id INTO user_id
    FROM users WHERE email = _email AND password = _password;

IF user_id IS NULL THEN
    -- SELECT error_code AS error; 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Invalid email or password';
ELSE
    UPDATE users SET sessionToken = UUID() WHERE id = user_id;
    SELECT * FROM users WHERE id = user_id;
END IF;

END;