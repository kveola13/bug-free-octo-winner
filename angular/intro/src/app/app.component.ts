import { Component } from '@angular/core';

function log(target: any, name: any, descriptor: any){
  console.log(target, name, descriptor)
  const original = descriptor.value
  descriptor.value = function(){
    console.log("This function was hacked!")
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
    this.aSimpleMethod()
  }
  
  @log
  aSimpleMethod(){
    console.log("Hey there!")
  }
}
