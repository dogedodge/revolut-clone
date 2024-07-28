START TRANSACTION;

-- Step 1: Verify email and password
SELECT id, email, password, session_token INTO @user_id, @email, @password, @existing_session_token
FROM users
WHERE email = ? AND password = ?;

-- If no user found, rollback and return an error
IF @user_id IS NULL THEN
    ROLLBACK;
    SELECT 'Invalid email or password' AS error;
ELSE
    -- Step 2: Generate a session token
    SET @session_token = UUID();

    -- Step 3: Store the session token in the database
    UPDATE users SET session_token = @session_token WHERE id = @user_id;

    -- Step 4: Return all user columns including the session token
    SELECT * FROM users WHERE id = @user_id;

    COMMIT;
END IF;