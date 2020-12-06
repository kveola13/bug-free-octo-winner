import { Component } from '@angular/core';

function log(target: any, name: any, descriptor: any){
  console.log(target, name, descriptor)
  const original = descriptor.value
  descriptor.value = function(...args: any){
    console.log("Arguments", args, " were passed in this function")
    const result = original.apply(this, args)
    console.log(result)
    return result
  }
  return descriptor
}
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

  @log
  aSimpleMethod(a:any, b:any){
    return a*b
  }
}
