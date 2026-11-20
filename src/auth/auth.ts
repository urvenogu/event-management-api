import {betterAuth} from "better-auth";
import {drizzleAdapter} from "@better-auth/drizzle-adapter";
import {db} from "../db/index.js";
import {env} from "../config/env.js";
import * as schema from "../db/schema/auth.js";
import {ROLES} from "./roles.js";

export const auth = betterAuth({
    baseURL: env.BETTER_AUTH_URL,
    secret: env.BETTER_AUTH_SECRET,
    database: drizzleAdapter(db, {provider: "pg", schema}),
    advanced: {
        database: {
            generateId: "uuid",
        },
    },
    socialProviders: {
    google: {
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
    },
    user: {
        additionalFields: {
            role: {
                type: [...ROLES],
                required: false,
                defaultValue: "attendee",
                input: false,
            },
        },
    },
});