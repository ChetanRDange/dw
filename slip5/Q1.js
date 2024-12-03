// Create a Neo4j Library Database.                                                                      
// 1. List all readers who have recommended either book “…” or “……..” . [4] 
// 2. List the readers who haven‟t recommended any book.                           [4] 
// 3. List the authors who have written a book that has been read / issued  
// by maximum number of readers.                                                              
// [4] 
// 4. List the names of books recommended by “ .......” and read by at least  
// one reader.                                                                                                
// [3] 


1. List all readers who have recommended either book “…” or “…”
cypher

     MATCH (reader:Reader)-[:RECOMMENDED]->(book:Book)
     WHERE book.title = "..." OR book.title = "..."
     RETURN DISTINCT reader.name AS ReaderName;
2. List the readers who haven’t recommended any book
cypher

     MATCH (reader:Reader)
     WHERE NOT (reader)-[:RECOMMENDED]->(:Book)
     RETURN reader.name AS ReaderName;
3. List the authors who have written a book that has been read/issued by the maximum number of readers
cypher

      MATCH (reader:Reader)-[:READ|ISSUED]->(book:Book)<-[:WRITTEN_BY]-(author:Author)
      WITH author, COUNT(DISTINCT reader) AS ReaderCount
      ORDER BY ReaderCount DESC
      LIMIT 1
      RETURN author.name AS AuthorName, ReaderCount;
4. List the names of books recommended by “...” and read by at least one reader
cypher

     MATCH (recommender:Reader {name: "..."})-[:RECOMMENDED]->(book:Book)<-[:READ]-(reader:Reader)
     RETURN DISTINCT book.title AS BookTitle;
     These queries address the scenarios in a library database. Let me know if you need assistance with the schema or data creation!