import { Component } from '@angular/core';

function log(className: any){
  console.log(className)
  return(...args:any) => {
    console.log("Arguments", args)
    return new className(...args)
  }
}

class myExampleClass{
  constructor(arg1:any, arg2:any){
    console.log("Constructor")
  }
}

const myClass = new myExampleClass(5,10)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'intro';

  constructor(){
    console.log(this.aSimpleMethod(5,2))
  }

  aSimpleMethod(a:any, b:any){
    return a*b
  }
}
