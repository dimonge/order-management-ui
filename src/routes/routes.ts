import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SettingsIcon from '@mui/icons-material/Settings';
import StoreIcon from '@mui/icons-material/Store';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PeopleIcon from '@mui/icons-material/People';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import {
  MdOutlineDashboard as Board,
  MdOutlineMap as Map
} from 'react-icons/md'

export type RoutesType = {
  key: string
  path: string
  icon: Element
  name: string
}

export const APP_BOARD_URL = '/app/home?view=board'
export const APP_MAP_URL = '/app/home?view=map'

export const DELIVERY_ROUTES = [
  {
    label: 'Live',
    icon: Board,
    routes: APP_BOARD_URL
  },

  {
    label: 'Map',
    icon: Map,
    routes: APP_MAP_URL
  }
]

export const sidebarRoutes = [
  {
    key: 'home',
    path: '/app/home',
    icon: DashboardIcon,
    name: 'Dashboard'
  },
  {
    key: 'analytics',
    path: '/app/analytics',
    icon: AnalyticsIcon,
    name: 'Analytics'
  },
  {
    key: 'fleets',
    path: '/app/fleets',
    icon: LocalShippingIcon,
    name: 'Fleets Management'
  },
  {
    key: 'marketplace',
    path: '/app/marketplace',
    icon: StoreIcon,
    name: 'Marketplace'
  }
]

export const footerMenusRoute = [
  {
    key: 'my-account',
    path: '/app/settings',
    icon: SettingsIcon,
    name: 'My Account'
  }
]

export const settingsRoutes = [
  {
    key: 'my-account',
    path: '/app/settings/account',
    icon: AccountBoxIcon,
    name: 'My Account'
  },
  {
    key: 'notifications',
    path: '/app/settings/notifications',
    icon: NotificationsIcon,
    name: 'My notifications'
  },
  {
    key: 'connected-apps',
    path: '/app/settings/integrations',
    icon: AppsIcon,
    name: 'Integrations'
  },
  {
    key: 'plans',
    path: '/app/settings/plans',
    icon: StoreIcon,
    name: 'Pricing plans'
  },
  {
    key: 'billings-invoices',
    path: '/app/settings/billing',
    icon: StoreIcon,
    name: 'Billing & Invoices'
  }
]

export const adminRoutes = [
  {
    key: "admin",
    path: "app/admins",
    icon: AdminPanelSettingsIcon,
    name: "Admin Panel"
  }
]

export const adminPanelRoutes = [
  {
    key: "companies",
    path: "/admins/companies",
    icon: StoreMallDirectoryIcon,
    name: "Companies"
  },
  {
    key: "users",
    path: "/admins/users",
    icon: PeopleIcon,
    name: "Users"
  },
  /*{
    key: "fleets",
    path: "/admins/fleets",
    icon: LocalShippingIcon,
    name: "Fleets"
  },*/
  {
    key: "invoices",
    path: "/admins/invoices",
    icon: ReceiptIcon,
    name: "Invoices"
  },
  {
    key: "billings",
    path: "/admins/billings",
    icon: CollectionsBookmarkIcon,
    name: "Billings"
  },
]


export const experienceSettingsRoute = [
  {
    key: 'Give-feedback',
    path: '/app/settings/feedback',
    icon: StoreIcon,
    name: 'Give feedbacks'
  }
]
