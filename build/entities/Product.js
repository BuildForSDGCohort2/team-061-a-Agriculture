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
exports.ProductModel = exports.Product = exports.StatusEnum = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const Farmer_1 = require("./Farmer");
const Category_1 = require("./Category");
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NONE"] = "None";
    StatusEnum["STOCKED"] = "Stocked";
    StatusEnum["AWAITING"] = "Awaiting";
    StatusEnum["UNFULFILLED"] = "Unfulfilled";
})(StatusEnum = exports.StatusEnum || (exports.StatusEnum = {}));
class Restock {
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Date)
], Restock.prototype, "harvestDate", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Restock.prototype, "expectedStock", void 0);
__decorate([
    typegoose_1.prop({ type: String, enum: StatusEnum, required: true, default: "None" }),
    __metadata("design:type", String)
], Restock.prototype, "status", void 0);
class Product {
}
__decorate([
    typegoose_1.prop({ required: true, ref: () => Farmer_1.Farmer, type: typegoose_1.mongoose.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], Product.prototype, "farmerID", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    typegoose_1.prop({ required: true, min: 1, default: 1 }),
    __metadata("design:type", Number)
], Product.prototype, "stock", void 0);
__decorate([
    typegoose_1.prop({ required: true, ref: () => Category_1.Category, type: typegoose_1.mongoose.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], Product.prototype, "category", void 0);
__decorate([
    typegoose_1.prop({ _id: false }),
    __metadata("design:type", Restock)
], Product.prototype, "restockDetails", void 0);
exports.Product = Product;
exports.ProductModel = typegoose_1.getModelForClass(Product);
//# sourceMappingURL=Product.js.map