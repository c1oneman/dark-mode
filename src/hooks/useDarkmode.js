import { useLocalStorage } from './useLocalStorage';
export const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage('darkmode');
  const enabled = typeof enabledState !== 'undefined' ? enabledState : false;
  return [enabled, setEnabledState];
};
