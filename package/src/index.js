import { useMemo, useRef } from "react";

import makeId from "./make-id";

/**
 * A React hook to generate a very-likely unique id,
 * persistent across re-renders.
 * @name useId
 * @param {import("./index").HookOptions} [opts]
 * @returns {string}
 */
const useId =
  (opts) => {
    const { length = 6, prefix = "" } = opts || {};

    if (length < 1) {
      throw new Error("[useId] received invalid length.");
    }

    const ref = useRef();

    useMemo(
      () => {
        const id = makeId(length);

        ref.current = prefix
          ? prefix + "-" + id
          : id;
      },
      [length, prefix]
    );

    return ref.current;
  };

export default useId;
