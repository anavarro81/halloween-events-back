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
exports.newAttendee = exports.getEventById = exports.getAllEvents = exports.loadEvents = exports.newEventService = void 0;
const event_model_1 = __importDefault(require("../models/event.model"));
const HttpError_1 = require("../errors/HttpError");
const newEventService = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield event_model_1.default.create(event);
    }
    catch (error) {
        throw new HttpError_1.HttpError(error.message ? error.message : "Error al crear el evento ", 500);
    }
});
exports.newEventService = newEventService;
const loadEvents = (events) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield event_model_1.default.insertMany(events);
    }
    catch (error) {
        console.error(error);
        throw new HttpError_1.HttpError(error.message ? error.message : "Error al cargar los eventos ", 500);
    }
});
exports.loadEvents = loadEvents;
const getAllEvents = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield event_model_1.default.find({});
    }
    catch (error) {
        console.error(error);
        throw new HttpError_1.HttpError(error.message ? error.message : "Error al obtener los eventos ", 500);
    }
});
exports.getAllEvents = getAllEvents;
const getEventById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield event_model_1.default.findById(id);
    }
    catch (error) {
        console.error(error);
        throw new HttpError_1.HttpError(error.message ? error.message : "Error al obtener los eventos ", 500);
    }
});
exports.getEventById = getEventById;
const newAttendee = (attendee, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = yield event_model_1.default.findByIdAndUpdate(id, { $addToSet: { attendees: attendee } }, { new: true });
        return event;
    }
    catch (error) {
        console.error(error);
        throw new HttpError_1.HttpError(error.message ? error.message : "Error al dar de alta el asistente ", 500);
    }
});
exports.newAttendee = newAttendee;
//# sourceMappingURL=event.service.js.map