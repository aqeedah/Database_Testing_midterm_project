# programme: Database Testing [SENG8075]

# Section:3

# Submitted to: Professor Andy Chow

# project partners:
1. Akida Laliwala [8975812]
2. Prachi Thakral [8973781]
3. Divtej Pal Singh [8962715]


# Duties of team member
--> Creation of tables and Insertion till 'books' table is done by **Divtej Pal Singh**.
--> Insertion into remaining table and CRUD Operation / DDL & DML is done by **Prachi Thakral**.
--> Solution of asked requirements and typescript is done by **Akida Laliwala**.

#customer table
```insert into customer (customer_id,first_name,last_name,contact_number,address,total_spent_amount,registration_date)  values (101,'Akida','Aazam',437-9632145,'41,king street,waterloo,ON',700.70,'2010-01-25'),   (102,'Prachi','Thakral',437-1236985,'48,erb street,waterloo,ON',500.50,'2011-02-20'),
(103,'Divtej','Singh',752-1239687,'56,philip street,waterloo,ON',300.30,'2012-03-27'),
 (104,'Swati','Sansarwal',720-1254789,'125,queen street,waterloo,ON',450.30,'2013-05-19'),
 (105,'Mayank','Sharma',778-9875463,'78,lester street,waterloo,ON',235.40,'2014-06-15'),
(106,'Kartik','Singh',798-4587962,'88,albert street,montreal,QC',550.30,'2015-07-17'),
(107,'Zaroon','Zunaid',451-4158796,'12,hickory street,montreal,QC',720.20,'2016-08-08'),
 (108,'Kashaf','Murtuza',652-7895412,'10,mackay street,waterloo,ON',260.30,'2020-09-05'),
 (109,'Michel','Wilson',478-1245789,'45,nocker street,montreal,QC',215.20,'2022-10-29'),
 (110,'Rubby','Smith',458-5278964,'2,marshal street,montreal,QC',350.30,'2023-11-10'),
 (111,'Kethrin','Johnson',965-8574961,'50,hithrow street,waterloo,ON',500.30,'2022-06-27'),
 (112,'David','Wilson',958-4578961,'90,regina street,toronto,ON',400.30,'2023-03-30'),
(113,'Kiara','Davis',452-7854963,'98,Columbia street,Hamilton,ON',600.60,'2022-12-27'),
 (114,'Nayra','Patinson',658-5285749,'86,Linclon street,Brandford,ON',250.70,'2023-05-03'),
  (115,'Kunj','Singh',124-8574961,'89,water street,Cambridge,ON',374.17,'2022-11-11');```

| customer_id | first_name | last_name | contact_number | address                        | total_spent_amount | registration_date |
|:-----------:|:----------:|:---------:|:--------------:|:------------------------------:|:------------------:|:-----------------:|
| 101         | Akida      | Aazam     | 437-9632145    | 41,king street,waterloo,ON     | 700.70               2010-01-25              |
| 102         | Prachi     | Thakral   | 437-1236985    | 48,erb street,waterloo,ON      | 500.50             | 2011-02-20             |
| 103         | Divtej     | Singh     | 752-1239687    | 56,philip street,waterloo,ON   | 300.30             | 2012-03-27                |
| 104         | Swati      | Sansarwal | 720-1254789    | 125,queen street,waterloo,ON   | 450.30             | 2013-05-19                |
| 105         | Mayank     | Sharma    | 778-9875463    | 78,lester street,waterloo,ON   | 235.40             | 2014-06-15                |
| 106         | Kartik     | Singh     | 798-4587962    | 88,albert street,montreal,QC   | 550.30             | 2015-07-17                |
| 107         | Zaroon     | Zunaid    | 451-4158796    | 12,hickory street,montreal,QC  | 720.20             | 2016-08-08                 |
| 108         | Kashaf     | Murtuza   | 652-7895412    | 10,mackay street,waterloo,ON   | 260.30             | 2020-09-05                |
| 109         | Michel     | Wilson    | 478-1245789    | 45,nocker street,montreal,QC   | 215.20             | 2022-10-29                |
| 110         | Rubby      | Smith     | 458-5278964    | 2,marshal street,montreal,QC   | 350.30             | 2023-11-10                |
| 111         | Kethrin    | Johnson   | 965-8574961    | 50,hithrow street,waterloo,ON  | 500.30             | 2022-06-27                 |
| 112         | David      | Wilson    | 958-4578961    | 90,regina street,toronto,ON    | 400.30             | 2023-03-30                |
| 113         | Kiara      | Davis     | 452-7854963    | 98,Columbia street,Hamilton,ON | 600.60             | 2022-12-27                  |
| 114         | Nayra      | Patinson  | 658-5285749    | 86,Linclon street,Brandford,ON | 250.70             | 2023-05-03                 |
| 115         | Kunj       | Singh     | 124-8574961    | 89,water street,Cambridge,ON   | 374.17             | 2022-11-11               |

