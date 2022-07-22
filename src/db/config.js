const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

module.exports = () =>
  open({
    filename: '/src/db/otakuask.sqlite',
    driver: sqlite3.Database
  })
