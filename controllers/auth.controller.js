import { authService } from "../services/auth.service.js";
import { payload } from "../utils/helpers/helper.js";

export const authController = {
  signUp: async (req, res, next) => {
    try {
      const data = req.body;
      await authService.signUp(data);
      res.status(201).json({
        success: true,
        name: data?.name,
        email: data?.email,
      });
    } catch (error) {
      next(error);
    }
  },
  signIn: async (req, res, next) => {
    try {
      const data = req.body;
      await authService.signIn(data);

      res.status(200).json({
        success: true,
        token: await payload(data?.email),
      });
    } catch (error) {
      next(error);
    }
  },
};
