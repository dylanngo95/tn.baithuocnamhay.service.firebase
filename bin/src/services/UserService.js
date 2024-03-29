"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserService_1;
const BaseService_1 = require("./base/BaseService");
const inversify_1 = require("inversify");
const index_1 = require("../repositories/index");
const ioc_1 = require("../inversify/ioc");
let UserService = UserService_1 = class UserService extends BaseService_1.BaseService {
    constructor(repository) {
        super();
        this.repository = repository;
    }
};
UserService = UserService_1 = __decorate([
    ioc_1.ProvideSingleton(UserService_1),
    __param(0, inversify_1.inject(index_1.UserRepository))
], UserService);
exports.UserService = UserService;
