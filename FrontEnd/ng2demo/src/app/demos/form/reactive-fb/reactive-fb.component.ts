import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-fb',
  templateUrl: './reactive-fb.component.html',
  styleUrls: ['./reactive-fb.component.scss']
})
export class ReactiveFbComponent implements OnInit {

  myFBFormGroup: FormGroup;
  nameControl: FormControl;

  constructor(
    private fb: FormBuilder
  ) {
    this.nameControl = new FormControl('', [Validators.maxLength(20)]);
    this.myFBFormGroup = this.fb.group({
      name: this.nameControl,
      age: [0, [this.ageValidator, Validators.minLength(1)]],
      fullName: this.fb.group({
        firstName: '',
        lastName: ''
      }, {validator: this.fullNameValidator})
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myFBFormGroup.value);
    console.log(this.myFBFormGroup.status); // VALID/INVALID
    console.log('name errors: ', this.nameControl.errors);
    console.log('age errors: ', this.myFBFormGroup.get('age').errors);
    console.log('fullName errors: ', this.myFBFormGroup.get('fullName').errors);
    // touched vs untouched
    console.log('name touched: ', this.nameControl.touched);
    console.log('age touched: ', this.myFBFormGroup.get('age').touched);
    // pristine and dirty
    console.log('name pristine: ', this.nameControl.pristine);
    console.log('age dirty: ', this.myFBFormGroup.get('age').dirty);
  }

  ageValidator(control: FormControl) {
    const { value } = control; // control.value
    const valid = value >= 0 && value <= 200;
    return valid ? null : { age: { actualAge: value, requiredAge: '0-200' } };
  }

  fullNameValidator({value}: FormGroup) {
    const {firstName, lastName} = value;
    return firstName.length > 3 && lastName.length > 1 ? null : { fullName: 'not valid!'};
  }
}
