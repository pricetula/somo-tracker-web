import React from 'react';

type DynamicElementProps<T extends keyof JSX.IntrinsicElements> = {
  el: keyof JSX.IntrinsicElements,
  children: React.ReactNode,
} & JSX.IntrinsicElements[T]

function DynamicElement<T extends keyof JSX.IntrinsicElements = 'div'>({
  el,
  children,
  ...props
}: DynamicElementProps<T>) {
  return React.createElement(
    el,
    props,
    children
  );
}

export default DynamicElement;
