use Company
db.createCollection("Employee")
db.Employee.insert({_id:1, "EmployeeID":"HR2016056", "Name":"Niranjan", "Department":"HR", "Age":29})
db.Employee.update({_id:2, "EmployeeID":"DEV2019045", "Name":"Raghavendra", "Department":"Development"},{$set:{"Age":22}},{upsert:true})
db.Employee.save({_id:3, "EmployeeID":"REC2015098", "Name":"Obed Junias", "Department":"Recruitement", "Age":26})
db.Employee.insert([{_id:4, "EmployeeID":"HR2017033", "Name":"Tarun M Krishna", "Department":"HR", "Age":32},{_id:5, "EmployeeID":"DEV2016029", "Name":"Shreyas K", "Department":"Development", "Age":29}])
db.Employee.insert({_id:6, "EmployeeID":"HR2016056", "Name":"Niranjan", "Department":"HR", "Age":29})

db.createCollection("Department")
db.Department.insert({_id:1, "DeparmentID":1001, "Name":"HR", "DepartmentHead":"Abhishek"})
db.Department.update({_id:2, "DeparmentID":1002, "Name":"Recruitement"},{$set:{"DepartmentHead":"Nagraj"}},{upsert:true})
db.Department.save({_id:3, "DeparmentID":1003, "Name":"Developer", "DepartmentHead":"Raghavendra"})
db.Department.insert([{_id:4, "DeparmentID":1004, "Name":"Operations", "DepartmentHead":"Md Aziz"},{_id:5, "DeparmentID":1005, "Name":"Security", "DepartmentHead":"Rakesh Kumar"}])
db.Department.insert({_id:6, "DeparmentID":1006, "Name":"Marketing", "DepartmentHead":"Rakshith"})

db.Employee.find().pretty()
db.Department.find().pretty()

db.Employee.update({_id:1},{$set:{"DateOfJoining":"10/02/2019"}})

db.Employee.update({"_id":1},{$unset:{DateOfJoining:""}})

db.Department.find({"DeparmentID":{"$gte":1001,"$lte":1005}},{"Name":1,"DeparmentID":1,"_id":0});
