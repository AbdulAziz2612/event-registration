import mongoose from 'mongoose';

export const ConnectDatabase = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://127.0.0.1:27017/eventmanagement', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        .then(() => console.log('Database connected'))
        .catch((error) => console.log(error));
};
