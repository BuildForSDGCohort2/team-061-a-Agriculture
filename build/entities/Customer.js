"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModel = exports.Customer = exports.DeliveryInfo = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
class DeliveryInfo {
}
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], DeliveryInfo.prototype, "country", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], DeliveryInfo.prototype, "state", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], DeliveryInfo.prototype, "streetAddress", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], DeliveryInfo.prototype, "phone", void 0);
exports.DeliveryInfo = DeliveryInfo;
class Customer extends defaultClasses_1.TimeStamps {
}
__decorate([
    typegoose_1.prop({ required: true, unique: true }),
    __metadata("design:type", String)
], Customer.prototype, "email", void 0);
__decorate([
    typegoose_1.prop({ required: true, select: false }),
    __metadata("design:type", String)
], Customer.prototype, "password", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Customer.prototype, "firstname", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Customer.prototype, "lastname", void 0);
__decorate([
    typegoose_1.prop({ _id: false }),
    __metadata("design:type", DeliveryInfo)
], Customer.prototype, "deliveryInfo", void 0);
exports.Customer = Customer;
exports.CustomerModel = typegoose_1.getModelForClass(Customer);
//# sourceMappingURL=Customer.js.map