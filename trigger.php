
 <?php  
 create table =>create trigger query->
 $sql = "CREATE TRIGGER before_user_insert BEFORE INSERT ON table_name 
 FOR EACH ROW 
 SET NEW.fullname  = CONCAT(NEW.firstname,' ',NEW.lastname)";
 then insert query
 
 $sql = "CREATE TRIGGER before_user_update BEFORE UPDATE ON table_name 
 FOR EACH ROW 
 SET NEW.fullname  = CONCAT(NEW.firstname,' ',NEW.lastname)";
 then update query 
 update tble_name set firstname = 'codexworld' , lastname = "blog" ; 
 =>SHOW TRIGGERS ;
 =>DROP TRIGGER before_user_insert;
 => SHOW TRIGGERS ;
 ?>
 
