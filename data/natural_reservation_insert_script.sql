INSERT INTO Customer VALUES('7788712157', 'Matthew', 'Shin', 'gomor@yahoo.ca', 'KEArFAkx');
INSERT INTO Customer VALUES('7782347896', 'Jad', 'AppleSeed', 'kludge@icloud.com', 'cmY8ECek');
INSERT INTO Customer VALUES('6048761023', 'Henry', 'James', 'ghost@aol.com', 'mYk3pV2s');
INSERT INTO Customer VALUES('2509871320', 'James', 'Potter', 'jamespotter@gmail.com', '7ZsYbdG5');
INSERT INTO Customer VALUES('2139557819', 'Garry', 'Longbottom', 'garylongbottom@gmail.com', 'sqjur3DL');
INSERT INTO Customer VALUES('5872334861', 'Harry', 'Potter', 'harrypotter@gmail.com', 'TAxNPZbp');
INSERT INTO Customer VALUES('8575813045', 'Tom', 'Riddle', 'lordvoldemort@gmail.com', 'pUBw74e3');
INSERT INTO Customer VALUES('6674486201', 'Ron', 'Weasley', 'ronweasley@gmail.com', '7zqEgx63');
INSERT INTO Customer VALUES('9586249135', 'Harmonie', 'Granger', 'harmoniegranger@gmail.com', 'znUQZ22C');
INSERT INTO Customer VALUES('7574823004', 'John', 'Smith', 'johnsmith@gmail.com', 'M2kqw8MV');
INSERT INTO Customer VALUES('9676743920', 'John', 'Smith', 'johnsmithwastaken@gmail.com', 'yAwqaNhf');
INSERT INTO Customer VALUES('7713846471', 'Clark', 'Kent', 'superman@yahoo.ca', '9GSSuDC3');
INSERT INTO Customer VALUES('5757034581', 'Louise', 'Lane', 'louiselane@dailyplanet.com', 'rZkjXfNP');
INSERT INTO Customer VALUES('1010283210', 'Mary', 'Jane', 'maryjane@spiderman.com', 'KCVymuUp');
INSERT INTO Customer VALUES('4589982341', 'Michael', 'Bishop', 'michaelbishop@hotmail.com', 'U9Xbu5KE');
INSERT INTO Customer VALUES(999, 'admin', 'admin', 'admin', 'admin');

/* reserved/vacant rooms */
INSERT INTO Room VALUES(100, 2, 1, 199);
INSERT INTO Room VALUES(101, 2, 1, 199);
INSERT INTO Room VALUES(102, 2, 1, 199);
INSERT INTO Room VALUES(103, 1, 1, 175);
INSERT INTO Room VALUES(104, 2, 0, 199);
INSERT INTO Room VALUES(105, 2, 1, 199);
INSERT INTO Room VALUES(106, 4, 0, 299);
INSERT INTO Room VALUES(107, 4, 0, 299);
INSERT INTO Room VALUES(108, 2, 1, 250);
INSERT INTO Room VALUES(109, 2, 1, 250);

/* checked-in rooms */
INSERT INTO Room VALUES(200, 2, 1, 199);
INSERT INTO Room VALUES(201, 2, 1, 199);
INSERT INTO Room VALUES(202, 2, 0, 199);
INSERT INTO Room VALUES(203, 1, 1, 175);
INSERT INTO Room VALUES(204, 2, 0, 199);
INSERT INTO Room VALUES(205, 2, 1, 199);
INSERT INTO Room VALUES(206, 4, 1, 299);
INSERT INTO Room VALUES(207, 4, 0, 299);
INSERT INTO Room VALUES(208, 2, 1, 250);
INSERT INTO Room VALUES(209, 2, 0, 250);

