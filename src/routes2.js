
import Dashboard from "@material-ui/icons/Dashboard";
import AccessTime from "@material-ui/icons/AccessTime";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Post from "views/Post/Post";
import Schedule from "views/Schedule/Schedule";
import PlayerProfile from "views/PlayerProfile/PlayerProfile";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes2 = [
    // {
    //   path: "/dashboard",
    //   name: "Dashboard",
    //   rtlName: "لوحة القيادة",
    //   icon: Dashboard,
    //   component: DashboardPage,
    //   layout: "/admin"
    // },
     {
      path: "/dashboard",
      name: "Player",
      rtlName: "ملف تعريفي للمستخدم",
      icon: Person,
      component: PlayerProfile,
      layout: "/player"
    },
    {
        path: "/schedule",
        name: "Schedule",
        rtlName: "لوحة القيادة",
        icon: AccessTime,
        component: Schedule,
        layout: "/player"
    },

    // {
    //   path: "/table",
    //   name: "Table List",
    //   rtlName: "قائمة الجدول",
    //   icon: "content_paste",
    //   component: TableList,
    //   layout: "/admin"
    // },
    // {
    //   path: "/typography",
    //   name: "Typography",
    //   rtlName: "طباعة",
    //   icon: LibraryBooks,
    //   component: Typography,
    //   layout: "/admin"
    // },
    // {
    //   path: "/icons",
    //   name: "Icons",
    //   rtlName: "الرموز",
    //   icon: BubbleChart,
    //   component: Icons,
    //   layout: "/admin"
    // },
    // {
    //   path: "/maps",
    //   name: "Maps",
    //   rtlName: "خرائط",
    //   icon: LocationOn,
    //   component: Maps,
    //   layout: "/admin"
    // },
    // {
    //   path: "/notifications",
    //   name: "Notifications",
    //   rtlName: "إخطارات",
    //   icon: Notifications,
    //   component: NotificationsPage,
    //   layout: "/admin"
    // },
    // {
    //   path: "/upgrade-to-pro",
    //   name: "Upgrade To PRO",
    //   rtlName: "التطور للاحترافية",
    //   icon: Unarchive,
    //   component: UpgradeToPro,
    //   layout: "/admin"
    // }
];

export default dashboardRoutes2;
