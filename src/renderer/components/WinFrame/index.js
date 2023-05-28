import React from 'react';
import PropTypes from 'prop-types';

import { api } from '@src/renderer/utils';
import { toLocale } from '@src/utils';
import icon from '@assets/icon.png';
import WinButton from '@renderer/components/WinButton';

import style from './index.module.less';

const WinFrame = ({ name, isBeta, version, children }) => {
  return (
    <div className={style.frame}>
      <header className={style.header}>
        <div className={style.titleContainer}>
          <img className={style.icon} src={icon} />
          <h1 className={style.title}>
            {toLocale(
              isBeta ? 'frame_header_title_beta' : 'frame_header_title',
              {
                name,
                version,
              }
            )}
          </h1>
        </div>
        <div className={style.btnContainer}>
          <WinButton
            className={style.btn}
            onClick={api.minimizeWin}
            type={WinButton.TYPES.minimize}
          />
          <WinButton
            className={style.btn}
            onClick={api.closeApp}
            type={WinButton.TYPES.close}
          />
        </div>
      </header>
      <div className={style.content}>{children}</div>
    </div>
  );
};

WinFrame.propTypes = {
  name: PropTypes.string,
  isBeta: PropTypes.bool,
  version: PropTypes.string,
  children: PropTypes.node.isRequired,
};

WinFrame.defaultProps = { name: '', isBeta: true, version: '' };

export default WinFrame;
