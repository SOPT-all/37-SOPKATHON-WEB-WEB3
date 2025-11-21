import type { SVGProps } from 'react';
const SvgIconCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path fill='#000' d='M10.5 16a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z' />
    <path
      fill='#000'
      fillRule='evenodd'
      d='M20.103 5.005A1 1 0 0 1 21 6v12l-.005.102a1 1 0 0 1-.893.893L20 19H4a1 1 0 0 1-.995-.898L3 18V6a1 1 0 0 1 1-1h16zM4 18h16V9H4zM4 8h16V6H4z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgIconCard;
