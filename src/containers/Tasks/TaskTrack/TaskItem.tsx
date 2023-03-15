import * as React from "react"
import { Accordion, Panel } from "baseui/accordion"
import { FlexGrid, FlexGridItem } from "baseui/flex-grid"

import ItemContainer from "@/containers/Tasks/TaskBoard/components/ItemContainer"
import CourierImage from "./CourierImage"

export type TaskTrackingProps = {
  courier: any;
  
}

const TaskItem = (props: TaskTrackingProps) => {
  return (
    <Accordion onChange={({ expanded }: any) => console.log(expanded)}>
      <Panel
        title={
          <FlexGrid
            display="flex"
            alignItems="center"
            flexGridColumnCount={2}
            flexGridColumnGap="scale800"
            flexGridRowGap="scale800"
          >
            <FlexGridItem>
              <CourierImage imageUrl={props.imageUrl} />
            </FlexGridItem>
            <FlexGridItem>
              <div>2 tasks</div>
            </FlexGridItem>
          </FlexGrid>
        }
      >
        Content
      </Panel>
    </Accordion>
  )
}

export default TaskItem