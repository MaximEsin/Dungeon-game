import way from "../images/Arch.webp";
import cultists from "../images/Friks.png";
import atack1 from "../images/Attack.png";
import run from "../images/RUN.png";
import ritual from "../images/Ritual.png";
import skull from "../images/Skull.png";
import orc from "../images/Ork.png";
import stealth from "../images/BackStab.png";
import dead from "../images/Dead.png";
import cash from "../images/CashGain.png";
import hydra from "../images/Hidra.png";
import altar from "../images/Altar.png";
import shop from "../images/Shop.png";
import food from "../images/food.png";
import sword from "../images/Sword.png";
import minotaur from "../images/Minotaur.png";

export const data = [
  /* 1 choice */
  [
    /* Option 1 */
    {
      main: "Now you are ready to go. As you enter the dungeon you see a torch. You take it with yourself on this adventure. You see 3 paths, which one will you take?",
      mainImg: way,
      option1: "Left path",
      img1: way,
      option2: "Middle path",
      img2: way,
      option3: "Right path",
      img3: way,
      health: 10,
      damage: 20,
      coins: 0,
    },
    /* Option 2 */
    {
      main: "Now you are ready to go. As you enter the dungeon you see a torch. You take it with yourself on this adventure. You see 3 paths, which one will you take?",
      mainImg: way,
      option1: "Left path",
      img1: way,
      option2: "Middle path",
      img2: way,
      option3: "Right path",
      img3: way,
      health: 20,
      damage: 10,
      coins: 0,
    },
    /* Option 3 */
    {
      main: "Now you are ready to go. As you enter the dungeon you see a torch. You take it with yourself on this adventure. You see 3 paths, which one will you take?",
      mainImg: way,
      option1: "Left path",
      img1: way,
      option2: "Middle path",
      img2: way,
      option3: "Right path",
      img3: way,
      health: 15,
      damage: 15,
      coins: 0,
    },
  ],
  /* 2 choice */
  [
    /* Option 1 */
    {
      main: "As you go further the way you hear some rude noises. You think you know what creature is making them... it is an ork. You know that they are very strong and beefy.",
      mainImg: orc,
      option1: "Atack ork quitely and stealthy",
      img1: stealth,
      option2: "Atack ork",
      img2: atack1,
      option3: "Run back",
      img3: run,
      health: 0,
      damage: 0,
      coins: 0,
    },
    /* Option 2 */
    {
      main: "You enter a room with dim light. In the middle of it a flying fire skull is muttering. As you come closer it sees you and starts speaking directly to you.",
      mainImg: skull,
      option1: "Listen to him",
      img1: skull,
      option2: "Atack skull",
      img2: atack1,
      option3: "Run back",
      img3: run,
      health: 0,
      damage: 0,
      coins: 0,
    },
    /* Option 3 */
    {
      main: "As you move ahead you smell something familiar... it is blood. You see a group of cloacked cultists. Their leader asks you if you want to help them complete the ritual.",
      mainImg: cultists,
      option1: "Complete the ritual",
      img1: ritual,
      option2: "Atack cultists",
      img2: atack1,
      option3: "Run back",
      img3: run,
      health: 0,
      damage: 0,
      coins: 0,
    },
  ],
  /* 3 choice */
  [
    /* Option 1 */
    {
      main: "You strongly regret that you chose this, because your opponent strikes you before you even understand what is going on. You try to run as fast as you can further on. You don't hear anything anymore and see an altar in the middel of a room.",
      mainImg: atack1,
      option1: "Touch the altar",
      img1: altar,
      option2: "Read a book that is on the altar.",
      img2: altar,
      option3: "Go further.",
      img3: way,
      health: -10,
      damage: 0,
      coins: 0,
    },
    /* Option 2 */
    {
      main: "You strike down this monster, but he also atacked you. You have searched the whole room for bounty and found 4 golden coins. As you go further you meet an altar.",
      mainImg: cash,
      option1: "Touch the altar",
      img1: altar,
      option2: "Read a book that is on the altar.",
      img2: altar,
      option3: "Go further.",
      img3: way,
      health: -5,
      damage: 0,
      coins: 4,
    },
    /* Option 3 */
    {
      main: "You strongly regret that you chose this, because your opponent strikes you before you even understand what is going on.",
      mainImg: dead,
      option1: "You died",
      img1: dead,
      option2: "You died",
      img2: dead,
      option3: "You died",
      img3: dead,
      health: 0,
      damage: 0,
      coins: 0,
      death: true,
    },
  ],
  /* 4 choice */
  [
    /* Option 1 */
    {
      main: "When you leave this room you feel despair. While you stood before the altar you felt a lot more reliefed. Now you meet a giant Hydra.",
      mainImg: hydra,
      option1: "Try to cut one of her heads.",
      img1: atack1,
      option2: "Try to speak with her.",
      img2: hydra,
      option3: "Run back",
      img3: run,
      health: 10,
      damage: 0,
      coins: 0,
    },
    /* Option 2 */
    {
      main: "You feel a bit better now, when you enter next room you see a gian hydra.",
      mainImg: hydra,
      option1: "Try to cut one of her heads.",
      img1: atack1,
      option2: "Try to speak with her.",
      img2: hydra,
      option3: "Run back",
      img3: run,
      health: 5,
      damage: 0,
      coins: 0,
    },
    /* Option 3 */
    {
      main: "When you leave this room you feel despair. While you stood before the altar you felt a lot more reliefed. Now you meet a giant Hydra.",
      mainImg: hydra,
      option1: "Try to cut one of her heads.",
      img1: atack1,
      option2: "Try to speak with her.",
      img2: hydra,
      option3: "Run back",
      img3: run,
      health: 0,
      damage: 0,
      coins: 0,
    },
  ],
  /* 5 choice */
  [
    /* Option 1 */
    {
      main: "You cut 1 of her heads, but 2 new instantly grow up. you fight as hard as you can and finally manage to strike her heart. After looting the room you find some coins and see a strange dude near a strange shop.",
      mainImg: shop,
      option1: "Buy some food for 5 coins",
      img1: food,
      option2: "Buy new epic weapon for 15 coins",
      img2: sword,
      option3: "Never speak to this dude and carry on your journey.",
      img3: way,
      health: 10,
      damage: 0,
      coins: 11,
    },
    /* Option 2 */
    {
      main: "You cut 1 of her heads, but 2 new instantly grow up. you fight as hard as you can and finally manage to cut strike her heart. After looting the room you find some coins and see a strange dude near a strange shop.",
      mainImg: shop,
      option1: "Buy some food for 5 coins",
      img1: food,
      option2: "Buy new epic weapon for 15 coins",
      img2: sword,
      option3: "Never speak to this dude and carry on your journey.",
      img3: way,
      health: 10,
      damage: 0,
      coins: 11,
      death: true,
    },
    /* Option 3 */
    {
      main: "You cut 1 of her heads, but 2 new instantly grow up. you fight as hard as you can and finally manage to cut strike her heart. After looting the room you find some coins and see a strange dude near a strange shop.",
      mainImg: shop,
      option1: "Buy some food for 5 coins",
      img1: food,
      option2: "Buy new epic weapon for 15 coins",
      img2: sword,
      option3: "Never speak to this dude and carry on your journey.",
      img3: way,
      health: 10,
      damage: 0,
      coins: 11,
      death: true,
    },
  ],
  /* 6 choice */
  [
    /* Option 1 */
    {
      main: "You feel a lot better after having a quick meal. Just as you enter the next room you hear a bull nearby. When you look at it, it appears to be a minotaur.",
      mainImg: minotaur,
      option1: "Atack it",
      img1: atack1,
      option2: "Try to hide and then quitly crawl to the next room.",
      img2: minotaur,
      option3: "Run back",
      img3: run,
      health: 10,
      damage: 0,
      coins: -5,
    },
    /* Option 2 */
    {
      main: "Just as you enter the next room you hear a bull nearby. When you look at it, it appears to be a minotaur.",
      mainImg: minotaur,
      option1: "Atack it",
      img1: atack1,
      option2: "Try to hide and then quietly crawl to the next room.",
      img2: minotaur,
      option3: "Run back",
      img3: run,
      health: 0,
      damage: 5,
      coins: -15,
    },
    /* Option 3 */
    {
      main: "Just as you enter the next room you hear a bull nearby. When you look at it, it appears to be a minotaur.",
      mainImg: minotaur,
      option1: "Atack it",
      img1: atack1,
      option2: "Try to hide and then quietly crawl to the next room.",
      img2: minotaur,
      option3: "Run back",
      img3: run,
      health: 0,
      damage: 0,
      coins: 0,
    },
  ],
];
