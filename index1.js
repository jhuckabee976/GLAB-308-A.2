// Part 1: Humble Beginnings
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
      companion: {
        name: "Frank",
        type: "Flea",
        inventory: ["small hat", "sunglasses"]
      }
    }
  };
  
  // Loop to log each item in Robin's inventory
  for (const item of adventurer.inventory) {
    console.log(item);
  }
  
  // Part 2: Class Fantasy
class Character {
    static MAX_HEALTH = 100;
    constructor(name) {
      this.name = name;
      this.health = Character.MAX_HEALTH;
      this.inventory = [];
    }
  
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}`);
    }
  }
  
  // Re-create Robin using the Character class
  const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
  
 robin.companion = new Character("Leo");
robin.companion.type = "Cat";
  
  robin.companion.companion = new Character("Frank");
  robin.companion.companion.type = "Flea";
  robin.companion.companion.inventory = ["small hat", "sunglasses"];
  
  console.log(robin);
  
  // Test the roll method
robin.roll();
robin.companion.roll();
robin.companion.companion.roll();

  

// Part 3: Class Features
class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];
    constructor(name, role) {
        super(name);
        if (!Adventurer.ROLES.includes(role)) {
            throw new Error("role not valid!");
        }
        this.role = (role);
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }
  
  class Companion extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard", "Inventor",];
    constructor(name, role) {
        super(name);
        if (!Companion.ROLES.includes(role)) {
            throw new Error("role not valid!");
        }
        this.role = (role);
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }
  
  // Create an adventurer
  const adventurerRobin = new Adventurer("Robin", "Fighter", "Healer", "Wizard");
  adventurerRobin.scout();
  
  // Log each item in Robin's inventory
  for (const item of adventurerRobin.inventory) {
    console.log(item);
  }

  const companionLeo = new Adventurer("Leo", "Fighter", "Healer", "Wizard");
companionLeo.scout();

const companionFlea = new Adventurer("Flea", "Fighter", "Healer", "Wizard");
companionFlea.scout();
  
// Log each item in Flea's inventory
// for (const item of Flea.inventory) {
//     console.log(item);
//   }
    