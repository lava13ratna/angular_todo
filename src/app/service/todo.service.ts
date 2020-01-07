import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  editTodoArray$ = new BehaviorSubject<any>({});
  setEditTodoArray(data)
  {
    this.editTodoArray$.next(data);
  }
  viewTodo()
  {
    return this.http.get<any>('http://localhost:8000/api/todoadds');
  }

deleteTodo(id)
  {
    return this.http.delete<any>('http://localhost:8000/api/todoadds/' + id);
  }

addTodo(form)
{
  const data={
    title:form.title,
    description:form.description,
    duedate:form.duedate,
    priority:form.priority,

  };
  return this.http.post<any>('http://localhost:8000/api/todoadds', data);
}
updateTodo(form) {
  const data = {
    id:form.id,
    title: form.title,
    description: form.description,
    duedate: form.duedate,
    priority: form.priority


  };

  return this.http.post<any>('http://localhost:8000/api/todoadds/'+data.id,data)
    
  
}

}

  
    
    

  