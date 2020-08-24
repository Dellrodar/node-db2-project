
exports.up = async function(knex) {
  await knex.schema.createTable("sales", (table) => {
    table.increments("id")
    table.float("amount")
    table.text("buyer")
    table.boolean("sold").defaultTo(false).notNull()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("sales")
};
