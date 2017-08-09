import attr from 'ember-data/attr';
import ModelBase from 'open-event-frontend/models/base';
import { belongsTo } from 'ember-data/relationships';

export default ModelBase.extend({

  /** attributes
   *
   */

  status        : attr('string'),
  identifier    : attr('string'),
  paypalToken   : attr('string'),
  transactionId : attr('string'),
  brand         : attr('string'),
  createdAt     : attr('moment'),
  paymentMode   : attr('string'),
  stripeToken   : attr('string'),
  last4         : attr('string'),
  address       : attr('string'),
  city          : attr('string'),
  state         : attr('string'),
  country       : attr('string'),
  zipcode       : attr('string'),
  expMonth     	: attr('number'),
  expYear      	: attr('number'),
  amount        : attr('number'),
  completedAt   : attr('moment'),

  /** relationships
   *
   */

  user  : belongsTo('user'),
  event : belongsTo('event')
});
