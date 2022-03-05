import React, { useState } from 'react';
import { usePopper } from 'react-popper';
// import style from './Popper.module.scss';

const Popper = () => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  // const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <>
      <button ref={setReferenceElement}>
        Reference element
      </button>

      <span ref={setPopperElement} style={styles.popper} {...attributes.popper}>
        Popper element
        {/* <span ref={setArrowElement} style={styles.arrow} /> */}
      </span>
    </>
  );
};

export default Popper;
