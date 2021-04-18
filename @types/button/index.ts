import { ReactNode,  ButtonHTMLAttributes } from 'react';

export interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: `sm` | `md` | `lg`;
  color: `default` | `primary` | `secondary` | `danger`;
  startIcon?: `menu` | `github` | `store` | `terminal`,
  endIcon?: `menu` | `github` | `store` | `terminal`,
  disabled: boolean,
  variant: `text` | `outline`,
  disableShadows: boolean;
  iconColor: string;
  children: ReactNode | Element;
  type: `submit` | `button` | `reset`
  iconSize: number
}

export type ButtonProps = Partial<Button>;