#orders table
```insert into orders (order_id, customer_id, order_date, bill_amount)
	values (001,101,'2023-01-25',100.11),
		 (002,102,'2022-02-02',50.11),
		 (003,103,'2021-03-14',120.10),
		 (004,104,'2020-04-18',45.11),
		 (005,105,'2019-05-12',70.17),
		 (006,106,'2018-06-07',110.11),
		 (007,107,'2023-07-11',60.16),
		 (008,108,'2022-08-03',55.15),
		 (009,109,'2021-09-01',105.05),
		 (010,110,'2020-10-04',75.75),
		(011,111,'2019-11-09',30.11),
		(012,112,'2018-12-12',40.40),
		 (013,113,'2023-01-13',111.11),
		 (014,114,'2022-02-22',99.99),
		 (015,115,'2021-02-19',130.13);```
| order_id | customer_id | order_date | bill_amount |
|:--------:|:-----------:|:----------:|:-----------:|
| 001      | 101         | 2023-01-25 | 100.11      |
| 002      | 102         | 2022-02-02 | 50.11       |
| 003      | 103         | 2021-03-14 | 120.10      |
| 004      | 104         | 2020-04-18 | 45.11       |
| 005      | 105         | 2019-05-12 | 70.17       |
| 006      | 106         | 2018-06-07 | 110.11      |
| 007      | 107         | 2023-07-11 | 60.16       |
| 008      | 108         | 2022-08-03 | 55.15       |
| 009      | 109         | 2021-09-01 | 105.05      |
| 010      | 110         | 2020-10-04 | 75.75       |
| 011      | 111         | 2019-11-09 | 30.11       |
| 012      | 112         | 2018-12-12 | 40.40       |
| 013      | 113         | 2023-01-13 | 111.11      |
| 014      | 114         | 2022-02-22 | 99.99       |
| 015      | 115         | 2021-02-19 | 130.13      |


#order_item table
```insert into order_item (order_item_id, order_id, book_id, quantity, price)
	values (01, 001, 2, 2, 48),
		(02, 002, 5, 1, 16),
		(03, 003, 3, 2, 20),
		 (04, 004, 7, 1, 38),
		 (05, 005, 11, 1, 28.40),
		(06, 006, 17, 1, 17.14),
		(07, 007, 20, 2, 20),
		(08, 008, 19, 3, 42),
		(09, 009, 12, 1, 26.13),
		(10, 010, 14, 2, 50),
		(11, 011, 24, 5, 53),
		(12, 012, 21, 2, 42),
		(13, 013, 16, 3, 51),
		(14, 014, 9, 4, 140),
		(15, 015, 8, 2, 40);```

| order_item_id | order_id | book_id | quantity | price  |
|:-------------:|:--------:|:-------:|:--------:|:------:|
| 01            | 001      | 2       | 2        | 48.00  |
| 02            | 002      | 5       | 1        | 16.00  |
| 03            | 003      | 3       | 2        | 20.00  |
| 04            | 004      | 7       | 1        | 38.00  |
| 05            | 005      | 11      | 1        | 28.40  |
| 06            | 006      | 17      | 1        | 17.14  |
| 07            | 007      | 20      | 2        | 20.00  |
| 08            | 008      | 19      | 3        | 42.00  |
| 09            | 009      | 12      | 1        | 26.13  |
| 10            | 010      | 14      | 2        | 50.00  |
| 11            | 011      | 24      | 5        | 53.00  |
| 12            | 012      | 21      | 2        | 42.00  |
| 13            | 013      | 16      | 3        | 51.00  |
| 14            | 014      | 9       | 4        | 140.00 |
| 15            | 015      | 8       | 2        | 40.00  |

