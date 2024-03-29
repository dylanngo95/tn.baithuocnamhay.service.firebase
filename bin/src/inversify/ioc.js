"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsoa_1 = require("tsoa");
const inversify_1 = require("inversify");
exports.inject = inversify_1.inject;
exports.decorate = inversify_1.decorate;
exports.injectable = inversify_1.injectable;
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
exports.autoProvide = inversify_binding_decorators_1.autoProvide;
require("reflect-metadata");
inversify_1.decorate(inversify_1.injectable(), tsoa_1.Controller);
const iocContainer = new inversify_1.Container();
exports.iocContainer = iocContainer;
const provide = inversify_binding_decorators_1.makeProvideDecorator(iocContainer);
exports.provide = provide;
const fluentProvider = inversify_binding_decorators_1.makeFluentProvideDecorator(iocContainer);
const ProvideNamed = (identifier, name) => fluentProvider(identifier).whenTargetNamed(name).done();
exports.ProvideNamed = ProvideNamed;
const ProvideSingleton = (identifier) => fluentProvider(identifier).inSingletonScope().done();
exports.ProvideSingleton = ProvideSingleton;
