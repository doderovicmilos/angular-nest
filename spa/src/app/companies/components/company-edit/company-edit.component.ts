import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Company } from '../../models/companies/company.model';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  @Output() onSubmit: EventEmitter<Company> = new EventEmitter();

  companyForm = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  handleSubmit(){
    this.onSubmit.emit({name: this.companyForm.value.name!, address: this.companyForm.value.address!});
  }

}
