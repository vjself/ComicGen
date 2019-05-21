insert into users
(email, username, password, f_name, l_name, social, mom_m, age, gender, profile_pic)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
RETURNING *;