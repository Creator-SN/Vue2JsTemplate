import Vue from "vue";
import VueRouter from "vue-router";

const routePush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routePush.call(this, location).catch(error => error)
}

Vue.use(VueRouter);

const routes = [
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
