import { renderHook } from "@testing-library/react-hooks";

import useId from "./";

describe("useId", () => {
  it("generates random id", () => {
    const { result } = renderHook(() => useId());

    const id = result.current;

    expect(typeof id).toBe("string");
    expect(id).toHaveLength(6);
  });

  it("generates random id / custom length", () => {
    const { result } = renderHook(() => useId({ length: 4 }));

    expect(result.current).toHaveLength(4);
  });

  it("throws an error when length is not valid", () => {
    const { result } = renderHook(() => useId({ length: 0 }));

    expect(result.error.message).toBe("[useId] received invalid length.");
  });

  it("generates random id / custom prefix", () => {
    const { result } = renderHook(() => useId({ length: 4, prefix: "test" }));

    const id = result.current;

    expect(id).toHaveLength(9);
    expect(id.startsWith("test-")).toBe(true);
  });

  it("persists random id between different re-renders", () => {
    const { result, rerender } = renderHook(() => useId({ length: 4 }));

    const id = result.current;

    rerender();

    expect(result.current).toBe(id);
  });

  it("updates random id if hook settings change", () => {
    const { result, rerender } = renderHook((props) => useId({ length: props?.length || 4 }));

    expect(result.current).toHaveLength(4);

    rerender({ length: 8 });

    expect(result.current).toHaveLength(8);
  });
});
