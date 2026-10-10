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
      role: 'Desenvolvedor Full Stack Pleno',
      company: 'Claro Brasil / Ustore',
      period: 'ago 2026 - set 2026',
      isCurrent: false,
      description: 'Desenvolvimento de microserviços e integrações de infraestrutura multicloud.',
      responsibilities: [
        'Construção de microserviços desde o zero',
        'Integração com NetBackup e soluções de backup',
        'Modernização de sistema legado para microserviços',
      ],
      technologies: ['Java', 'Spring Boot', 'Docker', 'AngularJS', 'Microsserviços', 'Multicloud', 'AWS Lambda', 'AWS', 'Arquitetura em Nuvem'],
    },
    {
      role: 'Desenvolvedor Full Stack',
      company: 'Claro Brasil / Ustore',
      period: 'mai 2025 - Atual',
      isCurrent: true,
      description: 'Foco em arquitetura e microserviços para um dos maiores provedores de telecomunicações do Brasil.',
      responsibilities: [
        'Extração de regras de negócio de um monolito para microserviços',
        'Desenho e construção do zero de um serviço de integração multicloud com o NetBackup',
        'Atuação com Java, Spring Boot, Docker e AngularJS',
      ],
      technologies: ['Java', 'Spring Boot', 'Docker', 'AngularJS', 'Microsserviços', 'Multicloud', 'AWS Lambda', 'AWS', 'Arquitetura em Nuvem'],
    },
    {
      role: 'Desenvolvedor full stack Bolsista',
      company: 'Instituto Federal de Pernambuco',
      period: 'set 2024 - set 2025',
      isCurrent: false,
      description: 'Sistema de suporte à decisão clínica para detecção automática de patologias do ouvido médio, utilizando Visão Computacional.',
      responsibilities: [
        'Arquitetura e Core API: Serviço central em Java (Spring Boot) com gerenciamento de pacientes e consultas, integrado ao MySQL',
        'Serviço de Inteligência Artificial: Microserviço em Python (FastAPI) com classificação de imagens otoscopia usando cascata YOLO (v8 e v11)',
        'Integração e Comunicação: Síncrona via OpenFeign, endpoints consumidos por aplicativo móvel React Native',
        'Edge Computing e Infraestrutura: Containerização total com Docker e Docker Compose otimizada para Raspberry Pi 4',
      ],
      technologies: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'Docker', 'OpenFeign', 'Edge Computing', 'Visão Computacional', 'YOLO', 'React Native', 'MySQL'],
    },
    {
      role: 'Desenvolvedor full stack Bolsista',
      company: 'Instituto Federal de Pernambuco',
      period: 'ago 2023 - ago 2024',
      isCurrent: false,
      description: 'Full Stack do Blood Prediction Tool (BPT), projeto de pesquisa para otimização da gestão transfusional com modelos de Machine Learning.',
      responsibilities: [
        'Frontend: Interface em HTML, CSS e JavaScript (Vanilla JS), containerizada via Docker com servidor Apache',
        'Backend e API: API RESTful em Python (Flask) para autenticação, cadastro de pacientes e recebimento de parâmetros médicos',
        'Integração com IA: Consumo de modelo preditivo pré-treinado, geração de gráficos analíticos dinâmicos (Matplotlib)',
        'Infraestrutura e Banco de Dados: Modelagem no MySQL, containerização no Raspberry Pi 4, migração para Ubuntu Server',
      ],
      technologies: ['Python', 'Flask', 'JavaScript', 'Machine Learning', 'Docker', 'Apache', 'MySQL', 'Matplotlib'],
    },
    {
      role: 'Estagiário de desenvolvimento de software FullStack',
      company: 'Sum Software - Grupo Sollus',
      period: 'fev 2025 - abr 2025',
      isCurrent: false,
      description: 'Otimização e modelagem de banco de dados para aplicações de gestão empresarial.',
      responsibilities: [
        'Sustentação de aplicação desktop C# (WinForms)',
        'Criação de relatórios complexos gerenciais',
        'Otimização de consultas SQL utilizando micro-ORM Dapper',
      ],
      technologies: ['C#', 'WinForms', 'SQL Server', 'Dapper', 'Relatórios Gerenciais', 'Crystal Reports'],
    },
  ];
}
