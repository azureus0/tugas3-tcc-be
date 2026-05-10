// Import Package dan File
const express = require("express");
const sequelize = require("./config/database");
const noteRoutes = require("./routes/noteRoutes");

// Inisialisasi Express dan Cors
const app = express();
const cors = require("cors");

app.use(cors()); // Izinkan semua origin (bisa disesuaikan untuk produksi)

// Izinkan origin frontend lokal yang umum dipakai saat development
// app.use(
//   cors({
//     origin: [
//       "http://localhost",
//       "http://localhost:5173",
//       "http://127.0.0.1:5500",
//     ],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true, // Jika butuh kirim cookie/session
//   }),
// );

// Middleware untuk parsing JSON
app.use(express.json());

// Route dasar untuk testing
app.get("/", (req, res) => {
  res.json({
    message: "Notes API is running",
    endpoints: {
      notes: "/api/v1/notes",
    },
  });
});

// Setting Routes
require("./schema/Note"); // Untuk generate tabel notes
app.use("/api/v1/notes", noteRoutes);

// Sync Database dan Jalankan Server
const port = process.env.PORT || 5000;
sequelize.sync().then(() => {
  console.log("Database synced");
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
