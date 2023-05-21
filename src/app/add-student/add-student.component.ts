import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  name:any
  age:any

  //emit event
  @Output() add:EventEmitter<{name:string,age:number}> = new EventEmitter()

  addStudent(name:string,age:string){
    this.add.emit({name,age:+age})
  }
  
}
