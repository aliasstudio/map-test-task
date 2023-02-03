import { Component } from '@angular/core'
import { IPolygon } from './models/polygon'
import {polygons as data} from './data/polygons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  polygons: IPolygon[] = data
  currentPolygon?: IPolygon

  //Получаем данные полигона и изменяем свойство
  setPolygon(polygonID: number) {
    this.currentPolygon = this.polygons.find(p => p.id == polygonID)
  }
}
