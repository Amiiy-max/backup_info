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
```
console.log(howard.getElevatorPitch());
console.log(howard.name); // error
```
A constructor may also be marked protected (*cannot be instantiated outside of its containing class*)
```
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
