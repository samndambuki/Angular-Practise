import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 //business logic
  
 users:{name:string,age:number}[] = [
  {
      name:"Samuel Ndambuki",
      age:21
  },
  {
    name:"Samuel Ndambuki",
    age:21
}
] 

addStudent(event:{name:string,age:number}){
  this.users.push({name:event.name,age:event.age})
}

deleteUser(i:number){
  this.users.splice(i,1)
}

}
