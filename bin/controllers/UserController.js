"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserController_1;
const tsoa_1 = require("tsoa");
const ioc_1 = require("../ioc");
// import { provideSingleton, inject } from '../inversify/ioc';
let UserController = UserController_1 = class UserController extends tsoa_1.Controller {
    constructor() {
        super();
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = {
                id: 1,
                name: 'Tinh Ngo',
                address: 'Kinh Mon, Hai Duong',
                age: 20
            };
            return Promise.resolve(user);
        });
    }
};
__decorate([
    tsoa_1.Get('get')
], UserController.prototype, "getUsers", null);
UserController = UserController_1 = __decorate([
    tsoa_1.Route('User'),
    tsoa_1.Tags('Users'),
    ioc_1.ProvideSingleton(UserController_1)
], UserController);
exports.UserController = UserController;
