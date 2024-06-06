import { Component, OnInit } from '@angular/core';
import { PortafolioService } from './services/portafolio.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portafolio';

  constructor(private _portafolioService: PortafolioService) { }


  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }



  onSectionChange(section: string): void {
    this._portafolioService.sendSection(section);
  }

}



