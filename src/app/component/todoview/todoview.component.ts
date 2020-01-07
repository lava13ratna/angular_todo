import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/Service/todo.service';
import { Router,ActivatedRoute,RouterModule } from '@angular/router';


@Component({
  selector: 'app-todoview',
  templateUrl: './todoview.component.html',
  styleUrls: ['./todoview.component.css']
})
export class TodoviewComponent implements OnInit {
  array: any[];
  editArray: any[];
  filterArray: any[];
  constructor(private todoservice: TodoService, private router: Router) { }

  ngOnInit() {
    this.todoservice.viewTodo().subscribe(res => {
      // console.log(res.data);
      this.array = res.data;
      console.log(this.array);
    });
  }


  goEdit(data) {


    this.editArray = this.array.filter(f => f.id == data);
    console.log("todoadd", this.editArray);
    this.router.navigate(['/todoadds'], { queryParams: { isEdit: true } });

    this.todoservice.setEditTodoArray(this.editArray);

  }

  // goAdd() {


  //     this.router.navigate(['/todoadds'], { queryParams: { isEdit: false } });
  // }

  onDelete(data) {
    this.todoservice.deleteTodo(data).subscribe(res=>{
      window.location.reload()

    })

   

  }


}
