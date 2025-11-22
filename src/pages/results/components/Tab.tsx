import * as s from './Tab.css';
import type { TabMenu } from '../ResultPage';

interface Tab {
  click: TabMenu;
  setClick: (_value: TabMenu) => void;
}

const Tab = ({ click, setClick }: Tab) => {
  const handleTabClick = (value: TabMenu) => {
    setClick(value);
  };

  return (
    <div className={s.tab}>
      <div
        className={s.tabMenu({
          styleType: click === 'origin' ? 'active' : 'unActive',
        })}
        onClick={() => handleTabClick('origin')}
      >
        원본
      </div>
      <div
        className={s.tabMenu({
          styleType: click === 'tale' ? 'active' : 'unActive',
        })}
        onClick={() => handleTabClick('tale')}
      >
        설화
      </div>
    </div>
  );
};

export default Tab;
