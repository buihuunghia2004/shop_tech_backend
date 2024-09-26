// In this file you can configure migrate-mongo
const { db: {url, name} } = require('./src/configs/environment')

const config = {
  mongodb: {
    url: url,
    databaseName: name,
  },

  migrationsDir: "migrations",

  changelogCollectionName: "changelog",

  migrationFileExtension: ".js",

  useFileHash: false,

  moduleSystem: 'commonjs',
};

module.exports = config;
