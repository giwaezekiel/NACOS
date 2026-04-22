import { config } from "./utils/config.js";
import { app } from "./app.js";
import { connectDB } from "./utils/db.js";

const PORT = config.PORT || 8080;

const startServer = async () => {
  app.listen(PORT);
  console.log(`Server started on port ${PORT}`);
  await connectDB();
};

startServer();
