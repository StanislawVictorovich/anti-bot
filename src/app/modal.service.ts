import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private firstNumber: number;
  private secondNumber: number;
  private captcha: Object;
  constructor () {
    this.captcha = {
      0: 'Zero',
      1: 'One',
      2: 'Two',
      3: 'Three',
      4: 'Four',
      5: 'Five',
      6: 'Six',
      7: 'Seven',
      8: 'Eight',
      9: 'Nine'
    }
    this.mixValues();
  }
  public mixValues(): void {
    this.firstNumber = Math.floor(Math.random() * 9);
    this.secondNumber = Math.floor(Math.random() * 9);
  }
  public getCaptcha(): string {
    return `${this.captcha[this.firstNumber]} + ${this.secondNumber} = ?`;
  }
  public checkCaptcha(result:number): boolean {
    return (this.firstNumber + this.secondNumber) === result;
  }
}