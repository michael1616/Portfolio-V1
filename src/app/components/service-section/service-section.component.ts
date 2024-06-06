import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.css']
})
export class ServiceSectionComponent implements OnInit, OnDestroy {

  subscription: Subscription | undefined;

  mainTitlePart1: string = 'My';
  mainTitlePart2: string = 'Services';

  box1TitleH3: string = 'Web Developmnet';
  box1shortDescription: string = 'I have more than 5 years of experiencie working with .NET platform, i have experiencie in websites using ASP.NET MVC (.NET Framework) and ASP.NET Core MVC with SQL SERVER, i have knowledge in angular for the frontend and Web api for the backend.';

  box2TitleH3: string = 'Mobile Developmnet';
  box2shortDescription: string = 'I have experience working with xamarin forms and i would like to learn some tecnologies like Ionic, Kotlin, I enjoy creating mobile apps and provide a pleasant user experience. In the portafolio section you can observe one aplication made in xamarin forms.';

  readMore: string = 'Read More';

  constructor(private _portafolioService: PortafolioService) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this._portafolioService.receivedLang().subscribe(lang => {

      this.mainTitlePart1 = this._portafolioService.lang[lang].servicesContent.mainTitle.part1;
      this.mainTitlePart2 = this._portafolioService.lang[lang].servicesContent.mainTitle.part2;

      this.box1TitleH3 = this._portafolioService.lang[lang].servicesContent.serviceBox1.titleH3;
      this.box1shortDescription = this._portafolioService.lang[lang].servicesContent.serviceBox1.shortDescription;

      this.box2TitleH3 = this._portafolioService.lang[lang].servicesContent.serviceBox2.titleH3;
      this.box2shortDescription = this._portafolioService.lang[lang].servicesContent.serviceBox2.shortDescription;

      this.readMore = this._portafolioService.lang[lang].servicesContent.serviceBox1.readMore;

    });;
  }

}
