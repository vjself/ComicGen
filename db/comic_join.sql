select comic_id, title, comic, users_id, id, email, username
from comics
inner join users
on comics.users_id = users.id