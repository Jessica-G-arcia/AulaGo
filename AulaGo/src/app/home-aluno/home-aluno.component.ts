import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuLateralAlunoComponent } from '../menu-lateral-aluno/menu-lateral-aluno.component';
import { MenuSuperiorAlunoComponent } from '../menu-superior-aluno/menu-superior-aluno.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-aluno',
  imports: [MenuLateralAlunoComponent, MenuSuperiorAlunoComponent, CommonModule],
  standalone: true,
  templateUrl: './home-aluno.component.html',
  styleUrl: './home-aluno.component.css'
})
export class HomeAlunoComponent implements OnInit {
  @ViewChild('languageScrollContainer', { static: true }) languageScrollContainer!: ElementRef;

  alunoNome: string = 'Matheus'; // Dynamic student name

  currentTeacherIndex: number = 0;

  languages: Language[] = [
    { name: 'Inglês', flag: '/flags/us.png', active: true, },
    { name: 'Espanhol', flag: '/flags/es.png', active: false }, // Default active
    { name: 'Francês', flag: '/flags/fr.png', active: false },
    { name: 'Alemão', flag: '/flags/de.png', active: false },
    { name: 'Mandarim', flag: '/flags/cn.png', active: false },
    { name: 'Japonês', flag: '/flags/jpn.png', active: false }, // Added for scroll demonstration
    { name: 'Italiano', flag: '/flags/itl.png', active: false },
    { name: 'Português', flag: '/flags/br.png', active: false }
  ];

  top: Teacher[] = [
    {
      name: 'Rogério Lima',
      imageUrl: '/profRo.png', // Placeholder, create this image
      languages: ['Inglês'],
      rating: 5,
      quote: 'Professor Rogério tem uma didática incrível, fica fácil de aprender qualquer coisa com ele',
      authorQuote: 'William Lima'
    },
    {
      name: 'Ana Souza',
      imageUrl: '/profaRosa.png', // Placeholder, create this image
      languages: ['Inglês', 'Português'],
      rating: 4.5,
      quote: 'As aulas da Ana são super dinâmicas e divertidas, as músicas nas aulas ajudam muito!',
      authorQuote: 'Carla Dias'
    },
    {
      name: 'Marilene Silva',
      imageUrl: '/profaMari.png', // Placeholder, create this image
      languages: ['Inglês'],
      rating: 4.5,
      quote: 'Profa. Mari é uma querida, além da sua ótima metodologia, é muito atenciosa.',
      authorQuote: 'Pedro Almeida'
    },
    {
      name: 'Carlos Mendes',
      imageUrl: 'assets/teachers/carlos-mendes.jpg', // Placeholder, create this image
      languages: ['Inglês'],
      rating: 5, // Example with fewer stars
      quote: 'Muito atencioso e explica com clareza.',
      authorQuote: 'Fernanda Oliveira'
    },
    {
      name: 'Ana Ribeiro',
      imageUrl: 'assets/teachers/ana-ribeiro.jpg',
      languages: ['Inglês'],
      rating: 4,
      quote: 'Sempre muito paciente e dedicada.',
      authorQuote: 'Lucas Santos'
    },
    {
      name: 'Bruno Costa',
      imageUrl: 'assets/teachers/bruno-costa.jpg',
      languages: ['Inglês'],
      rating: 4,
      quote: 'Excelente professor, didática impecável.',
      authorQuote: 'Mariana Lima'
    },
    {
      name: 'Camila Freitas',
      imageUrl: 'assets/teachers/camila-freitas.jpg',
      languages: ['Inglês'],
      rating: 5,
      quote: 'Muito organizada e torna o aprendizado fácil.',
      authorQuote: 'Rafael Souza'
    },
    {
      name: 'Daniel Oliveira',
      imageUrl: 'assets/teachers/daniel-oliveira.jpg',
      languages: ['Inglês'],
      rating: 5,
      quote: 'Explica com clareza e muito carismático.',
      authorQuote: 'Juliana Pereira'
    },
    {
      name: 'Eduarda Martins',
      imageUrl: 'assets/teachers/eduarda-martins.jpg',
      languages: ['Inglês'],
      rating: 5,
      quote: 'Ótima professora, muito interativa.',
      authorQuote: 'Carlos Mendes'
    },
    {
      name: 'Fernando Rocha',
      imageUrl: 'assets/teachers/fernando-rocha.jpg',
      languages: ['Inglês'],
      rating: 5,
      quote: 'Sempre disposto a ajudar e tirar dúvidas.',
      authorQuote: 'Beatriz Nogueira'
    }
    
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

  get currentTeacher(): Teacher {
    return this.top[this.currentTeacherIndex];
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

  // navegação para top aluns
  previousTopTeacher(): void {
    if (this.currentTeacherIndex > 0) {
      this.currentTeacherIndex--;
    } else {
      // volta para o último aluno 
      this.currentTeacherIndex = this.top.length - 1;
    }
  }

  nextTopTeacher(): void {
    if (this.currentTeacherIndex < this.top.length - 1) {
      this.currentTeacherIndex++;
    } else {
      // volta para o primeiro aluno 
      this.currentTeacherIndex = 0;
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
  imageUrl: string;
  languages: string[];
  rating: number;
  quote: string;
  authorQuote: string;
}
