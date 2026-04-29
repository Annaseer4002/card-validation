import request from 'supertest';
import { describe, it, expect } from 'vitest';
import app from '../src/index';

describe('POST /api/validate-card', () => {
  
  // CASE 1: Valid Luhn Number
  it('should return isValid: true for a correct Luhn number', async () => {
    const response = await request(app)
      .post('/api/validate-card')
      .send({ cardNumber: '4532015112830366' });

    expect(response.status).toBe(200);
    expect(response.body.data.isValid).toBe(true);
  });

  // CASE 2: Invalid Checksum (Math fails, format is okay)
  it('should return isValid: false for a mathematically incorrect number', async () => {
    const response = await request(app)
      .post('/api/validate-card')
      .send({ cardNumber: '4532015112830367' }); // Changed last digit

    // This should be 200 because the request reached the logic safely
    expect(response.status).toBe(200);
    expect(response.body.data.isValid).toBe(false);
  });

  // CASE 3: Sanitization (Dashes and Spaces)
  it('should handle card numbers with dashes and spaces gracefully', async () => {
    const response = await request(app)
      .post('/api/validate-card')
      .send({ cardNumber: '4532-0151-1283-0366' });

    expect(response.status).toBe(200);
    expect(response.body.data.isValid).toBe(true);
  });

  // CASE 4: Middleware Rejection (Format Violation)
  it('should return 400 Bad Request if card contains letters', async () => {
    const response = await request(app)
      .post('/api/validate-card')
      .send({ cardNumber: '4532-ABCD-1234' });

    // Class Validator catches this before the controller
    expect(response.status).toBe(400);
    // Adjust this match based on your actual middleware error structure
    expect(response.body.errors).toBeDefined(); 
  });

  // CASE 5: Missing Input
  it('should return 400 if cardNumber field is missing', async () => {
    const response = await request(app)
      .post('/api/validate-card')
      .send({});

    expect(response.status).toBe(400);
  });
});