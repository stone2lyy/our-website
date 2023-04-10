import React from 'react';
import MessageList from '@site/src/pages/chat/MessageList';
import { styled } from '@mui/system';
import ChatInput from '@site/src/pages/chat/ChatInput';

const RootStyle = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(241, 241, 241, 0.6)',
  borderTopRightRadius: '10px',
  borderBottomRightRadius: '10px',
  overflow: 'hidden',
  position: 'relative',

  '&[data-aero=true]': {
    backgroundColor: 'rgba(241, 241, 241, 0.15)',
  },
});

export default () => {
  return (
    <RootStyle>
      <MessageList />
      <ChatInput />
    </RootStyle>
  );
};
