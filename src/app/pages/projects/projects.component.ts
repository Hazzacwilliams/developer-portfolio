import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Fullstack DevNest App',
      description: 'A social media platform for developers.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      github: 'https://github.com/yourusername/devnest',
      live: 'https://devnest.vercel.app'
    },
    {
      title: 'Angular Portfolio Site',
      description: 'This portfolio project you’re looking at!',
      technologies: ['Angular', 'SCSS', 'TypeScript'],
      github: 'https://github.com/yourusername/angular-portfolio',
      live: '#'
    }
  ];
}
