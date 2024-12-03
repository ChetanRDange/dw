// Create a Song Database:                                                                                          
// 1. List the names of songs written by “:…..” .                                      
// 2. List the names of record companies who have financed for the song “….”.[4]  
// 3. List the names of artist performing the song “…..”. [4]  
// 4. Name the songs recorded by the studio “ …….” . [3] 


Schema Definition
The Song collection can have the following structure:

json
Copy code
{
  "title": "string",
  "writer": "string",
  "recordCompany": "string",
  "artist": "string",
  "studio": "string"
}

Insert Example Data
javascript
Copy code

db.Song.insertMany([
  {
    title: "Song A",
    writer: "Writer 1",
    recordCompany: "Record Company 1",
    artist: "Artist 1",
    studio: "Studio 1"
  },
  {
    title: "Song B",
    writer: "Writer 2",
    recordCompany: "Record Company 2",
    artist: "Artist 2",
    studio: "Studio 2"
  },
  {
    title: "Song C",
    writer: "Writer 1",
    recordCompany: "Record Company 1",
    artist: "Artist 3",
    studio: "Studio 3"
  },
  {
    title: "Song D",
    writer: "Writer 3",
    recordCompany: "Record Company 3",
    artist: "Artist 1",
    studio: "Studio 1"
  },
  {
    title: "Song E",
    writer: "Writer 2",
    recordCompany: "Record Company 2",
    artist: "Artist 4",
    studio: "Studio 2"
  }
]);


Queries

List the names of songs written by a specific writer ("Writer 1"):

   db.Song.find({ writer: "Writer 1" }, { title: 1, _id: 0 });

List the names of record companies that financed a specific song ("Song A"):

    db.Song.find({ title: "Song A" }, { recordCompany: 1, _id: 0 });
List the names of artists performing a specific song ("Song A"):

    db.Song.find({ title: "Song A" }, { artist: 1, _id: 0 });
Name the songs recorded by a specific studio ("Studio 1"):

    db.Song.find({ studio: "Studio 1" }, { title: 1, _id: 0 });





