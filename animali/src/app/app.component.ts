import { Component } from '@angular/core';
import { Animali } from './models/animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'animali';

  animali : Animali[] = [
    {
       "nome": "cane",
       "verso": "bau",
       "zampe": 4,
       "movimento": "cammina"
    },
    {
       "nome": "rana",
       "verso": "cra",
       "zampe": 4,
       "movimento": "salta"
    },
    {
       "nome": "canarino",
       "verso": "fiu",
       "zampe": 2,
       "movimento": "vola"
    },
    {
       "nome": "serpente",
       "verso": "fss",
       "zampe": 0,
       "movimento": "striscia"
    }
 ];

 
}
