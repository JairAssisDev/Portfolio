import { Component } from '@angular/core';

interface Project {
  title: string;
  institution: string;
  description: string;
  details: string[];
  technologies: string[];
  icon: string;
  gradient: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Sistema de IA e Visão Computacional',
      institution: 'IFPE',
      description: 'Sistema de suporte à decisão clínica operando em Edge Computing (Raspberry Pi 4).',
      details: [
        'Arquitetura de microsserviços conteinerizada',
        'Serviço central em Java (Spring Boot) integrado com motor de IA em Python (FastAPI)',
        'Comunicação entre serviços via OpenFeign',
        'Deploy em Edge Computing (Raspberry Pi 4)',
      ],
      technologies: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'Docker', 'OpenFeign', 'Edge Computing', 'Visão Computacional'],
      icon: '🧠',
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      title: 'Blood Prediction Tool',
      institution: 'IFPE',
      description: 'Ferramenta Full Stack para gestão transfusional com modelos de Machine Learning.',
      details: [
        'API RESTful em Python (Flask) consumindo modelos de Machine Learning',
        'Interface em JavaScript Vanilla embarcada via servidor Apache em Docker',
        'Predição de necessidades transfusionais com ML',
        'Solução Full Stack completa com containerização',
      ],
      technologies: ['Python', 'Flask', 'JavaScript', 'Machine Learning', 'Docker', 'Apache', 'REST API'],
      icon: '🩸',
      gradient: 'from-rose-500 to-red-600',
    },
  ];
}
