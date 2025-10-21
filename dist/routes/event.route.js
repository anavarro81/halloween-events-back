"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const event_controller_1 = require("../controllers/event.controller");
const eventRouter = express_1.default.Router();
eventRouter.post('/', event_controller_1.newEvent);
eventRouter.post('/loadEvents', event_controller_1.loadEvents);
eventRouter.get('/', event_controller_1.getAllEvents);
eventRouter.get('/:id', event_controller_1.getEventById);
eventRouter.put('/newAttendee/:id', event_controller_1.newAttendee);
exports.default = eventRouter;
//# sourceMappingURL=event.route.js.map