import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
    {
      title: 'Youtube Python downloader',
      description:
        'A GUI python interface that help you download multiple song from a excel file ',
      image: 'assets/project-3.png',
      demo: 'https://github.com/AndreiNeiconi/Bingo_Svript_Rotaract.git',
      github: 'https://github.com/AndreiNeiconi/Bingo_Svript_Rotaract.git',
    },
  ];
}
