import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import { IconButton, Tooltip } from '@mui/material';
import { FaWhatsapp } from 'react-icons/fa';
import { green } from '@mui/material/colors';
import { WhatsAppWidgetProps } from '@src/interfaces/whatsapp';

const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  phoneNumber,
  position = { bottom: 20, right: 20 },
  backgroundColor = green[500],
  iconColor = 'white',
  iconSize = 30,
  tooltipText = 'Chat with us on WhatsApp',
  draggable = true,
}) => {
  const widgetRef = useRef<HTMLDivElement>(null);

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
    <Draggable disabled={!draggable} nodeRef={widgetRef}>
      <div style={widgetStyle} ref={widgetRef}>
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
