import Express from 'express';
import { createServer } from 'http';
import * as pkg from 'apollo-server-express';
import { UserAPI, TraineeAPI } from './datasource/index.js';
const { ApolloServer } = pkg;
class Server {
  constructor(configurations) {
    this.configurations = configurations;
    this.app = Express()
  }
  bootstrap() {
    this.setupRouts();
    return this;
  }

  setupRouts() {
    const { app } = this;
    app.get('/test', (req, res) => {
      res.send("Your Server is Running......");
    });
    return this;
  }

  setupApollo(schema) {
    const { app } = this;
    this.Server = new ApolloServer({
      ...schema,
      dataSources: () => {
        const userAPI = new UserAPI();
        const traineeAPI = new TraineeAPI();
        return { userAPI, traineeAPI };
      },
      context:({req}) =>{
        if (req) {
          return { token: req.headers.authorization};
        }
        return{};
      }
    });

    this.Server.applyMiddleware({ app });
    this.httpServer = createServer(app);
    this.Server.installSubscriptionHandlers(this.httpServer);
    this.run();
  };

  run() {
    const { configurations: { PORT } } = this;
    this.httpServer.listen(PORT, (err) => {
      if (err) {
        console.log(err);
      }
      console.log(`App is running on port ${PORT}`);
    });
  }
}
export default Server