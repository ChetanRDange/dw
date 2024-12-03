// Create a Neo4j Library Database .                                                                     
// List all people, who have issued a book “……” .   [4] 
// 1. Count the number of people who have read “….”. [4]  
// 2. Add a property “Number of books issued for Mr. Joshi and set its value as  
// the count                                                                  
// [4] 
// 3. List the names of publishers from pune city.           
// [3] 

Here are the Cypher queries for working with a Neo4j Library Database:

1. List all people who have issued a book “…”
cypher

     MATCH (person:Person)-[:ISSUED]->(book:Book {title: "..."})
     RETURN person.name AS PersonName;

This query finds all people who have issued a book with the title ....

2. Count the number of people who have read “…”
cypher

     MATCH (person:Person)-[:READ]->(book:Book {title: "..."})
     RETURN COUNT(DISTINCT person) AS NumberOfPeopleWhoRead;

This query counts how many distinct people have read a book titled ....

3. Add a property “Number of books issued” for Mr. Joshi and set its value as the count
cypher

   MATCH (person:Person {name: "Mr. Joshi"})-[:ISSUED]->(book:Book)
   WITH COUNT(book) AS issuedCount
   SET person.numberOfBooksIssued = issuedCount
   RETURN person.name, person.numberOfBooksIssued;

This query counts the number of books issued by Mr. Joshi and adds a property numberOfBooksIssued to his node.

4. List the names of publishers from Pune city
cypher

   MATCH (publisher:Publisher)
   WHERE publisher.city = "Pune"
   RETURN publisher.name AS PublisherName;

This query lists the names of publishers located in Pune.

