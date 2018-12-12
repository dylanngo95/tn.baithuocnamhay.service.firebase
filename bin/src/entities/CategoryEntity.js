"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchema = {
    index: {
        type: Number,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    active: {
        type: Number,
        require: true,
    }
};
