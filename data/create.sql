CREATE TABLE agreements (
  aid varchar(20) PRIMARY KEY,
  rid int(11) NOT NULL,
  FOREIGN KEY (rid) REFERENCES reservations (rid) ON DELETE CASCADE
);
CREATE TABLE assignments (
  eid int(11) NOT NULL,
  roomnum int(11) NOT NULL,
  PRIMARY KEY (eid,roomnum),
  FOREIGN KEY (eid) REFERENCES employees (eid),
  FOREIGN KEY (roomnum) REFERENCES stays (roomnum)
);
CREATE TABLE bills (
  bid int(11) PRIMARY KEY,
  snumber int(11) DEFAULT NULL,
  pnumber varchar(10) DEFAULT NULL,
  FOREIGN KEY (pnumber) REFERENCES customers (pnumber) ON UPDATE CASCADE,
  FOREIGN KEY (snumber) REFERENCES services (snumber) ON UPDATE CASCADE,
);
CREATE TABLE confirmations (
  bid int(11) NOT NULL,
  aid varchar(20) NOT NULL,
  roomnum int(11) NOT NULL,
  PRIMARY KEY (bid,aid,roomnum),
  FOREIGN KEY (bid) REFERENCES bills (bid),
  FOREIGN KEY (aid) REFERENCES agreements (aid),
  FOREIGN KEY (roomnum) REFERENCES stays (roomnum)
);
CREATE TABLE customers (
  pnumber varchar(10) PRIMARY KEY,
  fname varchar(20) DEFAULT NULL,
  lname varchar(20) DEFAULT NULL
);
CREATE TABLE employees (
  eid int(11) PRIMARY KEY,
  fname varchar(20) DEFAULT NULL,
  lname varchar(20) DEFAULT NULL,
  gender varchar(6) DEFAULT NULL,
  role varchar(20) DEFAULT NULL,
  address varchar(30) DEFAULT NULL
);
CREATE TABLE pays (
  bid int(11) NOT NULL,
  tid int(11) NOT NULL,
  pnumber varchar(10) NOT NULL,
  PRIMARY KEY (bid,tid),
  FOREIGN KEY (bid) REFERENCES bills (bid) ON DELETE CASCADE,
  FOREIGN KEY (tid) REFERENCES transactions (tid) ON DELETE CASCADE,
  FOREIGN KEY (pnumber) REFERENCES customers (pnumber) ON DELETE CASCADE
);
CREATE TABLE reservations (
  rid int(11) PRIMARY KEY,
  pnumber varchar(10) DEFAULT NULL,
  checkOutDate date DEFAULT NULL,
  checkInDate date DEFAULT NULL,
  FOREIGN KEY (pnumber) REFERENCES customers (pnumber) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE services (
  snumber int(11) PRIMARY KEY,
  sname varchar(20) DEFAULT NULL,
  amount float DEFAULT NULL
);
CREATE TABLE stays (
  roomnum int(11) PRIMARY KEY,
  nobeds int(11) DEFAULT NULL,
  cleanliness int(11) DEFAULT NULL,
  duration int(11) DEFAULT NULL,
  price float DEFAULT NULL,
  pnumber varchar(10) NOT NULL,
  FOREIGN KEY (pnumber) REFERENCES customers (pnumber) ON DELETE CASCADE
);
CREATE TABLE transactions (
  tid int(11) PRIMARY KEY,
  type varchar(20) DEFAULT NULL,
  date date DEFAULT NULL
);
CREATE TABLE vacancy (
  roomnum int(11) PRIMARY KEY,
  rid int(11) DEFAULT NULL,
  nobeds int(11) DEFAULT NULL,
  cleanliness bit(1) DEFAULT NULL,
  price float DEFAULT NULL,
  FOREIGN KEY (rid) REFERENCES reservations (rid) ON DELETE SET NULL
);
CREATE TABLE vehicles (
  color varchar(10) NOT NULL,
  model varchar(10) NOT NULL,
  pnumber varchar(10) NOT NULL,
  PRIMARY KEY (color, model, pnumber),
  FOREIGN KEY (pnumber) REFERENCES customers (pnumber) ON DELETE CASCADE
);