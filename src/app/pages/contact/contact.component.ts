import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;

  success = false;

  constructor(private http: HttpClient, private titleService: Title) {
    this.titleService.setTitle('Contact | Harry Dev');
   }

  submitForm(contactForm: any) {
    const formData = new FormData();
    formData.append('name', contactForm.value.name);
    formData.append('email', contactForm.value.email);
    formData.append('message', contactForm.value.message);

    this.http.post('https://formspree.io/f/xyzendyg', formData, {
      headers: new HttpHeaders({ Accept: 'application/json' })
    }).subscribe({
      next: () => {
        this.success = true;
        contactForm.reset();
      },
      error: (err) => {
        console.error('Form error:', err);
      }
    });
  }
}
