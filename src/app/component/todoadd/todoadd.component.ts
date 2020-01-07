import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { TodoService } from 'src/app/Service/todo.service';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-todoadd',
  templateUrl: './todoadd.component.html',
  styleUrls: ['./todoadd.component.css']
})
export class TodoaddComponent implements OnInit {
  public form: FormGroup;
  flag = this.route.snapshot.queryParams['isEdit'];
  id = null;


  constructor(private _fb: FormBuilder, private todoservice: TodoService, private router: Router, private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {
    //this.isLogin();
    if (this.flag) {


      this.todoservice.editTodoArray$.subscribe(data => {
        this.form = this._fb.group({

          id: [data[0].id, [Validators.required, Validators.min(1)]],
          title: [data[0].title, [Validators.required]],
          description: [data[0].description, [Validators.required]],
          duedate: [data[0].duedate, [Validators.required]],
          priority: [data[0].priority, [Validators.required]],

        });


      });

    }
    else {

      this.form = this._fb.group({
        title: ['', [Validators.required]],
        description: ['', [Validators.required]],
        duedate: ['', [Validators.required]],
        priority: ['', [Validators.required]]

      });



    }
  }



  onsubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.todoservice.addTodo(this.form.value).subscribe(
        res => {
          this.form.get('title').value + ',' + this.form.get('description').value,

            this.router.navigate(['']);
        });
    }

  }
  onUpdate() {
    if (this.form.valid) {
      console.log(this.form.get('id').value);
      this.todoservice.updateTodo(this.form.value).subscribe(
        res => {

          this.router.navigate(['']);
        }
      );;
    }
  }
  ondelete() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.todoservice.addTodo(this.form.value).subscribe(
        res => {
          this.form.get('title').value + ',' + this.form.get('description').value + ',' + this.form.get('duedate').value + ',' + this.form.get('priority').value,

            this.router.navigate(['']);
        });
    }

  }
}
