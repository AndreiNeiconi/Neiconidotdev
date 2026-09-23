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
    {
      title: 'Bingo Script Rotaract',
      description:
        'A GUI python interface that help you download multiple song from a excel file ',
      image: 'assets/project-4.png',
      github: 'https://github.com/AndreiNeiconi/Bingo_Svript_Rotaract'
      
    },
    {
      title: 'Polifans',
      description:
      'A web platform dedicated to students of politehnica university of Timisoara, where they can find information about student life, events, and resources. The platform also includes a forum where students can connect and share information with each other, post pepper,exemple of exams and manny more.',
      image: 'assets/project-5.png',
      demo: 'http://neiconidotdev.duckdns.org/',
      github: ' https://github.com/AndreiNeiconi/PoliFansServer'
    }
  ];
}
