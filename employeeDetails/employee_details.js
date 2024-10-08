const employees = [
    { id: 1, name: 'Gowtham Thotakura', age: 41, department: 'IT', salary: 50000, specialization:'Javascript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 , specialization:'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 , specialization:'Java' },
    //... More employee records can be added here
  ];

   // Function to display all employees
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
document.getElementById('employeesDetails').innerHTML = totalEmployees;

 // accumulator (acc)
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }
 function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${employee.specialization}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

    }

    function displayJavascriptEmployees() {
        const JavascriptEmployees = employees.filter(employee => employee.department === 'Javascript');
         const javascriptEmployeesDisplay = javascriptEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
         document.getElementById('employeesDetails').innerHTML = javascriptEmployeesDisplay;
    }
}

function findByspecializationJavascriptById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${employee.specialization}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

    }
}



