import { Router } from "express";
import * as rh from "./requestHandler.js";

const router=Router()
router.router("/adddoner").post(rh.addDoners);
router.router("/getdonor").get(rh.getDonors);

export default router;