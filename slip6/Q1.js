// Create a Neo4j Library Database.                                                                       
// 1. List the authors who have written a book that has been read / issued  
// by maximum number of readers.                                                            
// 2. List the names of books recommended by “ .............. ” And read by  
// at least one reader .                                                                                  
// 3. List the names of books recommended by “ ............. ” and read by  
// maximum number of readers.                                                                  
// 4.  List the names of publishers who haven‟t published any books written 
// by authors from Pune and Mumbai.    


1. List the authors who have written a book that has been read/issued by the maximum number of readers
cypher

    MATCH (reader:Reader)-[:READ|ISSUED]->(book:Book)<-[:WRITTEN_BY]-(author:Author)
    WITH author, COUNT(DISTINCT reader) AS ReaderCount
    ORDER BY ReaderCount DESC
    LIMIT 1
    RETURN author.name AS AuthorName, ReaderCount;
2. List the names of books recommended by “...” and read by at least one reader
cypher

    MATCH (recommender:Reader {name: "..."})-[:RECOMMENDED]->(book:Book)<-[:READ]-(reader:Reader)
    RETURN DISTINCT book.title AS BookTitle;
3. List the names of books recommended by “...” and read by the maximum number of readers
cypher

    MATCH (recommender:Reader {name: "..."})-[:RECOMMENDED]->(book:Book)<-[:READ]-(reader:Reader)
    WITH book, COUNT(reader) AS ReaderCount
    ORDER BY ReaderCount DESC
    LIMIT 1
    RETURN book.title AS BookTitle, ReaderCount;
4. List the names of publishers who haven’t published any books written by authors from Pune and Mumbai
cypher

    MATCH (publisher:Publisher)
    WHERE NOT EXISTS {
        MATCH (publisher)-[:PUBLISHED]->(book:Book)<-[:WRITTEN_BY]-(author:Author)
        WHERE author.city IN ["Pune", "Mumbai"]
    }
    RETURN publisher.name AS PublisherName;