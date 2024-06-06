import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit, OnDestroy {

  readMore: boolean = false;
  readMoreAnimation: boolean = false;
  textButton: string = 'Read More';
  subscription: Subscription | undefined;

  lang: string = 'EN';
  titlePart1: string = 'About';
  titlePart2: string = 'Me';
  shortDescriptionA: string = 'I am a person that has multiple skills planning, designing and developing software projects using .NET platform, I have a great management of difficult situations, I can solve a wide variety of problems under any kind of pressure. One of my biggest advantages is providing ideas that can improve any project adjusting to the standards of quality. I am responsible and cautious while following my assigned projects achieving all the indicators given by the organization.';
  shortDescriptionB: string = 'After my first laboral experience, I worked around 5 years at “Estrategia Segura SAS” where I was in charge of developing web applications, mobile applications and desktop applications using .NET, some of my Works are: Digital Shifter, CRM and Branch office for cooperative financials.';


  constructor(private _portafolioService: PortafolioService) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this._portafolioService.receivedLang().subscribe(lang => {

      this.lang = lang;

      this.titlePart1 = this._portafolioService.lang[lang].aboutContent.title.part1;
      this.titlePart2 = this._portafolioService.lang[lang].aboutContent.title.part2;

      this.shortDescriptionA = this._portafolioService.lang[lang].aboutContent.shortDescription;
      this.shortDescriptionB = this._portafolioService.lang[lang].aboutContent.shortDescriptionB;

      if(this.readMore && lang == 'EN'){
        this.textButton = 'Read Less';
      }else if(this.readMore && lang == 'ES'){
        this.textButton = 'Leer Menos';
      }else if(!this.readMore && lang == 'EN'){
        this.textButton = 'Read More';
      }else{
        this.textButton = 'Leer Más';
      }
      


    });;
  }


  readMoreAction(event: any): void {

    event.preventDefault();

    let status = !this.readMore;

    //Mostrar text
    if (status) {

      this.textButton = this.lang == 'EN' ? 'Read Less' : 'Leer Menos';
      this.readMore = !this.readMore;
      this.readMoreAnimation = true;

    } else {


      this.readMoreAnimation = false;
      setTimeout(() => {
        this.textButton = this.lang == 'EN' ? 'Read More' : 'Leer Más';
        this.readMore = false;
      }, 500);
    }

  }
}
