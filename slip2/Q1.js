// Create an Employee collection with mentioned fields     
// Employee (eno,ename,salary,desig,dept:{deptno,deptname,location}, 
// project: {pname,hrs})          
// 1. Insert 5 documents in Employee collection.                               
// 2. Display all Employee with the designation “Manager”.             
// [5]                
// [3] 
// 3. Display all employees with salary >50000 and salary <80000.  [3] 
// 4. Update no. of hrs to 7 for pname=______.   

// Step 1: Insert 5 documents in Employee collection

db.Employee.insertMany([
    {
      eno: 1,
      ename: "Sam",
      salary: 55000,
      desig: "Manager",
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
      desig: "Developer",
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
      salary: 75000,
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
      salary: 50000,
      desig: "Manager",
      dept: {
        deptno: 104,
        deptname: "Operations",
        location: "Seattle"
      },
      project: {
        pname: "ProjectD",
        hrs: 45
      }
    },
    {
      eno: 5,
      ename: "Sophia",
      salary: 80000,
      desig: "Team Lead",
      dept: {
        deptno: 105,
        deptname: "Sales",
        location: "Boston"
      },
      project: {
        pname: "ProjectE",
        hrs: 50
      }
    }
  ]);
  
  // Step 2: Display all Employee with the designation "Manager"
  db.Employee.find({ desig: "Manager" });
  
  // Step 3: Display all employees with salary >50000 and salary <80000
  db.Employee.find({ salary: { $gt: 50000, $lt: 80000 } });
  
  // Step 4: Update no. of hrs to 7 for pname="ProjectB"
  db.Employee.updateOne(
    { "project.pname": "ProjectB" },
    { $set: { "project.hrs": 7 } }
  );