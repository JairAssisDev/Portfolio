import { Component } from '@angular/core';

interface Experience {
  role: string;
  company: string;
  period: string;
  isCurrent: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'Desenvolvedor de Software',
      company: 'Claro Brasil / Ustore',
      period: 'Mai 2025 - Atual',
      isCurrent: true,
      description: 'Foco em arquitetura e microsserviços para um dos maiores provedores de telecomunicações do Brasil.',
      responsibilities: [
        'Extração de regras de negócio de um monolito para microsserviços',
        'Desenho e construção do zero de um serviço de integração multicloud com o NetBackup',
        'Atuação com Java, Spring Boot, Docker e AngularJS',
      ],
      technologies: ['Java', 'Spring Boot', 'Docker', 'AngularJS', 'Microsserviços', 'Multicloud'],
    },
    {
      role: 'Estagiário de Desenvolvimento de Software',
      company: 'Sum Software',
      period: 'Fev 2025 - Abr 2025',
      isCurrent: false,
      description: 'Otimização e modelagem de banco de dados para aplicações de gestão empresarial.',
      responsibilities: [
        'Sustentação de aplicação desktop C# (WinForms)',
        'Criação de relatórios complexos gerenciais',
        'Otimização de consultas SQL utilizando micro-ORM Dapper',
      ],
      technologies: ['C#', 'WinForms', 'SQL Server', 'Dapper', 'Relatórios Gerenciais'],
    },
  ];
}
