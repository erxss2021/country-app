import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent { 

  private contador: number = 0;

  get getContador(): number{
    return this.contador;
  }

  public incrementar(): void{
    this.contador++;
  }

  public decrementar(): void{
    if (this.contador === 0)
      return; 
    this.contador--;
  }
}
