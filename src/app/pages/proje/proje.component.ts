import { Component } from '@angular/core';

@Component({
  selector: 'app-proje',
  templateUrl: './proje.component.html',
  styleUrls: ['./proje.component.scss'],
})
export class ProjeComponent {
  projects = [
    {
      title: 'Sezonul Dragostei',
      description:
        'A dating web service that provide guidence in finding the love of your life',
      image: 'assets/project-1.png',
      demo: 'https://serviciidematrimoniale.ro/',
      github: 'https://github.com/AndreiNeiconi/SezonulDragostei.git',
    },
    {
      title: 'Bio natur dayneo market',
      description: 'A marketplace for seling natural juice ',
      image: 'assets/project-2.png',
      demo: 'https://bio-natur-market.netlify.app',
      github: 'https://github.com/AndreiNeiconi/Neiconidotdev.git',
    },
  ];
}
