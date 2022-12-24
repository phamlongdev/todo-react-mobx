import { Button, Form, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";
import React from "react";
import { todoStore } from "../stores/todoStore";
import { EStatus } from "../types/enums/status";

type Props = {};

export const Creator = (props: Props) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    todoStore.create({
      title: values.title,
      description: values.description,
      status: EStatus.PREPARE,
    });
  };

  return (
    <div>
      <Form
        form={form}
        name="horizontal_login"
        layout="inline"
        onFinish={onFinish}
      >
        <Form.Item
          name="title"
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <Input
            prefix={<EditOutlined className="site-form-item-icon" />}
            placeholder="Title"
            autoComplete="off"
            spellCheck={false}
          />
        </Form.Item>
        <Form.Item
          name="description"
          rules={[
            { required: false, message: "Please input your description!" },
          ]}
        >
          <Input
            prefix={<EditOutlined className="site-form-item-icon" />}
            placeholder="Description"
            autoComplete="off"
            spellCheck={false}
          />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Create
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};
