import cors from "@elysiajs/cors";
import { Elysia } from "elysia";

new Elysia().use(cors()).listen(3000);
