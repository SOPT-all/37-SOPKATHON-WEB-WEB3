export interface ChipProps {
  variant: 'faith' | 'hope' | 'love';
  type: 'button';
  chipStatus?: 'active' | 'inactive';
  onClick?: () => void;
}
