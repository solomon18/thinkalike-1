USE thinkalikeDB;

create table User
(
 uID INT NOT null auto_increment,
 userName NVARCHAR(50),
 uPassword NVARCHAR(50),
 PRIMARY KEY (uID)
 );