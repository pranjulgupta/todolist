import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import {HttpClient} from '@angular/common/http'
import { ObjectUnsubscribedError } from 'rxjs';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
tasks=[];
priorities=["low","medium","high"];
 c1=false;
 mode=true;
 today=Date.now();
 selectindex;
newTask:string;
newpriority:string;
url="http://localhost:8080/home";
url1="http://localhost:8080/home1";
url2="http://localhost:8080/home2";
url3="http://localhost:8080/home3";
url4="http://localhost:8080/home4";
  constructor(private _http:HttpClient) { }

  add()
{

this._http.post(this.url,{name: this.newTask,status:false,priority: this.newpriority}).subscribe((data)=>
{
  
});
this.tasks.push({name: this.newTask,status:false,priority: this.newpriority});

this.newTask="";
this.newpriority="";
}
remove(index)
 {
this._http.post(this.url2,{name:this.tasks[index].name,priority:this.tasks[index].priority}).subscribe((data)=>
{
  console.log(data);
});
this.tasks.splice(index,1);
}
newtaski;
Edit(index)
{this.newtaski=this.tasks[index].name;
this.newTask=this.tasks[index].name;
this.newpriority=this.tasks[index].priority;
this.mode=false;
this.selectindex=index;
event.stopPropagation();
}
update()
{
this.tasks[this.selectindex].name=this.newTask;
this.tasks[this.selectindex].priority=this.newpriority;
console.log(this.tasks[this.selectindex]._id);
this._http.post(this.url3,{id:this.tasks[this.selectindex]._id,name: this.newTask,priority: this.newpriority}).subscribe((data)=>
{

});
this.newTask="";
this.newpriority="";
this.mode=true;
}
toggle(index)
{
  this.tasks[index].status=!this.tasks[index].status;
  this._http.post(this.url4,{id:this.tasks[index]._id,status:this.tasks[index].status}).subscribe((data)=>
  {
  
  });
}
panding()
{var count:number=0;
  for(let i of this.tasks)
  {
    if(i.status==false)
    count++
  }
  return count;
}
taskid=[];
ngOnInit() {
  
  this._http.post(this.url1,{}).subscribe((tasks1:any)=>
{
  this.tasks=tasks1;
console.log(tasks1)
})
}
}


