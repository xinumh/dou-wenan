import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Form, Input, Modal, Space, Table } from 'antd'
import React from 'react'
import SearchForm from './SearchForm'

type Props = {}

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }
]

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address'
  }
]

function User({}: Props) {
  const [modal1Visible, setModal1Visible] = React.useState(false)
  const onFinish = async (values: unknown) => {
    console.log('values', values)
  }
  const handleOkClick = () => {}
  return (
    <div>
      <SearchForm onFinish={onFinish} />

      <Table dataSource={dataSource} columns={columns} className='mt-10' />

      <Modal
        title='新增用户'
        style={{ top: 120 }}
        visible={modal1Visible}
        onOk={handleOkClick}
        onCancel={() => setModal1Visible(false)}
        cancelText='取消'
        okText='确认'
        maskClosable={false}
      >
        <Form>
          <Form.Item name='username' label='用户名' required>
            <Input placeholder='用户名' allowClear />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default User
