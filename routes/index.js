import Post from './posts.js';
import Chat from './chat.js';
const Router = (server) => {
  // home route with the get method and a handler
  server.use('/posts', Post);
  server.use('/chats', Chat);
};
  export default Router;