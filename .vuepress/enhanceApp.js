/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

 import './styles/index.scss';
 
import {UswdsVue} from '../../uswds-vue/src/main.js';
import VueGtag from "vue-gtag";

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    // ...apply enhancements for the site.
    Vue.use(UswdsVue);
    Vue.use(VueGtag, {
        config: {
            id: "G-NMPBPYDZDV"
        }
    });

}