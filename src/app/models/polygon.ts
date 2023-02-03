import { LatLngExpression } from "leaflet";

export interface IPolygon {
    id: number,
    title: string,
    color: string,
    coordinates: Array<LatLngExpression>
}