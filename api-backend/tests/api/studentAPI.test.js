const request = require('supertest');
const app = require('../../server');

describe('API Tests - /api/students', () => {
  it('GET /api/students - should return array of students', async () => {
    const res = await request(app).get('/api/students');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/students - should add new student', async () => {
    const res = await request(app)
      .post('/api/students')
      .send({
        name: 'API Test',
        roll_number: 'ROLL123',
        email: 'api@test.com',
        course: 'Backend'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('message', 'Student added successfully');
  });

  it('POST /api/students - missing fields should return 400', async () => {
    const res = await request(app)
      .post('/api/students')
      .send({ roll_number: 'ROLL123' });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  it('DELETE /api/students/:id - should delete student', async () => {
    // First add a new student
    const addRes = await request(app)
      .post('/api/students')
      .send({
        name: 'Temp',
        roll_number: 'TODELETE',
        email: 'delete@me.com',
        course: 'Trash'
      });

    const id = addRes.body.studentId;
    const delRes = await request(app).delete(`/api/students/${id}`);
    expect(delRes.statusCode).toBe(200);
    expect(delRes.body).toHaveProperty('message', 'Student deleted successfully');
  });
});