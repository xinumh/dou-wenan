import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Form, Input, Space } from 'antd'
import type { FormInstance } from 'antd'

type ISearchFormProps = {
  /* 提交表单且数据验证成功回调 */
  onFinish: (values: unknown) => Promise<void>
}

const SearchForm = ({ onFinish }: ISearchFormProps) => {
  return (
    <Form layout='inline' onFinish={onFinish}>
      <Form.Item name='username'>
        <Input placeholder='用户名' allowClear />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button icon={<SearchOutlined />} type='primary' htmlType='submit'>
            查询
          </Button>
          <Button>重置</Button>
          <Button icon={<PlusOutlined />} type='dashed'>
            新增
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default SearchForm
