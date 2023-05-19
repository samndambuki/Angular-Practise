import { Component, ViewChild, ViewEncapsulation } from "@angular/core";

@Component(
    {
        selector:'.app-home',
        // template:`<h1>
        //     Hello Sam
        // </h1>
        // `,
        templateUrl:'./home.component.html',
        styles:[
            `h1{
                color:red
            }`
        ],
        encapsulation:ViewEncapsulation.None
    }
)

export class HomeComponent{
    message:string="Hello Message"   
    showBtn = false //condition
    inputText = 'Two way data binding'

    // @ViewChild() //view things form ts

    constructor(){
        setTimeout(()=>{
            this.showBtn=true
        },3000)
    }
    getMessage(){
        return 0
    }
    changeMessage(){
        this.message = 'message'
    }

    getInput(event:Event){
        let value = (event.target as HTMLInputElement).value
        console.log(value);
        this.message = value
    }
}