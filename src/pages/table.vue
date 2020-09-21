<template>
        <div>
            <div class="content"> 
                <a-card class="filter-card">
                    <div >
                        <a-form :form="form" :label-col="{ span:5 }" :wrapper-col="{ span: 14 }" style="display:flex;" >
                            <a-form-item label="Name"><a-input class="filter-input" placeholder="input name"></a-input>
                            </a-form-item>
                            <a-form-item label="Age"><a-input class="filter-input" placeholder="input age"></a-input>
                            </a-form-item>
                            <a-form-item :label-col="{ span:7 }" label="Address"><a-input class="filter-input" placeholder="input address"></a-input>
                            </a-form-item>
                            <a-form-item >
                                <a-button type="primary" class="search-btn"  html-type="submit">
                                <a-icon type="search" /> Search
                                </a-button>
                            </a-form-item>
                            <a-form-item :wrapper-col="{  offset: 2 }">
                                <a-button type="info" >
                                    Clear
                                </a-button>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
            </div>
            <div>
                <a-card class="table-card">
                    <div>
                        <div class="div_"> 
                                <a-button class="addbtn" type="primary" @click="handleAdd">
                                <a-icon type="plus" /> Add 
                            </a-button> 
                        </div>
                        <a-table bordered :data-source="dataSource" :columns="columns">
                        <!-- <template slot="name" slot-scope="text, record">
                            <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
                        </template> -->
                        <template slot="operation" slot-scope="text, record">
                            <a-button type="link">
                                Edit
                            </a-button>
                            <a-popconfirm
                            v-if="dataSource.length"
                            title="Sure to delete?"
                            @confirm="() => onDelete(record.key)"
                            >
                            <a href="javascript:;">Delete</a>
                            </a-popconfirm>
                        </template>
                        </a-table>
                    </div>
                </a-card>
            </div>

            <a-modal 
                :visible="add_mode" 
                title="Add" 
                @ok="handleOk"
                width="550px"
                @cancel="handleBasicCancel"
            >
            <template slot="footer">
                <a-button key="back" @click="handleBasicCancel">
                Cancel
                </a-button>
                <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
                Create
                </a-button>
            </template>
                <a-form 
                    layout='vertical' 
                    :form="form" 
                    :label-col="labelCol" 
                    :wrapper-col="wrapperCol"
                    style="padding: 20px"
                    v-model="add_temp"
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
            return{
                username: '',
                add_temp: {},
                add_mode: false,
                labelCol: {
                xs: { span: 24,offset: 15 },
                sm: { span: 7, offset: 15 },
                },
                wrapperCol: {
                    xs: { span: 24},
                    sm: { span: 16},
                },
                dataSource: [
                    {
                        key: '0',
                        name: this.getName('1'),
                        age: '22',
                        address: 'New York, Timesqure No.222',
                    },
                    {
                        key: '1',
                        name: this.getName('2'),
                        age: '33',
                        address: 'California, Silicon Valley No.333',
                    },
                    {
                        key: '1',
                        name: this.getName('3'),
                        age: '44',
                        address: 'California, Silicon Valley No.444',
                    },
                ],
                // count: 2,
                columns: [
                    {
                        title: 'Name',
                        dataIndex: 'name',
                        width: '30%',
                        scopedSlots: { customRender: 'name' },
                    },
                    {
                        title: 'Age',
                        dataIndex: 'age',
                    },
                    {
                        title: 'Address',
                        dataIndex: 'address',
                    },
                    {
                        title: 'Operation',
                        dataIndex: 'operation',
                        scopedSlots: { customRender: 'operation' },
                    },
                ],
            }
        },
        methods:{
            getName(type){
                return localStorage.getItem('username')+type
            },
            handleAdd(){
                this.add_mode = true
            },
            handleBasicCancel(){
                this.add_mode = false
            }
        }
    }
</script>

<style scoped>
.content{
    margin-top:40px;
    background-color: #fff;
    /* box-shadow: 0px 1px 10px 5px rgba(17,17,17,0.1); */
}
.filter-card{
    height: 100px;
    display: flex;
}
.table-card{
    margin-top: 20px;
    height: 430px;
}
.filter-input{
    width: 220px;
    margin-right:45px;
}
.div_{
    display:flex;
    justify-content:flex-end
}
.addbtn{
    margin-bottom: 10px;
}
.search-btn{
    width: 95px;
}
</style>