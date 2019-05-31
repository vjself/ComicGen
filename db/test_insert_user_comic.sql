insert into comic
   ( user_id, title, panels)
values
   (
      $2, $3
)
select *
from comic
where id = $1;