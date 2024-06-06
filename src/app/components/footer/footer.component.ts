import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy{

  subscription: Subscription | undefined;
  copyRight: string = 'Copyright © 2023 by Michael A Macias | All Rights Reserved';

  constructor(private _portafolioService: PortafolioService) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this._portafolioService.receivedLang().subscribe(lang => {

      this.copyRight = this._portafolioService.lang[lang].footer.copyright;

    });;
  }

}
