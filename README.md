# JPacManS
My version of PacMan in JavaScript, written in 3 days
- [Story](#story)
- [Consideration](#consideration)

You can play it [here](https://l-amichevoleprogrammatorediquartiere.github.io/JPacManS/)

### <a name="story"> Story </a>
The first of the development the result are this:

![Schermata del 2024-03-17 00-45-45](https://github.com/L-amichevoleprogrammatorediquartiere/JPacManS/assets/64810680/08d045b1-efb0-41a4-92ff-9cb3901b863c)

My biggest problem was, how to make the wall effective, so i created an array with every value at one position, the array:

```
var labirinto= [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],
    [0,4,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,4,0],
    [0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,2,0,0,2,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,2,0,0,2,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,2,2,2,2,2,2,2,2,2,2,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,2,0,0,0,3,3,0,0,0,2,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,2,0,3,3,3,3,3,3,0,2,0,0,1,0,0,0,0,0,0],
    [2,2,2,2,2,2,1,2,2,2,0,3,3,3,3,3,3,0,2,2,2,1,2,2,2,2,2,2],
    [0,0,0,0,0,0,1,0,0,2,0,3,3,3,3,3,3,0,2,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,2,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,2,2,2,2,2,2,2,2,2,2,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,2,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,2,0,0,1,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],
    [0,4,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,4,0],
    [0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0],
    [0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0],
    [0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];
```
1= point
2= no point, just empty space
3= empty space but only for ghost not accesible for PacMan
4= big point

and other problem i have resolved for the deveolpment of this game, but Bro there are like 700 lines of code i can't explain every line hahahaha

- ### <a name="consideration"> Consideration </a>

This was my first experiment with Javascript, HTML, CSS. And objectively this is very good for only 3 days. However, i created only the script and the sprite for the victory (the ugliest sprite and bad written, but bro i am very sleepy don't judge, today i did an hardcore shouldere workout but this is antoher history) so the other file in the source folder, are made by this [guy](https://github.com/bward2/pacman-js) he is a real G. 

So goodnight, me after the creation of this repo:

![65ddd4b8881cd50c9e0af5b12eebb4e5](https://github.com/L-amichevoleprogrammatorediquartiere/JPacManS/assets/64810680/1efb5f5f-8b16-4a99-80ab-f6cd3d4b7bae)

