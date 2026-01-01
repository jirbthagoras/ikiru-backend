import { Elysia } from "elysia";

new Elysia().get("/", () => "Hello Elysia").listen(3000);
