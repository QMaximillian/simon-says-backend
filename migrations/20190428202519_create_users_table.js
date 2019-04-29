
exports.up = function(knex, Promise) {
    knex.schema.createTable('users', t => {
        t.increments('id').primary()
        t.string('initials')
        t.number('score')
    })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('users')
};