/* Reserved but not checked-in rooms */
INSERT INTO Reservation_Made_By VALUES(1, 100, 7788712157, 20190104, 20190109);
INSERT INTO Reservation_Made_By VALUES(2, 101, 7788712157, 20190104, 20190109);
INSERT INTO Reservation_Made_By VALUES(3, 102, 6048761023, 20190201, 20190207);
INSERT INTO Reservation_Made_By VALUES(4, 103, 2139557819, 20190109, 20190112);
INSERT INTO Reservation_Made_By VALUES(5, 109, 2509871320, 20190102, 20190103);

/* Rooms already checked-in */
INSERT INTO Reservation_Made_By VALUES(6, 200, 5872334861, 20190102, 20190103);
INSERT INTO Reservation_Made_By VALUES(7, 201, 8575813045, 20190103, 20190104);
INSERT INTO Reservation_Made_By VALUES(8, 202, 6674486201, 20181220, 20190101);
INSERT INTO Reservation_Made_By VALUES(9, 203, 9586249135, 20181223, 20181227);
INSERT INTO Reservation_Made_By VALUES(10, 204, 7574823004, 20181220, 20181226);
INSERT INTO Reservation_Made_By VALUES(11, 205, 9676743920, 20181227, 20190103);
INSERT INTO Reservation_Made_By VALUES(12, 206, 7713846471, 20190102, 20190103);
INSERT INTO Reservation_Made_By VALUES(13, 207, 5757034581, 20190101, 20190106);
INSERT INTO Reservation_Made_By VALUES(14, 208, 1010283210, 20190102, 20190110);
INSERT INTO Reservation_Made_By VALUES(15, 209, 4589982341, 20190102, 20190103);

INSERT INTO Stays VALUES(200, 5872334861);
INSERT INTO Stays VALUES(201, 8575813045);
INSERT INTO Stays VALUES(202, 6674486201);
INSERT INTO Stays VALUES(203, 9586249135);
INSERT INTO Stays VALUES(204, 7574823004);
INSERT INTO Stays VALUES(205, 9676743920);
INSERT INTO Stays VALUES(206, 7713846471);
INSERT INTO Stays VALUES(207, 5757034581);
INSERT INTO Stays VALUES(208, 1010283210);
INSERT INTO Stays VALUES(209, 4589982341);

/* price of bill is the price after including 12% tax */
INSERT INTO Bill VALUES(1000, 222.88, 5872334861);
INSERT INTO Bill VALUES(1001, 222.88, 8575813045);
INSERT INTO Bill VALUES(1002, 222.88, 6674486201);
INSERT INTO Bill VALUES(1003, 196, 9586249135);
INSERT INTO Bill VALUES(1004, 222.88, 7574823004);
INSERT INTO Bill VALUES(1005, 222.88, 9676743920);
INSERT INTO Bill VALUES(1006, 334.88, 7713846471);
INSERT INTO Bill VALUES(1007, 334.88, 5757034581);
INSERT INTO Bill VALUES(1008, 222.88, 1010283210);
INSERT INTO Bill VALUES(1009, 196, 4589982341);

INSERT INTO Transaction VALUES(995, 'Credit Card', 20181019);
INSERT INTO Transaction VALUES(996, 'Cash', 20181201);
INSERT INTO Transaction VALUES(997, 'Credit Card', 20181202);
INSERT INTO Transaction VALUES(998, 'Credit Card', 20181215);
INSERT INTO Transaction VALUES(999, 'Cash', 20181231);

/* No tuples in Pays table assuming everyone that has checked out has paid,
   and the customers currently checked in have not yet paid */

