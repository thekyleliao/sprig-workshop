/* 
  @title: Sprites and Bitmaps
  @author: kyle liao
*/
/* Your goal is to create a box sprite, a goal sprite, and an obstacle 
sprite. Once you do that you should be able to create a sample game.*/
const player = "p";
/* const stands for the name of the sprite. A sprite is a moveable character
in a video game. p stands for how the player will be represented in a bitmap. 
A bitmap is a grid of characters that represent maps and sprites. 
You can make "player" anything and "p" as any single alphabetical letter*/

setLegend(
  [ player, bitmap`.` ],
);

/* setLegend establishes the legend, aka the key, like on a map for what
your sprites look like. Keep this syntax format, change player to reflect
the name of your targeted sprite. Edit by clicking the bitmap button. 
add new lines [ player, bitmap`.` ],*/

setSolids([player]);
/* Add comma after player and add another sprite to make more than one solid
List the sprites that are to be solid, meaning they can't clip each other*/

let level = 0;
/* Represents a variable for what number level to use, change 0 to the
number for your level where 0 = first level*/

const levels =  [
  map`.`,
];
/* click the map to edit. Add new lines for new levels for maps, map`.`*/

let currentLevel = levels[level];
/* makes the currentLevel variable reflect the number of levels you have*/

setMap(currentLevel);
/* run this to change the level */


setPushables({
  [ player ]: [ player ],
});
/* Makes solid objects able to push each other, add more by writing 
the [ spriteName] : [ spriteName2], after the comma*/


/* Below is movement  */
onInput("s", () => {
  let playerSprite = getFirst(player);  // Gets the sprite of the player
  playerSprite.y++;                     // Moves the player one tile down
});

onInput("w", () => {
  let playerSprite = getFirst(player);  // Gets the sprite of the player
  playerSprite.y--;                     // Moves the player one tile down
});

onInput("a", () => {
  let playerSprite = getFirst(player);  // Gets the sprite of the player
  playerSprite.x--;                     // Moves the player one tile down
});
onInput("d", () => {
  let playerSprite = getFirst(player);  // Gets the sprite of the player
  playerSprite.x++;                     // Moves the player one tile down
});

afterInput(() => {
  let boxSprite = getFirst(box);        // Gets the sprite of the box
  let goalSprite = getFirst(goal);      // Gets the sprite of the goal
    // Check if they overlap
  if (boxSprite.x == goalSprite.x && boxSprite.y == goalSprite.y) {
    // You win
    level++;                                // Increment the level we are on
  if (level >= levels.length) level = 0;  // Go back to the first level if user finishes all levels
    currentLevel = levels[level];
    setMap(currentLevel);
  }
});

onInput("j", () => {
  currentLevel = levels[level];
  setMap(currentLevel);
});


