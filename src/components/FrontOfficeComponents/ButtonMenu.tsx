import * as React from 'react'
import { StatefulPopover, PLACEMENT } from 'baseui/popover'
import { StatefulMenu } from 'baseui/menu'

const ButtonMenu = ({ items, onItemSelect, children }: any) => {
  return (
    <StatefulPopover
      focusLock
      placement={PLACEMENT.bottomLeft}
      content={({ close }) => (
        <StatefulMenu
          items={items}
          onItemSelect={onItemSelect}
          overrides={{
            List: { style: { height: '150px', width: '138px' } }
          }}
        />
      )}
    >
      {children}
    </StatefulPopover>
  )
}

export default ButtonMenu
