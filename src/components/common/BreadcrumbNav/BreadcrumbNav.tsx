import React from 'react';
import { useRouter } from 'next/router';
import style from './BreadcrumbNav.module.scss';

const list = [
  'Home',
  'Dil emma',
  'Por tiuncle',
  'Rai nmaker',
  'Cou rante',
  'Gon goozle',
  'Rio meter',
  'Bla sienWonky',
  'Arr ogate',
  'Cre nelAgita',
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
  const router = useRouter()

  const [shown, setShown] = React.useState([]);
  const [hidden, setHidden] = React.useState([]);
  const listEl = React.useRef(null);
  const navEl = React.useRef(null);

  React.useEffect(() => {
    if (listEl && navEl) {
      console.log("Router", router)
      let navWidth = navEl?.current?.clientWidth || 0;
      if (navWidth) {
        const listItems = listEl?.current?.getElementsByTagName('li');
        const showIndexes = [0];
        const hideIndexes = [];

        let totalItemWidths = listItems[0]?.clientWidth || 0;

        if (totalItemWidths) {
          totalItemWidths += 50
        }

        let addExpander = false;

        for (let i = listItems?.length || 0; i > 1; i--) {
          const index = i-1;

          totalItemWidths += listItems[index]?.clientWidth;

          if (totalItemWidths < navWidth) {
            showIndexes.push(index);
          } else {
            if (!addExpander) {
              addExpander = true;
            }

            hideIndexes.push(index);
          }
        }

        let showCollection = [];
        let hideCollection = [];

        list.forEach((item, itemIndex) => {
          if (showIndexes.includes(itemIndex)) {
            showCollection.push(item);
            if (itemIndex === 0 && addExpander) {
              showCollection.push('[...]')
            }
          } else if (hideIndexes.includes(itemIndex)) {
            hideCollection.push(item);
          }
        })

        if (showCollection.length) {
          setShown(showCollection);
        }

        if (hideCollection.length) {
          setHidden(hideCollection);
        }
      }
    }
  }, [setShown, setHidden]);

  return (
    <nav
      ref={navEl}
      aria-label="bread crumb"
      className={style.nav}
    >
      <ul>
        {shown.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul>
        {hidden.map((item) => (
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
