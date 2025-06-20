const db = require('../db');

exports.getAllStudents = async (req, res) => {
  const [rows] = await db.query('SELECT * FROM students');
  res.json(rows);
};

exports.addStudent = async (req, res) => {
  const { name, roll_number, email, course } = req.body;
  await db.query('INSERT INTO students (name, roll_number, email, course) VALUES (?, ?, ?, ?)', [name, roll_number, email, course]);
  res.json({ message: 'Student added' });
};

exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, roll_number, email, course } = req.body;
  await db.query('UPDATE students SET name=?, roll_number=?, email=?, course=? WHERE id=?', [name, roll_number, email, course, id]);
  res.json({ message: 'Student updated' });
};

exports.deleteStudent = async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM students WHERE id=?', [id]);
  res.json({ message: 'Student deleted' });
};
