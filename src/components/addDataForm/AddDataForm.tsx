import React from "react";
import { Modal, Form, Input, Button, Checkbox, message } from "antd";
import { useTranslation } from "react-i18next";

const AIRTABLE_BASE = "appf5ojSIE4gfmObN";
const AIRTABLE_TABLE = "tblncXTtrW3NP1udK";
const AIRTABLE_KEY =
  "patbWGL5oSHe89Ks9.2b6ad6d51be3a3a0467536dd81f576da17024d7d95d53f5234a238cb4a5af135";

// Типизация полей формы
interface ProposalFormValues {
  name: string;
  url: string;
  description: string;
  types: string;
  coverage: string;
  category: string;
  api: boolean;
}

export const AddDataForm: React.FC<{
  visible: boolean;
  onClose: () => void;
}> = ({ visible, onClose }) => {
  const [form] = Form.useForm<ProposalFormValues>();
  const { t } = useTranslation();

  const handleSubmit = async (values: ProposalFormValues) => {
    const fields = {
      NAME: values.name,
      URL: values.url,
      Description: values.description,
      Types: values.types,
      Coverage: values.coverage,
      Category: values.category,
      API: values.api ? "yes" : "no",
    };

    try {
      const response = await fetch(
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
      if (!response.ok) throw new Error(`Status ${response.status}`);
      message.success(
        t("Thank you! Your submission will be added after review.")
      );
      form.resetFields();
      onClose();
    } catch (error) {
      console.error(error);
      message.error(
        t(
          "An error occurred. Please contact us at support@example.com or via Telegram @YourChannel."
        )
      );
    }
  };

  return (
    <Modal
      title={t("Suggest New Data Source")}
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
          label={t("Name")}
          rules={[{ required: true, message: t("Please enter a name") }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="url"
          label={t("URL")}
          rules={[
            { required: true, message: t("Please enter a URL") },
            { type: "url", message: t("Please enter a valid URL") },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label={t("Description")}
          rules={[{ required: true, message: t("Please add a description") }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="types"
          label={t("Types (comma separated)")}
          rules={[
            { required: true, message: t("Please specify at least one type") },
          ]}
        >
          <Input placeholder={t("e.g.: vector, raster")} />
        </Form.Item>

        <Form.Item
          name="coverage"
          label={t("Coverage")}
          rules={[{ required: true, message: t("Please specify coverage") }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="category"
          label={t("Category")}
          rules={[{ required: true, message: t("Please specify category") }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="api" valuePropName="checked">
          <Checkbox>{t("Has API")}</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {t("Submit")}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
