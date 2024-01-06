export class Dashboard {
    meta: number;
    diasRealizados: number;
    dados: Dados[];
    colorScheme: ColorScheme[]
  }
  
  export class Dados {
    name: string;
    value: number;
  }

  export class  ColorScheme {
    name: string;
    value: string;
  }
