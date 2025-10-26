import express from 'express'
import type { Application } from 'express'
import { register as registerHealthRouter } from './router/health/route';


export function createApp(): Application{
    const app: Application = express();

    app.use('/health', registerHealthRouter())
    return app;
}

