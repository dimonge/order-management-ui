import React, { useState, useEffect, useRef } from 'react'
import { Avatar } from 'baseui/avatar'
import {
  MdOutlineDashboard as Board,
  MdOutlineMap as Map
} from 'react-icons/md'

import { Navigation } from 'baseui/side-navigation'
import { Button, SHAPE, SIZE as BSIZE } from 'baseui/button'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE
} from 'baseui/modal'
import { KIND as ButtonKind } from 'baseui/button'

import PlusIcon from 'baseui/icon/plus'

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = window.location
  const { pathname } = location

  const trigger = useRef(null)
  const sidebar = useRef(null)

  const [activeItemId, setActiveItemId] = useState('/app/home')
  const [openTaskDialog, setOpenTaskDialog] = useState(false)
  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  )

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return
      setSidebarOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded)
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded')
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded')
    }
  }, [sidebarExpanded])

  const onCreateTask = () => {
    setOpenTaskDialog(true)
  }
  const DELIVERY_ROUTES = [
    {
      title: (
        <Button
          size={BSIZE.compact}
          shape={SHAPE.circle}
          onClick={onCreateTask}
        >
          <PlusIcon />
        </Button>
      )
    },
    {
      title: <Board size={20} />,
      itemId: '/app/home'
    },

    {
      title: <Map size={20} />,
      itemId: '/app/home/map'
    }
  ]

  const HEADER_ROUTE = [
    {
      title: <Avatar name="Modeliver" />,
      itemId: '#'
    }
  ]

  const FOOTER_ROUTE = [
    {
      title: <Avatar name="Peter Shodeinde" />,
      itemId: '/profile/settings'
    }
  ]

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0px 0px 3px lightgrey'
      }}
    >
      <Navigation
        items={HEADER_ROUTE}
        activeItemId={activeItemId}
        overrides={{
          Root: {
            style: {
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column'
            }
          }
        }}
        onChange={({ item }) => {
          setActiveItemId(item.itemId)
        }}
      />
      <Navigation
        items={DELIVERY_ROUTES}
        activeItemId={activeItemId}
        overrides={{
          Root: {
            style: {
              display: 'flex',
              flexDirection: 'column'
            }
          }
        }}
        onChange={({ item }) => {
          setActiveItemId(item.itemId)
        }}
      />
      <Navigation
        items={FOOTER_ROUTE}
        activeItemId={activeItemId}
        overrides={{
          Root: {
            style: {
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column'
            }
          }
        }}
        onChange={({ item }) => {
          setActiveItemId(item.itemId)
        }}
      />
      {openTaskDialog && (
        <>
          <Modal
            onClose={() => setOpenTaskDialog(false)}
            closeable
            isOpen={true}
            animate
            autoFocus
            size={SIZE.default}
            role={ROLE.dialog}
          >
            <ModalHeader>Create new task</ModalHeader>
            <ModalBody>
              Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
              ornare faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut
              tempus.
            </ModalBody>
            <ModalFooter>
              <ModalButton
                kind={ButtonKind.tertiary}
                onClick={() => setOpenTaskDialog(false)}
              >
                Cancel
              </ModalButton>
              <ModalButton onClick={() => setOpenTaskDialog(false)}>
                Create Task
              </ModalButton>
            </ModalFooter>
          </Modal>
        </>
      )}
    </div>
  )
}

export default Sidebar
