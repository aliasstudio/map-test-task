import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IPolygon } from 'src/app/models/polygon';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})


export class MapComponent implements OnInit  {
  @Input() polygons : IPolygon[]
  @Input() selectedPolygon? : IPolygon

  //Ассоциируем данные с полигонами на карте
  private MapPolygons: Map<IPolygon, L.Polygon> = new Map();

  public map!: L.Map;
  //Параметры по умолчанию
  private options = {
    center: L.latLng(57.1314, 65.5628),
    initZoom: 13,
    minZoom: 3,
    maxZoom: 18
  }

  ngOnInit(): void {
    this.initMap()
  }

  //Отслеживаем изменение выбранного полигона
  ngOnChanges(changes: SimpleChanges) {
    //Пропускаем срабатывание на первичной установке значения
    if(!changes.selectedPolygon.firstChange) {
      //Записываем предыдущий полигон
      let previousPolygon = changes.selectedPolygon.previousValue
      //Если есть предыдущий - восстанавливаем цвет
      if(previousPolygon)
        ResetPolygonHighlight(this.MapPolygons.get(previousPolygon), previousPolygon.color)
      
      //Если выбран полигон выполняем зум и подсветку
      //Иначе возврашаем карту в изначальное состояние
      let mapPolygon = this.MapPolygons.get(changes['selectedPolygon'].currentValue)
      if(mapPolygon) {
        HighlightPolygon(mapPolygon)
        ZoomPolygon(mapPolygon, this.map)
      } else {
        this.map.flyTo(this.options.center, this.options.initZoom)
      }
    }
  }

  
  private initMap(): void {
    this.map = L.map('map', {
      center: this.options.center,
      zoom: this.options.initZoom
    })

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: this.options.maxZoom,
      minZoom: this.options.minZoom,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    })
    tiles.addTo(this.map)

    //Добавляем полигоны на карту
    this.polygons.forEach(polygon => {
      let mapPolygon = L.polygon(polygon.coordinates, {
        color: polygon.color
      })

      this.MapPolygons.set(polygon, mapPolygon)
      mapPolygon.addTo(this.map).bindPopup(polygon.title)
    })
  }
}

//Функции для взаимодействия с полигонами
function HighlightPolygon(polygon: any) {
  polygon.setStyle({
    weight: 5,
    color: "red",
  })
  polygon.openPopup()
}

function ResetPolygonHighlight(polygon: any, pColor: string) {
  polygon.setStyle({
    weight: 2,
    color: pColor,
  })
  polygon.closePopup()
}

function ZoomPolygon(polygon: any, map: L.Map) {
  map.flyToBounds(polygon.getBounds())
}