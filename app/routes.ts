import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
    route("/", "routes/main/main_page.tsx"),
    route("/abstract", "routes/main/abstract.tsx"),
    route("/cubism", "routes/main/cubism.tsx"),
    route("/portrait", "routes/main/portrait.tsx"),
    route("/realism", "routes/main/realism.tsx"),
    route("/surrealism", "routes/main/surrealism.tsx")
] satisfies RouteConfig;
