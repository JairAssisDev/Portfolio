import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  name = 'Jair Victor de Lima Assis';
  role = 'Software Engineer | 1x AWS Certified | Java & Spring Boot | Angular | Python';
  summary = 'Sou Desenvolvedor de Software focado no ecossistema Java e Spring Boot. Atualmente, trabalho na Claro Brasil / Ustore (Ucloud), onde atuo diretamente na integração de sistemas através de APIs e SDKs de diversas nuvens e soluções de infraestrutura, incluindo AWS, Oracle, Azure, GCP, VMware, Hyper-V e NetBackup. Além da experiência de mercado com backend e ecossistema multicloud, tenho uma bagagem prática em pesquisa aplicada pelo IFPE, onde desenvolvi projetos unindo Python e Machine Learning voltados para a área de saúde. Busco sempre escrever código limpo, aplicar boas práticas no dia a dia e continuar aprendendo novas tecnologias.';

  highlights = [
    { icon: '☕', label: 'Java & Spring Boot' },
    { icon: '🏗️', label: 'Microsserviços' },
    { icon: '☁️', label: 'Amazon Web Services' },
    { icon: '🔧', label: 'AWS Lambda' },
    { icon: '📜', label: 'AWS Certified Cloud Practitioner' },
    { icon: '✅', label: 'AWS re/Start Graduate' },
  ];
}
