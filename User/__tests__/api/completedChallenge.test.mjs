// const request = require('supertest');
// const { createServer } = require('http');
// const dbConnect = require('../../lib/mongodb'); // Adjust the path as necessary
// const { POST } = require('../../api/challenges/completed'); // Adjust the import to specifically get the POST handler

// jest.mock('../../lib/mongodb'); // Mock dbConnect
// jest.mock('../../models/Challenge'); // Mock the Challenge model
// jest.mock('../../models/ChallengeCompleted'); // Mock the CompletedChallenge model

// describe('POST /api/challenges/completed', () => {
//     let server;
//     const mockChallenge = {
//         id: '1',
//         title: 'Clean Up the Park',
//         description: 'Help clean up your local park.',
//     };

//     const mockCompletedChallenge = {
//         userId: 'user123',
//         challengeId: '1',
//         status: 'completed',
//         solutionVideo: 'video-url.mp4',
//     };

//     beforeAll(async () => {
//         // Initialize a mock server
//         server = createServer((req, res) => {
//             if (req.url === '/api/challenges/completed' && req.method === 'POST') {
//                 return POST(req, res); // Use the imported POST handler
//             }
//             res.writeHead(404);
//             res.end();
//         });

//         // Mock database connection
//         dbConnect.mockImplementation(() => Promise.resolve());
//     });

//     afterAll(() => {
//         server.close(); // Close the server after tests
//     });

//     it('should return 201 and a success message when challenge is completed successfully', async () => {
//         const Challenge = require('../../../models/Challenge'); // Import mocked model
//         const ChallengeCompleted = require('../../../models/ChallengeCompleted'); // Import mocked model

//         // Mock the findById method to return the mock challenge
//         Challenge.findById.mockResolvedValue(mockChallenge);

//         // Mock the constructor and save method of CompletedChallenge
//         ChallengeCompleted.mockImplementation(() => ({
//             save: jest.fn().mockResolvedValue(mockCompletedChallenge),
//         }));

//         const response = await request(server)
//             .post('/api/challenges/completed')
//             .send({
//                 userId: 'user123',
//                 challengeId: '1',
//                 solutionVideo: 'video-url.mp4',
//             });

//         expect(response.status).toBe(201);
//         expect(response.body.message).toBe('Challenge submitted successfully!');
//     });

//     it('should return 404 if challenge is not found', async () => {
//         const Challenge = require('../../../models/Challenge'); // Import mocked model

//         // Mock the findById method to return null
//         Challenge.findById.mockResolvedValue(null);

//         const response = await request(server)
//             .post('/api/challenges/completed')
//             .send({
//                 userId: 'user123',
//                 challengeId: 'nonexistent-id',
//                 solutionVideo: 'video-url.mp4',
//             });

//         expect(response.status).toBe(404);
//         expect(response.body.message).toBe('Challenge not found.');
//     });

//     it('should return 500 on error saving completed challenge', async () => {
//         const Challenge = require('../../../models/Challenge'); // Import mocked model
//         const ChallengeCompleted = require('../../../models/ChallengeCompleted'); // Import mocked model

//         // Mock the findById method to return the mock challenge
//         Challenge.findById.mockResolvedValue(mockChallenge);

//         // Mock the constructor and reject the save method
//         ChallengeCompleted.mockImplementation(() => ({
//             save: jest.fn().mockRejectedValue(new Error('Database Error')),
//         }));

//         const response = await request(server)
//             .post('/api/challenges/completed')
//             .send({
//                 userId: 'user123',
//                 challengeId: '1',
//                 solutionVideo: 'video-url.mp4',
//             });

//         expect(response.status).toBe(500);
//         expect(response.body.message).toBe('Error saving completed challenge.');
//     });
// });


import request from 'supertest';
import { createServer } from 'http';
import dbConnect from '../../lib/mongodb'; // Adjust the path as necessary
import { POST } from '../../../pages/api/challenges/completed'; // Adjust the path to your API handler

jest.mock('../../lib/mongodb'); // Mock dbConnect
jest.mock('../../models/Challenge'); // Mock the Challenge model
jest.mock('../../models/ChallengeCompleted'); // Mock the CompletedChallenge model

describe('POST /api/challenges/completed', () => {
    let server;
    const mockChallenge = {
        id: '1',
        title: 'Clean Up the Park',
        description: 'Help clean up your local park.',
    };

    const mockCompletedChallenge = {
        userId: 'user123',
        challengeId: '1',
        status: 'completed',
        solutionVideo: 'video-url.mp4',
    };

    beforeAll(async () => {
        // Initialize a mock server
        server = createServer((req, res) => {
            if (req.url === '/api/challenges/completed' && req.method === 'POST') {
                return POST(req, res); // Use the imported POST handler
            }
            res.writeHead(404);
            res.end();
        });

        // Mock database connection
        dbConnect.mockImplementation(() => Promise.resolve());
    });

    afterAll(() => {
        server.close(); // Close the server after tests
    });

    it('should return 201 and a success message when challenge is completed successfully', async () => {
        const Challenge = require('../../../models/Challenge'); // Import mocked model
        const ChallengeCompleted = require('../../../models/ChallengeCompleted'); // Import mocked model

        // Mock the findById method to return the mock challenge
        Challenge.findById.mockResolvedValue(mockChallenge);

        // Mock the constructor and save method of CompletedChallenge
        ChallengeCompleted.mockImplementation(() => ({
            save: jest.fn().mockResolvedValue(mockCompletedChallenge),
        }));

        const response = await request(server)
            .post('/api/challenges/completed')
            .send({
                userId: 'user123',
                challengeId: '1',
                solutionVideo: 'video-url.mp4',
            });

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Challenge submitted successfully!');
    });

    it('should return 404 if challenge is not found', async () => {
        const Challenge = require('../../../models/Challenge'); // Import mocked model

        // Mock the findById method to return null
        Challenge.findById.mockResolvedValue(null);

        const response = await request(server)
            .post('/api/challenges/completed')
            .send({
                userId: 'user123',
                challengeId: 'nonexistent-id',
                solutionVideo: 'video-url.mp4',
            });

        expect(response.status).toBe(404);
        expect(response.body.message).toBe('Challenge not found.');
    });

    it('should return 500 on error saving completed challenge', async () => {
        const Challenge = require('../../../models/Challenge'); // Import mocked model
        const ChallengeCompleted = require('../../../models/ChallengeCompleted'); // Import mocked model

        // Mock the findById method to return the mock challenge
        Challenge.findById.mockResolvedValue(mockChallenge);

        // Mock the constructor and reject the save method
        ChallengeCompleted.mockImplementation(() => ({
            save: jest.fn().mockRejectedValue(new Error('Database Error')),
        }));

        const response = await request(server)
            .post('/api/challenges/completed')
            .send({
                userId: 'user123',
                challengeId: '1',
                solutionVideo: 'video-url.mp4',
            });

        expect(response.status).toBe(500);
        expect(response.body.message).toBe('Error saving completed challenge.');
    });
});
