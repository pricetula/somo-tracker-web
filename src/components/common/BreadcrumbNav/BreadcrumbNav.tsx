import React from 'react';
import style from './BreadcrumbNav.module.scss';

const list = [
  'Home',
  'Dil emma',
  'Por tiuncle',
  'Rai nmaker',
  // 'Cou rante',
  // 'Gon goozle',
  // 'Rio meter',
  // 'Bla sienWonky',
  // 'Arr ogate',
  // 'Cre nelAgita',
  // 'Qui nquadrate',
  // 'Den ouement',
  // 'Glu miferous',
  // 'Zoc treeEgads',
  // 'Sta lactiform',
  // 'Rin dfleis',
  // 'Pin khotBlewit',
  // 'Fil ibuster',
  // 'Cli thridiate',
  // 'Bet hezSmegma',
  // 'Hyd ropathy',
  // 'Sco fflaw',
  // 'Ism atic',
  // 'Kid dowJest',
  // 'Nut arian',
  // 'Non plussed',
  // 'Hic klanPaseo',
  // 'Jod ikKazoo',
  // 'Gho kaaMercer',
  // 'Bra nnigan',
  // 'Sed igitated',
  // 'Arc hietGerund',
  // 'Tri stypooStang',
  // 'Fla bbergast',
  // 'Diz zyduckVolta',
];

const BreadcrumbNav = () => {
  const [shownIndexes, setShownIndexes] = React.useState([]);
  const [hidenIndexes, setHidenIndexes] = React.useState([]);
  const listEl = React.useRef(null);
  const navEl = React.useRef(null);

  React.useEffect(() => {
    if (listEl && navEl) {
      let navWidth = navEl?.current?.clientWidth || 0;
      if (navWidth) {
        const lItems = listEl?.current?.getElementsByTagName('li');
        let iWidths = lItems[0]?.clientWidth || 0;
        const shownIs = [0];
        const hidenIs = [];

        for (let i = lItems?.length || 0; i > 1; i--) {
          const index = i-1;
          iWidths += lItems[index]?.clientWidth;
          console.log(iWidths, navWidth, iWidths < navWidth, list[index])
          if (iWidths < navWidth) {
            shownIs.push(index);
          } else {
            hidenIs.push(index);
          }
        }

        setShownIndexes(shownIs);
        setHidenIndexes(hidenIs);
      }
    }
  }, [setShownIndexes, setHidenIndexes]);

  const shownItems = list.filter((a, i) => shownIndexes.includes(i));
  const hiddenItems = list.filter((a, i) => hidenIndexes.includes(i));

  return (
    <nav
      ref={navEl}
      aria-label="bread crumb"
      className={style.nav}
    >
      <ul>
        {shownItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul>
        {hiddenItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <ul ref={listEl} className={style.hiddenList}>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}

export default BreadcrumbNav;
