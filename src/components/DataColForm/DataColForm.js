import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../../store/index';
import {
  Form,
  Input,
  InputNumber,
  Button,
  Radio,
  Select,
} from 'antd';
const { Option } = Select;
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const DataColForm = () => {

  const heading = useSelector(state => state.data.heading)
  const dispatch = useDispatch();
  const ArrayData = useSelector(state => state.data.formArray);
  const editArray = useSelector(state => state.data.prefillArray);
  const [show, setShow] = useState(false);

  const onFinish = (values) => {
    setShow(true);
    dispatch(formActions.addToArray(values));
  };
  useEffect(() => {
    localStorage.setItem('form-data', JSON.stringify(ArrayData));

  }, [ArrayData]);
  const showFormHandler = () => {
    dispatch(formActions.showData());

  }
  const deleteHandler = () => {
    localStorage.clear();
    dispatch(formActions.removeArray());
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
    <React.Fragment>
      {!heading ? <h1 className="my-8 text-center text-4xl text-red-500">STUDENT REGISTRATION FORM</h1> : <p className="my-8 text-center text-4xl text-red-500">Edit FORM</p>}
      <Form  {...layout} name="nest-messages" onFinish={onFinish}
        validateMessages={validateMessages}>
        <Form.Item
          initialValue={editArray.user !== undefined ? `${editArray.user.name}` : ''}
          name={['user', 'name']} label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          initialValue={editArray.user !== undefined ? `${editArray.user.email}` : ''}
          name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          initialValue={editArray.user !== undefined ? `${editArray.user.age}` : ''}
          name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item
          initialValue={editArray.gender !== undefined ? `${editArray.gender}` : ''}
          name="gender" label="Gender">
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
          <Form.Item
            initialValue={editArray.year !== undefined ? `${editArray.year}` : ''}
            name="year"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <Input placeholder="Input birth year" />
          </Form.Item>
          <Form.Item
            initialValue={editArray.month !== undefined ? `${editArray.month}` : ''}
            name="month"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
          >
            <Input placeholder="Input birth month" />
          </Form.Item>
        </Form.Item>
        <Form.Item
          initialValue={editArray.phone !== undefined ? `${editArray.phone}` : ''}
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
        </Button>

          <Button type="primary" className="ml-12" onClick={showFormHandler}>
            show data
        </Button>
          <Button type="primary" className=" md:ml-12 " onClick={deleteHandler}>
            clear all data
        </Button>
        </Form.Item>
      </Form>
      {show && <div className="mt-12 border-2 bg-red-500 text-3xl text-center text-white animate-pulse transition ease-linear duration-300">Data Added to localStorage successfully!!!</div>}
    </React.Fragment>
  );
};

export default DataColForm;