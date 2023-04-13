"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnicrowDispute__factory = exports.UnicrowClaim__factory = exports.UnicrowArbitrator__factory = exports.Unicrow__factory = exports.IUnicrowStakingRewards__factory = exports.IUnicrowDispute__factory = exports.IUnicrowClaimRewards__factory = exports.IUnicrowClaim__factory = exports.IUnicrowArbitrator__factory = exports.IUnicrow__factory = exports.FakeToken__factory = exports.IERC20__factory = exports.IERC20Metadata__factory = exports.ERC20__factory = exports.factories = void 0;
exports.factories = __importStar(require("./factories"));
var ERC20__factory_1 = require("./factories/@openzeppelin/contracts/token/ERC20/ERC20__factory");
Object.defineProperty(exports, "ERC20__factory", { enumerable: true, get: function () { return ERC20__factory_1.ERC20__factory; } });
var IERC20Metadata__factory_1 = require("./factories/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata__factory");
Object.defineProperty(exports, "IERC20Metadata__factory", { enumerable: true, get: function () { return IERC20Metadata__factory_1.IERC20Metadata__factory; } });
var IERC20__factory_1 = require("./factories/@openzeppelin/contracts/token/ERC20/IERC20__factory");
Object.defineProperty(exports, "IERC20__factory", { enumerable: true, get: function () { return IERC20__factory_1.IERC20__factory; } });
var FakeToken__factory_1 = require("./factories/contracts/FakeToken__factory");
Object.defineProperty(exports, "FakeToken__factory", { enumerable: true, get: function () { return FakeToken__factory_1.FakeToken__factory; } });
var IUnicrow__factory_1 = require("./factories/contracts/interfaces/IUnicrow__factory");
Object.defineProperty(exports, "IUnicrow__factory", { enumerable: true, get: function () { return IUnicrow__factory_1.IUnicrow__factory; } });
var IUnicrowArbitrator__factory_1 = require("./factories/contracts/interfaces/IUnicrowArbitrator__factory");
Object.defineProperty(exports, "IUnicrowArbitrator__factory", { enumerable: true, get: function () { return IUnicrowArbitrator__factory_1.IUnicrowArbitrator__factory; } });
var IUnicrowClaim__factory_1 = require("./factories/contracts/interfaces/IUnicrowClaim__factory");
Object.defineProperty(exports, "IUnicrowClaim__factory", { enumerable: true, get: function () { return IUnicrowClaim__factory_1.IUnicrowClaim__factory; } });
var IUnicrowClaimRewards__factory_1 = require("./factories/contracts/interfaces/IUnicrowClaimRewards__factory");
Object.defineProperty(exports, "IUnicrowClaimRewards__factory", { enumerable: true, get: function () { return IUnicrowClaimRewards__factory_1.IUnicrowClaimRewards__factory; } });
var IUnicrowDispute__factory_1 = require("./factories/contracts/interfaces/IUnicrowDispute__factory");
Object.defineProperty(exports, "IUnicrowDispute__factory", { enumerable: true, get: function () { return IUnicrowDispute__factory_1.IUnicrowDispute__factory; } });
var IUnicrowStakingRewards__factory_1 = require("./factories/contracts/interfaces/IUnicrowStakingRewards__factory");
Object.defineProperty(exports, "IUnicrowStakingRewards__factory", { enumerable: true, get: function () { return IUnicrowStakingRewards__factory_1.IUnicrowStakingRewards__factory; } });
var Unicrow__factory_1 = require("./factories/contracts/Unicrow__factory");
Object.defineProperty(exports, "Unicrow__factory", { enumerable: true, get: function () { return Unicrow__factory_1.Unicrow__factory; } });
var UnicrowArbitrator__factory_1 = require("./factories/contracts/UnicrowArbitrator__factory");
Object.defineProperty(exports, "UnicrowArbitrator__factory", { enumerable: true, get: function () { return UnicrowArbitrator__factory_1.UnicrowArbitrator__factory; } });
var UnicrowClaim__factory_1 = require("./factories/contracts/UnicrowClaim__factory");
Object.defineProperty(exports, "UnicrowClaim__factory", { enumerable: true, get: function () { return UnicrowClaim__factory_1.UnicrowClaim__factory; } });
var UnicrowDispute__factory_1 = require("./factories/contracts/UnicrowDispute__factory");
Object.defineProperty(exports, "UnicrowDispute__factory", { enumerable: true, get: function () { return UnicrowDispute__factory_1.UnicrowDispute__factory; } });
