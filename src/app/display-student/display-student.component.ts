import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class DisplayStudentComponent {

//required - parent provides the value
//@Input - decorator
@Input({required:true}) users:{name:string,age:number}[]=[]
 
deleteUser(i:number){
  this.users.slice(i,1)

}
}
