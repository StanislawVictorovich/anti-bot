import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private firstNumber: number;
  private secondNumber: number;
  private captcha: string[];
  constructor () {
    this.captcha = [
      'Zero',
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine'
    ]
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