import * as React from 'react'

import { StatefulMenu } from 'baseui/menu'
import { ListItemLabel, MenuAdapter, ARTWORK_SIZES } from 'baseui/list'

import { TASK } from "@/models/helper"

interface TaskTrackingContentProps {
  items: Array<TASK.TaskProps>
}

const TaskTrackingContent = ({items}: TaskTrackingContentProps) => {
  return (
    <StatefulMenu
      items={items}
      onItemSelect={() => console.log('select')}
      overrides={{
        List: {
          style: {
            height: '300px',
            width: '450px'
          }
        },
        Option: {
          props: {
            overrides: {
              ListItem: {
                component: React.forwardRef((props, ref) => (
                  <MenuAdapter
                    {...props}
                    ref={ref}
                    artworkSize={ARTWORK_SIZES.LARGE}
                  >
                    <ListItemLabel description={props.item.subtitle}>
                      {props.item.title}
                    </ListItemLabel>
                  </MenuAdapter>
                ))
              }
            }
          }
        }
      }}
    />
  )
}

export default TaskTrackingContent;