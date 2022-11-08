# This is the code for editing Sprites and Bitmaps.
```
/*
  @title: The Guide(Edison Hack Club)
  @author: kyle 
*/
```
 Above you will title your game along with placing your name. The structure of /* */ is for comments and the content of the comment is placed inside. Anything in a comment is not seen as code.

```
const player = "p";
const box = "b";
const goal = "g";
const obstacle = "o";
```
Above you will define the character to be used in the bitmaps below for each sprite. Const is used to define sprites. Write Const nameOfYourSprite = "symbolForYourSprite";
You can change the part after const and the part in between the quotations.
```
setLegend(
  [ player, bitmap`
................
..........D.....
....DDDDDDDDD...
...DDDDDDDDDDDD.
...DDDDDDDDDDDD.
...DDDDDDDDDDDD.
...DDDDDDDDDDD..
....DD.DDDDDD...
....D..DDD......
.......DDD......
.......DDD......
.......DDD......
.......DDD......
................
................
................` ],
  [ box, bitmap`
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC` ],
  [ goal, bitmap`
7777777777777777
7777777777777777
7777DDDDDDD77777
7DDD777777777777
DD77777777777777
D777777777777777
D777777777777777
D7777DD777777777
D7777DDDDD777777
D777777777DD7777
D7777777777DD777
DD7777777777D777
7D777777777DD777
7DD7777777DD7777
77DDD777DDD77777
77777DDD77777777` ],
  [ obstacle, bitmap`
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999` ]
);
```
Use the bitmap edit button in order to edit how a sprite looks. To create a bitmap simple do add a line like [ player, bitmap`.` ], where player is equal to the name of your sprite as set in the list of consts.
You can change the part before bitmap and edit the bitmap by clicking the bitmap button. The bitmap is what represents your sprites and maps.

Use this along with the sample code to edit the sprites of the game. Be warned, editing the number of sprites and their names can cause issues if you do not reflect those changes in other parts of the game. Stick to editting the bitmap for the sprites until you finish the rest of the sections.