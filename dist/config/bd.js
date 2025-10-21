"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectBD = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectBD = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!process.env.BD_URI)
            throw new Error('BD_URI no definida');
        const connection = yield mongoose_1.default.connect(process.env.BD_URI);
        console.log('Conexion a la base de datos realizada correctamente');
    }
    catch (error) {
        console.error('Error conectando a la base de datos ', error);
        process.exit(1);
    }
});
exports.connectBD = connectBD;
exports.default = exports.connectBD;
//# sourceMappingURL=bd.js.map