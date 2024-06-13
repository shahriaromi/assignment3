//user route
import { Router } from "express";

const router = Router();

//create user
router.post("/auth/login", (req, res) => {
  res.send("create user");
});

export { router as userRouter };
