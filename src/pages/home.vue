<template>
    <div>
        <a-row type="flex" justify="space-between" >
         <a-col :span="4">
            <a-card class="user"> 
                <a-avatar :size="84"  src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" icon="user" />
                <div class="avatar_username">
                    {{username}}
                </div>
                <div class="avatar_slogen">
                    <span>好好学习,天天向上</span>
                </div>
                <div class="user_info">
                    <p>
                        <a-icon type="idcard" style="margin-right:8px" />
                        资深全栈开发工程师
                    </p>
                    <p>
                        <a-icon type="apartment" style="margin-right:8px"/>
                        技术体验部
                    </p>
                    <p>
                        <a-icon type="environment"  style="margin-right:8px"/>
                        广州, 中国
                    </p>
                </div>
                <a-divider dashed/>
                <div class="info_section">
                    <div>团队</div>
                    <span>高级前端开发Team</span>
                </div>
                 <a-divider dashed/>
                 <div class="info_section">
                    <div>标签</div>
                    <span> <a-tag color="blue">Vue</a-tag></span>                    
                    <span> <a-tag>React</a-tag></span>                    
                    <span> <a-tag>Node</a-tag></span>
                    <template v-if="newTag !== null && newTag !=='' ">
                        <span><a-tag>{{newTag}}</a-tag></span>
                    </template>
                    <a-input
                        v-if="tagInputVisible"
                        ref="input"
                        type="text"
                        size="small"
                        :style="{ width: '78px' }"
                        :value="tagInputValue"
                        @change="handleInputChange"
                        @blur="handleInputConfirm"
                        @keyup.enter="handleInputConfirm"
                    />
                    <span>
                    <a-tag style="background: #fff; borderStyle: dashed;" @click="showTagInput">
                    <a-icon type="plus" />
                    </a-tag>   
                    </span>                
                </div>
            </a-card>
          </a-col>
          <a-col :span="17">
              <a-card class="tabList">
                <a-tabs default-active-key="1" @change="callback">
                    <a-tab-pane key="1" :tab="tab1">
                        <a-empty 
                            description="当前没有任何消息"
                        />
                    </a-tab-pane>
                    <a-tab-pane key="2" :tab="tab2" force-render>
                        <a-empty 
                            description="当前任务为空"
                        />
                    </a-tab-pane>
                    <a-tab-pane key="3" :tab="tab3">
                        <a-empty 
                            description="当前没有会议和项目记录"
                        />
                    </a-tab-pane>
                </a-tabs>
              </a-card>
               <!-- <a-card class="calendar"> 
                <a-calendar 
                    :fullscreen="false" 
                    @panelChange="onPanelChange" 
                />
            </a-card> -->
          </a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                username:'',
                tagInputVisible: false,
                tagInputValue: '',
                newTag: null,
                tab1: function(){
                    return(
                    <span> 消息 <span style="font-size: 13px" >(0)</span></span>
                    )
                },
                tab2: function(){
                    return(
                    <span> 任务 <span style="font-size: 13px" >(0)</span></span>
                    )
                },
                tab3: function(){
                    return(
                    <span> 会议 / 项目 <span style="font-size: 13px" >(0)</span></span>
                    )
                },
            }
        },
        methods:{
            panelChange(value){
                alert(value)
            },
            showTagInput() {
                // 显示tagInput
                this.tagInputVisible =true
                // 用nextTick选中input框
                this.$nextTick(function() {
                    this.$refs.input.focus();
                });
            },
            handleInputConfirm(){
                this.tagInputVisible =false
                this.newTag = this.tagInputValue
                
            },
            handleInputChange(e){
                this.tagInputValue = e.target.value
            },
        },
        created(){
            this.username = localStorage.getItem('username')
        },
    }
</script>

<style scoped>
.user{
    display: block;
    margin-top:40px;
    width: 320px;
    height: 550px;
    text-align: center;
}
.avatar_username{
    padding-top: 20px;
    font-size: 19px;
    font-weight: 500;
}
.avatar_slogen{
    padding-top: 5px;
    font-size: 13px;
    color: #6d6d6d;
}
.user_info{
    text-align: start;
    padding: 35px 10px 0px 10px;
    font-size: 13px;
}
.info_section{
    text-align: start;
    font-size: 13px;
}
.info_section div{
    font-weight: 600;
    padding-bottom: 5px;
}
.ant-tag{
    margin-bottom: 5px;
}
.tabList{
    display: block;
    margin-top:40px;
    min-width: 821px;
    height: 250px;
}
.calendar{
    margin-top:10px;
    width: 320px;
    height: 350px;
    float: right;
}
</style>