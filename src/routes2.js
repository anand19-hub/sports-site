
import AccessTime from "@material-ui/icons/AccessTime";
import Person from "@material-ui/icons/Person";

import PlayerProfile from "views/PlayerProfile/PlayerProfile";
import PlayerPost from "views/PlayerPost/PlayerPost";


const dashboardRoutes2 = [

     {
      path: "/dashboard",
      name: "Player",
      rtlName: "ملف تعريفي للمستخدم",
      icon: Person,
      component: PlayerProfile,
      layout: "/player"
    },
    {
        path: "/posts",
        name: "Posts",
        rtlName: "لوحة القيادة",
        icon: AccessTime,
        component: PlayerPost,
        layout: "/player"
    },

];

export default dashboardRoutes2;
