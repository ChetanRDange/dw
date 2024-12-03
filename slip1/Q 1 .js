// Create an Employee collection with mentioned fields     
// Employee (eno,ename,salary,desig,dept:{deptno,deptname,location}, 
// project: {pname,hrs})          
// 1. Insert 5 documents in Employee collection.                  
// [5]                
// 2. Display all the documents from Employee collection.  [3] 
// 3. Display all the documents from Employee collection.  [3] 
// 4. Display all employees whose name starts with “S”.      [4]



// Step 1: Insert 5 documents in Employee collection
db.Employee.insertMany([
    {
      eno: 1,
      ename: "Sam",
      salary: 50000,
      desig: "Developer",
      dept: {
        deptno: 101,
        deptname: "IT",
        location: "New York"
      },
      project: {
        pname: "ProjectA",
        hrs: 40
      }
    },
    {
      eno: 2,
      ename: "Sara",
      salary: 60000,
      desig: "Manager",
      dept: {
        deptno: 102,
        deptname: "HR",
        location: "Chicago"
      },
      project: {
        pname: "ProjectB",
        hrs: 35
      }
    },
    {
      eno: 3,
      ename: "Steve",
      salary: 45000,
      desig: "Tester",
      dept: {
        deptno: 103,
        deptname: "Quality Assurance",
        location: "San Francisco"
      },
      project: {
        pname: "ProjectC",
        hrs: 30
      }
    },
    {
      eno: 4,
      ename: "Mike",
      salary: 55000,
      desig: "Developer",
      dept: {
        deptno: 101,
        deptname: "IT",
        location: "New York"
      },
      project: {
        pname: "ProjectD",
        hrs: 45
      }
    },
    {
      eno: 5,
      ename: "Sophia",
      salary: 70000,
      desig: "Team Lead",
      dept: {
        deptno: 104,
        deptname: "Operations",
        location: "Seattle"
      },
      project: {
        pname: "ProjectE",
        hrs: 50
      }
    }
  ]);
  
  // Step 2: Display all the documents from Employee collection
  db.Employee.find();
  
  // Step 3: Display all the documents from Employee collection
  db.Employee.find();
  
  // Step 4: Display all employees whose name starts with “S”
  db.Employee.find({ ename: { $regex: "^S", $options: "i" } });
  