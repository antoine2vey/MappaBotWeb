const { MongoClient } = require('mongodb');

const getDatabaseInstance = async () => await MongoClient.connect(process.env.BACKEND_URL);

const getUsers = async () => {
  const db = await getDatabaseInstance();
  const data = await db
    .collection('users')
    .find()
    .sort({ kebabs: -1 })
    .project({ username: 1, kebabs: 1, firstCount: 1, userId: 1 })
    .toArray();

  db.close();

  return data;
};

module.exports = { getDatabaseInstance, getUsers };
