
exports.up = async function(knex) {
  await knex.schema.alterTable("cars", (table) => {
    table.integer("salesID").unsigned()
    table.foreign("salesID").references("sales.id")
  })
};

exports.down = async function(knex) {
  await knex.schema.alterTable("cars", (table) => {
    table.dropColumn("salesID");
  })
};