#review table
```insert into review (review_id, customer_id, book_id, review_date, review_comment, ratings)
values (1,101,2,'2023-09-25','Excellent Book!',4),
	   (2,102,5,'2023-01-02','Nice Book!',3),
	   (3,103,3,'2022-05-15','Quite slow!',2),
	   (4,104,7,'2023-05-25','Nice book to Recommend',5),
	   (5,105,11,'2022-09-22','Fentastic story!',4),
	   (6,106,17,'2021-08-10','Quite boring!',1),
	   (7,107,2,'2023-12-12','Good Book to read!',3),
	   (8,108,19,'2023-03-16','Nice Book!',3),
	   (9,109,12,'2022-11-21','Fentastic story!',4),
	   (10,110,14,'2021-12-26','Quite boring!',1),
	   (11,111,24,'2020-02-10','Good Book to read!',3),
	   (12,112,21,'2019-12-12','Quite slow!',2),
	   (13,113,16,'2023-07-15','Nice book to Recommend',5),
	   (14,114,9,'2023-01-27','Excellent Book!',4),
	   (15,115,8,'2022-08-20','Nice Book!',3);```    
| review_id | customer_id | book_id | review_date | review_comment | ratings |
| 1         | 101         | 2       | 2023-09-25  | Excellent Book!        | 4       |
| 2         | 102         | 5       | 2023-01-02  | Nice Book!             | 3       |
| 3         | 103         | 3       | 2022-05-15  | Quite slow!            | 2       |
| 4         | 104         | 7       | 2023-05-25  | Nice book to Recommend | 5       |
| 5         | 105         | 11      | 2022-09-22  | Fantastic story!       | 4       |
| 6         | 106         | 17      | 2021-08-10  | Quite boring!          | 1       |
| 7         | 107         | 2       | 2023-12-12  | Good Book to read!     | 3       |
| 8         | 108         | 19      | 2023-03-16  | Nice Book!             | 3       |
| 9         | 109         | 12      | 2022-11-21  | Fantastic story!       | 4       |
| 10        | 110         | 14      | 2021-12-26  | Quite boring!          | 1       |
| 11        | 111         | 24      | 2020-02-10  | Good Book to read!     | 3       |
| 12        | 112         | 21      | 2019-12-12  | Quite slow!            | 2       |
| 13        | 113         | 16      | 2023-07-15  | Nice book to Recommend | 5       |
| 14        | 114         | 9       | 2023-01-27  | Excellent Book!        | 4       |
| 15        | 115         | 8       | 2022-08-20  | Nice Book!             | 3       |


# DDL Operations
1.	Creation of database:
```create database online_book_store;```

2.	Alter table in database:
```drop table public.books;```

3.	Drop database:
```drop database online_book_store;```

# DML Operations/ CRUD Operation
1.	Insert into customer table:
```insert into customer (customer_id,first_name,last_name,contact_number,address,total_spent_amount,registration_date)  values (116,'Edward','Coolin',437-8574259,'41,Lenster street,waterloo,ON',50.70,'2024-05-25'); ``` 

2.	Read from customer table:
```select * from customer where customer_id = 116;```

3.	Update into customer table:

``` update customer 
	set total_spent_amount = 100
	where customer_id = 116;```

4.	Delete from customer table:
``` delete from customer where customer_id = 116;```

•	Updating into orders table:
```update orders
set order_date = case
   	 when order_id = 001 then '2023-12-31'
    	when order_id = 002 then '2024-01-01'
    	when order_id = 008 then '2023-11-05'
	when order_id = 013 then '2023-11-17'
	when order_id = 014 then '2023-09-11'
    ELSE order_date
END
WHERE order_id IN (001,002,008,013,014);```

