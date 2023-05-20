import { Component, ElementRef, ViewChild, ViewEncapsulation } from "@angular/core";

@Component(
    {
        selector:'app-home',
        // template:`<h1>
        //     Hello Sam
        // </h1>
        // `,
        templateUrl:'./home.component.html',
        // styleUrls:'./home.component.css',
        styles:[
            `h1{
                color:red
            }`
        ],
        encapsulation:ViewEncapsulation.None
    }
)

export class HomeComponent{
    // message:string="Hello Message"   
    // showBtn = false //condition
    // inputText = 'Two way data binding'
    // @ViewChild('input') input!:ElementRef

    // // @ViewChild() //view things form ts

    // constructor(){
    //     setTimeout(()=>{
    //         this.showBtn=true
    //     },3000)
    // }
    // getMessage(){
    //     return 0
    // }
    // changeMessage(){
    //     // this.message = 'message'
    //     // this.input
    //     // console.log(this.input);
    //     this.input.nativeElement.value
    // }

    // getInput(event:Event){
    //     let value = (event.target as HTMLInputElement).value
    //     console.log(value);
    //     this.message = value
    // }

    users:{name:string,age:number}[] = [
        {
            name:"Samuel Ndambuki",
            age:21
        }
    ]

    day = new Date().getDay()

    addStudent(name:string,age:string){
        this.users.push({name,age:+age})
        // console.log(this.day);
        this.getColor()
    }
    deleteUser(i:number){
        this.users.splice(i,1)
    }

    getColor(){
         return Math.floor(Math.random()*1100)>500? "green":"red"
    }
}
