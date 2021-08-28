import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';

// stripePromise returns a promise with the stripe object as soon as the Stripe package loads
const stripePromise = loadStripe('pk_test_51JSsNxDp2J6zQC5MG4R2c7R8aBrmzbhnWNVyXzoQdZWNNzGtRjHYXLy8LJD0OQHNblHr8niGm363ZPZn2kirO6MZ00CsXTfOmr');
