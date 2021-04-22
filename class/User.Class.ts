interface IBox {    
  x : number;
  y : number;
  height : number;
  width : number;
}

export class Box {
  public x: number;
  public y: number;
  public height: number;
  public width: number;


  constructor();
  constructor(obj: IBox); 
  constructor(obj?: any) {    
      this.x = obj && obj.x || 0
      this.y = obj && obj.y || 0
      this.height = obj && obj.height || 0
      this.width = obj && obj.width || 0;
  }   
}
