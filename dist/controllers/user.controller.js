"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUser = void 0;
const getUser = (req, res) => {
    res.json({ message: 'User data fetched successfully' });
};
exports.getUser = getUser;
const createUser = (req, res) => {
    res.json({ message: 'User created successfully' });
};
exports.createUser = createUser;
