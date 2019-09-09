>??? The constructor function also contains all of the static members of the class ???

Traditional JavaScript uses functions and prototype-based inheritance to build up reusable components   
object-oriented approach: classes inherit functionality and objects are built from these classes   

#### Inheritance
classes inherit properties and methods from base classes,(***subclasses,superclasses***)
```typescript
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Horse extends Animal {

    //before  access a property on this in a constructor body, we have to call *super()*
    constructor(name: string) { super(name); } 
    
    //override methods
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
let tom: Animal = new Horse("Tommy the Palomino");
tom.move(34);
```

#### Public, private, and protected modifiers 
***Public by default***   

***Understanding private***(class之外都不能访问,包括子类)   
*public:*  **structural type system**, 不判断where come, 只判断types of all members are compatible   
*private/protected:*  originated in the same declaration ==> compatible

***Understanding protected***(class和子类之外都不能访问)   
和private相比,can also be accessed within deriving classes
```typescript
console.log(howard.getElevatorPitch());
console.log(howard.name); // error
```
A constructor may also be marked protected (*cannot be instantiated outside of its containing class*)
```typescript
class Person {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}
class Employee extends Person {
    private department: string;
    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }
}
let howard = new Employee("Howard", "Sales");
let john = new Person("John"); // Error: The 'Person' constructor is protected
```

#### Readonly modifier
must be initialized at their declaration or in the constructor.

```typescript
class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) { //*Parameter properties*: consolidated the declarations and assignment into one location
    }
}
```
> Parameter properties: prefixing a constructor parameter with an **accessibility modifier** *(private etc.)* or **readonly**, or both 

#### Accessors (getter/setter to intercept accesses)
>accessors *with a get and no set* are automatically inferred to be **readonly**
```typescript
const fullNameMaxLength = 10;

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength);
        }
        
        this._fullName = newName;
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
```

#### Static Properties
```typescript
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
``` 

#### Abstract Classes
Unlike an interface, an abstract class may contain implementation details for its members.
```typescript
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}
let animal: Animal; // ok to create a reference to an abstract type
```

#### Advanced Techniques
***Constructor functions***
> ts中声明一个类时,产生了:**1.实例类型, 2.构造函数**
```typescript
let Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    function Greeter2(message) {
            this.greeting = message + 2;
        }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();

let greeter;
greeter = new Greeter("world");
console.log(greeter.greet());
```
>let Greeter赋的值是构造函数.    
>class: an ***instance side*** and a ***static side***
```typescript
class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;//using Greeter as the type of instances of the class Greeter
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;// This type(*typeof Greeter*) will contain all of the static members of Greeter along with the constructor that creates instances of the Greeter class.
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());
```
>**typeof Greeter**: "give me the type of the Greeter class itself" rather than the instance type. Or,
more precisely,"give me the type of the symbol called Greeter,"which is the type of the constructor function. 

***Using a class as an interface***
```typescript
class Point {
    x: number;
    y: number;
}
interface Point3d extends Point { // 因为Point类创建了type,所以Interface可以继承
    z: number;
}
```
>a class declaration创建两个东西: 类的实例类型, 一个构造函数