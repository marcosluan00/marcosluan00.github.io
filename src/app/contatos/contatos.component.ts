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
      // Simule o envio do formulário (exemplo: pode ser uma chamada de API aqui)
      this.isSuccess = true;
      this.submitMessage = 'Mensagem enviada com sucesso!';
      form.reset(); // Reseta o formulário
    } else {
      this.isSuccess = false;
      this.submitMessage = 'Por favor, preencha todos os campos corretamente.';
    }
  }
}
