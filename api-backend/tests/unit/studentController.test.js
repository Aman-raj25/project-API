const { addStudent, updateStudent, deleteStudent } = require('../../controllers/studentController');

describe('Unit Test - addStudent', () => {
  it('should return 400 if name is missing', async () => {
    const req = { body: { roll_number: 'R1', email: 'x@y.com', course: 'CSE' } };
    const res = mockResponse();

    await addStudent(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'All fields are required' });
  });

  it('should return 400 if roll_number is missing', async () => {
    const req = { body: { name: 'Test', email: 'x@y.com', course: 'CSE' } };
    const res = mockResponse();

    await addStudent(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'All fields are required' });
  });
});

describe('Unit Test - updateStudent', () => {
  it('should return 400 if any field is missing', async () => {
    const req = { params: { id: 1 }, body: { name: '', roll_number: '', email: '', course: '' } };
    const res = mockResponse();

    await updateStudent(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'All fields are required' });
  });
});

describe('Unit Test - deleteStudent', () => {
  it('should return 404 if student not found', async () => {
    const req = { params: { id: -1 } }; // assuming -1 is invalid
    const res = mockResponse();

    await deleteStudent(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Student not found' });
  });
});

function mockResponse() {
  return {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  };
}
