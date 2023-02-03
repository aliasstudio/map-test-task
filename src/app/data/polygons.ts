import { IPolygon } from "../models/polygon";

export const polygons : IPolygon[] = [
    {
        id: 0,
        title: 'Восточный №1',
        color: 'gray',
        coordinates: [
            [57.1137, 65.5383],
            [57.12, 65.548],
            [57.1141,65.5723],
            [57.1057, 65.5615]
        ]
    },
    {
        id: 1,
        title: 'Восточный №2',
        color: 'green',
        coordinates: [
            [57.1051,65.5628],
            [57.1138,65.5734],
            [57.1060,65.5942],
            [57.0977,65.5829]
        ]
    },
    {
        id: 2,
        title: 'Центральный №1',
        color: 'blue',
        coordinates: [
            [57.1565,65.5339],
            [57.1606,65.5409],
            [57.1599,65.5419],
            [57.1582,65.5549],
            [57.1553,65.5613],
            [57.1489,65.5490]
        ]
    },
    {
        id: 3,
        title: 'Центральный №2',
        color: 'violet',
        coordinates: [
            [57.1485,65.5497],
            [57.1550,65.5619],
            [57.1453,65.5811],
            [57.1386,65.5693]
        ]
    }
]