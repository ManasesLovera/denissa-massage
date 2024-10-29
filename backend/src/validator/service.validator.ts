import { body } from 'express-validator';

export const createServiceValidator = [
    body('name').isString().withMessage('Name must be a string'),
    body('description').isString().withMessage('Description must be a string'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('duration').isNumeric().withMessage('Duration must be a number'),
];

export const updateServiceValidator = [
    body('name').optional().isString().withMessage('Name must be a string'),
    body('description').optional().isString().withMessage('Description must be a string'),
    body('price').optional().isNumeric().withMessage('Price must be a number'),
    body('duration').optional().isNumeric().withMessage('Duration must be a number'),
];
