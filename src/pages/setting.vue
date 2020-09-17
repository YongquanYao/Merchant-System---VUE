<template>
    <div>
        <div class='panelContainer'>
                    <a-card hoverable title="SETTING PANEL" class="panel">
                        <img
                        class="panelImg"
                        slot="cover"
                        alt="test"
                        src="../../public/img/avatar.jpg" 
                        />
                        <template slot="actions" class="ant-card-actions">
                        <router-link to="/home">
                            <a-icon key="heart" type="heart"/>
                        </router-link>
                        <a-icon key="email" type="mail" />
                        <a-icon key="ellipsis" type="ellipsis" />
                        </template>
                        <a-card-meta>
                            <template slot="title">
                                <span>Hi, {{username}} !</span> 
                            </template>
                            <template slot="description">
                                <span style="font-size: 13px">My Dashboard</span> 
                            </template>
                        <a-avatar
                            slot="avatar"
                            style="background-color: #fff; font-size: 17px"
                        >
                         👊
                        </a-avatar>
                        </a-card-meta>
                        <a-divider dashed/>
                        <div>
                            <a-button type="link" @click="handleBasic">
                             Basic Information Setting
                            </a-button>
                        </div>
                        <div>
                            <a-button type="link" @click="handlePassword">
                             Security Information Setting
                            </a-button>
                        </div>
                        <div>
                            <a-button type="link" @click="handleHelp">
                             Need help？
                            </a-button>
                        </div>
                    </a-card>
        </div>   
            <!-- <div>
                <a-card class="calendar"> 
                    <a-calendar 
                        :fullscreen="false" 
                        @panelChange="onPanelChange" 
                    />
                </a-card>
            </div> -->
        <!-- transition表示加动画 然后name代表class 在css里再添加animation -->
         <transition name="slide-fade">
            <div class="card-password" v-show="cardPasswordShow">
                 <a-card>
                     <template slot="title">
                        <span>Change Password</span>
                        <span class="cardCLose" @click="paswordCardClose"><a-icon size="small" type="close"/></span>
                     </template>
                    <a-form layout='vertical' :form="form">
                         <a-form-item label= 'Current Password'>  
                            <a-input-password type ='password' placeholder = 'Old Password'
                                 v-decorator="['password1',{rules: [{ required: true, message: 'Please input the old password' }],
                                 }]">
                            <a-icon slot='prefix' type="lock" style="color:rgba(0,0,0,.25)"/>
                            </a-input-password>
                        </a-form-item>
                        <a-form-item label= 'New Password'>  
                            <a-input-password type = 'password' placeholder = 'New Password'
                                 v-decorator="['password2',{rules: [{ required: true, message: 'Please input the new password' }],
                                 }]">
                            <a-icon slot='prefix' type="lock" style="color:rgba(0,0,0,.25)"/>
                            </a-input-password>
                        </a-form-item>
                        <a-form-item label= 'Current Password'>  
                            <a-input-password type = 'password' placeholder = 'Confirm Password'
                                 v-decorator="['password3',{rules: [{ required: true, message: 'Please confirm the password' }],
                                 }]">
                            <a-icon slot='prefix' type="lock" style="color:rgba(0,0,0,.25)"/>
                            </a-input-password>
                        </a-form-item>
                        <a-form-item>
                            <a-button type="primary" @click="changePassword">
                                Submit
                            </a-button>
                        </a-form-item>
                    </a-form>
                 </a-card>
            </div>
        </transition>   

        <transition name="slide-fade">
            <div class="card-detail" v-show="cardtBasicShow"> 
                 <a-card>
                      <template slot="title">
                        <span>Basic information</span>
                        <!-- <span class="cardCLose" @click="basicCardClose"><a-icon size="small" type="close"/></span> -->
                     </template>
                    <a-descriptions>
                        <template slot="title">
                            <span>User Info</span><a-icon class="infoEdit" @click="clickEdit" key="edit" type="edit" />
                        </template>
                        <a-descriptions-item label="UserName">
                        {{username}}
                        </a-descriptions-item>
                        <a-descriptions-item label="Telephone">
                        100000086
                        </a-descriptions-item>
                        <a-descriptions-item label="Live">
                        NewYork, NY
                        </a-descriptions-item>
                        <a-descriptions-item label="Remark">
                        Full Stack
                        </a-descriptions-item>
                        <a-descriptions-item label="Address">
                        No. 18, Columbus,  Long Island City,  NewYork,  USA
                        </a-descriptions-item>
                    </a-descriptions>
                 </a-card>
            </div>
        </transition>

         <transition name="slide-fade">
            <div class="card-security" v-show="cardtBasicShow"> 
                 <a-card>
                      <template slot="title">
                        <span>Secutity Information</span>
                        <!-- <span class="cardCLose" @click="basicCardClose"><a-icon size="small" type="close"/></span> -->
                     </template>
                    <a-list item-layout="horizontal" :data-source="SecurityTitle" style="height: 211px">
                        <a-list-item slot="renderItem" slot-scope="item">
                            <a-list-item-meta :description="item.des">
                                <span slot="title" >{{ item.title }}</span>
                            </a-list-item-meta>
                            <!-- <a-button type="link">Modify</a-button> -->
                        </a-list-item>
                        <!-- <a-list-item  slot="renderItem" >
                            Account Password
                            <div>Current password strength：Strong</div>
                         </a-list-item>
                         <a-list-item  slot="renderItem" >
                            Security Question
                            <div>The security question is not set, and the security policy can effectively protect the account security</div>
                         </a-list-item> -->
                    </a-list>
                         <!-- <a-list-item  slot="renderItem" >
                            Account Password
                            <div>Current password strength：Strong</div>
                         </a-list-item>
                         <a-list-item  slot="renderItem" >
                            Security Phone
                            <div>Bound phone：138****8293</div>
                         </a-list-item>
                         <a-list-item  slot="renderItem" >
                            Security Question
                            <div>The security question is not set, and the security policy can effectively protect the account security</div>
                         </a-list-item>
                         <a-list-item  slot="renderItem" >
                             Backup Email
                             Bound Email：
                         </a-list-item> -->
                 </a-card>
            </div>
        </transition>


        <a-modal 
            :visible="editInfo_Mode" 
            title="Edit" 
            @ok="handleOk"
            width="550px"
            @cancel="handleBasicCancel"
            >
            <template slot="footer">
                <a-button key="back" @click="handleBasicCancel">
                Cancel
                </a-button>
                <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
                Submit
                </a-button>
            </template>
             <a-form 
                layout='vertical' 
                :form="form" 
                :label-col="labelCol" 
                :wrapper-col="wrapperCol"
                style="padding: 20px"
                v-model="temp"
            >
                        <a-form-item label= 'User name: ' label-width="60">  
                            <a-input type ='text'
                                 v-decorator="['username',{rules: [{ required: true, message: 'Please input user name' }],
                                 }]">
                            <a-icon slot='prefix' type="user" style="color:rgba(0,0,0,.25)"/>
                            </a-input>
                        </a-form-item>
                        <a-form-item label= 'Email: '>  
                            <a-input type = 'email' 
                                 v-decorator="['email',{rules: [{ required: true, message: 'Please input telephone' }],
                                 }]">
                            <a-icon slot='prefix' type="mail" style="color:rgba(0,0,0,.25)"/>
                            </a-input>
                        </a-form-item>
                        <a-form-item label= 'Phone: '>  
                            <a-input type = 'text' 
                                 v-decorator="['phone',{rules: [{ required: true, message: 'Please input telephone' }],
                                 }]">
                            <a-icon slot='prefix' type="phone" style="color:rgba(0,0,0,.25)"/>
                            </a-input>
                        </a-form-item>
                        <a-form-item label= 'City: '>  
                            <a-select 
                                 v-decorator="['city',{rules: [{ required: true, message: 'Please select city' }],
                                 }]"
                                 placeholder="please select your city"
                            >
                            <a-icon slot='prefix' type="environment" style="color:rgba(0,0,0,.25)"/>
                            <a-option>
                                Guangzhou
                            </a-option>
                            </a-select>
                        </a-form-item>
                        <a-form-item label= 'Address: '>  
                            <a-input type = 'textarea' 
                                 v-decorator="['address']">
                            <a-icon slot='prefix'  style="color:rgba(0,0,0,.25)"/>
                            </a-input>
                        </a-form-item>
            </a-form>
        </a-modal> 
    </div>
