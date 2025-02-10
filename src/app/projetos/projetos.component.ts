import { Component } from '@angular/core';
import projetosData from '../assets/data/projetos.json';
import { Projeto, ProjetosData } from '../assets/interfaces/projetos';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {
  projetos:ProjetosData = projetosData;

}
