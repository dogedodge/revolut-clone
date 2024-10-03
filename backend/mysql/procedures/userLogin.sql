DROP PROCEDURE IF EXISTS userLogin;

CREATE PROCEDURE userLogin(
    IN _email VARCHAR(100),
    IN _password CHAR(64)
)
BEGIN

DECLARE userId INT;

SELECT id INTO userId
    FROM users WHERE email = _email AND password = _password;

IF userId IS NULL THEN
    -- SELECT error_code AS error; 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Invalid email or password';
ELSE
    UPDATE users SET sessionToken = UUID() WHERE id = userId;
    SELECT * FROM users WHERE id = userId;
END IF;

END;