const express = require("express");
const { PORT } = require("./config/config");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");  // Import contact routes
const adminRoutes = require("./routes/adminRoutes");
const cors = require('cors');


const app = express();


app.use(cors());
// Middleware to parse JSON body
app.use(express.json());


connectDB();


// Use contact routes with prefix /api/contacts
app.use("/api/contacts", contactRoutes);

//admin routes;
app.use('/api/admin', adminRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://192.168.1.142:${PORT}`);
});

