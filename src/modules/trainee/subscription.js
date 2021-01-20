import pubsub from '../pubsub.js';
import constant from '../../libs/constant.js';

export default {
  traineeAdded: {
    subscribe: () => pubsub.asyncIterator([constant.subscriptions.TRAINEE_ADDED]),
  },
  traineeUpdated: {
    subscribe: () => pubsub.asyncIterator([constant.subscriptions.TRAINEE_UPDATED]),
  },
  traineeDeleted: {
    subscribe: () => pubsub.asyncIterator([constant.subscriptions.TRAINEE_DELETED]),
  },
};