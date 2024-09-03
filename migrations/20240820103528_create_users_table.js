/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * 
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id'); // Primary key
    table.string('queue_number').notNullable().defaultTo(' '); // Default Queue Number
    table.string('uniqueId').notNullable().unique().defaultTo(' ');; // Unique ID (Generated by the application, no default)
    table.string('email').notNullable().defaultTo('user@email.com'); // Email (No default)
    table.string('phone').notNullable().defaultTo('  '); // Default Phone Number
    table.string('qr_code').notNullable().defaultTo(' '); // Default Address
    table.string('city').notNullable().defaultTo(' '); // Default City
    table.date('date').notNullable().defaultTo(knex.fn.now()); // Default to current date
    table.string('code').notNullable().defaultTo(' '); // Default Code
    table.string('service_category').notNullable().defaultTo(' '); // Default Service Category
    table.string('service').notNullable().defaultTo(' '); // Default Service
    table.string('counter').notNullable().defaultTo(' '); // Default Counter
    table.string('staff').notNullable().defaultTo(' '); // Default Staff
    table.string('customer_name').notNullable().defaultTo(' '); // Default Customer Name
    table.string('product').notNullable().defaultTo('   '); // Default Product
    table.string('type').notNullable().defaultTo(' '); // Default Type
    table.string('storage').notNullable().defaultTo('   '); // Default Storage
    table.string('color').notNullable().defaultTo('   '); // Default Color
    table.string('invoice').notNullable().defaultTo(' '); // Default Invoice Number
    table.string('qr_code_file_path').notNullable().defaultTo(' '); // Default QR Code File Path
    table.enum('status', ['invited', 'queued', 'served']).defaultTo('invited'); // Default Status
    table.timestamp('start_serving').nullable(); // Start Serving
    table.timestamp('end_serving').nullable(); // End Serving
    table.timestamps(true, true); // Created at and updated at timestamps
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};


