"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./users/infrastructure/routes"));
const app = (0, express_1.default)();
app.use('/api/users', routes_1.default);
app.listen(4900, () => {
    console.log('Server Running on port 4900');
});
