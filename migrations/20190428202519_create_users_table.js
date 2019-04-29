"use strict";

exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', t => {
        t.increments().primary()
        t.string('initials')
          .notNullable()
          .defaultTo('')
        t.integer('score')
          .notNullable()
          .defaultTo(0)
        t.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
