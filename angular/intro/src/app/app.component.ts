import { Component } from '@angular/core';
import { RecordsService } from './records.service';

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
  disabled = true;
  text = "app"
  records = [{}]

  constructor(private myFirstService: RecordsService){

  }
  
  ngOnInit(){
    this.records = this.myFirstService.getData()
  } 

  updateValue(e:any){
    this.text = e.target.value
    console.log(e.target.value)
  }

  aSimpleMethod(a:any, b:any){
    return a*b
  }
}
