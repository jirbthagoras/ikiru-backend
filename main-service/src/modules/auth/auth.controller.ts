import Elysia from "elysia";
import { authPlugin } from "../../plugins/auth.plugin";

export const authController = new Elysia().use(authPlugin);
