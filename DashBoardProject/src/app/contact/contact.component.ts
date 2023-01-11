import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  myForm!:FormGroup;
  

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.myForm=this.fb.group({

      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.email],
      gender:['',Validators.required],
      address1:['',Validators.required],
      address2:['',Validators.required]

    })
  }

  onSubmit(form:FormGroup){

console.log(form.value);
  }

}
