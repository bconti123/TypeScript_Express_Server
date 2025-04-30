"use strict";

import dotenv from "dotenv";

dotenv.config();

// config interface
interface Config {
    SECRET_KEY: string;
    PORT: number;
}

// database config

// server config
const config: Config = {
    SECRET_KEY: process.env.SECRET_KEY || "secret development key",
    PORT: Number(process.env.PORT) || 5000,
};

export default config;