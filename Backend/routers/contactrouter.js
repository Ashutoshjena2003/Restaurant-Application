import express from 'express';
import { sendContactEmail } from '../controler/customercontact.js';

const router = express.Router();

router.post('/contact', sendContactEmail);

export default router;
