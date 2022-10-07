import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  
 
  userForm = this.fb.group({
    name: ['', Validators.required],
    roles: this.fb.array([
      this.fb.control('')
    ])
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  get roles() {
    return this.userForm.get('roles') as FormArray;
  }

  
  addRole() {
    this.roles.push(this.fb.control(''));
  }

  handleSubmit() {
    // TODO: Use EventEmitter with form value
    this.onSubmit.emit({name: this.userForm.value.name, roles: this.userForm.value.roles});
  }

}
