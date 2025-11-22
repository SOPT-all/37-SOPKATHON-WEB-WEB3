export type FilterType = 'faith' | 'hope' | 'love' | 'all';

export const filterLabels: Record<FilterType, string> = {
  faith: '용기',
  hope: '소망',
  love: '사랑',
  all: '전체',
};

export const leafTypeMap: Record<string, 'FAITH' | 'HOPE' | 'LOVE'> = {
  faith: 'FAITH',
  hope: 'HOPE',
  love: 'LOVE',
};

export const convertLeafType = (
  leafType: 'FAITH' | 'HOPE' | 'LOVE'
): 'faith' | 'hope' | 'love' => {
  return leafType.toLowerCase() as 'faith' | 'hope' | 'love';
};
