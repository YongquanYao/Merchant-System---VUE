<template>
   <!-- This is the homepage -->
    <div class="home">
            <div class="home-title"> 
                <h1 class="title">{{title}}</h1>
                <div>
                <span>{{slogen1}}</span>
                </div>
                <div>
                <span>{{slogen2}}</span>
                </div>
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
        data(){
            return{
                title: 'Merchant System',
                slogen1: 'Your best partner,',
                slogen2: 'the most powerful system in the world.',
                startButton: 'Get Started'
            }
        },
         methods: {
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
.home-title span{
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

#wrapper{
  margin:100px auto;
  width:130px;
  height:50px;
  background: #fff;
  border-radius:6px;
  color: #000;
  text-align:center;
  line-height:50px;
  font-size:15px;
  transition: 2s;
  position: absolute;;
  cursor:pointer;
  right:0;
  bottom:-10%;
}
#wrapper:hover{
  color: #000;
  background: #fff;

}

#top, #bottom{
    height:3px;
    width: 0px;
    background:#fff;
    position:absolute;
    border-radius:1px;
    transition: 2s 0.5s;
}
#top, #left{
  top: 0;
  left:0;
}
#bottom, #right{
  bottom: 0;
  right:0;
}

#wrapper:hover #top, #wrapper:hover #bottom{
  width:60px;
  background: #000;

}

#right, #left{
  width:3px;
  height:0px;
  background:#fff;
  position:absolute;
  border-radius:4px;
  transition: 2s 0.5s;
}

#wrapper:hover #left, #wrapper:hover #right{
  height: 20px;
  background:#000;
}

</style>