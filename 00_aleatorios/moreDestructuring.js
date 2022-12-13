const gamesArr = ["Horizon: Forbidden West", "The Last Of Us: Part 2", "Crysis 3", "Fifa 23"];
const [game1, , , game4] = gamesArr;
const [, ...allToNewArr] = gamesArr; 

console.log(game1, game4);
console.log(allToNewArr);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

let games = [];
class GameObj {
    constructor(name, developer, genre, distributor) {
        this.name = name;
        this.developer = developer;
        this.genre = genre;
        this.distributor = distributor

        this.addToGames();
    }
    addToGames() {
        games.push(this);
    } 
}

const gameHorizon = new GameObj("Horizon: Forbidden West", 
                                "Guerrilla Games", 
                                "Adventure", 
                                "Sony Interactive Entertainment");

const gameTheLastOfUs = new GameObj("The Last Of Us: Part 2", 
                                    "Naughty Dogs", 
                                    "Survival Horror", 
                                    "Sony Interactive Entertainment");

const gameFifa = new GameObj("Fifa 23", 
                             "Eletronic Arts", 
                             "Sport", 
                             "Eletronic Arts");

let { name: nameGame, genre: genreGame } = gameFifa;
console.log(`This game is ${nameGame} and your genre is ${genreGame}`);

console.log(games);

const gamesWithoutSpecialCharacters = games.map(game => game.name.replace(/\s|[0-9_]|\W|[#$%^&*()]/g, ""));
console.log(gamesWithoutSpecialCharacters);

const gamesSony = games.filter(game => game.distributor.includes("Sony"));
console.log(gamesSony);


// let gamesNames = games.reduce((acumulator, initialValue) => [...acumulator, ...initialValue.name]);
