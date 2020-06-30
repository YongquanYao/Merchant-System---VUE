<template>
    <div>
      <!-- 
        组件传的方法
        @cancel="handleCancel"
        @create="handleLogin"

        对应绑定这里的按钮
        @cancel="() => { $emit('cancel') }"
        @ok="() => { $emit('create') }"
       -->
    <a-modal
      width="500px"
      :maskClosable = false
      :keyboard = false 
      :visible="visible"
      okText='Login'
      @cancel="() => { $emit('cancel') }"
      @ok="() => { $emit('create') }"
    >
      <a-form layout='vertical' :form="form">
        <a-form-item label='Username / Email'>
          <a-input  
            type = 'text' placeholder = 'Username'
            v-decorator="[
              'username',
              {
                rules: [{ required: true, message: 'Please input the username' }]
              }
            ]"
          >
          <!-- slot= "prefix" 插槽在前缀-->
           <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item label='Password'>
          <a-input-password
            type = 'password' placeholder = 'Password'
            v-decorator="[
            'password',
            {
                rules: [{ required: true, message: 'Please input the password' }], 
            }
            ]"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input-password>
        </a-form-item>
         <a-form-item>
         <a-checkbox
          v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      >
        Remember me
      </a-checkbox>
    </a-form-item>
      </a-form>
    </a-modal>
    </div>
</template>

<script>
  export default {
  
  props: ['visible'],
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'form_in_modal' });
  }
};
</script>

<style scoped>
    form{
       margin-top: 15px;
       padding: 0 18px;
    }
   .ant-form-item:last-child{
      margin-bottom: 0px;
    }
    
</style>