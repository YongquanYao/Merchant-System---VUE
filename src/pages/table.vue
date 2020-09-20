<template>
        <div>
        <div class="content"> 
            <a-card class="filter-card">
                <div >
                    <a-form :form="form" :label-col="{ span:5 }" :wrapper-col="{ span: 16 }" style="display:flex;" >
                        <a-form-item label="Name"><a-input class="filter-input" placeholder="input name"></a-input>
                        </a-form-item>
                        <a-form-item label="Age"><a-input class="filter-input" placeholder="input age"></a-input>
                        </a-form-item>
                        <a-form-item label="Address"><a-input class="filter-input" placeholder="input address"></a-input>
                        </a-form-item>
                        <a-form-item :wrapper-col="{offset: 1 }">
                            <a-button type="primary" style="width:100px "  html-type="submit">
                                Search
                            </a-button>
                        </a-form-item>
                        <a-form-item :wrapper-col="{  offset: 12 }">
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
                    <a-button class="addbtn" @click="handleAdd">
                        aaa 
                    </a-button>
                    <a-table bordered :data-source="dataSource" :columns="columns">
                    <!-- <template slot="name" slot-scope="text, record">
                        <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
                    </template> -->
                    <template slot="operation" slot-scope="text, record">
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
        </div>
</template>

<script>
    export default {
        data(){
            return{
                dataSource: [
                    {
                        key: '0',
                        name: 'Edward King 0',
                        age: '32',
                        address: 'London, Park Lane no. 0',
                    },
                    {
                        key: '1',
                        name: 'Edward King 1',
                        age: '32',
                        address: 'London, Park Lane no. 1',
                    },
                ],
                // count: 2,
                columns: [
                    {
                        title: 'name',
                        dataIndex: 'name',
                        width: '30%',
                        scopedSlots: { customRender: 'name' },
                    },
                    {
                    title: 'age',
                    dataIndex: 'age',
                    },
                    {
                    title: 'address',
                    dataIndex: 'address',
                    },
                    {
                    title: 'operation',
                    dataIndex: 'operation',
                    scopedSlots: { customRender: 'operation' },
                    },
                ],
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
    width: 200px;
    margin-right:45px;
}
</style>