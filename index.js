// Write your solution in this file!
 
    let employee = {
        name: "Sam",
        streetAddess:"11 Broadway",
    }
    
function updateEmployeeWithKeyAndValue(employee,kay,value){
     let newEmployee = {...employee};
      newEmployee[kay]=value;
      return newEmployee 
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
 
    employee[key]=value;
    return employee 
      
}
function deleteFromEmployeeByKey(employee, key) {
    return {
        
        
    };
}
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
   return employee
  }