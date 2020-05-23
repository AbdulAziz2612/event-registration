import express from 'express';
import { ConnectDatabase } from './database';
import { EventRegistrationRouter } from './router/event-registration.router';
import { EventRegistrationTypeRouter } from './router/event-registration-type.router';

const port = 3000;

const app = express();

// MongoDb connection
ConnectDatabase();

//CORS
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(express.json());

//Routers
app.use('/eventRegistrations', EventRegistrationRouter);
app.use('/eventRegistrationTypes', EventRegistrationTypeRouter);

app.listen(port, () => console.log(`Server connected on port ${port}`));
