<template>
        <div>
            <div class="content"> 
                <a-card class="filter-card">
                    <div >
                        <a-form :form="filterform" :label-col="{ span:5 }" :wrapper-col="{ span: 14 }" style="display:flex;" >
                            <a-form-item label="Name"><a-input v-model="searchQuery.name" class="filter-input" placeholder="input name"></a-input>
                            </a-form-item>
                            <a-form-item label="Age"><a-input  v-model="searchQuery.age"    class="filter-input" placeholder="input age"></a-input>
                            </a-form-item>
                            <a-form-item :label-col="{ span:7 }" label="Address"><a-input  v-model="searchQuery.address" class="filter-input" placeholder="input address"></a-input>
                            </a-form-item>
                            <a-form-item>
                                <a-button type="primary" class="search-btn"  @click="handleFilterSearch">
                                <a-icon type="search" /> Search
                                </a-button>
                            </a-form-item>
                            <a-form-item :wrapper-col="{  offset: 2 }">
                                <a-button type="info" @click="handleFilterReset">
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
                        <a-table bordered 
                            :data-source="dataSource"
                            :columns="columns"
                            :loading="tableLoading" 
                            size="middle"
                            :pagination="paginationConfig"
                        >
                        
                        <!-- <template slot="name" slot-scope="text, record">
                            <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
                        </template> -->
                        <template slot="operation" slot-scope="text, record">
                            <a-button type="link" @click="handleEdit(record)">
                                Edit
                            </a-button>
                            <a-popconfirm
                            v-if="dataSource.length"
                            @confirm="() => onDelete(record.key)"
                            >
                            <template slot="title">
                               {{`Sure to delete ${record.name} ?`}}
                            </template>
                            <a-button type="link">Delete</a-button>
                            </a-popconfirm>
                        </template>
                        </a-table>
                    </div>
                </a-card>
            </div>
            <!-- ADD MODAL -->
            <a-modal 
                :visible="add_mode" 
                title="Add Form" 
                @ok="handleAddOk"
                width="550px"
                @cancel="handleAddCancel"
            >
            <template slot="footer">
                <a-button key="back" @click="handleAddCancel">
                Cancel
                </a-button>
                <a-button key="submit" type="primary" :loading="addLoading" @click="handleAddOk">
                Create
                </a-button>
            </template>
                <a-form 
                    layout='vertical' 
                    :form="createform" 
                    :label-col="labelCol" 
                    :wrapper-col="wrapperCol"
                    style="padding: 20px"
                    v-model="add_temp"
                >
                            <a-form-item label= 'User name: ' label-width="60">  
                                <a-input type ='text' 
                                    v-decorator="['name',{rules: [{ required: true, message: 'Please input user name' }],
                                    }]"  placeholder="please input username">
                                <a-icon slot='prefix' type="user" style="color:rgba(0,0,0,.25)"/>
                                </a-input>
                            </a-form-item>
                            <a-form-item label= 'Age: '>  
                                <a-input type = 'number' 
                                    v-decorator="['age',{rules: [{ required: true, message: 'Please input age' }],
                                    }]" placeholder="please input age">
                                <a-icon slot='prefix' type="number" style="color:rgba(0,0,0,.25)"/>
                                </a-input>
                            </a-form-item>
                            <a-form-item label= 'Address: '>  
                                <a-input type = 'text' 
                                    v-decorator="['address',{rules: [{ required: true, message: 'Please input address' }],
                                    }]" placeholder="please input address">
                                <a-icon slot='prefix' type="home" style="color:rgba(0,0,0,.25)"/>
                                </a-input>
                            </a-form-item>
                            <a-form-item label= 'Status: '>  
                                <a-select 
                                    v-decorator="['status',{rules: [{ required: true, message: 'Please select status' }],
                                    }]"
                                    placeholder="please select status"
                                >
                                <a-icon slot='prefix' type="status" style="color:rgba(0,0,0,.25)"/>
                                <a-select-option :value="0">
                                    Normal
                                </a-select-option>
                                <a-select-option :value="1">
                                    Frozen
                                </a-select-option>
                                </a-select>
                            </a-form-item>
                            <a-form-item label= 'Note: '>  
                                <a-input type = 'textarea'
                                    v-decorator="['note']"
                                    placeholder="please input somes notes"
                                >
                                <a-icon slot='prefix'  type="book"   style="color:rgba(0,0,0,.25)"/>
                                </a-input>
                            </a-form-item>
                </a-form>
            </a-modal> 

            <!-- edt MODAL -->
            <a-modal 
                :visible="edit_mode" 
                title="Edit Form" 
                @ok="handleEditOk"
                width="550px"
                @cancel="handleEditCancel"
            >
            <template slot="footer">
                <a-button key="back" @click="handleEditCancel">
                Cancel
                </a-button>
                <a-button key="submit" type="primary" :loading="editLoading" @click="handleEditOk">
                Submit
                </a-button>
            </template>
                <a-form 
                    layout='vertical' 
                    :form="editform" 
                    :label-col="labelCol" 
                    :wrapper-col="wrapperCol"
                    style="padding: 20px"
                    v-model="edit_temp"
                >
                            <a-form-item label= 'User name: ' label-width="60">  
                                <a-input type ='text' v-model="edit_temp.name"
                                     placeholder="please input username">
                                <a-icon slot='prefix' type="user" style="color:rgba(0,0,0,.25)"/>
                                </a-input>
                            </a-form-item>
                            <a-form-item label= 'Age: '>  
                                <a-input type = 'number' v-model="edit_temp.age"
                                     placeholder="please input age">
                                <a-icon slot='prefix' type="number" style="color:rgba(0,0,0,.25)"/>
                                </a-input>
                            </a-form-item>
                            <a-form-item label= 'Address: '>  
                                <a-input type = 'text' v-model="edit_temp.address"
                                    placeholder="please input address">
                                <a-icon slot='prefix' type="home" style="color:rgba(0,0,0,.25)"/>
                                </a-input>
                            </a-form-item>
                            <a-form-item label= 'Status: '>  
                                <a-select  v-model="edit_temp.status"
                                    placeholder="please select status"
                                >
                                <a-select-option :value="0">
                                    Normal
                                </a-select-option>
                                <a-select-option :value="1">
                                    Frozen
                                </a-select-option>
                                </a-select>
                            </a-form-item>
                            <a-form-item label= 'Note: '>  
                                <a-input type = 'textarea'  v-model="edit_temp.note"
                                    placeholder="please input somes notes"
                                >
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
                createform : this.$form.createForm(this, { name: 'addData' }),
                editform : this.$form.createForm(this, { name: 'editform' }),
                filterform : this.$form.createForm(this, { name: 'filterform' }),
                username: '',
                tableLoading: true,
                add_temp: {},
                add_mode: false,
                edit_temp: {},
                edit_mode: false,
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
                        status: 0,
                        note: 'https://github.com/YongquanYao/merchant-system-VueJS'
                    },
                    {
                        key: 1,
                        name: this.getName('2'),
                        age: '33',
                        address: 'California, Silicon Valley No.333',
                        status: 1
                    },
                    {
                        key: 2,
                        name: this.getName('3'),
                        age: '44',
                        address: 'California, Silicon Valley No.444',
                        status: 0
                    }
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
                searchQuery: {
                    name: undefined,
                    age: undefined,
                    address: undefined,
                    status: undefined
                },
                paginationConfig: {
                    defaultPageSize: 4,
                },
                editLoading: false,
                addLoading: false,
                beforeFilterSource:[]
            }
        },
        created(){
            this.getTableData()
        },
        methods:{
            getName(type){
                return localStorage.getItem('username')+type
            },
            getTableData(){
                setTimeout(() => {
                    this.tableLoading = false
                }, 2000)
            },
            getTableTotal(){
                this.total = this.dataSource.length
            },
            handleAdd(){
                this.add_mode = true
            },
            handleAddCancel(){
                this.add_mode = false
            },
            handleEdit(data){
                this.edit_mode = true
                this.edit_temp = Object.assign(data, {})
            },
            handleEditCancel(){
                this.edit_mode = false
            },
            handleAddOk(e){
                e.preventDefault();
                this.createform.validateFields((error, value) => {
                    if(error === null) {
                        this.addLoading = true
                        setTimeout(() => {
                            value.key = this.dataSource[this.dataSource.length-1].key+1
                            this.dataSource.push(value)
                            this.add_mode = false
                            this.$message.success('添加成功', 4);
                              this.addLoading = false
                        }, 1500)
                    }else{
                        this.$message.error('信息不全', 2);
                    }
                });
            },
            handleEditOk(){
                this.editLoading = true
                for(const i of this.dataSource) {
                    if(this.edit_temp.key === i.key) {
                        const index = this.dataSource.indexOf(i)
                        this.dataSource.splice(index,1, this.edit_temp)
                        break
                    }
                }
                setTimeout(() => {
                    this.edit_mode = false
                    this.editLoading = false
                    this.$message.success('修改成功', 4);
                },2000)
            },
            handleFilterReset(){
                this.searchQuery.name = undefined
                this.searchQuery.age = undefined
                this.searchQuery.address = undefined
                this.tableLoading = true
                setTimeout(()=>{
                    this.tableLoading = false   
                }, 1500)
                if(this.beforeFilterSource.length !==0) {
                    this.dataSource = this.beforeFilterSource
                }
            },
            handleFilterSearch(){
                this.tableLoading = true
                this.beforeFilterSource = this.dataSource
                let newDataSource  = new Array()
                for (const i of this.dataSource) {
                    if (this.searchQuery.name !== undefined && i.name === this.searchQuery.name){
                        newDataSource.push(i)
                    }
                    else if (this.searchQuery.age !== undefined && i.age === this.searchQuery.age){
                        newDataSource.push(i)
                    }
                    else if (this.searchQuery.address !== undefined && i.address === this.searchQuery.address){
                        newDataSource.push(i)
                    }
                }
                setTimeout(()=> {
                    this.tableLoading = false
                    this.dataSource = newDataSource
                },2000)
            },
            onDelete(key){
                for (const i of this.dataSource) {
                    if(i.key === key) {
                        const index = this.dataSource.indexOf(i)
                        this.dataSource.splice(index,1)
                        break
                    }
                }
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
    justify-content:flex-end;
}
.addbtn{
    margin-bottom: 10px;
}
.search-btn{
    width: 95px;
}
</style>