import { authService } from "../services/auth.service.js";
import { payload } from "../utils/helpers/helper.js";

export class authController {
  static async signUp(req, res, next) {
    try {
      const data = req.body;
      await authService.signUp(data);
      res.status(201).json({
        success: true,
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
      });
    } catch (error) {
      next(error);
    }
  }
  static async signIn(req, res, next) {
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
  }
}
