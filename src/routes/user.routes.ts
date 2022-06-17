import { Router } from "express";
import { getUser, createUser, deleteUser, getUsers, updateUser } from "../controllers/user.controller";

const router = Router();

router.get("/", getUsers)
    .get("/:id", getUser)
    .post("/", createUser)
    .put("/:id", updateUser)
    .delete("/:id", deleteUser);

export default router;