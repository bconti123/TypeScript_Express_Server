"use strict";

import dotenv from "dotenv";

dotenv.config();

// config interface
interface Config {
    SECRET_KEY: string;
    PORT: number;
    NODE_ENV: string;
}

// database config
export const getDatabaseUri = () : string => {
    return (config.NODE_ENV === "test")
        ? "database_name_test"
        : process.env.DATABASE_URI || "database_name";
}

// server config
export const config: Config = {
    SECRET_KEY: process.env.SECRET_KEY || "secret development key",
    PORT: Number(process.env.PORT) || 5000,
    NODE_ENV: process.env.NODE_ENV || "development"
};


