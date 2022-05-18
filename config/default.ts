import 'dotenv/config'

export default {
  port: 1337,
  host: "localhost",
  dbUri:
    `mongodb+srv://${process.env.DB_STRING}@cluster0.p2cc4.mongodb.net/?retryWrites=true&w=majority`,
};
