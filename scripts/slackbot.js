
var Y_U_NO_IMAGE_URL = 'https://i.ytimg.com/vi/9S9vP2inD_U/maxresdefault.jpg';

var bujik = function(robot) {

  /**
   * Listen for '@<robot> get me a coffee' and send a funny response.
   */
  robot.respond(/get me a coffee/, function(response) {
    response.send(Y_U_NO_IMAGE_URL);
    response.send(`Y U NO GET IT YOURSELF`);
  });

  /**
   * Listen for '@<robot> what are you doing this weekend?' and send a funny response.
   */
  robot.respond(/what are you doing this weekend?/, function(response) {
    response.reply("I'm a robot, I don't have weekends.");
  });

  /**
   * Listen for '@<robot> how was your weekend?' and send a funny response.
   */
  robot.respond(/how was your weekend?/, function(response) {
    response.reply("I'm a robot, I don't have a life.");
  });

  /**
   * Listen for '@<robot> how do you feed the donkey?' and send a funny response.
   */
  robot.respond(/how do you feed the donkey?/, function(response) {
    response.reply('You give the donkey carrots.');
  });

  /**
   * Listen for '@<robot> what are the ingredients for a <pizza|cake|sandwich>?'
   * and responding based on the provided option.
   */
  robot.respond(/what are the ingredients for a (.*)?/, function(response) {
    var favorite = response.match[1];

    switch (favorite) {
      case "pizza": {
        return response.reply("Cheese, Sauce, Dough, and TOPPINGS!");
      }
      case "cake": {
        return response.reply("Milk, Eggs, Flour, and Sugar... baby");
      }
      case "sandwhich": {
        return response.reply("At least two slices of bread and whatever you're feeling man.");
      }
      default: {
        return response.reply("I don't know what is going on right now. I'm scared. Take me home.");
      }
    }
  });

  /**
   * Listen for a //bark command and then bark at the user.
   */
  robot.hear(/\/\/bark/, function(response) {
    response.send(`Bujik barks at ${response.envelope.user.name}`);
  });

  /**
   * Listen for a //randomphrase command and then send a random response.
   */
  robot.hear(/\/\/random/, function(response) {
    var phrases = [
      'hotogs are delicious',
      'nachos are weird',
      'sometimes people can be savage',
      'support your local savages!!!',
      'house music is cool.',
      'more people are killed annually by donkeys than airplane crashes.'
    ];

    var randomIndex = Math.floor((Math.random() * phrases.length));

    response.send(phrases[randomIndex]);
  });

};

module.exports = bujik;
