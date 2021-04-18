type Props = {
  className?: string,
  name?: string,
  label?: string,
  props?: {
    disabled?: boolean,
    variant?: `text` | `outline`,
    disableShadows?: boolean,
    size?: `sm` | `md` | `lg`,
    startIcon?: `menu` | `github` | `store` | `terminal`,
    endIcon?: `menu` | `github` | `store` | `terminal`,
    type?: `submit` | `reset` | `button`
    color?: `default` | `primary` | `secondary` | `danger`;
    iconColor?: string;
    iconSize?: number
  };
}[];

const buttonDefault: Props = [
  {
    className: `Default`,
    name: `default`,
    label: `<Button />`,
  },
  {
    className: `v_outline`,
    name: `Outline`,
    label: `<Button variant=”outline” />`,
    props: { variant: `outline` }
  },
  {
    className: `v_text`,
    name: `Text`,
    label: `<Button variant='text' />`,
    props: { variant: `text` }
  },
];

const buttonState: Props = [
  {
    className: `s_disableShadow`,
    name: `NoShadows`,
    label: `<Button disableShadow />`,
    props: { disableShadows: true, size: `lg` }
  },
  {
    className: `s_disabled`,
    name: `Disabled`,
    label: `<Button disabled />`,
    props: { disabled: true }
  },
  {
    className: `v_text--d`,
    name: `Text Disabled`,
    label: `<Button variant='text' disabled />`,
    props: { disabled: true, variant: `text` }
  },
];

const buttonIcon: Props = [
  {
    className: `startIcon`,
    name: `StartIcon`,
    label: `<Button startIcon />`,
    props: {
      startIcon: `store`, size: `lg`, color: `primary`, iconColor: `#FFF`, iconSize: 16
      }
  },
  {
    className: `github`,
    name: ``,
    label: `<Button />`,
    props: {
      startIcon: `github`, color: `primary`, iconColor: `#FFF`, iconSize: 20
    }
  },
  {
    className: `endIcon`,
    name: `EndIcon`,
    label: `<Button endIcon />`,
    props: {
      endIcon: `terminal`, size: `lg`, color: `danger`, iconColor: `#FFF`, iconSize: 25
    }
  },
  {
    className: `terminal`,
    name: ``,
    label: `<Button />`,
    props: {
      startIcon: `terminal`, color: `default`, iconColor: `#111`, iconSize: 25
    }
  },
  {
    className: `default`,
    name: ``,
    label: `<Button />`,
    props: {
      endIcon: `menu`, color: `secondary`, iconColor: `#FFF`, iconSize: 20
    }
  },
];

const buttonSize: Props = [
  {
    className: `sm`,
    name: `Small`,
    label: `<Button size='sm' />`,
    props: { size: `sm`, type: `submit` }
  },
  {
    className: `md`,
    name: `Medium`,
    label: `<Button size='md' />`,
    props: { size: `md` }
  },
  {
    className: `lg`,
    name: `Large`,
    label: `<Button size='lg' />`,
    props: { size: `lg`, type: `submit` }
  },
];

const buttonType: Props = [
  {
    className: `c_default`,
    name: `Default`,
    label: `<Button color='default' />`,
    props: { color: `default`, type: `submit` }
  },
  {
    className: `c_primary`,
    name: `Primary`,
    label: `<Button color='primary' />`,
    props: { color: `primary` }
  },
  {
    className: `c_secondary`,
    name: `Secondary`,
    label: `<Button color='secondary' />`,
    props: { color: `secondary` }
  },
  {
    className: `c_danger`,
    name: `Danger`,
    label: `<Button color='danger' />`,
    props: { color: `danger`, type: `submit` }
  },
];


export { buttonDefault, buttonState, buttonIcon, buttonSize, buttonType };
