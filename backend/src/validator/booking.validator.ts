import { body } from 'express-validator';

export const createBookingValidator = [
    body('clientId').isMongoId().withMessage('Client ID must be a valid MongoDB ID'),
    body('serviceId').isMongoId().withMessage('Service ID must be a valid MongoDB ID'),
    body('date').isISO8601().withMessage('Date must be in ISO 8601 format'),
    body('time').isString().withMessage('Time must be a string'),
    body('adminNotes').optional().isString().withMessage('Admin notes must be a string'),
    body('clientNotes').optional().isString().withMessage('Client notes must be a string'),
];

export const updateBookingValidator = [
    body('status')
        .optional()
        .isIn(['Pending', 'Confirmed', 'Cancelled'])
        .withMessage('Status must be either Pending, Confirmed, or Cancelled'),
    body('adminNotes').optional().isString().withMessage('Admin notes must be a string'),
    body('clientNotes').optional().isString().withMessage('Client notes must be a string'),
];
