import { createApp } from 'vue'
//import Vue from "vue";
//import VueRouter from 'vue-router';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import router from './route'

import App from './App.vue'
/*
import CheckList from "./components/CheckList.vue";
import StudentList from "./components/StudentList.vue";

Vue.use(VueRouter);

const routes = [
    {
        name: "CheckList",
        path: "/check_list",
        component: CheckList
    },
    {
        name: "StudentList",
        path: "/student_list",
        component: StudentList
    }
];
*/
createApp(App).use(router).mount('#app')
/*
const router = new VueRouter({ mode: "history", routes: routes });
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router
}).$mount("#app");
*/