import { body } from 'express-validator';

export const createClientValidator = [
    body('name').isString().withMessage('Name must be a string'),
    body('phoneNumber').isNumeric().withMessage('Phone number must be numeric'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
];

export const updateClientValidator = [
    body('name').optional().isString().withMessage('Name must be a string'),
    body('phoneNumber').optional().isNumeric().withMessage('Phone number must be numeric'),
];
