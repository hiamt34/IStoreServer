import mongoose from 'mongoose';
import log from '../logger';

const connect = () => {
    const dbUri = process.env.DB_URI as string || 'mongodb+srv://hiamt34:havit123@istoreserver.php3q.mongodb.net/IStoreServer?retryWrites=true&w=majority'
    const options = {
        useNewUrlParser: true,
        // useCreateIndex: true,
        autoIndex: true,
        useUnifiedTopology: true,
        // useFindAndModify: false
    }
    
    return mongoose
        .connect(dbUri, options)
        .then(() => {
            log.info("Database connected");
        })
        .catch((error) => {
            log.error("DB error", error);
            process.exit(1);
        })
}

export default connect;