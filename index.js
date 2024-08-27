
// const person = {
//     name: {
//         first: 'Elyan',
//         last: 'Kemble',
//     },
//     age: 32,
//     location: {
//         city: 'Garland',
//         state: 'Texas',
//         zip: 75040
//     },
//     occupation: 'Front-End Developer',
//    introduce() {
//        console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`,
            
//         );
//     },
// };
// //console.log(person);

// person.introduce()

// console.log(person);

// person.introduce();



// class Animal {
//     constructor(eyes, legs, isAwake, isMoving){
//         this.eyes = eyes;
//             this.legs = legs;
//             this.isAwake = isAwake;
//             this.isMoving = isMoving;
	  // return is not needed because the new object is returned by default
//     }
// sleep() {
//     this.isAwake = false;
//   }
//   wake() {
//     this.isAwake = true;
//   }
//   sit() {
//     this.isMoving = false;
//   }
//   walk() {
//     this.isMoving = true;
//   }
//   speak(sound) {
//     console.log(sound);
//   }
//   toString(animal = 'Animal') {
//     return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
//   }
// }


// const cat1 = new Animal(2, 4, true, false);
// const cat2 = new Animal(2, 4, false, false);
// const cat3 = new Animal(2, 4, true, true);

// console.log(cat1);
// console.log(cat2);
// console.log(cat3);


// const catBox = [];

// console.log(Array.isArray(catBox));

// for (let i = 0; i <= 100; i++){
//     const cat = new Animal(2, 4, true, false);
//     catBox.push(cat);
// }
//  for (let i = 0; i <= 100; i++) {
//     const cat = new Animal(2, 4, true, true);
//      catBox.push(cat);
//  }

// console.table(catBox);
// //Static method
// console.log(Math.random());

// //instance method
// cat1.sleep()
// console.log(cat1);

// cat2.wake()
// cat2.walk()
// console.log(cat2);

// cat3.speak("meow")

// console.log(cat1.toString());

// console.log(cat2.toString());

// console.log(cat3.toString());


//Cat child class
// class Cat extends Animal{
//     constructor(fur, isAwake, isMoving) {
//         super(2, 4, isAwake, isMoving)// calls the Animal constructor function first
//         this.fur = fur;
//     }
//     speak() {
//         super.speak("Meow...");
//     }
//     toString(){
//         return super.toString("Cat");
//     }
// }

// class Dog extends Animal {
//     constructor(fur, isAwake, isMoving) {
//       super(2, 4, isAwake, isMoving);
//       this.fur = fur;
//     }
//     speak() {
//       super.speak("Woof!");
//     }
//     toString() {
//       return super.toString("Dog");
//     }
//   }
  
//   class Cow extends Animal {
//     constructor(hair, isAwake, isMoving) {
//       super(2, 4, isAwake, isMoving);
//       this.hair = hair;
//     }
//     speak() {
//       super.speak("Moo.");
//     }
//     toString() {
//       return super.toString("Cow");
//     }
//   }

// class Human extends Animal {
//     constructor(name, age, location, occupation) {
//         super(2, 2, true, false)
//         this.hair = hair;
//         this.name = name
//         this.location = location
//         this.occupation = occupation
//       }
     
//       toString() {
//         return super.toString("human");
//       }
//     introduce() {
//         console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
//     }
//   }
// const fullName = {
//     first: ''
// }





class Learner {
	// Private Properties
	#grades = [];
  
	#name = {
	  first: "",
	  last: "",
	};
  
	#age;
  
	constructor(firstName, lastName, age) {
	  this.#name.first = firstName;
	  this.#name.last = lastName;
	  this.#age = age;
	}
  
	// Returns the full-name
	get name() {
	  return `${this.#name.first} ${this.#name.last}`;
	}
  
	get age() {
	  return this.#age;
	}
  
	get grades() {
	  return this.#grades;
	}
	get average() {
		const arr = [...this.#grades];//Makes a copy of the #grades
		arr.sort((a, b) => a - b).shift();//sort loer to high and remove first element in the sorted array
	
		return arr.reduce((a, b) => a + b) / arr.length;
	  }
  
	set grades(grade) {
	  grade = Number(grade);
  
	  if (grade >= 0 && grade <= 100) {
		this.#grades.push(grade);
	  }
	}
  
	addGrades(...grades) {
	  // fatten the array
	  grades = grades.flat();
  
	  // loop over and access each grade
	  grades.forEach((grade) => {
		// convert the grade to a number
		grade = Number(grade);
  
		// checks that we stay in the 0 to 100 ranger
		if (grade >= 0 && grade <= 100) {
		  this.#grades.push(grade); // push grade to the #grades
		}
	  });
	}
  }
  
  const max = new Learner("Max", "Pain", 30);
console.log(max);


// max.age = 'Four';

console.log(max.name);
console.log(max.age);

// calling the grades setter
max.grades = 80;
max.grades = 100;
max.grades = 70;

// getting the array of grades
console.table(max.grades);

max.addGrades([50, 40, 30], [66, 33, 88], [77, 84, 98]);

console.log(max.average.toFixed(0));

console.log(max instanceof Learner);
console.log(max instanceof Object);


class Grades {
	static getAverage(...grades) {
	  const arr = [];
  
	  grades = grades.flat();
	  grades.forEach((grade) => {
		grade = Number(grade);
  
		if (grade >= 0 && grade <= 100) {
		  arr.push(grade);
		}
	  });
	  
	  arr.sort((a, b) => a - b).shift();
  
	  return arr.reduce((a, b) => a + b) / arr.length;
	}
  }


