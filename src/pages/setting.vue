<template>
    <div>
        <div class='panelContainer'>
                    <a-card hoverable title="SETTING PANEL" class="panel">
                        <img
                        style="padding-top: 2px"
                        slot="cover"
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                        <template slot="actions" class="ant-card-actions">
                        <a-icon key="setting" type="home" />
                        <a-icon key="edit" type="edit" />
                        <a-icon key="ellipsis" type="ellipsis" />
                        </template>
                        <a-card-meta>
                            <template slot="title">
                                <span>Hi, {{username}} !</span> 
                            </template>
                            <template slot="description">
                                <span style="font-size: 13px">个人中心</span> 
                            </template>
                        <a-avatar
                            slot="avatar"
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        />
                        </a-card-meta>
                        <a-divider dashed/>
                        <div>
                            <a-button type="link" @click="handleBasic">
                            Account Basic Setting
                            </a-button>
                        </div>
                        <div>
                            <a-button type="link" @click="handlePassword">
                            Private Security Setting
                            </a-button>
                        </div>
                        <div>
                            <a-button type="link" @click="handlePassword">
                            Help?
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
                        <a-form-item label= 'Change Password'>  
                            <a-input-password type ='password' placeholder = 'Old Password'
                                 v-decorator="['password1',{rules: [{ required: true, message: 'Please input the old password' }],
                                 }]">
                            <a-icon slot='prefix' type="lock" style="color:rgba(0,0,0,.25)"/>
                            </a-input-password>
                        </a-form-item>
                        <a-form-item>  
                            <a-input-password type = 'password' placeholder = 'New Password'
                                 v-decorator="['password2',{rules: [{ validator: this.validatePwd}],
                                 }]">
                            <a-icon slot='prefix' type="lock" style="color:rgba(0,0,0,.25)"/>
                            </a-input-password>
                        </a-form-item>
                        <a-form-item>  
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
                        <span class="cardCLose" @click="basicCardClose"><a-icon size="small" type="close"/></span>
                     </template>
                    <a-descriptions>
                        <template slot="title">
                            <span>User Info</span><a-icon class="infoEdit" @click="clickEdit" key="edit" type="edit" />
                        </template>
                        <a-descriptions-item label="UserName">
                        {{username}}
                        </a-descriptions-item>
                        <a-descriptions-item label="Telephone">
                        1810000000
                        </a-descriptions-item>
                        <a-descriptions-item label="Live">
                        Hangzhou, Zhejiang
                        </a-descriptions-item>
                        <a-descriptions-item label="Remark">
                        empty
                        </a-descriptions-item>
                        <a-descriptions-item label="Address">
                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                        </a-descriptions-item>
                    </a-descriptions>
                 </a-card>
            </div>
        </transition>
        <a-modal :visible="editInfo_Mode" title="Title" on-ok="handleOk">
            <template slot="footer">
                <a-button key="back" @click="handleBasicCancel">
                Return
                </a-button>
                <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
                Submit
                </a-button>
            </template>
             <a-form layout='vertical' :form="form">
                        <a-form-item label= 'Change Password'>  
                            <a-input-password type ='password' placeholder = 'Old Password'
                                 v-decorator="['password1',{rules: [{ required: true, message: 'Please input the old password' }],
                                 }]">
                            <a-icon slot='prefix' type="lock" style="color:rgba(0,0,0,.25)"/>
                            </a-input-password>
                        </a-form-item>
                        <a-form-item>  
                            <a-input-password type = 'password' placeholder = 'New Password'
                                 v-decorator="['password2',{rules: [{ required: true, message: 'Please input the new password' }],
                                 }]">
                            <a-icon slot='prefix' type="lock" style="color:rgba(0,0,0,.25)"/>
                            </a-input-password>
                        </a-form-item>
                        <a-form-item>  
                            <a-input-password type = 'password' placeholder = 'Confirm Password'
                                 v-decorator="['password3',{rules: [{ required: true, message: 'Please confirm the password' }],
                                 }]">
                            <a-icon slot='prefix' type="lock" style="color:rgba(0,0,0,.25)"/>
                            </a-input-password>
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
              cardtBasicShow : false,
              username: localStorage.getItem('username'),
              editInfo_Mode: false,
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
    width:60%;
  }
  .slide-fade-enter-active {
  transition: all 1s ease;
  }
  .slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
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
</style>