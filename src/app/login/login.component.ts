import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;

constructor(private fb:FormBuilder,private router: Router){}

ngOnInit(){
  this.loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
}

login()
{
  if (this.loginForm.valid) {
    // Perform login action
    console.log('Logging:', this.loginForm.value);
    this.router.navigate(['/base']);
  } else {
    // Mark form controls as touched to display validation errors
    this.markFormGroupTouched(this.loginForm);
  }
}

 // Helper method to mark all controls in a form group as touched
 private markFormGroupTouched(formGroup: FormGroup) {
  Object.values(formGroup.controls).forEach(control => {
    control.markAsTouched();

    if (control instanceof FormGroup) {
      this.markFormGroupTouched(control);
    }
  });
}
}
