export default {
    getMyProfile: async (parent, args, context) => {
      console.log('11111111');
        const { dataSources: { userAPI } } = context;
        const response = await userAPI.getMe();
        console.log('get my profile', response);
        return response.data;
      },
} 