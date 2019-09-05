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

***Understanding private***   
*public:*  **structural type system**, 不判断where come, 只判断types of all members are compatible   
*private/protected:*  originated in the same declaration ==> compatible
