import config from "./utils/config.js";

const PORT = config.PORT || 8080;

export const startServer = async (req, res) => {
  app.listen(8080);
  console.log(`Server started on port ${PORT}`);
};
