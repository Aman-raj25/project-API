const db = require("../db");

// GET all students
exports.getAllStudents = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM students");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Failed to fetch students" });
  }
};

// POST: Add a new student
exports.addStudent = async (req, res) => {
  try {
    const { name, roll_number, email, course } = req.body;

    if (!name || !roll_number || !email || !course) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const [result] = await db.query(
      "INSERT INTO students (name, roll_number, email, course) VALUES (?, ?, ?, ?)",
      [name, roll_number, email, course]
    );

    res.status(201).json({
      message: "Student added successfully",
      studentId: result.insertId,
    });
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(500).json({ error: "Failed to add student" });
  }
};

// PUT: Update a student
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, roll_number, email, course } = req.body;

    if (!name || !roll_number || !email || !course) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await db.query(
      "UPDATE students SET name=?, roll_number=?, email=?, course=? WHERE id=?",
      [name, roll_number, email, course, id]
    );

    res.status(200).json({ message: "Student updated successfully" });
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({ error: "Failed to update student" });
  }
};

// DELETE: Remove a student
exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query("DELETE FROM students WHERE id=?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Student not found" });
    }

    await db.query("DELETE FROM students WHERE id=?", [id]);
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({ error: "Failed to delete student" });
  }
};