</template>

<script>
    export default {
        data(){
            return {
                cardPasswordShow : false,
                cardtBasicShow : true,
                username: localStorage.getItem('username'),
                editInfo_Mode: false,
                labelCol: {
                xs: { span: 24,offset: 15 },
                sm: { span: 7, offset: 15 },
                },
                wrapperCol: {
                    xs: { span: 24},
                    sm: { span: 16},
                },
                SecurityTitle: [
                        {
                            title: 'Account Password',
                            des:'Current password strength：Strong'
                        },
                        {
                            title: 'Security Question',
                            des: 'The security question is not set, and the security policy can effectively protect the account security'
                        },
                        {
                            title: 'Binding Account',
                            des: 'You have binded with Github'
                        },
                ]
            }   
        },
         beforeCreate() {
           this.form = this.$form.createForm(this, { name: 'changepassword' });
        },
        created(){
                
        },
        methods:{
            handlePassword(){
                this.cardtBasicShow = false 
                 setTimeout(() => {
                    if(this.cardPasswordShow){
                        this.cardPasswordShow = false
                    }
                    else{
                        this.cardPasswordShow = true
                    }
                 }, 1000)
            },
            handleBasic(){
                //其他卡片需要关闭状态
                this.cardPasswordShow = false
                setTimeout(() => {
                    this.cardtBasicShow = !this.cardtBasicShow 
                }, 1000)
            },
            changePassword(){
                this.form
            },
            paswordCardClose(){
                this.cardPasswordShow = false
            },
            basicCardClose(){
                this.cardtBasicShow = false
            },
            clickEdit(){
                this.editInfo_Mode = true
            },
            handleBasicCancel(){
                this.editInfo_Mode = false
            },
            handleHelp(){
                this.$message.warning('请联系rrraymond810@gmail.com !! 或者Github项目里提交issue反应~ 谢谢支持!', 5);
            }
        }
    }