/* Male gender = 1, Female gender = 0 */
INSERT INTO Employee VALUES(1, 'George', 'Harrington', 1, 'Manager', '2215 Robson Street', 'gerogeharrington@naturalreservation.com','jHapcnUH');
INSERT INTO Employee VALUES(2, 'Robert', 'Mack', 1, 'Supervisor', '1611 St George Street', 'robermack@naturalreservation.com', 'mLtz64mb');
INSERT INTO Employee VALUES(3, 'Richard', 'White', 1, 'Receiptionist', '1123 Robson St', 'richardwhite@naturalreservation.com', 'AAWV77Gv');
INSERT INTO Employee VALUES(4, 'Jessica', 'Perez', 0, 'Receiptionist', '2912 Robson St', 'jessicaperez@naturalreservation.com', 'hN9fPgfm');
INSERT INTO Employee VALUES(5, 'Betty', 'Alderson', 0, 'Supervisor', '3124 Wesbrook Mall', 'bettyalderson@naturalreservation.com', 'BqkcpAfG');
INSERT INTO Employee VALUES(6, 'Caroline', 'Pearson', 0, 'Maid', '9981 Agronomy Road', 'carolinepearson@naturalreservation.com', 'pcrCcJ5S');
INSERT INTO Employee VALUES(7, 'Matthew', 'Green', 1, 'Maid', '12516 Charles Street', 'matthewgreen@naturalreservation.com', 'CugGFGNaaC');
INSERT INTO Employee VALUES(8, 'Sean', 'Johnston', 1, 'Manager', '3308 Ash St', 'seanjohnston@naturalreservation.com', 'Ds6n6P7NX6');
INSERT INTO Employee VALUES(9, 'Robert', 'Hector', 1, 'Maid', '12356 W Broadway', 'roberthector@naturalreservation.com', 'BFEfpRpFgR');
INSERT INTO Employee VALUES(10, 'Deloris', 'Stocking', 0, 'Maid', '275 28th Ave', 'delorisstocking@naturalreservation.com', '6UuSpQvkp8');
INSERT INTO Employee VALUES(999, 'admin', 'admin', 1, 'admin', 'admin', 'admin', 'admin');

INSERT INTO Employee_Assigned_to_Room VALUES(6, 202);
INSERT INTO Employee_Assigned_to_Room VALUES(7, 204);
INSERT INTO Employee_Assigned_to_Room VALUES(9, 207);
INSERT INTO Employee_Assigned_to_Room VALUES(10, 209);
INSERT INTO Employee_Assigned_to_Room VALUES(6, 104);
INSERT INTO Employee_Assigned_to_Room VALUES(7, 106);
INSERT INTO Employee_Assigned_to_Room VALUES(9, 107);

INSERT INTO Creates_Hotel_Agreement VALUES(1, 6);
INSERT INTO Creates_Hotel_Agreement VALUES(2, 7);
INSERT INTO Creates_Hotel_Agreement VALUES(3, 8);
INSERT INTO Creates_Hotel_Agreement VALUES(4, 9);
INSERT INTO Creates_Hotel_Agreement VALUES(5, 10);
INSERT INTO Creates_Hotel_Agreement VALUES(6, 11);
INSERT INTO Creates_Hotel_Agreement VALUES(7, 12);
INSERT INTO Creates_Hotel_Agreement VALUES(8, 13);
INSERT INTO Creates_Hotel_Agreement VALUES(9, 14);
INSERT INTO Creates_Hotel_Agreement VALUES(10, 15);

INSERT INTO Associated_With VALUES(1000, 1, 200);
INSERT INTO Associated_With VALUES(1001, 2, 201);
INSERT INTO Associated_With VALUES(1002, 3, 202);
INSERT INTO Associated_With VALUES(1003, 4, 203);
INSERT INTO Associated_With VALUES(1004, 5, 204);
INSERT INTO Associated_With VALUES(1005, 6, 205);
INSERT INTO Associated_With VALUES(1006, 7, 206);
INSERT INTO Associated_With VALUES(1007, 8, 207);
INSERT INTO Associated_With VALUES(1008, 9, 208);
INSERT INTO Associated_With VALUES(1009, 10, 209);

INSERT INTO Vehicle VALUES('Grey', 'Chevrolet', 7782347896);
INSERT INTO Vehicle VALUES('Red', 'Toyota', 5872334861);
INSERT INTO Vehicle VALUES('Black', 'Chevrolet', 7713846471);
