const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../models/admin");
const { MONGODB_URL } = require("../config/config"); // Make sure it's MONGODB_URI in config

async function createAdmin() {
  try {
    console.log("Connecting to DB...");
    await mongoose.connect(MONGODB_URL);


    const email = "crmadmin@example.com";
    const password = "admin1234";

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      console.log(" Admin already exists");
      return process.exit();
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await Admin.create({ email, password: hashedPassword });

    console.log(" Admin user created successfully");
    process.exit();
  } catch (err) {
    console.error(" Error creating admin:", err.message);
    process.exit(1);
  }
}

createAdmin();