</script>

<style scoped>
  .panelContainer{
    margin-top:40px;
    background-color: #f0f2f5;
    box-shadow: 0px 1px 10px 5px rgba(17,17,17,0.1);
    float: left;
    /* width: 20%;
    height: 600px; */
  }
  .panelContainer .panel{
      width: 300px;
      height: 490px;
      cursor: default;
  }
  .card-password{
    margin-top:40px;
    background-color: #f0f2f5;
    width:40%;
    box-shadow: 0px 1px 10px 5px rgba(17,17,17,0.1);
    float: right;
  }
  .card-detail{
    margin-top:40px;
    background-color: #f0f2f5;
    box-shadow: 0px 1px 10px 5px rgba(17,17,17,0.1);
    float: right;
    width:65%;
  }
  .card-security{
    margin-top:25px;
    background-color: #f0f2f5;
    box-shadow: 0px 1px 10px 5px rgba(17,17,17,0.1);
    float: right;
    width:65%;
  }
  .slide-fade-enter-active {
  transition: all 0.2s ease;
  }
  .slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.calendar{
    margin-top:10px;
    width: 320px;
    height: 350px;
    float: right;
}
.cardCLose{
    cursor: pointer;
    float: right;
    font-size: 12px;
}
.cardCLose:hover,
.cardCLose:active{
    color: #1890ff;
}
.infoEdit{
    margin-left: 10px;
    color: #1890ff;
    cursor: pointer;
}
.panelImg{
    padding-top: 4px;
    width: 155px; 
    height:155px; 
    margin: 0 auto;
    border-radius: 50%;
}
</style>