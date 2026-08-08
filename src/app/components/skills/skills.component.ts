import { Component } from '@angular/core';

interface SkillCategory {
  title: string;
  icon: string;
  gradient: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      title: 'Back-end & Arquitetura',
      icon: '⚙️',
      gradient: 'from-brand-500 to-indigo-600',
      skills: ['Java', 'Spring Boot', 'Spring Data JPA', 'Python', 'FastAPI', 'Flask', 'C#', 'Microsserviços', 'Clean Code', 'SOLID'],
    },
    {
      title: 'Infraestrutura & Nuvem',
      icon: '☁️',
      gradient: 'from-cyan-500 to-blue-600',
      skills: ['Docker', 'Linux', 'Edge Computing', 'Integrações Multicloud'],
    },
    {
      title: 'Bancos de Dados',
      icon: '🗄️',
      gradient: 'from-emerald-500 to-teal-600',
      skills: ['PostgreSQL', 'MySQL', 'SQL Server'],
    },
    {
      title: 'Front-end',
      icon: '🎨',
      gradient: 'from-orange-500 to-rose-600',
      skills: ['Angular', 'React', 'JavaScript', 'HTML5/CSS3'],
    },
  ];
}
