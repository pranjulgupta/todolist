import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
tasks=[{name:"task1",status:true,priority:"low"},{name:"task2",status:false,priority:"high"}];
priorities=["low","medium","high"];
 c1=false;
 mode=true;
 today=Date.now();
 selectindex;
newTask:string;
newpriority:string;
  constructor() { }

  ngOnInit() {
  
  }
  add()
{
this.tasks.push({name: this.newTask,status:false,priority: this.newpriority});
this.newTask="";
this.newpriority="";

} 
remove(index)
{ this.tasks.splice(index,1);
}

Edit(index)
{
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
this.newTask="";
this.newpriority="";
this.mode=true;
}
toggle(index)
{
  this.tasks[index].status=!this.tasks[index].status;

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
}

