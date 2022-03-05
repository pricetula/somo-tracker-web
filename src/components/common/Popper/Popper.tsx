import React from 'react';
import {useFloating, shift} from '@floating-ui/react-dom';

const Popper = () => {
  const {x, y, reference, floating, strategy} = useFloating({
    placement: 'top',
    middleware: [shift()],
  });
console.log(reference)
  return (
    <>
      <button ref={reference}>Button</button>
      <div
        ref={floating}
        style={{
          position: strategy,
          top: y ?? '',
          left: x ?? '',
        }}
      >
        Tooltip
      </div>
    </>
  );
}

export default Popper;
