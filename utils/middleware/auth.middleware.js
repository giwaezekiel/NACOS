export const AuthMiddleware = async () => {
  const AuthHeader = req.header.authorization;

  try {
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      res.status(400).json({ success: false, error: "Unauthorixed token" });
    }
    console.log({ authHeader });

    const token = authHeader.split(" ")[1];
    console.log({ token: token });

    if (!token) {
      return res
        .status(400)
        .json({ success: false, error: "Unauthorized, No token found" });
    }
    const payload = jwt.verify(token, ENVDATA.JWT_SECRET);

    req.user = payload;

    next();
  } catch (error) {
    next(error);
  }
};
