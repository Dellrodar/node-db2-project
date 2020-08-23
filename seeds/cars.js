
exports.seed = async function(knex) {
  await knex("cars").truncate();

  await knex("cars").insert([
    { make: "Buick", model: "Century", mileage: 250000, vin: "WDBEA66E7PB989596", transmissionType: "Manual" },
    { make: "Dodge", model: "Mainstreet", mileage: 154870, vin: "JM3TB2CV4D0410436", transmissionType: "Automatic" },
    { make: "Pontiac", model: "Grand Am", mileage: 276942, vin: "JTHBA30G545025956", transmissionType: "Manual", titleStatus: "Salvage" },
    { make: "Subaru", model: "Outback", mileage: 87523, vin: "1FVACXDC86HW19114" },
    { make: "Ford", model: "F-150", mileage: 159812, vin: "5NPET4AC4AH524432", transmissionType: "Automatic" },
    { make: "Honda", model: "Accord", mileage: 123456, vin: "JN1AZ4EH9EM648326", titleStatus: "Clean" },
    { make: "Toyota", model: "Highlander", mileage: 198531, vin: "1G1PJ5S91B7118467", transmissionType: "Manual", titleStatus: "Clean" }
  ])
};
