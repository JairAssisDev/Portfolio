import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name = 'Jair Victor de Lima Assis';
  role = 'Desenvolvedor de Software';
  summary = 'Focado no ecossistema Java e Spring Boot, com forte atuação em modernização arquitetural (microsserviços), ambientes multicloud e projetos integrando Inteligência Artificial e Edge Computing.';

  highlights = [
    { icon: '☕', label: 'Java & Spring Boot' },
    { icon: '🏗️', label: 'Microsserviços' },
    { icon: '☁️', label: 'Multicloud' },
    { icon: '🤖', label: 'IA & Edge Computing' },
  ];
}
