import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css']
})
export class HomeSectionComponent implements OnInit, OnDestroy{

  subscription: Subscription | undefined;
  linkCV: string = './assets/files/CV Macias English.pdf';
  titleH3: string = "Hello, It's me";
  profession: string = "And I'm a ";
  shortDescription: string = "I love everything related to tecnology, sometimes i like to listen to music, i usually "
  + "go out with my friends to random places mostly "
  + "restaurants, if you want to contact me please try these social media.";

  btnCV: string = 'Download CV';

  constructor(private _portafolioService: PortafolioService) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this._portafolioService.receivedLang().subscribe(lang => {
        
      this.titleH3 = this._portafolioService.lang[lang].homeContent.titleH3;
      this.profession = this._portafolioService.lang[lang].homeContent.profession;
      this.shortDescription = this._portafolioService.lang[lang].homeContent.shortDescription;
      this.btnCV = this._portafolioService.lang[lang].homeContent.btnCV;

      if(lang == 'ES')
        this.linkCV = './assets/files/CV Espaniol Michael.pdf';
      else
        this.linkCV = './assets/files/CV Macias English.pdf';


    });;
  }


}
