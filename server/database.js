const { MongoClient } = require('mongodb');

const getDatabaseInstance = async () => await MongoClient.connect(process.env.BACKEND_URL);

const getUsers = async () => {
  const db = await getDatabaseInstance();
  const data = await db
    .collection('users')
    .find()
    .project({ username: 1, kebabs: 1, firstCount: 1, userId: 1 })
    .toArray();

  db.close();

  // temp because it's fucking retarded
  const properties = ['kebabs', 'firstCount', 'username'];
  const map = data.reduce((map, e) => {
    map[e.userId] = properties.map((property, i) => {
      if (property === 'username') {
        return e.username;
      }

      return +e[property] + ((map[e.userId] || [])[i] || 0);
    });

    return map;
  }, {});

  const result = Object.keys(map).map(k =>
    map[k].reduce(
      (object, e, i) => {
        object[properties[i]] = e;
        return object;
      },
      { userId: k },
    ),
  );

  return result;
};

module.exports = { getDatabaseInstance, getUsers };
