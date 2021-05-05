import { useMemo, useRef } from "react";

import makeId from "./make-id";

/**
 * @typedef {Object} HookOptions
 * @property {number} [length]
 * @property {string} [prefix]
 */

/**
 * A React hook to generate a very-likely unique id,
 * persistent across re-renders.
 * @name useId
 * @param {HookOptions} [opts]
 * @returns {string}
 */
const useId =
  (opts) => {
    const { length = 6, prefix = "" } = opts || {};

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
