import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { CompaniesService } from 'src/app/companies/services/companies/companies.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  
  companies$!: Observable<any>;
 
  userForm = this.fb.group({
    username: ['', Validators.required],
    roles: this.fb.array([
      this.fb.control('')
    ]),
    companies: this.fb.control([])
  });

  constructor(private fb: FormBuilder, private companiesService: CompaniesService) { }

  ngOnInit(): void {
    this.companiesService.getCompanies();
    this.companies$ = this.companiesService.companies$;
  }


  get roles() {
    return this.userForm.get('roles') as FormArray;
  }

  
  addRole() {
    this.roles.push(this.fb.control(''));
  }

  handleSubmit() {
    // TODO: Use EventEmitter with form value
    this.onSubmit.emit({username: this.userForm.value.username, roles: this.userForm.value.roles, companyIds: this.userForm.value.companies});
  }

}
