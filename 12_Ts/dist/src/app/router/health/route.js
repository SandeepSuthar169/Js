import express from "express";
import HealthController from "./controller";
export function register() {
    const router = express.Router();
    const controller = new HealthController();
    router.get('/', controller.handleHeathChaeck.bind(controller));
    return router;
}
//# sourceMappingURL=route.js.map