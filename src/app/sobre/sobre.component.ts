import { Component } from '@angular/core';
import sobreData from '../assets/data/sobre.json';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {
  sobreJson = sobreData;

  
}
