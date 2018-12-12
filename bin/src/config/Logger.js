"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = require("winston");
const constants_1 = require("./constants");
const date = new Date();
const fileName = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}.log`;
logger.configure({
    level: 'debug',
    format: logger.format.combine(logger.format.colorize(), logger.format.simple()),
    transports: [
        new logger.transports.File({ filename: `logs/${fileName}`, level: 'debug' }),
        new logger.transports.Console()
    ]
});
class Logger {
    static log(...args) {
        if (Logger.shouldLog)
            Logger.console.debug(Logger.formatArgs(args));
    }
    static warn(...args) {
        if (Logger.shouldLog)
            Logger.console.warn(Logger.formatArgs(args));
    }
    static error(...args) {
        if (Logger.shouldLog)
            Logger.console.error(Logger.formatArgs(args));
    }
    static info(...args) {
        if (Logger.shouldLog)
            Logger.console.info(Logger.formatArgs(args));
    }
    static verbose(...args) {
        if (Logger.shouldLog)
            Logger.console.verbose(Logger.formatArgs(args));
    }
    static formatArgs(args) {
        if (args.length <= 1)
            args = args[0];
        return JSON.stringify(args, null, 4);
    }
}
Logger.shouldLog = constants_1.default.config.environment !== 'test';
Logger.console = logger;
exports.Logger = Logger;
