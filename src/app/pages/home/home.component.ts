import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { Title } from '@angular/platform-browser';
import { IParticlesProps, NgParticlesService } from '@tsparticles/angular';
import { MoveDirection, OutMode, Container } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { ParticlesWrapperModule } from '../../particles-wrapper/particles-wrapper.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ParticlesWrapperModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent {

  id = "tsparticles";

  particlesOptions: IParticlesProps = {
    background: {
      color: {
        value: "white",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#38b000",
      },

      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          height: 800,
          width: 800,
        },
        value: 40,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "image",
        options: {
          image: [
            {
              src: "assets/icons/angular.svg",
              width: 30,
              height: 30,
            },
            {
              src: "assets/icons/css.svg",
              width: 30,
              height: 30,
            },
            {
              src: "assets/icons/github.svg",
              width: 30,
              height: 30,
            },
            {
              src: "assets/icons/html5.svg",
              width: 30,
              height: 30,
            },
            {
              src: "assets/icons/javascript.svg",
              width: 30,
              height: 30,
            },
            {
              src: "assets/icons/nodedotjs.svg",
              width: 30,
              height: 30,
            },
            {
              src: "assets/icons/postgresql.svg",
              width: 30,
              height: 30,
            },
            {
              src: "assets/icons/react.svg",
              width: 30,
              height: 30,
            },
            {
              src: "assets/icons/render.svg",
              width: 30,
              height: 30,
            },
            {
              src: "assets/icons/typescript.svg",
              width: 30,
              height: 30,
            },
          ]
        }
        
      },
      size: {
        value: { min: 5, max: 15 },
      },
    },
    detectRetina: true,
  };

  constructor(private titleService: Title, private readonly ngParticlesService: NgParticlesService) {
    this.titleService.setTitle('Home | Harry Dev');
  }

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      await loadSlim(engine);
    });
  }

  particlesLoaded(container: Container): void {
    console.log(container);
    container.refresh();
  }
}
