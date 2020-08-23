
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
    table.increments("id")
    table.text("vin").notNull().unique()
    table.text("make").notNull()
    table.text("model").notNull()
    table.int("mileage").notNull()
    table.text("titleStatus")
    table.text("transmissionType")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};