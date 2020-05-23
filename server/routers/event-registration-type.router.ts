import express from 'express';
import EventRegistrationType, { EventRegistrationTypeModel } from '../models/event-registration-type.model';

export const EventRegistrationTypeRouter = express.Router();

EventRegistrationTypeRouter.get('/', (request, response) => {
    EventRegistrationType.find({})
        .then(eventRegistrationTypes => response.send(eventRegistrationTypes))
        .catch(error => console.log(error));
});

EventRegistrationTypeRouter.post('/', (request, response) => {
    const requestModel: EventRegistrationTypeModel = request.body;
    (new EventRegistrationType(requestModel))
        .save()
        .then(eventRegistrationType => response.send(eventRegistrationType))
        .catch(error => console.log(error));
});
