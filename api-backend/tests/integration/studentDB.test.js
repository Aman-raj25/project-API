const db = require("../../db");

describe("Integration Test - DB Layer", () => {
  it("should insert a student record into the database", async () => {
    const sql =
      "INSERT INTO students (name, roll_number, email, course) VALUES (?, ?, ?, ?)";
    const values = ["Test User", "99TEST", "test@unit.com", "CSE"];

    const [result] = await db.query(sql, values);
    expect(result.affectedRows).toBe(1);
  });

  it("should retrieve students from the database", async () => {
    const [rows] = await db.query("SELECT * FROM students");
    expect(Array.isArray(rows)).toBe(true);
  });

  it("should delete the test student record", async () => {
    const [result] = await db.query(
      "DELETE FROM students WHERE roll_number = '99TEST'"
    );
    expect(result.affectedRows).toBeGreaterThanOrEqual(1);
  });
});
