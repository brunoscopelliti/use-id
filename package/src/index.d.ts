type HookOptions = {
  length ?: number;
  prefix ?: string;
}

declare const useId : (opts : HookOptions) => string;

export default useId;
