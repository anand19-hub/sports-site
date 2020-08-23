
import Dashboard from "@material-ui/icons/Dashboard";
import AccessTime from "@material-ui/icons/AccessTime";
import Person from "@material-ui/icons/Person";
import Post from "views/Post/Post";
import Schedule from "views/Schedule/Schedule";
import OrganizationProfile from "views/OrganizationProfile/OrganizationProfile";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Organization",
    icon: Person,
    component: OrganizationProfile,
    layout: "/admin"
  },
  {
    path: "/post",
    name: "Post",
    icon: Dashboard,
    component: Post,
    layout: "/admin"
  },
  {
    path: "/schedule",
    name: "Schedule",
    icon: AccessTime,
    component: Schedule,
    layout: "/admin"
  },
];

export default dashboardRoutes;
