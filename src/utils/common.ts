export const debounceRef = (value, wait = 1000) => {
  let timer;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          console.log('🚀 ~ file: common.ts:13 ~ timer=setTimeout ~ newValue', newValue);
          trigger();
        }, wait);
      },
    };
  });
};

// 节流
export const useThrottleRef = (value, delay = 200) => {
  let canRun = true;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newVal) {
        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
          value = newVal;
          canRun = true;
          trigger();
        }, delay);
      },
    };
  });
};
