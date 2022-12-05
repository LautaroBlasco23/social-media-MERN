"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./users/infrastructure/routes"));
const routes_2 = __importDefault(require("./posts/infrastructure/routes"));
const routes_3 = __importDefault(require("./auth/infrastructure/routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/users', routes_1.default);
app.use('/api/posts', routes_2.default);
app.use('/api/auth', routes_3.default);
app.listen(4900, () => {
    console.log('Server Running on port 4900');
});
