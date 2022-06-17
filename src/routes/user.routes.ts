import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
}).get("/:id", (req, res) => {
    res.send(`Hello World! ${req.params.id}`);
}).post("/", (req, res) => {
    res.send("Hello World!");
}).put("/:id", (req, res) => {
    res.send(`Hello World! ${req.params.id}`);
}).delete("/:id", (req, res) => {
    res.send(`Hello World! ${req.params.id}`);
}).all("/", (req, res) => {
    res.send("Hello World!");
}).all("/:id", (req, res) => {
    res.send(`Hello World! ${req.params.id}`);
}).head("/", (req, res) => {
    res.send("Hello World!");
}).head("/:id", (req, res) => {
    res.send(`Hello World! ${req.params.id}`);
}).options("/", (req, res) => {
    res.send("Hello World!");
}).options("/:id", (req, res) => {
    res.send(`Hello World! ${req.params.id}`);
}).patch("/", (req, res) => {
    res.send("Hello World!");
}).patch("/:id", (req, res) => {
    res.send(`Hello World! ${req.params.id}`);
})

export default router;