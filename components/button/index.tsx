/* eslint-disable react/button-has-type */
/* eslint-disable import/extensions */
import { FC } from 'react';

import { ButtonProps } from '../../@types/button';
import { AttributeToData } from '../../utils/attribute-converter';
import icons from './assets/icons';
import styles from './styles/Button.module.scss';

const Button: FC<ButtonProps> = ({ children, type, ...rest }) => {
  const props = AttributeToData(rest);
  const { iconColor, iconSize } = Object(rest);

  return (
    <button className={styles.button} type={type} {...props} >
      {rest.startIcon && icons[rest.startIcon](iconColor, iconSize)}
      {children}
      {rest.endIcon && icons[rest.endIcon](iconColor, iconSize)}
    </button>
  );
};

Button.defaultProps = { type: `button` };

export default Button;
