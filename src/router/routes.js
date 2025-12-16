export const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  // why Texas ?
  {
    path: "/tariff-advantage",
    name: "tariff-advantage",
    component: () => import("../views/TariffAdvantage.vue"),
  },
  {
    path: "/site-location",
    name: "site-location",
    component: () => import("../views/SiteLocation.vue"),
  },
  // process
  {
    path: "/process",
    name: "process",
    component: () => import("../views/Process.vue"),
  },
  // services
  {
    path: "/services-overview",
    name: "services-overview",
    component: () => import("../views/services/Overview.vue"),
  },
  {
    path: "/facility_IBCenter",
    name: "facility-IBCenter",
    component: () => import("../views/services/facilities/IBCenter.vue"),
  },
  {
    path: "/facility_USMCAPark",
    name: "facility-USMCAPark",
    component: () => import("../views/services/facilities/USMCAPark.vue"),
  },
  {
    path: "/facility_Texas69",
    name: "facility-Texas69",
    component: () => import("../views/services/facilities/Texas69.vue"),
  },
  {
    path: "/facility_Lintel",
    name: "facility-Lintel",
    component: () => import("../views/services/facilities/Lintel.vue"),
  },
  // projects
  {
    path: "/projects_X-AI-PC",
    name: "projects-X-AI-PC",
    component: () => import("../views/services/projects/X-AI-PC.vue"),
  },
  {
    path: "/projects_Ionoxy-Air",
    name: "projects-Ionoxy-Air",
    component: () => import("../views/services/projects/Ionoxy-Air.vue"),
  },
  {
    path: "/projects_Home-Lift",
    name: "projects-Home-Lift",
    component: () => import("../views/services/projects/Home-Lift.vue"),
  },
  {
    path: "/projects_RV-Villas",
    name: "projects-RV-Villas",
    component: () => import("../views/services/projects/RV-Villas.vue"),
  },
  {
    path: "/projects_School-Villas",
    name: "projects-School-Villas",
    component: () => import("../views/services/projects/School-Villas.vue"),
  },
  {
    path: "/projects_Finance-Ipo",
    name: "projects-Finance-Ipo",
    component: () => import("../views/services/projects/Finance-Ipo.vue"),
  },
  // pricing
  {
    path: "/pricing",
    name: "pricing",
    component: () => import("../views/Pricing.vue"),
  },
  // team
  {
    path: "/team",
    name: "team",
    component: () => import("../views/Team.vue"),
  },
  // contact
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue"),
  },
];
