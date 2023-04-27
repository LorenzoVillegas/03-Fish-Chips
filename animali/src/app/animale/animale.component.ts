import { Component, Input } from '@angular/core';
import { Animali } from '../models/animal.model';

@Component({
  selector: 'app-animale',
  templateUrl: './animale.component.html',
  styleUrls: ['./animale.component.css']
})
export class AnimaleComponent {
@Input() animale: Animali;


}
