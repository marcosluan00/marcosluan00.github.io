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

  toggleExperience(experiencia: any) {
    experiencia.show = !experiencia.show;
  }

  trackLinkClick(linkName: string, linkType: string) {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: linkType,
        linkName: linkName
      });
    }
  }
  
}
