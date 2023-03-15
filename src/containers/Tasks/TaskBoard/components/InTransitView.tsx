import { TASK } from "@/models/helper"
import * as React from "react"
import WaitingForPickup from "./WaitingForPickup"

const InTransitView = ({ items }: any) => {
  const waitingForPickupFilter = TASK.waitingForPickupFilter(items)

  const waitingForPickup: any = waitingForPickupFilter.map((item: any) => (
    <WaitingForPickup item={item} onClick={() => console.log(item)} />
  ))
    
  return waitingForPickup;
}

export default InTransitView;