import React, { useState, useRef, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { statusByClient } from '@site/src/pages/chat/state';
import { styled } from '@mui/system';
import { Button, Input, IconButton, Textarea } from '@mui/joy';
import SendIcon from '@mui/icons-material/Send';

let searchExpressionTimer: number = 0;

let inputIME = false;

const RootStyle = styled('div')(() => ({
  height: '110px',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  display: 'flex',
  alignItems: 'center',
  borderBottomRightRadius: '10px',
  position: 'relative',

  '&[data-aero=true]': {
    backgroundColor: 'rgba(241, 241, 241, 0.15)',
  },
}));

export default () => {
  const [expressionDialog, toggleExpressionDialog] = useState(false);
  const [codeEditorDialog, toggleCodeEditorDialog] = useState(false);
  const [inputFocus, toggleInputFocus] = useState(false);
  const [at, setAt] = useState({ enable: false, content: '' });
  const $input = useRef<HTMLInputElement>(null);
  const { aero } = useRecoilValue(statusByClient);
  const [expressions, setExpressions] = useState<
    { image: string; width: number; height: number }[]
  >([]);

  return (
    <Textarea
      sx={{
        padding: '0px',
        lineHeight: '32px',
        outline: 'none',
        fontSize: '14px',
        color: '#666',
        userSelect: 'auto',
        width: '100%',
        backgroundColor: 'rgba(246,245,245,0.56)',
      }}
      placeholder="Type in here…"
      minRows={3}
      maxRows={3}
    />
  );
};
