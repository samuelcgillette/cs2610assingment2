import net from 'net';
import { router } from "./router.js";
import { Request } from "./request.js";
import { loggingMiddlewareFactory, staticFileHanderFactory} from './middleware.js';
import dotenv from "dotenv";
dotenv.config();

const server = net.createServer((socket) => {
  socket.on('data', async (data) => {

    const request = new Request(data.toString("utf-8"));
    

    let routerWithMiddleware = staticFileHanderFactory(router);
    routerWithMiddleware= loggingMiddlewareFactory(routerWithMiddleware)
    const response = await routerWithMiddleware(request);
    socket.write(response.toString());
  });

  socket.on("end", () => {
    console.log("connection ended");
  })
});


server.listen("3000", "0.0.0.0", () => {
  console.log('Server listening on port 3000');
})

