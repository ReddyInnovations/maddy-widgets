export interface ContactWidgetProps {
  formFields: Array<{
    id: string;
    label: string;
    type: string;
    placeholder: string;
    required?: boolean;
  }>;
  contactInfo: Array<{
    icon: React.ReactNode;
    label: string;
    value: string | React.ReactNode;
  }>;
  emailConfig?: {
    serviceId: string;
    templateId: string;
    userId: string;
  };
  externalApiUrl?: string;
}