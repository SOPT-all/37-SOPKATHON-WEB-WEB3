import { useState } from 'react';
import Header from '@/shared/components/header/Header';
import * as s from './ResultPage.css';
import Tab from './components/Tab';
import ResultTitle from './components/ResultTitle';
import ResultContent from './components/ResultContent';

export type TabMenu = 'origin' | 'tale';

const ResultPage = () => {
  const [click, setClick] = useState<TabMenu>('origin');

  return (
    <div>
      <Header />
      <Tab click={click} setClick={setClick} />
      <section className={s.section}>
        <ResultTitle></ResultTitle>
        <div className={s.line} />
        <ResultContent click={click} />
      </section>
    </div>
  );
};

export default ResultPage;
