import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Contact } from '../models/contact';
import { ApiResponseDTO } from '../models/api-response-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PortafolioService {

    private urlApi: string = 'https://portafolio-mike.somee.com/Contact';

    constructor(private http: HttpClient) { }

    lang: any = {
        "EN": {
            "navbar": {
                "home": "Home",
                "about": "About",
                "services": "Services",
                "portafolio": "Portafolio",
                "contact": "Contact"
            },
            "switch-lang": "EN",
            "homeContent": {
                "titleH3": "Hello, It's me",
                "profession": "And I'm a ",
                "shortDescription": "I love everything related to tecnology, sometimes i like to listen to music, i usually " 
                    +"go out with my friends to random places mostly "
                    + "restaurants, if you want to contact me please try these social media.",
                "btnCV": "Download CV"
            },
            "aboutContent": {
                "title": {
                    "part1": "About",
                    "part2": "Me"
                },
                "shortDescription": "I am a person that has multiple skills planning, designing "
                    + "and developing software projects using .NET platform, I "
                    + "have a great management of difficult situations, I can "
                    + "solve a wide variety of problems under any kind of "
                    + "pressure. One of my biggest advantages is providing "
                    + "ideas that can improve any project adjusting to the "
                    + "standards of quality. I am responsible and cautious while "
                    + "following my assigned projects achieving all the indicators given by the organization.",

                "shortDescriptionB": "After my first laboral experience, I worked around 5 years at "
                    + "“Estrategia Segura SAS” where I was in charge of "
                    + "developing web applications, mobile applications and "
                    + "desktop applications using .NET, some of my Works are: "
                    + "Digital Shifter, CRM and Branch "
                    + "office for cooperative financials.",
                "readMore": "Read more"
            },
            "servicesContent": {
                "mainTitle": {
                    "part1": "My",
                    "part2": "Services"
                },
                "serviceBox1": {
                    "titleH3": "Web Developmnet",
                    "shortDescription": "I have more than 5 years of experiencie working with .NET platform, i have experiencie in websites "
                        + "using ASP.NET MVC (.NET Framework) "
                        + "and ASP.NET Core MVC with SQL SERVER, i have knowledge in angular for the frontend and Web api for "
                        + "the backend.",
                    "readMore": "Read More"
                },
                "serviceBox2": {
                    "titleH3": "Mobile Developmnet",
                    "shortDescription": "I have experience working with Xamarin Forms and i would like to learn some tecnologies like Ionic, " +
                        "Kotlin, I enjoy " +
                        "creating mobile apps and provide a pleasant user experience. In the portafolio section you can " +
                        "observe one aplication made in xamarin forms.",
                    "readMore": "Read More"
                }
            },
            "portafolioContent": {
                "heading": {
                    "partA": "Some ",
                    "partB": "Projects"
                },
                "portafolioBox1": {
                    "titleH4": "App Branch office",
                    "description": "This is a mobile app built in Xamarin Forms, for this project I was in charge of a team of 3 people, "
                        + "this application was created for a financial cooperative and you can make payments (pse) etc."
                },
                "portafolioBox2": {
                    "titleH4": "Sale System",
                    "description": "This is a website made in Angular 16 for the frontend and ASP.NET CORE 7 MVC for the backend, "
                        + "you can make sells and this website has permission per module and per action."
                },
                "portafolioBox3": {
                    "titleH4": "Special CRUD",
                    "description": "This CRUD is special because you can edit the records "
                        + "inline (in the same table) and it has nice animations, "
                        + "this CRUD has SQL pagination, SQL filters and SQL ordered."
                }
            },
            "contactContent": {
                "heading": {
                    "partA": "Contact ",
                    "partB": "Me!"
                },
                "inputName": "Full Name",
                "inputEmail": "Email Address",
                "inputNumber": "Mobile Number",
                "textArea": "Your Message",
                "btnSend": "Send Message"
            },
            "footer": {
                "copyright": "Copyright © 2023 by Michael A Macias | All Rights Reserved"
            }

        },
        "ES": {
            "navbar": {
                "home": "Inicio",
                "about": "A cerca de",
                "services": "Servicios",
                "portafolio": "Portafolio",
                "contact": "Contacto"
            },
            "switch-lang": "ES",
            "homeContent": {
                "titleH3": "Hola, Soy",
                "profession": "Y Soy ",
                "shortDescription": "Me encanta todo lo relacionado con la tecnología a veces me gusta escuchar musica, usualmente salgo con mis amigos a lugares aleatorios " +
                    "principalmente restaurantes, si quieres contactar me por favor prueba estas redes sociales.",
                "btnCV": "Descargar CV"
            },
            "aboutContent": {
                "title": {
                    "part1": "A Cerca De",
                    "part2": "Mi"
                },
                "shortDescription": "Soy una persona que tiene multiples habilidades planeando, diseñando y desarrollando proyectos de software usando la "
                    + "plataforma de .NET, Tengo un gran manejo de situaciones dificiles, puedo resolver una amplia variedad de problemas "
                    + "bajo cualquier clase de presion. una de mis mas grandes ventajas es proveer ideas que puedan mejorar cualquier proyecto "
                    + "adjustandolo a estandares de calidad, soy responsable y prudente siguiendo mis proyectos asignados alcanzando "
                    + "todos los indicadores dados por la empresa.",

                "shortDescriptionB": "Después de mi primera experiencia laboral, trabaje alrededor de 5 años en “Estrategia Segura SAS” donde estuve a cargo de "
                    + "desarrollar aplicaciones web, aplicaciones móviles y aplicaciones en escritorio usando .NET, algunos de mis trabajos son: "
                    + "Turnero Digital, CRM, Sucursal Web para cooperativas financieras.",
                "readMore": "Leer más"
            },
            "servicesContent": {
                "mainTitle": {
                    "part1": "Mis",
                    "part2": "Servicios"
                },
                "serviceBox1": {
                    "titleH3": "Desarrollo Web",
                    "shortDescription": "Tengo más de 5 años de experiencia trabajando con la plataforma .NET tengo experiencia en sitios "
                        + "web utilizando ASP.NET MVC (.NET Framework) y ASP.NET Core MVC with SQL SERVER, tengo conocimiento en angular para el Frontend "
                        + "y Web Api para el Backend",
                    "readMore": "Leer más"
                },
                "serviceBox2": {
                    "titleH3": "Desarrollo Móvil",
                    "shortDescription": "Tengo experiencia trabajando con Xamarin Forms y me gustaría aprender algunas tecnologías como Ionic, Kotlin. Disfruto "
                        + "crear aplicaciones móviles y brindar una agradable experiencia de usuario. En la sección de portafolio puedes notar una "
                        + "aplicación hecha en xamarin forms. ",
                    "readMore": "Leer más"
                }
            },
            "portafolioContent": {
                "heading": {
                    "partA": "Algunos de mis ",
                    "partB": "Proyectos"
                },
                "portafolioBox1": {
                    "titleH4": "App Sucursal Financiera",
                    "description": "Esta es una aplicación móvil contruida en Xamarin Forms, para este proyecto estaba a cargo de un equipo de 3 personas, "
                        + "esta aplicación fue creada para cooperativas financieras y tu puedes hacer pagos con (PSE) etc."
                },
                "portafolioBox2": {
                    "titleH4": "Sistema De Ventas",
                    "description": "Este es un sitio web hecho en Angular 16 para el Frontend y ASP.NET CORE 7 MVC para el Backend, "
                        + "tú puedes hacer ventas y este sitio web tiene permisos dinámicos por módulo y por acción."
                },
                "portafolioBox3": {
                    "titleH4": "CRUD Especial",
                    "description": "Este CRUD es especial porque puedes editar los registros en línea (en la misma tabla) y tiene lindas animaciones, "
                        + "este CRUD tiene paginación SQL, Filtros SQL y ordenado SQL."
                }
            },
            "contactContent": {
                "heading": {
                    "partA": "Contácta",
                    "partB": "me"
                },
                "inputName": "Nombre Completo",
                "inputEmail": "Email",
                "inputNumber": "Celular",
                "textArea": "Tu mensaje",
                "btnSend": "Enviar Mensaje"
            },
            "footer": {
                "copyright": "Copyright © 2023 por Michael A Macias | Todos los derechos reservados"
            }

        }
    };


    private emitSection$ = new Subject<string>();
    private emitLang$ = new Subject<string>();


    sendSection(currentSection: string): void {
        this.emitSection$.next(currentSection);
    }

    receivedSection(): Observable<string> {
        return this.emitSection$.asObservable();
    }


    sendLang(currentLang: string): void {
        this.emitLang$.next(currentLang);
    }

    receivedLang(): Observable<string> {
        return this.emitLang$.asObservable();
    }

    saveContact(contactData: Contact): Observable<ApiResponseDTO> {
        return this.http.post<ApiResponseDTO>(`${this.urlApi}/SaveContact`, contactData);
    }

}
