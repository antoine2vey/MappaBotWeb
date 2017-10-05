const { MongoClient } = require('mongodb');

const getDatabaseInstance = async () => await MongoClient.connect(process.env.BACKEND_URL);

const getUsers = async () => {
  const db = await getDatabaseInstance();
  return await db
    .collection('users')
    .find()
    .sort({ kebabs: -1 })
    .project({ username: 1, kebabs: 1 })
    .toArray();
};

module.exports = { getDatabaseInstance, getUsers };
