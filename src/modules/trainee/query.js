import { response } from 'express';
import user from '../../service/user.js';

export default {
  getAllTrainees: async(parent, args, context) => {
    const { user } = args;
    const { dataSources: { traineeAPI } } = context;
    const response = await traineeAPI.getTrainees({...user});
    console.log('response',response);
    return response.data;
  },
  getTrainee: async(parent, args, context) => {
    const { dataSources: { userAPI } } = context;
    const { limit, skip } = args;
    const response= await userAPI.me();
    const count = getTrainee({limit, skip});
    return response.data;
    return count;
  }
};