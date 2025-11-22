import { useState } from 'react';
import type { ChipProps } from '@/types/chip';
import { chipStyleActive, chipStyleInactive } from './chip.css';
import FaithActive from '@/shared/assets/svg/faith-active.svg?react';
import FaithInactive from '@/shared/assets/svg/faith-inactive.svg?react';
import HopeActive from '@/shared/assets/svg/hope-active.svg?react';
import HopeInactive from '@/shared/assets/svg/hope-inactive.svg?react';
import LoveActive from '@/shared/assets/svg/love-active.svg?react';
import LoveInactive from '@/shared/assets/svg/love-inactive.svg?react';

const variantLabels = {
  faith: '용기',
  hope: '소망',
  love: '사랑',
};

const iconSize = 24;

const Chip = ({
  variant,
  type,
  chipStatus: controlledChipStatus,
  onClick,
}: ChipProps) => {
  const [internalChipStatus, setInternalChipStatus] = useState<
    'active' | 'inactive'
  >(controlledChipStatus ?? 'inactive');

  const isControlled = controlledChipStatus !== undefined;
  const chipStatus = isControlled ? controlledChipStatus : internalChipStatus;

  const getIcon = () => {
    if (variant === 'faith') {
      return chipStatus === 'active' ? (
        <FaithActive width={iconSize} height={iconSize} />
      ) : (
        <FaithInactive width={iconSize} height={iconSize} />
      );
    }
    if (variant === 'hope') {
      return chipStatus === 'active' ? (
        <HopeActive width={iconSize} height={iconSize} />
      ) : (
        <HopeInactive width={iconSize} height={iconSize} />
      );
    }
    return chipStatus === 'active' ? (
      <LoveActive width={iconSize} height={iconSize} />
    ) : (
      <LoveInactive width={iconSize} height={iconSize} />
    );
  };

  const chipStyle =
    chipStatus === 'active' ? chipStyleActive : chipStyleInactive;

  const onClickHandler = () => {
    if (!isControlled) {
      setInternalChipStatus(prev =>
        prev === 'active' ? 'inactive' : 'active'
      );
    }
    onClick?.();
  };

  return (
    <button type={type} onClick={onClickHandler} className={chipStyle}>
      {getIcon()}
      <span>{variantLabels[variant]}</span>
    </button>
  );
};

export default Chip;
