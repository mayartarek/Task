import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { emailValidator } from 'src/app/core/validators/app.validation';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-user-form',
  standalone: true,
  exportAs: 'app-user-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  userForm!: FormGroup;
  courses: string[] = ['course 1', 'course 2', 'course 3', 'course 4'];
  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initForm();
  }
  initForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      address: ['', [Validators.required, Validators.minLength(2)]],
      phone: [
        '',
        [Validators.required, Validators.pattern('^01[0-2,5]{1}[0-9]{8}$')],
      ],
      courses: [
        '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(2)],
      ],
    });
  }
  onSubmit() {
    if (!this.userForm.invalid) {
      // logical api call or what you wanna
      this.initForm();

      console.log(this.userForm.value);
    } else {
      console.log(this.userForm.value);
    }
  }
}
