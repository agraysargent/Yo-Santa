const { AuthenticationError } = require('apollo-server-express');
const { User, Event, Order, Cart } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51JSsNxDp2J6zQC5M9rqW6JsMGxAGPudAYSqtCA5OV3YuqNDl31lKbcj8JSM0qmjBTY6boYzShYDHzOxyAijnuRwo00x2zumwrP');

const resolvers = {
  Query: {
    event: async (parent, { _id }) => {
      return await Product.findById(_id)
    },
    // Need to review typeDefs and adjust
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    // Need to review typeDefs and adjust
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    // Need to review typeDefs and adjust
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ events: args.events });
      const line_items = [];

      const { events } = await order.populate('events').execPopulate();

      for (let i = 0; i < events.length; i++) {
        const event = await stripe.event.create({
          name: events[i].name,
          description: events[i].description,
          images: [`${url}/images/${events[i].image}`]
        });

        const price = await stripe.prices.create({
          product: event.id,
          unit_amount: events[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { events }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ events });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;