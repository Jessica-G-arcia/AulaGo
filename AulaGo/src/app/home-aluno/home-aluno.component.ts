import { Component,OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuLateralAlunoComponent } from '../menu-lateral-aluno/menu-lateral-aluno.component';
import { MenuSuperiorAlunoComponent } from '../menu-superior-aluno/menu-superior-aluno.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-aluno',
  imports: [MenuLateralAlunoComponent, MenuSuperiorAlunoComponent, CommonModule],
  templateUrl: './home-aluno.component.html',
  styleUrl: './home-aluno.component.css'
})
export class HomeAlunoComponent implements OnInit {
  @ViewChild('languageScrollContainer', { static: true }) languageScrollContainer!: ElementRef;

  alunoNome: string = 'Aluno'; // Dynamic student name

  languages: Language[] = [
    { name: 'Inglês', flag: '/flags/us.png', active: true, },
    { name: 'Espanhol', flag: '/flags/es.png', active: false }, // Default active
    { name: 'Francês', flag: '/flags/fr.png', active: false },
    { name: 'Alemão', flag: '/flags/de.png', active: false },
    { name: 'Mandarim', flag: '/flags/cn.png', active: false },
    { name: 'Japonês', flag: '/flags/japan.png', active: false }, // Added for scroll demonstration
    { name: 'Italiano', flag: 'assets/flags/italy.png', active: false },
    { name: 'Português', flag: 'assets/flags/brazil.png', active: false }
  ];

  teachers: Teacher[] = [
    {
      name: 'Rogério Lima',
      photo: 'assets/teachers/rogerio-lima.jpg',
      languages: ['Espanhol'],
      stars: ['full', 'full', 'full', 'full', 'half'],
      quote: 'Professor Rogério tem uma didática incrível, fica fácil de aprender qualquer coisa com ele',
      quoteAuthor: 'William Lima'
    },
    {
      name: 'Ana Souza',
      photo: 'assets/teachers/ana-souza.jpg', // Placeholder, create this image
      languages: ['Inglês', 'Francês'],
      stars: ['full', 'full', 'full', 'full', 'full'],
      quote: 'As aulas da Ana são super dinâmicas e divertidas!',
      quoteAuthor: 'Carla Dias'
    },
    {
      name: 'Carlos Mendes',
      photo: 'assets/teachers/carlos-mendes.jpg', // Placeholder, create this image
      languages: ['Alemão'],
      stars: ['full', 'full', 'full', 'empty', 'empty'], // Example with fewer stars
      quote: 'Muito atencioso e explica com clareza.',
      quoteAuthor: 'Fernanda Oliveira'
    }
    // Add more teachers here to see the carousel in action
  ];

  constructor() { }

  ngOnInit(): void {
    // Optionally, scroll to the active language on init
    setTimeout(() => { // Timeout ensures element is rendered
      const activeLanguageCard = this.languageScrollContainer.nativeElement.querySelector('.language-card.active');
      if (activeLanguageCard) {
        activeLanguageCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }, 0);
  }

  selectLanguage(selectedLang: Language): void {
    this.languages.forEach(lang => lang.active = false);
    selectedLang.active = true;
    // You might want to trigger a data load based on the selected language here
    console.log(`Language selected: ${selectedLang.name}`);
  }

  scrollLanguages(direction: 'left' | 'right'): void {
    const container = this.languageScrollContainer.nativeElement;
    const scrollAmount = 200; // Adjust scroll distance as needed

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}
interface Language {
  name: string;
  flag: string;
  active: boolean;
}
interface Teacher {
  name: string;
  photo: string;
  languages: string[];
  stars: string[];
  quote: string;
  quoteAuthor: string;
}
