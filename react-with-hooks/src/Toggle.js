import { useState, forwardRef, useImperativeHandle } from "react";

export const Toggle = forwardRef((props: any, ref) => {
  const [state, setState] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setState(!state);
    },
  }));

  return (
    <div>
      <button>Child Button</button>
      {state && <h3>toggle state</h3>}
    </div>
  );
});
