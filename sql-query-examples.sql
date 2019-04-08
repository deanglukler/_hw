SELECT * FROM users
WHERE email LIKE '%whillans%';

SELECT * FROM users
WHERE id = 72759;

SELECT users.id, users.first_name, users.last_name FROM users
WHERE id = 72759;

SELECT * FROM punches;


SELECT users.id AS user_id, users.first_name, users.last_name, punches.id AS punch_id FROM users
JOIN punches ON punches.user_id = users.id
WHERE users.id = 64834;

SELECT COUNT (punches.id) FROM users
JOIN punches ON punches.user_id = users.id
WHERE users.id = 64834;

SELECT COUNT (companies.id) FROM companies
WHERE account_status = ‘active’;