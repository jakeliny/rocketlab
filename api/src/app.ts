import * as cors from 'cors';
import * as express from 'express';
import * as dotenv from 'dotenv';

class App {
  public app: express.Application;

  constructor() {
    dotenv.config();
    this.app = express()
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors());
  }

  routes() { }


}

export default new App()
