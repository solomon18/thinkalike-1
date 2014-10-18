USE thinkalikeDB;
CREATE table Project
	(
    pID INT NOT NULL auto_increment,
    title NVARCHAR(255) NOT NULL,
    shortDescription NVARCHAR(6500),
    longDescription NVARCHAR(65000),
	PRIMARY KEY(pID)
    );
    
    