import Vue from 'vue'
import App from './App.vue'
import router from './router';
import 'ant-design-vue/dist/antd.css';
import Button from 'ant-design-vue/lib/button';
import Layout from 'ant-design-vue/lib/layout';
import Menu from 'ant-design-vue/lib/menu';
import Avatar from 'ant-design-vue/lib/avatar';
import Table from 'ant-design-vue/lib/table';
import Card from 'ant-design-vue/lib/card';
import Icon from 'ant-design-vue/lib/icon';
import Modal from 'ant-design-vue/lib/modal';
import Form from 'ant-design-vue/lib/form';
import Input from 'ant-design-vue/lib/input';
import Popconfirm from 'ant-design-vue/lib/popconfirm';
import Spin from 'ant-design-vue/lib/spin';
import Message from 'ant-design-vue/lib/message';
import Notification from 'ant-design-vue/lib/notification';
import Empty from 'ant-design-vue/lib/empty';


Vue.use(Spin);
Vue.use(Button);
Vue.use(Layout);
Vue.use(Avatar);
Vue.use(Table);
Vue.use(Card);
Vue.use(Icon);
Vue.use(Modal);
Vue.use(Form);
Vue.use(Input);
Vue.use(Popconfirm);
Vue.use(Message);
Vue.use(Notification);
Vue.use(Menu);
Vue.use(Empty);

Vue.config.productionTip = false
Vue.prototype.$message = Message;
Vue.prototype.$notification = Notification;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
