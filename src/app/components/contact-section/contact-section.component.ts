import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortafolioService } from 'src/app/services/portafolio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit, OnDestroy {

  form: FormGroup;

  subscription: Subscription | undefined;
  headingPartA: string = 'Contact ';
  headingPartB: string = 'Me!';

  placeHolderName: string = 'Full Name';
  placeHolderEmail: string = 'Email Address';
  placeHolderNumber: string = 'Mobile Number';
  placeHolderTextArea: string = 'Your Message';
  btnSend: string = 'Send Message';
  loading: boolean = false;
  alertTextSuccess: string = 'The information was send!';
  alertTextError: string = 'Something was wrong';
  lang: string = 'EN';

  constructor(private _portafolioService: PortafolioService, private fb: FormBuilder,
    private toastr: ToastrService) {

    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.maxLength(90), Validators.minLength(5), Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(4), Validators.pattern(/^([0-9])*$/)]],
      message: ['', [Validators.required, Validators.maxLength(700), Validators.minLength(5)]]
    });

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this._portafolioService.receivedLang().subscribe(lang => {

      this.lang = lang;

      this.headingPartA = this._portafolioService.lang[lang].contactContent.heading.partA;
      this.headingPartB = this._portafolioService.lang[lang].contactContent.heading.partB;


      this.placeHolderName = this._portafolioService.lang[lang].contactContent.inputName;
      this.placeHolderEmail = this._portafolioService.lang[lang].contactContent.inputEmail;
      this.placeHolderNumber = this._portafolioService.lang[lang].contactContent.inputNumber;
      this.placeHolderTextArea = this._portafolioService.lang[lang].contactContent.textArea;

      this.btnSend = this._portafolioService.lang[lang].contactContent.btnSend;

      if (lang == 'ES') {
        this.alertTextSuccess = '¡La información fue enviada!';
        this.alertTextError = 'Algo salió mal';
      } else {
        this.alertTextSuccess = 'The information was send!';
        this.alertTextError = 'Something was wrong';
      }

    });;
  }

  saveContact(): void {

    if (this.form.valid) {

      const POSIBLECONTACT: Contact = {
        id: 0,
        fullName: this.form.get('fullName')?.value,
        email: this.form.get('email')?.value,
        phoneNumber: this.form.get('phoneNumber')?.value,
        message: this.form.get('message')?.value,
      };


      this.loading = true;


      this._portafolioService.saveContact(POSIBLECONTACT).subscribe({
        next: (data) => {

          if (data.isSuccess) {
            this.form.reset();
            this.toastr.success(this.alertTextSuccess, 'Ok');
            this.loading = false;
          }
        },
        error: (data) => {

          if (data.error != null && !data.error.isExitoso && data.error.statusCode == 500) {
            this.toastr.error(this.alertTextError, 'Error');
          } else {
            this.toastr.error(this.alertTextError, 'Error');
          }

          this.loading = false;
        }
      });

    }

  }

}
