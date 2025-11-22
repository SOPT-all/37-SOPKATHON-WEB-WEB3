export interface ChipProps {
  variant: 'faith' | 'hope' | 'love' | 'all';
  type: 'button';
  chipStatus?: 'active' | 'inactive';
  onClick?: () => void;
}
