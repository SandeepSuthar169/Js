import type  {Request, Response} from "express"


class HealthController {
   public handleHeathChaeck(req: Request, res: Response){
    return res.json({
        status: "healthy"
    })
  }
}

export default HealthController