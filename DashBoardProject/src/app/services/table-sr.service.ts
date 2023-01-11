import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../tables/Student';

@Injectable({
  providedIn: 'root'
})
export class TableSrService {

  url:string="http://localhost:3000/Student";

  constructor(private http:HttpClient) { }


  getStudent():Observable<Student[]>{

    return this.http.get<Student[]>(this.url);
  

  }
}
