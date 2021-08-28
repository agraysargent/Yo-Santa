const db = require('./connection');
const { User, Event } = require('../models');

db.once('open', async () => {
  await Event.deleteMany();

  const events = await Event.insertMany([
    {
      name: 'Halloween Buddies',
      description:
        "Halloween, a holiday dedicated to respecting our ancestors. So let's dress up and get some candy. Our buddy package is sure to deliver. Whatever costume you want, our employees have no shame, or rights!",
      duration: 1,
      price: 100
    },
    {
      name: 'Gobble Gobble!',
      description:
        "Want to celebrate genocide, gluttony, and football! Us too! From racially insensitive costumes, to puritanical persecution and judgement, we've got you covered. So warm up the gravy, and let us take care of the rest.",
      duration: 1,
      price: 100
    },
    {
      name: 'St. Paddy',
      description:
        "Hey let's celebrate a famous relgious figure. Chug! Chug! Chug! Our package is sure to delight, not because it's good, because you'll be too drunk to remember.",
      duration: 1,
      price: 100
    },
    {
      name: 'Easter Time!',
      description:
        "What a confusing Holiday. Is it pagan, is it Christian, we don't know, and neither do you! So gather up the kids, it's time to find eggs...that the bunny laid. Even though bunnies don't lay eggs. Wait is the bunny used because it used to be a pagan sacrifice! Do kids know this? Oh no!",
      duration: 1,
      price: 100
    },
    {
      name: 'Druncle Sam!!!',
      description:
        "The propaganda Uncle Sam is old and tired. We've modernized our Sam. Wanna drink beer? Wanna set off fireworks without taking any safety precautions? Our Sam fits all your needs and more.",
      duration: 1,
      price: 100
    },
    {
      name: 'Summer 2',
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      duration: 1,
      price: 100
    },
    {
      name: 'Santa',
      description:
        "Jolly Old Saint Nick! Nothing creepy about letting your kids sit on a complete strangers lap. Make sure you take the perfect picture, the police will need it.",
      duration: 1,
      price: 100
    },
    {
        name: 'Krampus',
        description:
          "Let's face it, your kids suck! Specifically yours. Want to teach them a lesson, but worried about what others will think. Hire Krampus, results guaranteed!",
        duration: 1,
        price: 100
      },

  console.log('events seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Phil',
    lastName: 'Harmonic',
    email: 'phil@testmail.com',
    password: 'password12345',
    orders: [
      {
        events: [event[0]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Juras',
    lastName: 'Sicpark',
    email: 'juras@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
