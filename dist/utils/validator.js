"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAttendee = exports.validateEvent = void 0;
const joi_1 = __importDefault(require("joi"));
const HttpError_1 = require("../errors/HttpError");
const EventSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    date: joi_1.default.date().required(),
    image: joi_1.default.string().required(),
    location: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    attendees: joi_1.default.array().items(joi_1.default.string().required())
});
const AttendeeSchema = joi_1.default.object({
    attendee: joi_1.default.string()
        .required()
        .length(2)
});
const validateEvent = (payload) => {
    const { error, value } = EventSchema.validate(payload, { abortEarly: false });
    if (error) {
        const errors = error.details.map(e => e.message).join(", ");
        throw new HttpError_1.HttpError(errors, 400);
    }
    return value;
};
exports.validateEvent = validateEvent;
const validateAttendee = (attendee) => {
    const { error, value } = AttendeeSchema.validate({ attendee });
    if (error) {
        const errors = error.details.map(e => e.message).join(", ");
        throw new HttpError_1.HttpError(errors, 400);
    }
    return value;
};
exports.validateAttendee = validateAttendee;
//# sourceMappingURL=validator.js.map