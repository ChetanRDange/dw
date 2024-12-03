// Model the following system as a graph model, Government provides various scholarships 
// for students. A student applies for scholarship. Student can get benefits of more than one 
// scholarship if satisfies the criteria. Student can recommend it for his friends or other family 
// members                                                                                                                        
// [15] 
// 1. List the names of scholarship for OBC category.                                                    
// [3] 
// 2. Count no. of students who are benefitted by ____ scholarship in year 2022-2023 [4] 
// 3. Update the income limit for _____scholarship.                                                       
// [4] 
// 4. List the most popular scholarship.                                                                           
// [4]


Graph Model:
Nodes:
     Student: Represents a student.
     Scholarship: Represents a scholarship.
Relationships:
    APPLIED_FOR: A relationship between Student and Scholarship when the student applies for a scholarship.
    BENEFITED_BY: A relationship between Student and Scholarship when the student gets the benefit of a scholarship.
    RECOMMENDED: A relationship between Student and another Student where one student recommends a scholarship to another.
Sample Nodes and Relationships:
   Student Node:
       Properties: name, category, income, year_of_application, etc.
   Scholarship Node:
            Properties: name, category, income_limit, year, etc.
1. List the Names of Scholarships for OBC Category


      MATCH (s:Scholarship)
      WHERE s.category = "OBC"
      RETURN s.name AS ScholarshipName;
This query lists the names of all scholarships that belong to the OBC category.

2. Count Number of Students Who Are Benefitted by a Specific Scholarship in Year 2022-2023


      MATCH (s:Student)-[:BENEFITED_BY]->(sch:Scholarship)
      WHERE sch.name = "Specific Scholarship Name" AND s.year_of_application = 2022
      RETURN COUNT(s) AS NumberOfBenefitedStudents;
This query counts the number of students who have benefitted from a particular scholarship in the year 2022-2023.

3. Update the Income Limit for a Specific Scholarship


       MATCH (sch:Scholarship)
       WHERE sch.name = "Specific Scholarship Name"
       SET sch.income_limit = 50000
       RETURN sch.name, sch.income_limit;
This query updates the income limit of a specific scholarship.

4. List the Most Popular Scholarship


      MATCH (s:Student)-[:BENEFITED_BY]->(sch:Scholarship)
      RETURN sch.name AS ScholarshipName, COUNT(s) AS NumberOfStudents
      ORDER BY NumberOfStudents DESC
      LIMIT 1;
This query lists the most popular scholarship by counting the number of students who have benefitted from each scholarship and returning the one with the highest count.