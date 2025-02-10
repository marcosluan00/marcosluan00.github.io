import { Component } from '@angular/core';
import { SobreComponent } from "./sobre/sobre.component";
import { ProjetosComponent } from "./projetos/projetos.component";
import { ContatosComponent } from "./contatos/contatos.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SobreComponent, ProjetosComponent, ContatosComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portifolio';
}
