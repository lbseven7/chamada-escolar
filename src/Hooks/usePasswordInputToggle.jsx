import { useState } from 'react';

export default function usePasswordInputToggle() {
  const [type, setType] = useState('password');
  const [imageState, setImageState] = useState(false);

  function inputTypeHandler() {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
    setImageState((prev) => !prev);
  }

  return { type, imageState, inputTypeHandler };
}
