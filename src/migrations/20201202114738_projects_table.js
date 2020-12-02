

exports.up = function(knex) {
    return knex.schema.createTable('projects', function(t) {
        t.increments('id');
        t.text('title') 

        /*Relacionamento com a tabela Users*/
        t.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE'); //deletar todos os campos caso o usuário não exista

        t.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('projects');
};

