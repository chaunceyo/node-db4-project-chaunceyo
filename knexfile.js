const sharedConfig = {
  client: 'sqlite3',
  migrations: {directory: './data/migrations'},
  //sqlite3
  useNullAsDefault: true,
  seeds: {directory: './data/seeds'},
  pool: {afterCreate: (conn,done) => conn.run('PRAGMA foreign_keys = ON', done)}
}
module.exports = {

  development: {
    ...sharedConfig,
    connection: { filename: './data/cook_book.db3' },
  },
    
   
  }




