
export class InstanceClass {
  a = 10;
  b = 20;

  setAll(num1: number, num2: number) {
    this.a = num1;
    this.b = num2;
  }

  sum() {
    return this.a + this.b;
  }
  take() {
    return this.b - this.a;
  }
}
