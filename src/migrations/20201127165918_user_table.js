
exports.up = function(knex) {
    return knex.schema.createTable('users', function(t) {
        t.increments('id');
        t.text('username').unique().notNullable(); 

        t.timestamp('created_at').defaultTo(knex.fn.now())
        t.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
