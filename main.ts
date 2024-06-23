// Text-Based Adventure-Game in Typescript and Node.js
// This project is not GUI based. It is a console-based game.


// step 1:
// Installation of inquirer (npm install inquirer):

import inquirer from "inquirer"

class Hero {
    name: string;
    health = 100;

    constructor(name: string) {
        this.name = name

    }
decreaseHealth() {
    this.health -= 20
}

increaseHealth() {
    this.health = 100
}

}

// For enemy


class Enemy {
    name: string;
    health = 100;

    constructor(name: string) {
        this.name = name

    }
decreaseHealth() {
    this.health -= 20
}

increaseHealth() {
    this.health = 100
}

}

//step 2:

//hero object
async function main() {
    const { heroName } = await inquirer.prompt([

        {
            type: "input",
            name: "heroName",
            message: "Enter your hero name"
        }
    ])

// enemy object
    const { enemyType } = await inquirer.prompt([

        {
            type: "list",
            name: "enemyType",
            choices: ["Thanos", "Noyan", "Sukuna"],
            message: "Select your enemy you want to fight with:"
        }  
    ])

    
//step 3: 
// battle field:

const hero = new Hero ( heroName );
const enemy = new Enemy ( enemyType );

console.log(`${enemy.name} v/s ${hero.name}`)


//step 4:
// action:

do {
const { action } = await inquirer.prompt([

    {
        type: "list",
        name: "action",
        choices: ["attack", "defend", "run"],
        message: "choose your action",
    }
]);


//step 5:
// switch case:

switch ( action ) {
    case "attack":

        case "defend":

            case "run":

        const randomNum = Math.random();
        if (randomNum > 0.5) {
            hero.decreaseHealth();
            console.log(`${hero.name} health: ${hero.health}`);
            console.log(`${enemy.name} health: ${enemy.health}`);
            
            
            if (hero.health <= 0) {
                console.log("You Loss! Better Luck Next Time🙂")
                return 
            }
            } else {
                enemy.decreaseHealth();
                console.log(`${hero.name} health: ${hero.health}`);
                console.log(`${enemy.name} health: ${enemy.health}`);
                
                
                if (enemy.health <= 0) {
                    console.log("Winner Winner Chicken Dinner🍗")
                    return 
                
                }
            }
            break;
        }
    } while (true);            
}
main();



