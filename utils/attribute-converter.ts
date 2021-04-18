import { ButtonProps } from '../@types/button';

type DataProps = {
  [k: string]: string,
}

/* @Object.entries convert { key: value } to array [value, value] */
/* @Object.fromEntries convert array to { key: value } */
const AttributeToData = (props: ButtonProps): DataProps => {
  const dataProperties = Object.fromEntries(
    Object.entries(props).map(([key, value]) => [`data-${key.toLowerCase()}`, value])
  );
  return dataProperties;
};

export { AttributeToData };
