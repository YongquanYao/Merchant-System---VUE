<template>
        <div class="content">
            <a-card style="height: 300px">
                <div>
                    <a-button class="editable-add-btn" @click="handleAdd">
                    Add
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
    box-shadow: 0px 1px 10px 5px rgba(17,17,17,0.1);
  }
</style>