import React from "react";
import { Modal, Form, Input, Button, Checkbox } from "antd";

const AIRTABLE_BASE = "appXXXXXXXXXXXXXX";
const AIRTABLE_TABLE = "Proposals";
const AIRTABLE_KEY = "keyXXXXXXXXXXXXXX";

// Типизация полей формы
interface ProposalFormValues {
  name: string;
  url: string;
  description: string;
  types: string; // введем как CSV строку
  coverage: string;
  category: string;
  api: boolean;
}

export const AddDataForm: React.FC<{
  visible: boolean;
  onClose: () => void;
}> = ({ visible, onClose }) => {
  const [form] = Form.useForm<ProposalFormValues>();

  const handleSubmit = async (values: ProposalFormValues) => {
    // Преобразуем CSV типов в массив
    const typeArray = values.types.split(",").map((s) => s.trim());

    const fields = {
      Name: values.name,
      URL: values.url,
      Description: values.description,
      Types: typeArray,
      Coverage: values.coverage,
      Category: values.category,
      API: values.api ? "yes" : "no",
    };

    await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${AIRTABLE_KEY}`,
        },
        body: JSON.stringify({ fields }),
      }
    );

    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title="Предложить новый набор данных"
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form<ProposalFormValues>
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{ api: false }}
      >
        <Form.Item
          name="name"
          label="Название"
          rules={[{ required: true, message: "Укажите название" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="url"
          label="Ссылка"
          rules={[
            { required: true, message: "Укажите URL" },
            { type: "url", message: "Введите корректный URL" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Описание"
          rules={[{ required: true, message: "Добавьте описание" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="types"
          label="Типы (через запятую)"
          rules={[{ required: true, message: "Укажите хотя бы один тип" }]}
        >
          <Input placeholder="например: вектор, растровый" />
        </Form.Item>

        <Form.Item
          name="coverage"
          label="Покрытие"
          rules={[{ required: true, message: "Укажите зону покрытия" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="category"
          label="Категория"
          rules={[{ required: true, message: "Укажите категорию" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="api" valuePropName="checked">
          <Checkbox>Есть API</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
