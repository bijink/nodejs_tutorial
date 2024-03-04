class Sample{
  sampleHello() {
    console.log('Hello from sampleHello');
  }
}

class Hello extends Sample{
  constructor(num1, num2) {
    super()
    this.num1 = num1;
    this.num2 = num2;
  }

  a = 100;
  hey() {
    console.log('Sum: ' + (this.num1 + this.num2+this.a));
  }
}

const hello1 = new Hello(10, 20)

hello1.a = 200;
hello1.hey()
hello1.sampleHello()
