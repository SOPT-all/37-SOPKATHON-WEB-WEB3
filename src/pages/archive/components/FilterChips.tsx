import Chip from '@/shared/components/chip/Chip';
import type { FilterType } from '../constants';
import { archiveHeaderStyle } from '../archive.css';
import type { FilterChipsProps } from '@/types/archive';

const FilterChips = ({ selectedFilter, onFilterClick }: FilterChipsProps) => {
  const filters: FilterType[] = ['all', 'faith', 'hope', 'love'];

  return (
    <div className={archiveHeaderStyle}>
      {filters.map(filter => (
        <Chip
          key={filter}
          variant={filter}
          type='button'
          chipStatus={selectedFilter === filter ? 'active' : 'inactive'}
          onClick={() => onFilterClick(filter)}
        />
      ))}
    </div>
  );
};

export default FilterChips;
