import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent {
  submitMessage: string | null = null;
  isSuccess: boolean = false;

  onSubmit(form: any) {
    if (form.valid) {
      const name = form.value.name;
      const email = form.value.email;
      const message = form.value.message;
      const mailtoLink = `mailto:marcos.damascenorr@gmail.com?subject=Contato de ${name}&body=${message} (Email: ${email})`;

      window.location.href = mailtoLink;

      this.isSuccess = true;
      this.submitMessage = 'Redirecionando para o cliente de e-mail...';
      form.reset(); 
    } else {
      this.isSuccess = false;
      this.submitMessage = 'Por favor, preencha todos os campos corretamente.';
    }
  }
}
