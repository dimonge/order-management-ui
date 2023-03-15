import * as React from 'react'
import { Button, SHAPE } from 'baseui/button'
import { StatefulPopover, PLACEMENT } from 'baseui/popover'
import { StatefulMenu } from 'baseui/menu'

export default function IconButton({ items, children }: any) {
  return (
    <StatefulPopover
      focusLock
      placement={PLACEMENT.bottomLeft}
      content={({ close }) => (
        <StatefulMenu
          items={items}
          onItemSelect={() => close()}
          overrides={{
            List: {
              style: { height: '200px', width: '200px', alignItems: 'center' }
            },
            ListItem: {
              style: {
                flex: 1,
                height: '80px',
                fontSize: '1.5rem',
                alignItems: 'center',
                justifyContent: 'center'
              }
            }
          }}
        />
      )}
    >
      <Button shape={SHAPE.circle}>{children}</Button>
    </StatefulPopover>
  )
}
