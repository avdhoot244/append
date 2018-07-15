import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  array :number[]=[];
  
  ngOnInit(){
   
  }
  title = 'app';
  indexTracker(index: number, value: any) {
    return index;
  }
    sortarray():void{
      this.array.sort((a:number, b:number)=>{
        return a-b;
      })
    }
   addvalue(value):void{
     this.array.push(value);
      this.sortarray();
     
      
   }
}
