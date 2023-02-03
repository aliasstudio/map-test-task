import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPolygon } from 'src/app/models/polygon';

@Component({
  selector: 'app-polygon-selector',
  templateUrl: './polygon-selector.component.html',
  styleUrls: ['./polygon-selector.component.scss']
})

export class PolygonSelectorComponent {
  @Input() polygons : IPolygon[]

  @Output() polygonChanged = new EventEmitter()

  //Оповещаем родителя об изменении свойства
  polygonChange(polygonID : number) {
    this.polygonChanged.emit(polygonID)
  }
}
