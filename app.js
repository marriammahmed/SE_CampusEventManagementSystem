const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();

const port = 5003;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password", // Replace with your DB password
  database: "eventsdb"
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database");
});

// Admin route: Approve or disapprove events
app.post("/approve_event", (req, res) => {
  const { eventId, status } = req.body;

  const query = `UPDATE events SET status = ? WHERE event_id = ?`;
  db.query(query, [status, eventId], (err, result) => {
    if (err) {
      console.error("Error approving event:", err);
      return res.status(500).send("Failed to update event");
    }
    res.send("Event updated successfully");
  });
});

// User route: Create a new event (submitted for approval)
app.post("/create_event", (req, res) => {
  const { name, date, location } = req.body;
  const status = "pending"; // Initial status when created by the user

  const query = `INSERT INTO events (name, date, location, status) VALUES (?, ?, ?, ?)`;
  db.query(query, [name, date, location, status], (err, result) => {
    if (err) {
      console.error("Error creating event:", err);
      return res.status(500).send("Failed to create event");
    }
    res.send("Event submitted for approval");
  });
});

// Admin route: Fetch all events with status "pending"
app.get("/pending_events", (req, res) => {
  const query = "SELECT * FROM events WHERE status = 'pending'";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching pending events:", err);
      return res.status(500).send("Failed to fetch pending events");
    }
    res.json({ events: result });
  });
});

// User route: Fetch all approved events
app.get("/available_events", (req, res) => {
  const query = "SELECT * FROM events WHERE status = 'approved'";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching approved events:", err);
      return res.status(500).send("Failed to fetch approved events");
    }
    res.json({ events: result });
  });
});

// Route to register for an event (user needs to be logged in)
app.post("/register_for_event", (req, res) => {
  const { eventId, userId } = req.body;

  const query = "INSERT INTO registrations (event_id, user_id) VALUES (?, ?)";
  db.query(query, [eventId, userId], (err, result) => {
    if (err) {
      console.error("Error registering for event:", err);
      return res.status(500).send("Failed to register for event");
    }
    res.send("Successfully registered for event");
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
