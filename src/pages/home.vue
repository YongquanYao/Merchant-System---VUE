<template>
    <div>
        <a-row type="flex" justify="space-between" >
            <a-col :span="6">
                <a-card class="topcard fisrt_card">
                    <a-statistic title="Active Users" :value="66666" style="margin-right: 50px">
                        <template #suffix>
                            <a-icon type="arrow-up"  />
                        </template>
                    </a-statistic>
                    <a-statistic title="Account Balance (CNY)" :precision="2" :value="5201314" />   
                </a-card>
            </a-col>
            <a-col :span="6">
                <a-card class="topcard second_card">
                    <a-statistic title="Github Stars" :value="400" style="margin-right: 50px">
                        <template #suffix>
                            <a-icon type="star" />
                        </template>
                    </a-statistic>
                    <a-statistic title="Fork" :value="1523" />   
                </a-card>
            </a-col>
            <a-col :span="6">
                <a-card class="topcard third_card">
                    <a-statistic title="Published" :value="getpublishDate()" />
                        <a-statistic-countdown title="Next update"  :value="deadline" format="HH:mm:ss:SSS" />  
                </a-card>
            </a-col>
            <a-col :span="6">
                <a-card class="topcard fourth_card">
                    <a-statistic title="Progress" :value="progress"/>
                    <div class="progressbar">
                        <a-progress
                            :stroke-color="{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }"
                            :percent="30"
                            :showInfo="false"
                            :strokeWidth="15"
                        />  
                    </div>
                </a-card>
            </a-col>
        </a-row>
         <a-row type="flex" justify="space-between" >
         <a-col :span="4">
             <a-card class="calendar"> 
                <a-calendar 
                    :fullscreen="false" 
                    @panelChange="onPanelChange" 
                />
            </a-card>
          </a-col>
          <a-col :span="16">
              <a-card class="tabList">
                <a-tabs default-active-key="1" @change="callback">
                    <a-tab-pane key="1" :tab="tab1">
                        <a-empty 
                            description="Message box is empty"
                        />
                    </a-tab-pane>
                    <a-tab-pane key="2" :tab="tab2" force-render>
                        <a-empty 
                            description="Task is empty"
                        />
                    </a-tab-pane>
                    <a-tab-pane key="3" :tab="tab3">
                        <a-empty 
                            description="No meeting or project record"
                        />
                    </a-tab-pane>
                </a-tabs>
              </a-card>
          </a-col>
        </a-row>
    </div>
                <!-- <a-card class="user"> 
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
            </a-card> -->
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
                    <span> Message <span style="font-size: 13px" >(0)</span></span>
                    )
                },
                tab2: function(){
                    return(
                    <span> Task <span style="font-size: 13px" >(0)</span></span>
                    )
                },
                tab3: function(){
                    return(
                    <span> Meeting / Project <span style="font-size: 13px" >(0)</span></span>
                    )
                },
                deadline: new Date('Octorber 1, 2020'),
                progress: '37%'
            }
        },
        created(){
            this.username = localStorage.getItem('username')
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
            getpublishDate(){
                const now = new Date()  
                // const date = now.getDate()
                // const month = now.getMonth()+1
                // const year = now.getFullYear()
                // return `${year}-${month}-${date}`
                const createDate = new Date('January 31, 2020')
                const diff = now - createDate

                return `${Math.floor(diff / (1000*60*60*24))} days`
            }
        },
        
    }
</script>

<style scoped>
.calendar{
    display: block;
    margin-top:40px;
    width: 350px;
    /* height: 50px; */
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
    min-width: 770px;
    height: 250px;
}
.topcard{
    margin-top: 40px;
}
.fisrt_card{
   width: 286px;
}
.second_card{
    width: 286px;
}
.third_card{
    width: 286px;
}
.fourth_card{
    min-width: 287px;
}
.progressbar{
    padding-top: 40px;
}
</style>