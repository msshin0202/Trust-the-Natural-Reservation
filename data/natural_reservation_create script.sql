USE natural_reservation;

CREATE TABLE Customer
( phoneNumber VARCHAR(10) NOT NULL,
  firstName VARCHAR(20),
  lastName VARCHAR(20),
  email VARCHAR(50),
  password VARCHAR(20),
  PRIMARY KEY (phoneNumber) );

CREATE TABLE Room
( roomNumber INT NOT NULL,
  numberOfBeds INT,
  cleanliness BIT,
  price INT,
  PRIMARY KEY (roomNumber) );

CREATE TABLE Reservation_Made_By
( reservationNumber INT NOT NULL,
  roomNumber INT NOT NULL,
  phoneNumber VARCHAR(10),
  checkInDate DATE,
  checkOutDate DATE,
  PRIMARY KEY (reservationNumber),
  FOREIGN KEY (roomNumber) REFERENCES Room (roomNumber) ON DELETE CASCADE,
  FOREIGN KEY (phoneNumber) REFERENCES Customer(phoneNumber) ON DELETE CASCADE
                                                             ON UPDATE CASCADE );
CREATE TABLE Stays
( roomNumber INT NOT NULL,
  phoneNumber VARCHAR(10) NOT NULL,
  PRIMARY KEY (roomNumber, phoneNumber),
  FOREIGN KEY (phoneNumber) REFERENCES Customer(phoneNumber) ON DELETE CASCADE,
  FOREIGN KEY (roomNumber) REFERENCES Room (roomNumber) ON DELETE CASCADE );

CREATE TABLE Bill
( bid INT NOT NULL,
  amount INT,
  phoneNumber VARCHAR(10) NOT NULL,
  PRIMARY KEY (bid),
  FOREIGN KEY (phoneNumber) REFERENCES Customer(phoneNumber) ON DELETE CASCADE );

CREATE TABLE Transaction
( tid INT NOT NULL,
  transactionType VARCHAR(11),
  dateOfTransaction DATE,
  PRIMARY KEY (tid) );

CREATE TABLE Pays
( bid INT NOT NULL,
  tid INT NOT NULL,
  amount INT NOT NULL,
  PRIMARY KEY (bid, tid),
  FOREIGN KEY (bid) REFERENCES Bill(bid) ON DELETE CASCADE,
  FOREIGN KEY (tid) REFERENCES Transaction(tid) ON DELETE CASCADE );

CREATE TABLE Employee
( employeeID INT NOT NULL,
  firstName VARCHAR(20),
  lastName VARCHAR(20),
  gender BIT,
  role VARCHAR(20),
  address VARCHAR(100),
  email VARCHAR(50),
  password VARCHAR(20),
  PRIMARY KEY (employeeID) );

CREATE TABLE Employee_Assigned_to_Room
( employeeID INT NOT NULL,
  roomNumber INT,
  PRIMARY KEY (employeeID, roomNumber),
  FOREIGN KEY (employeeID) REFERENCES Employee(employeeID) ON DELETE CASCADE,
  FOREIGN KEY (roomNumber) REFERENCES Room(roomNumber) ON DELETE CASCADE );

CREATE TABLE Creates_Hotel_Agreement
( agreementNumber INT NOT NULL,
  reservationNumber INT,
  PRIMARY KEY (agreementNumber),
  FOREIGN KEY (reservationNumber) REFERENCES Reservation_Made_By(reservationNumber) ON DELETE CASCADE );

CREATE TABLE Associated_With
( bid INT NOT NULL,
  agreementNumber INT,
  roomNumber INT,
  PRIMARY KEY (bid, agreementNumber, roomNumber),
  FOREIGN KEY (bid) REFERENCES Bill(bid),
  FOREIGN KEY (agreementNumber) REFERENCES Creates_Hotel_Agreement(agreementNumber) ON DELETE CASCADE,
  FOREIGN KEY (roomNumber) REFERENCES Stays(roomNumber) ON DELETE CASCADE );

CREATE TABLE Vehicle
( colour VARCHAR(10) NOT NULL,
  model VARCHAR (10),
  phoneNumber VARCHAR(10),
  PRIMARY KEY (colour, model, phoneNumber),
  FOREIGN KEY (phoneNumber) REFERENCES Customer(phoneNumber) ON DELETE CASCADE );
