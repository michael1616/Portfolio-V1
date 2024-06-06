import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  showMenu: boolean = false;
  iconMenu: string = 'bx bx-menu';
  currentSection: string = '';
  subscription: Subscription | undefined;
  lang: string = 'EN';

  titlePage: string = 'Portfolio';
  homeText: string = 'Home';
  aboutText: string = 'About';
  serviceText: string = 'Services';
  portafolioText: string = 'Portafolio';
  contactText: string = 'Contact';

  constructor(private _portafolioService: PortafolioService) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this._portafolioService.receivedSection().subscribe(data => {
      this.currentSection = data;
    });;
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
    this.iconMenu = this.showMenu ? 'bx bx-x' : 'bx bx-menu';
  }

  goToSection(section: string): void {

    this.showMenu = false;
    this.iconMenu = 'bx bx-menu';

    this.currentSection = section;
  }


  changeLang(): void {

    this.lang = this.lang == 'EN' ? 'ES' : 'EN';

    this._portafolioService.sendLang(this.lang);

    this.homeText = this._portafolioService.lang[this.lang].navbar.home;
    this.aboutText = this._portafolioService.lang[this.lang].navbar.about;
    this.serviceText = this._portafolioService.lang[this.lang].navbar.services;
    this.portafolioText = this._portafolioService.lang[this.lang].navbar.portafolio;
    this.contactText = this._portafolioService.lang[this.lang].navbar.contact;

    this.titlePage = this.lang == 'ES' ? 'Portafolio': 'Portfolio';

  }

}
