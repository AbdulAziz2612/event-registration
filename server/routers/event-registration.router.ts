import express from 'express';
import EventRegistration, { EventRegistrationModel } from '../models/event-registration.model';

export const EventRegistrationRouter = express.Router();

EventRegistrationRouter.get('/', (request, response) => {
    EventRegistration.find({})
        .then(eventRegistrations => response.send(eventRegistrations))
        .catch(error => console.log(error));
});

EventRegistrationRouter.post('/', (request, response) => {
    const requestModel: EventRegistrationModel = request.body;
    (new EventRegistration(requestModel))
        .save()
        .then(eventRegistration => response.send(eventRegistration))
        .catch(error => console.log(error));
});