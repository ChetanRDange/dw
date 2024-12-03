// Create a Neo4j Library Database                                                                
// 1. List all people, who have issued a book “……” .   [4] 
// 2. Count the number of people who have read “….”. [4]  
// 3. Add a property “Number of books issued for Mr. Joshi and set its value  
// as the count                                                              
// [4] 
// 4. List the names of publishers from pune city.           
// [3].  

1. List all people who have issued a book “…”
cypher
Copy code

MATCH (person:Person)-[:ISSUED]->(book:Book {title: "..."})
RETURN person.name AS Name;

2. Count the number of people who have read “…”
cypher
Copy code

MATCH (person:Person)-[:READ]->(book:Book {title: "..."})
RETURN COUNT(person) AS NumberOfReaders;

3. Add a property “Number of books issued” for Mr. Joshi and set its value as the count
cypher
Copy code

MATCH (person:Person {name: "Mr. Joshi"})-[:ISSUED]->(book:Book)
WITH person, COUNT(book) AS NumberOfBooksIssued
SET person.NumberOfBooksIssued = NumberOfBooksIssued
RETURN person.name, person.NumberOfBooksIssued;

4. List the names of publishers from Pune city
cypher

Copy code

MATCH (publisher:Publisher {city: "Pune"})
RETURN publisher.name AS PublisherName;
Let me know if you'd like more explanation or adjustments!






