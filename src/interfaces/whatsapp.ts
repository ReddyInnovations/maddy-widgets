export interface WhatsAppWidgetProps {
  phoneNumber: string;
  position?: { top?: number; bottom?: number; left?: number; right?: number };
  backgroundColor?: string;
  iconColor?: string;
  iconSize?: number;
  tooltipText?: string;
  draggable?: boolean;
}
