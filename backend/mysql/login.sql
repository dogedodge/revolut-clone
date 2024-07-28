DROP PROCEDURE IF EXISTS user_login;
CREATE PROCEDURE user_login(
    IN _email VARCHAR(100),
    IN _password CHAR(64)
)
BEGIN
SELECT * FROM users WHERE email = _email AND password = _password;
END;

-- START TRANSACTION;

-- -- Declare variables
-- -- SET @user_id = NULL;
-- -- SET @email = NULL;
-- -- SET @password = NULL;

-- -- Step 1: Verify email and password
-- SELECT id, email, `password` INTO @user_id, @email, @password
-- FROM users
-- WHERE email = 'john.doe@example.com' AND password = SHA2('John', 256);

-- -- If no user found, rollback and return an error
-- IF(@user_id IS NULL) THEN
--     ROLLBACK;
--     -- SELECT 'Invalid email or password' AS error;
-- ELSE
--     -- Step 2: Generate a session token
--     SET @session_token = UUID();

--     -- Step 3: Store the session token in the database
--     UPDATE users SET session_token = @session_token WHERE id = @user_id;

--     -- Step 4: Return all user columns including the session token
--     SELECT * FROM users WHERE id = @user_id;

--     COMMIT;
-- END IF;