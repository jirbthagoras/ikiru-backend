import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
import { errorPlugin } from "./plugins/error.plugin";

new Elysia().use(cors()).use(errorPlugin).listen(3000);
