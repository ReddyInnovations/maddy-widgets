import React from 'react';
import Draggable from 'react-draggable';
import { IconButton, Tooltip } from '@mui/material';
import { FaWhatsapp } from 'react-icons/fa';
import { green } from '@mui/material/colors';

interface WhatsAppWidgetProps {
  phoneNumber: string; // WhatsApp phone number
  position?: { top?: number; bottom?: number; left?: number; right?: number }; // Position on screen
  backgroundColor?: string; // Button background color
  iconColor?: string; // Icon color
  iconSize?: number; // Icon size
  tooltipText?: string; // Tooltip text
  draggable?: boolean; // Enable or disable dragging
}

const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  phoneNumber,
  position = { bottom: 20, right: 20 }, // Default positioning
  backgroundColor = green[500],
  iconColor = 'white',
  iconSize = 30,
  tooltipText = 'Chat with us on WhatsApp',
  draggable = true,
}) => {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const widgetStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: position.bottom,
    top: position.top,
    right: position.right,
    left: position.left,
    backgroundColor,
    color: iconColor,
    borderRadius: '50%',
    padding: 10,
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    zIndex: 1000,
    cursor: draggable ? 'grab' : 'pointer',
  };

  return (
    <Draggable disabled={!draggable}>
      <div style={widgetStyle}>
        <Tooltip title={tooltipText} aria-label="whatsapp">
          <IconButton
            onClick={handleClick}
            sx={{
              backgroundColor,
              color: iconColor,
              borderRadius: '50%',
              '&:hover': {
                backgroundColor: green[600],
                boxShadow: 6,
                transform: 'scale(1.1)',
              },
              '&:active': {
                transform: 'scale(0.95)',
              },
            }}
          >
            <FaWhatsapp size={iconSize} />
          </IconButton>
        </Tooltip>
      </div>
    </Draggable>
  );
};

export default WhatsAppWidget;
