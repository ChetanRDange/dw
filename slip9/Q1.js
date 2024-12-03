// Model the following system as a document database.                                          
// Consider a database of newspaper, publisher, and city. 
// 1. Insert at least 5 documents in each collection. [4] 
// 2. List all newspapers available “NASHIK” city [4] 
// 3. List all the newspaper of “Marathi” language [4] 
// 4. Count no. of publishers of “Gujrat” state .      
// [3]

1. Insert Documents into Each Collection
Newspapers Collection:

db.Newspapers.insertMany([
    { title: "Lokmat", language: "Marathi", city: "Nashik", publisher: "Lokmat Media" },
    { title: "Sakal", language: "Marathi", city: "Pune", publisher: "Pune Media" },
    { title: "Times of India", language: "English", city: "Mumbai", publisher: "The Times Group" },
    { title: "Navbharat Times", language: "Hindi", city: "Delhi", publisher: "The Times Group" },
    { title: "Maharashtra Times", language: "Marathi", city: "Nashik", publisher: "Maharashtra Times Ltd" }
]);


Publishers Collection:

db.Publishers.insertMany([
    { name: "Lokmat Media", state: "Maharashtra", city: "Nashik" },
    { name: "Pune Media", state: "Maharashtra", city: "Pune" },
    { name: "The Times Group", state: "Maharashtra", city: "Mumbai" },
    { name: "Maharashtra Times Ltd", state: "Maharashtra", city: "Nashik" },
    { name: "Gujarat Times", state: "Gujrat", city: "Ahmedabad" }
]);


Cities Collection:


db.Cities.insertMany([
    { name: "Nashik", state: "Maharashtra" },
    { name: "Pune", state: "Maharashtra" },
    { name: "Mumbai", state: "Maharashtra" },
    { name: "Ahmedabad", state: "Gujrat" },
    { name: "Delhi", state: "Delhi" }
]);


2. List All Newspapers Available in “Nashik” City

     db.Newspapers.find({ city: "Nashik" }).pretty();

This query lists all the newspapers available in the city of Nashik.

3. List All Newspapers of “Marathi” Language

    db.Newspapers.find({ language: "Marathi" }).pretty();

This query lists all the newspapers that are in the Marathi language.

4. Count the Number of Publishers in the “Gujrat” State

    db.Publishers.countDocuments({ state: "Gujrat" });

This query counts the number of publishers in the Gujrat state