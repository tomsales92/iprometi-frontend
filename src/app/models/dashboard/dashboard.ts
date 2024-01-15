export class Dashboard {
    goal: number;
    accomplished: number;
    data: Data[];
    colorScheme: ColorScheme[]
  }
  
  export class Data {
    name: string;
    value: number;
  }

  export class  ColorScheme {
    name: string;
    value: string;
  }
