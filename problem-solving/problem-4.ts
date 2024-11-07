/*

Problem 4:
   Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// Sample Input 1:
   const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
   78.54;

// Sample Input 2:
   const rectangleArea = calculateShapeArea({
   shape: "rectangle",
   width: 4,
   height: 6,
   });

// Sample Output 2:
   24;

 */

type TRadius = {
  shape: "circle";
  radius: number;
};
type TRectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};
type TShapeArea = TRadius | TRectangle;

function calculateShapeArea(data: TShapeArea): number | string {
  if (data.shape === "circle") {
    const ca = Math.PI * data.radius * data.radius;
    return Number(ca.toFixed(2));
  } else if (data.shape === "rectangle") {
    return Number(data.height) * Number(data.width);
  } else {
    return "Not a Shape";
  }
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
console.log(rectangleArea);
