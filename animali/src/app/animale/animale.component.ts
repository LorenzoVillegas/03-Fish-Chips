import { Component, Input } from '@angular/core';
import { Animali } from '../models/animal.model';

@Component({
  selector: 'app-animale',
  templateUrl: './animale.component.html',
  styleUrls: ['./animale.component.css']
})
export class AnimaleComponent {
@Input() animale: Animali;

fullname_class: string = "animale-fullname";

ngInit() {
  this.fullname_class = this.animale.verso;
}


}
