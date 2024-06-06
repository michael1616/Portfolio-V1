import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-portafolio-section',
  templateUrl: './portafolio-section.component.html',
  styleUrls: ['./portafolio-section.component.css']
})
export class PortafolioSectionComponent implements OnInit, OnDestroy{


  headingPartA: string = 'Some';
  headingPartB: string = 'Projects';

  box1TitleH4: string = 'App Branch office';
  box2TitleH4: string = 'Sale System';
  box3TitleH4: string = 'Special CRUD';

  box1ShortDescription: string = 'This is a mobile app built in Xamarin Forms for this project. I was in charge of a team of 3 people, this application was created for a financial cooperative and you can make payments (pse) etc.';
  box2ShortDescription: string = 'This is a website made in Angular 16 for the frontend and ASP.NET CORE 7 MVC for the backend, you can make sells and this website has permission per module and per action.';
  box3ShortDescription: string = 'This CRUD is special because you can edit the records inline (in the same table), and and it has nice animations, this CRUD has SQL pagination, SQL filters and SQL ordered.';

  subscription: Subscription | undefined;
  
  constructor(private _portafolioService: PortafolioService) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this._portafolioService.receivedLang().subscribe(lang => {

      this.headingPartA = this._portafolioService.lang[lang].portafolioContent.heading.partA;
      this.headingPartB = this._portafolioService.lang[lang].portafolioContent.heading.partB;

      this.box1TitleH4 = this._portafolioService.lang[lang].portafolioContent.portafolioBox1.titleH4;
      this.box2TitleH4 = this._portafolioService.lang[lang].portafolioContent.portafolioBox2.titleH4;
      this.box3TitleH4 = this._portafolioService.lang[lang].portafolioContent.portafolioBox3.titleH4;

      this.box1ShortDescription = this._portafolioService.lang[lang].portafolioContent.portafolioBox1.description;
      this.box2ShortDescription = this._portafolioService.lang[lang].portafolioContent.portafolioBox2.description;
      this.box3ShortDescription = this._portafolioService.lang[lang].portafolioContent.portafolioBox3.description;


    });;
  }

}
