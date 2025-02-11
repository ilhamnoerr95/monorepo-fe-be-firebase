import express from "express";
import { UserController } from "../controllers/index";

// middleware auth
import { authMiddleware } from "../middleware/index";

const router = express.Router();

router.get("/generate-token-custom/:id", UserController.generateTokenCustom);
router.get("/fetch-user-data", authMiddleware, UserController.fetchUserData);
router.put(
	"/update-user-data/:id",
	authMiddleware,
	UserController.updateUserData
);

export default router;
