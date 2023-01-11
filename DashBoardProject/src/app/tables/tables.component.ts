import { Component, OnInit } from '@angular/core';
import { TableSrService } from '../services/table-sr.service';
import { Student } from './Student';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  student: Student[] = [];

  constructor(private tableservice:TableSrService) { }

  ngOnInit(): void {

    this.tableservice.getStudent().subscribe((Response=>{
      this.student=Response;
    }))

  }

}
