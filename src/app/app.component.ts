import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
      validators: {
        validation: ['email'],
      },
    },
    {
      key: 'firstName',
      type: 'input',
      hideExpression: '!model.email',
      props: {
        label: 'First Name',
        placeholder: 'Enter first name',
        required: true,
      }
    }, {
      key: 'ip',
      type: 'input',
      props: {
        label: 'IP Address (using custom validation declared in ngModule)',
        required: true,
      },
      validators: {
        validation: ['ip'],
      },
    }
  ];

  onSubmit(model: any) {
    console.log(model);
  }

  reset() {
    this.form.reset();
    console.log('reset');
    // this.model = {};
  }
}