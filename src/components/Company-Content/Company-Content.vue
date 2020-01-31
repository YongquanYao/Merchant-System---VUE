<template>
  <div class="content">
     <a-card title="Company Detail" style="width: 100%">
    <a-button type="primary" slot="extra"> <router-link to='/home/info'> View My Info</router-link></a-button>
    <a-button class="editable-add-btn" @click="handleAdd"><a-Icon type="plus"></a-Icon></a-button>
    <a-table bordered :dataSource="dataSource" :columns="columns" :pagination="{ pageSize: 5, showQuickJumper:true}">
       <span slot="CompanyName"><a-icon type="flag" theme="twoTone"/> Company Name</span>
       <span slot="Field"><a-icon type="fire" theme="twoTone"/> Filed</span>
       <span slot="Address"><a-icon type="bank" theme="twoTone"/> Address</span>
       <span slot="operation"><a-icon type="tool" theme="twoTone"/> operation</span>
      <template slot="name" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
      </template>
       <template slot="field" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'field', $event)" />
      </template>
       <template slot="address" slot-scope="text, record">
         <span slot="CompanyName"> Street, City, State, Zipcode</span>
        <editable-cell :text="text" @change="onCellChange(record.key, 'address', $event)" />
      </template>
      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="dataSource.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)"
        >
          <a href="javascript:;" style="color: red">Delete</a>
        </a-popconfirm>
      </template>
    </a-table>
     </a-card>
  </div>
</template>
<script>
  import EditableCell from './EditableCell';

  export default {
    components: {
      EditableCell,
    },
    data() {
      return {
        dataSource: [
        ],
        count: 0,
        columns: [
          {
            slots: { title: 'CompanyName' },
            dataIndex: 'name',
            width: '30%',
            scopedSlots: { customRender: 'name' },
          },
          {
            slots: {title: 'Field'},
            dataIndex: 'field',
            scopedSlots: { customRender: 'field' },
          },
          {
            slots:{title: 'Address'},
            dataIndex: 'address',
            scopedSlots: { customRender: 'address' },
          },
          {
            slots:{title: 'operation',},
            dataIndex: 'operation',
            scopedSlots: { customRender: 'operation' },
          },
        ],
      };
    },
    methods: {
      onCellChange(key, dataIndex, value) {
        const dataSource = [...this.dataSource];
        const target = dataSource.find(item => item.key === key);
        if (target) {
          target[dataIndex] = value;
          this.dataSource = dataSource;
        }
      },
      onDelete(key) {
        const dataSource = [...this.dataSource];
        this.dataSource = dataSource.filter(item => item.key !== key);
      },
      handleAdd() {
        const { count, dataSource } = this;
        const newData = {
          key: count,
          name:  '',
          filed: '',
          address: '',
        };
        this.dataSource = [...dataSource, newData];
        this.count = count + 1;
        this.$message.success('add one column')
      },
    },
  };
</script>
<style>
  .content{
      margin-top:40px;
    background-color: #fff;
    box-shadow: 0px 1px 10px 5px rgba(17,17,17,0.1);
  }
  .editable-cell {
    position: relative;
  }

  .editable-cell-input-wrapper,
  .editable-cell-text-wrapper {
    padding-right: 24px;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    line-height: 18px;
    display: none;
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell:hover .editable-cell-icon {
    display: inline-block;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }

  .editable-add-btn {
    margin-bottom: 8px;
  }
</style>