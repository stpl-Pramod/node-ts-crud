"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json()); // Parse JSON bodies
app.use('/api', user_routes_1.default); // Mount user routes under /api
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
