import React, { useRef } from 'react';
import { styled } from '@mui/system';

const ContainerStyle = styled('div')({
  flex: 1,
  position: 'relative',
  overflow: 'hidden',
});

const MessageListStyle = styled('div')({
  width: '100%',
  height: '100%',
  padding: '8px 10px 0 10px',
  overflowY: 'auto',
  overflowX: 'hidden',
  webkitOverflowScrolling: 'touch',
  position: 'relative',
});

export default () => {
  const messageListRef = useRef<HTMLDivElement>(null);

  return (
    <ContainerStyle>
      <MessageListStyle ref={messageListRef}></MessageListStyle>
    </ContainerStyle>
  );
};
