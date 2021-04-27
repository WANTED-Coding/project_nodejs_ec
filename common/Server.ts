import express, { Application, RequestHandler } from "express";
import mongoose from "mongoose";
import Controller from "../Controllers/Controller";
import http from "http";
import cron from "node-cron";
// rest of the code remains same
class App {
  private app: Application;
  private readonly _port: number;
  private _dbUrl: string;
  constructor(PORT: number, DB_URL: string) {
    this.app = express();
    this._port = PORT;
    this._dbUrl = DB_URL;
  }
  public run(): http.Server {
    return this.app.listen(this._port, () =>
      console.log(
        ` ⚡️ [server]: Server is running at https://localhost:${this._port}`
      )
    );
  }
  public loadMiddleware(middlers: Array<RequestHandler>): void {
    middlers.forEach((middleware) => {
      this.app.use(middleware);
    });
  }
  public loadControllers(controllers: Array<Controller>): void {
    controllers.forEach((controller) => {
      this.app.use(controller.path, controller.setRoutes());
    });
  }
  public async initDatabase(): Promise<void> {
    try {
      const connect = mongoose.connect(this._dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
      connect && console.log("Database is successfully authenticated");
      cron.schedule("*/1 * * * *", () => {
        console.log("running a task a minute");
      });
    } catch (err) {
      console.log(err);
    }
  }
}
export default App;
