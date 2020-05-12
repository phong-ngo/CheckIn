import { Router } from "express";
import { getUsers } from "../controllers/account"


const router = Router();

router.get("/",  getUsers);

router.post("/add", (req, res) => {
  return res.send("Received a POST HTTP method");
});

router.put("/:userId", (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});

router.delete("/:id", (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.id} resource`);
});

export default router;
