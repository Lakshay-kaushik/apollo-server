import pubsub from '../pubsub.js';
import userInstance from '../../service/user.js';
import constant from '../../libs/constant.js'

export default {
  createTrainee: (parent, args, context) => {
    const { user } = args;
    const createRecord = userInstance.createUser(user);
    pubsub.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: createRecord });
    return createRecord;
  },
  updateTrainee: (parent, args, context) => {
    const { id, role } = args;
    const updateRecord = userInstance.updateUser(id, role);
    pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, { traineeUpdated: updateRecord });
    return updateRecord;
  },
  deleteTrainee: (parent, args, context) => {
    const { id } = args;
    const deleteRecord = userInstance.deleteUser(id);
    pubsub.publish(constant.subscriptions.TRAINEE_DELETED, { traineeDeleted: deleteRecord });
    return deleteRecord;
  }

}