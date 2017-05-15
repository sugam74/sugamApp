import {Injectable} from '@angular/core';
import {Init} from '../home/init.emp';

@Injectable()
export class EmpService extends Init{
    constructor(){
        super();
        console.log("Statred");
        this.load();
    }
    getEmp(){
        var employees = JSON.parse(localStorage.getItem('employees'));
        return employees;
    }
    addEmp(emp){
        console.log(emp);
        var employees = JSON.parse(localStorage.getItem('employees'));

        employees.push(emp);
        localStorage.setItem('employees',JSON.stringify(employees));
        //return employee;
    }
}
