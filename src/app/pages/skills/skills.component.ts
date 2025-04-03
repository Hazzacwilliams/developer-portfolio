import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faAngular,
  faReact,
  faGit,
  faGithub,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faTerminal,
  faCode
} from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from '@angular/animations';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('fadeInStagger', [
      transition(':enter', [
        query('.skill-block', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class SkillsComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle('About | Harry Dev');
  }

  frontend = [{ name: 'HTML', icon: faHtml5 }, { name: 'CSS', icon: faCss3Alt }, { name: 'JavaScript', icon: faJs }, { name: 'Angular', icon: faAngular }, { name: 'React', icon: faReact }, 'TypeScript'];
  backend = [{ name: 'Node.js', icon: faNodeJs }, { name: 'PostgreSQL', icon: faDatabase }, 'Express'];
  tools = [{ name: 'Git', icon: faGit }, { name: 'GitHub', icon: faGithub }, { name: 'VS Code', icon: faCode }, { name: 'Terminal', icon: faTerminal }, 'Postman', 'Postbird', 'pgAdmin 4', 'Render'];

  isSkillObject(skill: unknown): skill is { name: string; icon: IconDefinition } {
    return typeof skill === 'object' && skill !== null && 'icon' in skill && 'name' in skill;
  }
}

