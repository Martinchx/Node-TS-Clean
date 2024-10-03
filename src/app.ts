import { envs } from './config';
import { AppRoutes, Server } from './presentation';

(() => {
  main();
})();

function main() {
  //TODO: DB Connection if necessary

  new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  }).start();
}
