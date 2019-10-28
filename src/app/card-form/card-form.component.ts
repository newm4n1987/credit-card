import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {
  cardForm: FormGroup;
  months: string[] = [...Array(12).keys()].map(x => {
    const month = x + 1;
    const length = month.toString().length;
    return length === 1 ? '0' + month : month.toString();
  });

  years: string[] = [...Array(20).keys()].map(x => {
    const value = x + 1;
    const lastYear = new Date().getFullYear() - 1;
    return (lastYear + value).toString();
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.cardForm = this.fb.group({
      cardNumber: [],
      cardName: [],
      expirationDate: this.fb.group({
        month: [],
        year: []
      }),
      cvv: []
    });

    // TODO quitar
    this.cardForm.valueChanges.subscribe(console.log);
  }
}
