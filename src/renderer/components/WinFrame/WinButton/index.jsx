import React from 'react';
import classNAmes from 'classnames';
import PropTypes from 'prop-types';
import { AiOutlineCloseCircle, AiOutlineMinusCircle } from 'react-icons/ai';

import style from './index.module.less';

const TYPES = {
  close: 'close',
  minimize: 'minimize',
};

const ICON_CONFIG = {
  [TYPES.close]: AiOutlineCloseCircle,
  [TYPES.minimize]: AiOutlineMinusCircle,
};

const WinButton = ({ type, onClick, className }) => {
  const Icon = ICON_CONFIG[type];

  return (
    <div
      className={classNAmes(style.btn, className)}
      onClick={onClick}
      alt="aaa"
    >
      <Icon className={style.icon} />
    </div>
  );
};

WinButton.TYPES = TYPES;

WinButton.propTypes = {
  type: PropTypes.oneOf(Object.values(WinButton.TYPES)).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

WinButton.defaultProps = {
  className: '',
};

export default WinButton;
