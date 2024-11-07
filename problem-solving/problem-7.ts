/*

Problem 7:
   Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

// Sample Input 1:
   const car = new Car("Honda", "Civic", 2018);
   car.getCarAge();

// Sample Output 1:
   6 (assuming current year is 2024)

*/

class Car {
  constructor(
    public company: string,
    public model: string,
    public year: number
  ) {}

  getCarAge(): void {
    const todayYear = new Date().getFullYear();
    const currentAge = todayYear - this.year;
    console.log(`${currentAge} (assuming current year is ${todayYear})`);
  }
}

const car = new Car("Honda", "Civic", 2018);
car.getCarAge();
