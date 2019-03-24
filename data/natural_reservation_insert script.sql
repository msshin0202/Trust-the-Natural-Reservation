INSERT INTO Customer VALUES('7788712157', 'Matthew', 'Shin');
INSERT INTO Customer VALUES('7782347896', 'Jad', 'AppleSeed');
INSERT INTO Customer VALUES('6048761023', 'Henry', 'James');
INSERT INTO Customer VALUES('2509871320', 'James', 'Potter');
INSERT INTO Customer VALUES('2139557819', 'Garry', 'Longbottom');
INSERT INTO Customer VALUES('5872334861', 'Harry', 'Potter');
INSERT INTO Customer VALUES('8575813045', 'Tom', 'Riddle');
INSERT INTO Customer VALUES('6674486201', 'Ron', 'Weasley');
INSERT INTO Customer VALUES('9586249135', 'Harmonie', 'Granger');
INSERT INTO Customer VALUES('7574823004', 'John', 'Smith');
INSERT INTO Customer VALUES('9676743920', 'John', 'Smith');
INSERT INTO Customer VALUES('7713846471', 'Clark', 'Kent');
INSERT INTO Customer VALUES('5757034581', 'Louise', 'Lane');
INSERT INTO Customer VALUES('1010283210', 'Mary', 'Jane');
INSERT INTO Customer VALUES('4589982341', 'Michael', 'Bishop');

/* Reserved but not checked-in rooms */
INSERT INTO Reservation_Made_By VALUES(1, 7788712157, 20190104, 20190109);
INSERT INTO Reservation_Made_By VALUES(2, 7788712157, 20190104, 20190109);
INSERT INTO Reservation_Made_By VALUES(3, 6048761023, 20190201, 20190207);
INSERT INTO Reservation_Made_By VALUES(4, 2139557819, 20190109, 20190112);
INSERT INTO Reservation_Made_By VALUES(5, 2509871320, 20190102, 20190103);

/* Rooms already checked-in */
INSERT INTO Reservation_Made_By VALUES(6, 5872334861, 20190102, 20190103);
INSERT INTO Reservation_Made_By VALUES(7, 8575813045, 20190103, 20190104);
INSERT INTO Reservation_Made_By VALUES(8, 6674486201, 20181220, 20190101);
INSERT INTO Reservation_Made_By VALUES(9, 9586249135, 20181223, 20181227);
INSERT INTO Reservation_Made_By VALUES(10, 7574823004, 20181220, 20181226);
INSERT INTO Reservation_Made_By VALUES(11, 9676743920, 20181227, 20190103);
INSERT INTO Reservation_Made_By VALUES(12, 7713846471, 20190102, 20190103);
INSERT INTO Reservation_Made_By VALUES(13, 5757034581, 20190101, 20190106);
INSERT INTO Reservation_Made_By VALUES(14, 1010283210, 20190102, 20190110);
INSERT INTO Reservation_Made_By VALUES(15, 4589982341, 20190102, 20190103);

INSERT INTO Vacant_Room VALUES(100, 1, 2, 1, 199);
INSERT INTO Vacant_Room VALUES(101, 2, 2, 1, 199);
INSERT INTO Vacant_Room VALUES(102, 3, 2, 1, 199);
INSERT INTO Vacant_Room VALUES(103, 4, 1, 1, 175);
INSERT INTO Vacant_Room VALUES(104, NULL, 2, 0, 199);
INSERT INTO Vacant_Room VALUES(105, NULL, 2, 1, 199);
INSERT INTO Vacant_Room VALUES(106, NULL, 4, 0, 299);
INSERT INTO Vacant_Room VALUES(107, NULL, 4, 0, 299);
INSERT INTO Vacant_Room VALUES(108, NULL, 2, 1, 250);
INSERT INTO Vacant_Room VALUES(109, 5, 2, 1, 250);

INSERT INTO Stays_In_Occupied_Room VALUES(200, 2, 1, 20190102, 20190103, 199, 5872334861);
INSERT INTO Stays_In_Occupied_Room VALUES(201, 2, 1, 20190103, 20190104, 199, 8575813045);
INSERT INTO Stays_In_Occupied_Room VALUES(202, 2, 0, 20181220, 20190101, 199, 6674486201);
INSERT INTO Stays_In_Occupied_Room VALUES(203, 1, 1, 20181223, 20181227, 175, 9586249135);
INSERT INTO Stays_In_Occupied_Room VALUES(204, 2, 0, 20181220, 20181226, 199, 7574823004);
INSERT INTO Stays_In_Occupied_Room VALUES(205, 2, 1, 20181227, 20190103, 199, 9676743920);
INSERT INTO Stays_In_Occupied_Room VALUES(206, 4, 1, 20190102, 20190103, 299, 7713846471);
INSERT INTO Stays_In_Occupied_Room VALUES(207, 4, 0, 20190101, 20190106, 299, 5757034581);
INSERT INTO Stays_In_Occupied_Room VALUES(208, 2, 1, 20190102, 20190110, 250, 1010283210);
INSERT INTO Stays_In_Occupied_Room VALUES(209, 1, 0, 20190102, 20190103, 250, 4589982341);

/* price of bill is the price after including 12% tax */
INSERT INTO Bill VALUES(1000, 222.88);
INSERT INTO Bill VALUES(1001, 222.88);
INSERT INTO Bill VALUES(1002, 222.88);
INSERT INTO Bill VALUES(1003, 196);
INSERT INTO Bill VALUES(1004, 222.88);
INSERT INTO Bill VALUES(1005, 222.88);
INSERT INTO Bill VALUES(1006, 334.88);
INSERT INTO Bill VALUES(1007, 334.88);
INSERT INTO Bill VALUES(1008, 222.88);
INSERT INTO Bill VALUES(1009, 196);

INSERT INTO Transaction VALUES(995, 'Credit Card', 20181019);
INSERT INTO Transaction VALUES(996, 'Cash', 20181201);
INSERT INTO Transaction VALUES(997, 'Credit Card', 20181202);
INSERT INTO Transaction VALUES(998, 'Credit Card', 20181215);
INSERT INTO Transaction VALUES(999, 'Cash', 20181231);

/* No tuples in Pays table assuming everyone that has checked out has paid,
   and the customers currently checked in have not yet paid */

/* Male gender = 1, Female gender = 0 */
INSERT INTO Employee VALUES(1, 'George', 'Harrington', 1, 'Manager', '2215 Robson Street');
INSERT INTO Employee VALUES(2, 'Robert', 'Mack', 1, 'Supervisor', '1611 St George Street');
INSERT INTO Employee VALUES(3, 'Richard', 'White', 1, 'Receiptionist', '1123 Robson St');
INSERT INTO Employee VALUES(4, 'Jessica', 'Perez', 0, 'Receiptionist', '2912 Robson St');
INSERT INTO Employee VALUES(5, 'Betty', 'Alderson', 0, 'Supervisor', '3124 Wesbrook Mall');
INSERT INTO Employee VALUES(6, 'Caroline', 'Pearson', 0, 'Maid', '9981 Agronomy Road');
INSERT INTO Employee VALUES(7, 'Matthew', 'Green', 1, 'Maid', '12516 Charles Street');
INSERT INTO Employee VALUES(8, 'Sean', 'Johnston', 1, 'Manager', '3308 Ash St');
INSERT INTO Employee VALUES(9, 'Robert', 'Hector', 1, 'Maid', '12356 W Broadway');
INSERT INTO Employee VALUES(10, 'Deloris', 'Stocking', 0, 'Maid', '275 28th Ave');

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
