import { Component } from '@angular/core';

interface Certification {
  name: string;
  issuer: string;
  year: string;
  image: string;
  credentialId?: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2026',
      image: 'CloudPractitioner.png',
    },
    {
      name: 'AWS re/Start Graduate',
      issuer: 'AWS',
      year: '2026',
      image: 'AWSreStartGraduate.png',
    },
  ];
}