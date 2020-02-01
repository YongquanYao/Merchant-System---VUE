<template>
   <!-- This is the homepage -->
    <div class="home">
            <div class="home-title"> 
                <h1 class="title">{{title}}</h1>
                <!-- <div>
                <span>{{slogen1}}</span>
                </div>
                <div>
                <span>{{slogen2}}</span>
                </div> -->
                <div class="show" v-html="fContent"></div>
                <div>
                <router-link to="/home/info">
                     <a-button @click="openNotification">{{startButton}}<a-icon type="arrow-right"></a-icon></a-button>
                </router-link>
                </div>
            </div>
            <div class="home-img">
                <img src="../assets/image/homepage.png" alt="background-logo" title="provided by Raymond">
            </div>
    </div>
</template>


<script>
    export default {
        props: {

        writeTime: {

            type:Number,

            default: 100

        },

        content:{
            type:Object,
            default: function () {
                return {
                    str1:'Your best partner,',
                    str2:'the most powerful system in the world.',
                }
            }
        }
    },
        data(){
            return{
                title: 'Merchant System',
                // slogen1: 'Your best partner,',
                // slogen2: 'the most powerful system in the world.',
                startButton: 'Get Started',

                fContent:"",
                inContent:"",
                mContent:"",
                course:"|",
                hasCourse:true
            }
        },
        //页面加载时
         mounted(){
            this.showContent();
            this.courseTimeOut();
        },
        methods: {
          showContent(){
            var that = this;
            var data = that.content;
            var mData = "";
            for (var i in data){
                mData += data[i] + '`';
            }
            that.mContent = mData;
            that.contentTimeOut(0);
        },
          handStr(j){
            var that = this;
            var count = j;
            var str = that.mContent;
            count++;
            if(count >= str.length){
                that.hasCourse = false;
                that.fContent = that.inContent;
            }else{
                if(" " == str.charAt(j)){
                    that.inContent += '&ensp;';
                }else if("`" == str.charAt(j)){
                    that.inContent += "</br>";
                }else{
                    that.inContent += str.charAt(j);
                }
                that.fContent = that.inContent + that.course;
                that.contentTimeOut(count);
            }
        },
        contentTimeOut(value){

            var that = this;

            setTimeout(function () {

                that.handStr(value)

            },that.writeTime)

        },
        //输入符号的速度
        courseTimeOut(){
            var that = this
            setTimeout(function () {
                if(that.course.length > 0){
                    that.fContent = that.inContent + "";
                    that.course = "";
                    that.courseTimeOut();
                }else{
                    if(that.hasCourse){
                        that.fContent = that.inContent + "|";
                        that.course = "|";
                        that.courseTimeOut();
                    }else{
                        that.fContent = that.inContent;
                    }
                }
            },200)
        },
        // Notification pop up when enter the homepage
        openNotification() {
        this.$notification.open({
          message: 'Introduction Notification',
          description:
            "Welcome to the Merchant System! You can View/Edit your personal and company information .",
            duration: 6,
          icon: <a-icon type="smile" style="color: #108ee9" />,
        });
      },
    },
}
</script>

<style  scoped>
.home{
    height: 100%;
    display:flex;
    justify-content: space-around;
    align-items: center;
}
.home-titile{
    display: flex;
    flex-direction: column;
}
.home-title h1:hover{
    transform: scale(1.1);
    color: #1890ff;
}

.home-title h1{
    font-size: 70px;
    font-weight: 600;
    transition: 1s;
    cursor: pointer;
}
.home-title .show{
    font-size:25px;
    font-weight: 400;
    color:rgba(17,17,17,0.4);
}
button{
   color: #fff;
   background-color:#1890ff;
   border-radius: 20px;
   height: 45px;
   width: 200px;
   font-weight: 700;
   font-size:16px;
   margin-top: 40px;
   border: 1px solid #1890ff;
}
.home-img{
    width: 600px;
    height: 600px;
    transition: 2s;
    animation: img 4500ms linear infinite;
}
@keyframes img {
    0%{
    transform: scale(0.8);
  }
  50%{
    transform: scale(1.0);
  }
  100%{
    transform: scale(0.8);
  }
}

</style>