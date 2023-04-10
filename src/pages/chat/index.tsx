import React, { type Ref, useEffect, useMemo, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import { isMobile } from '@site/src/pages/chat/isMobile';
import inobounce from '@site/src/pages/chat/inobounce';
import { OwnerStateProps } from '@site/src/pages/chat/Props';
import Chat from './Chat';
import { RecoilRoot } from 'recoil';
import '@fontsource/public-sans';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import { styled } from '@mui/system';
/**
 * 获取窗口宽度百分比
 */
function getWidthPercent(innerWidth: number) {
  let width = 0.6;
  if (isMobile) {
    width = 1;
  } else if (innerWidth < 1000) {
    width = 0.9;
  } else if (innerWidth < 1300) {
    width = 0.8;
  } else if (innerWidth < 1600) {
    width = 0.7;
  } else {
    width = 0.6;
  }
  return width;
}

/**
 * 获取窗口高度百分比
 */
function getHeightPercent(innerHeight: number) {
  let height = 0.8;
  if (isMobile) {
    height = 1;
  } else if (innerHeight < 1000) {
    height = 0.9;
  } else {
    height = 0.8;
  }
  return height;
}

const RootStyle = styled('div')({
  width: '100%',
  overflow: 'hidden',
  flex: 1,
});

const BlurStyle = styled('div')<{ ownerState: OwnerStateProps }>(
  ({ theme, ownerState }) => ({
    filter: 'blur(10px)',
    position: 'absolute',
    ...ownerState,
  }),
);

const ChildStyle = styled('div')<{ ownerState: OwnerStateProps }>(
  ({ theme, ownerState }) => ({
    display: 'flex',
    borderRadius: '10px',
    boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.5)',
    width: ownerState.width,
    height: ownerState.height,
    left: ownerState.left,
    top: ownerState.top,
    position: 'absolute',
  }),
);

export default () => {
  const blurBackgroundRef = useRef(null);
  const rootRef = useRef(null);

  // 计算窗口高度/宽度百分比
  const [clientWidth, setClientWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  // 计算窗口高度/宽度百分比
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const resizeWindow = () => {
    setClientHeight(rootRef.current.clientHeight);
    setClientWidth(rootRef.current.clientWidth);
    setWidth(getWidthPercent(rootRef.current.clientWidth));
    setHeight(getHeightPercent(rootRef.current.clientHeight));
  };

  useEffect(() => {
    resizeWindow();
  }, [rootRef.current]);

  useEffect(() => {
    window.onresize = resizeWindow;
    inobounce(blurBackgroundRef.current);
  }, []);

  const ownerState = useMemo(
    () => ({
      backgroundImage: `url(${
        require('@site/static/img/WechatIMG1148.jpeg').default
      })`,
      backgroundPosition: `${(-(1 - width) * clientWidth) / 2}px ${
        (-(1 - height) * clientHeight) / 2
      }px`,
      backgroundSize: 'cover',
      width: `${width * clientWidth}px`,
      height: `${height * clientHeight}px`,
      left: `${((1 - width) / 2) * 100}%`,
      top: `${(1 - height) * 100}%`,
    }),
    [width, height, clientHeight, clientWidth],
  );

  return (
    <RecoilRoot>
      <CssVarsProvider>
        <Layout>
          <RootStyle ref={rootRef}>
            <BlurStyle ref={blurBackgroundRef} ownerState={ownerState} />
            <ChildStyle ownerState={ownerState}>
              <Chat />
            </ChildStyle>
          </RootStyle>
        </Layout>
      </CssVarsProvider>
    </RecoilRoot>
  );
};
