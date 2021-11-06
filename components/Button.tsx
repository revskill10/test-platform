import {useButton} from '@react-aria/button';
import React from 'react';
function Button(props) {
  let ref = React.useRef();
  let {buttonProps} = useButton(props, ref);

  return (
    <button {...buttonProps} className='btn' ref={ref}>
      {props.children}
    </button>
  );
}

export default Button