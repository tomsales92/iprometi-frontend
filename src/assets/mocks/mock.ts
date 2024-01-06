import { Dashboard } from "src/app/pages/models/dashboard/dashboard"

export const dashboardMock: Dashboard = {
    "meta": 240,
    "diasRealizados": 22,
    "dados": [
        {
        "name": "Dias de Treino",
        "value": 20,
        },
        {
        "name": "Meta",
        "value": 80,
        }
    ],
    "colorScheme": [
        {
            name: 'Dias de Treino',
            value: '#00E676' 
          },
          {
            name: 'meta',
            value: '#F50057' 
          },
    ]
}

