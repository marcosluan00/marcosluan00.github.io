import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, NgControl, ReactiveFormsModule, Validators} from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent {
  contactForm: FormGroup = new FormGroup({});
  submitMessage: string | null = null;
  isSuccess: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {

    if (this.contactForm.invalid) {
      this.isSuccess = false;
      this.submitMessage = 'Por favor, preencha todos os campos corretamente.';
      return;
    }

    const templateParams = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message
    };

      // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      console.log('service_id' + environment.emailJsServiceId);
      console.log('template_id' + environment.emailJsTemplateId);
      console.log('user_id' + environment.emailJsUserId);
      
      emailjs.send(environment.emailJsServiceId, environment.emailJsTemplateId, templateParams, environment.emailJsUserId )
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        this.isSuccess = true;
        this.submitMessage = 'Email enviado com sucesso!';
        this.contactForm.reset();
      }, (error) => {
        console.log('FAILED...', error);
        this.isSuccess = false;
        this.submitMessage = 'Ocorreu um erro ao enviar o email. Tente novamente mais tarde.';
      });
  }
  
}
