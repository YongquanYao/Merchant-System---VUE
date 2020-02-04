<template>
<a-layout-content>
    <div class="content">
     <a-card title="Information Detail" style="width: 100%">
    
    <a-button type="primary" slot="extra"> <router-link to='/home/company'> View My Company</router-link></a-button>
     <a-table :columns="columns" :dataSource="data" :pagination=false >
    <span slot="customTitle-name"><a-icon type="smile" theme="twoTone" /> Name</span>
      <span slot="customTitle-ssn"><a-icon type="idcard" theme="twoTone" /> SSN</span>
      <span slot="customTitle-score"><a-icon type="heart" theme="twoTone"/> Credit Score</span>
      <span slot="customTitle-birth"><a-icon type="calendar" theme="twoTone"/> Date of Birth</span>
      <span slot="customTitle-email"><a-icon type="mail" theme="twoTone"/> Email</span>
      <span slot="customTitle-phone"><a-icon type="phone" theme="twoTone"/> Phone</span>
      <span slot="customTitle-address"><a-icon type="home" theme="twoTone"/> Address</span>
    <!-- 选择可以改变的col -->
    <template
      v-for="col in ['ssn', 'birth','email','phone','address']"
      :slot="col"
      slot-scope="text, record"
    >
      <div :key="col">
        <a-input
          v-if="record.editable"
          style="margin: -5px 0"
          :value="text"
          @change="e => handleChange(e.target.value, record.key, col)"
        />
        <template v-else
          >{{text}}</template>
      </div>
    </template>
    <template slot="operation" slot-scope="text, record">
      <div class="editable-row-operations">
        <span v-if="record.editable">
          <a @click="() => save(record.key)" style="color:green">Save </a> /
          <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
            <a style="color:red"> Cancel</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a @click="() => edit(record.key)">Edit</a>
        </span>
      </div>
    </template>
  </a-table>
    </a-card>
    
    </div>
</a-layout-content>
</template>

<script>
const columns = [
    {
      dataIndex: 'name',
      key: 'name',
      slots: { title: 'customTitle-name' },
      scopedSlots: { customRender: 'name' },
    },
    {
      dataIndex: 'ssn',
      key: 'ssn',
      slots: { title: 'customTitle-ssn' },
      scopedSlots: { customRender: 'ssn' },
    },
    {
      slots: { title: 'customTitle-score' },
      dataIndex: 'score',
      key: 'score',
    },
    {
      slots: { title: 'customTitle-birth' },
      key: 'Birth',
      dataIndex: 'birth',
      scopedSlots: { customRender: 'birth' },
    },
    {
       slots: { title: 'customTitle-email' },
      dataIndex: 'email',
      scopedSlots: { customRender: 'email' },
    },
    {
      slots: { title: 'customTitle-phone' },
      dataIndex: 'phone',
      scopedSlots: { customRender: 'phone' },
     
    },
    {
      slots: { title: 'customTitle-address' },
      dataIndex: 'address',
      key: 'action',
      scopedSlots: { customRender: 'address' },
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      scopedSlots: { customRender: 'operation' },
    },
  ];

  const data = [
    {
      key: '1',
      name: '',
      ssn: "XX-XX-XXXX",
      score: "888",
      birth: "2020-02-02",
      email: "example@gmail.com",
      phone: "123-456-7890",
      address:'1 1st St, New York, NY 11111',
    },
    //  {
    //   key: '2',
    //   name: 'Raymond Yao1',
    //   ssn: "12-34-5678",
    //   score: "888",
    //   birth: "2020-01-31",
    //   email: "yyao10@nyit.edu",
    //   phone: "917-421-6210",
    //   address:'104 E 25th St, New York, NY 10010',
    // },
    //  {
    //   key: '3',
    //   name: 'Raymond Yao2',
    //   ssn: "12-34-5678",
    //   score: "888",
    //   birth: "2020-01-31",
    //   email: "yyao10@nyit.edu",
    //   phone: "917-421-6210",
    //   address:'104 E 25th St, New York, NY 10010',
    // },
    //  {
    //   key: '4',
    //   name: 'Raymond Yao3',
    //   ssn: "12-34-5678",
    //   score: "888",
    //   birth: "2020-01-31",
    //   email: "yyao10@nyit.edu",
    //   phone: "917-421-6210",
    //   address:'104 E 25th St, New York, NY 10010',
    // },
    //  {
    //   key: '5',
    //   name: 'Raymond Yao4',
    //   ssn: "12-34-5678",
    //   score: "888",
    //   birth: "2020-01-31",
    //   email: "yyao10@nyit.edu",
    //   phone: "917-421-6210",
    //   address:'104 E 25th St, New York, NY 10010',
    // },
    //  {
    //   key: '6',
    //   name: 'Raymond Yao5',
    //   ssn: "12-34-5678",
    //   score: "888",
    //   birth: "2020-01-31",
    //   email: "yyao10@nyit.edu",
    //   phone: "917-421-6210",
    //   address:'104 E 25th St, New York, NY 10010',
    // },
    //  {
    //   key: '7',
    //   name: 'Raymond Yao6',
    //   ssn: "12-34-5678",
    //   score: "888",
    //   birth: "2020-01-31",
    //   email: "yyao10@nyit.edu",
    //   phone: "917-421-6210",
    //   address:'104 E 25th St, New York, NY 10010',
    // },
    //  {
    //   key: '8',
    //   name: 'Raymond Yao7',
    //   ssn: "12-34-5678",
    //   score: "888",
    //   birth: "2020-01-31",
    //   email: "yyao10@nyit.edu",
    //   phone: "917-421-6210",
    //   address:'104 E 25th St, New York, NY 10010',
    // },
    //  {
    //   key: '9',
    //   name: 'Raymond Yao8',
    //   ssn: "12-34-5678",
    //   score: "888",
    //   birth: "2020-01-31",
    //   email: "yyao10@nyit.edu",
    //   phone: "917-421-6210",
    //   address:'104 E 25th St, New York, NY 10010',
    // }
  ];

export default {
  name: 'Content',
  props: {
    msg: String,
  },
 data() {
      this.cacheData = data.map(item => ({ ...item }));
      return {
        data,
        columns,
        visible: false,
        confirmLoading: false,
      };
    },
  created(){
    this.data[0].name = localStorage.getItem("username")
  },
  methods:{
      handleCancel() {
        this.visible = false;
      },
      handleChange(value, key, column) {
        const newData = [...this.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          target[column] = value;
          this.data = newData;
        }
      },
      edit(key) {
        const newData = [...this.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          target.editable = true;
          this.data = newData;
        }
      },
      save(key) {
        const newData = [...this.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          delete target.editable;
          this.data = newData;
          this.cacheData = newData.map(item => ({ ...item }));
          this.$message.success('save successfully');
        }
      },
      cancel(key) {
        const newData = [...this.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
          delete target.editable;
          this.data = newData;
        }
      },
     }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ant-layout-content{
    padding: 0 40px;
    flex: 1;
    background-color: #f0f2f5;
  }
  .content{
    margin-top:40px;
    background-color: #fff;
    box-shadow: 0px 1px 10px 5px rgba(17,17,17,0.1);
  }

  button{
    height: 35px;
  }
</style>
