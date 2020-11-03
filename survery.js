const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your nickname or name: ', (answer1) => {
  rl.question('What is an activity you like doing : ', (answer2) => {
    rl.question('what do you listen to while doing that? : ', (answer3) => {
      rl.question('which meal is your favorite? : ', (answer4) => {
        rl.question('What is your favorite thing for that meal? : ', (answer5) => {
          rl.question('Which sport is your favorit? : ', (answer6) => {
            console.log(`Hey my name is ${answer1}. I like to ${answer2}. While I do that I listen to ${answer3}. My fav meal is ${answer4}. For that meal I always eat ${answer5}. I also like the ${answer6}. `);
            rl.close();
          });
        });
      });
    });
  });
});
