import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core'; 
import {EmpService} from '../services/employee.service';

@Component({
  providers:[EmpService],
  templateUrl:'./home.component.html',
  
  
})
@Injectable() 
export class HomeComponent {


newEmp: Employee;
isEdit : boolean;
 userFilter: any = { name: '' };

  employees = [];

    constructor(private empService:EmpService){
        this.newEmp = new Employee();
        this.employees = this.empService.getEmp();
        console.log(this.employees);

    //this.valuFromLocalStorage= this.localStorageService.get('a')
    }


    
     emp1 = [];
     // this method is used to add new employee
        addEmp() {

        var findHero = this.employees.find(emp => emp.email === this.newEmp.email);
        console.log(findHero);
        if(findHero) {
          findHero.name = this.newEmp.name;
          findHero.phone = this.newEmp.phone;
          this.isEdit = false;
          this.addbutton = true;
            this.newEmp.name = '';
            this.newEmp.email = '';
            this.newEmp.phone = '';
        } else {
            //
            if (this.newEmp) {

                var entry = {
                    'name': this.newEmp.name,
                    'email' : this.newEmp.email,
                    'phone': this.newEmp.phone
                };

              this.employees.push(entry);
              this.empService.addEmp(entry);
            
            this.newEmp.name = '';
            this.newEmp.email = '';
            this.newEmp.phone = '';
            }
        }
        
    }
      //this function is used to delete a selected employee
      deleteEmp(index) {
   // let index: number = this.heroes.indexOf(msg);
       // var employees = JSON.parse(localStorage.getItem('employees')); 
         this.employees.splice(index, 1);
        // localStorage.setItem('employees',JSON.stringify(employees));
   
    }
    addbutton = true;
    public xyz = 1;
    editEmp(data,index){
        console.log(data);
        this.isEdit = true;
        this.newEmp.name = data.name;
        this.newEmp.email = data.email;
        this.newEmp.phone = data.phone;
        this.addbutton = false;
        this.xyz = index;
       // data.isEditable = true;
    }

}

class Employee{
    name: string;
    email : string;
    phone: string;
}
