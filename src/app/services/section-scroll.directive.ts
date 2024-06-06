import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[sectionScroll]'
})
export class SectionScrollDirective {

  private spiedTags = ['SECTION'];

  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection!: string;

  constructor(private _el: ElementRef) { }

  @HostListener('document:mousewheel', ['$event'])
  onScroll(event: any) {
    let currentSection = '';

    let sections: string[] = ['home', 'about', 'services', 'portafolio', 'contact'];
    const viewHeight = window.innerHeight;

    let cont = 0;

    for (let section of sections) {

      let sec = document.getElementById(section);

      if (sec != null) {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          currentSection = id!;
        }

      }

      cont++;
    }

    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }

}
