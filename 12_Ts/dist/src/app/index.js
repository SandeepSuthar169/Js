import express from 'express';
import { register as registerHealthRouter } from './router/health/route.js';
export function createApp() {
    const app = express();
    app.use('/health', registerHealthRouter());
    return app;
}
//# sourceMappingURL=index.js.map