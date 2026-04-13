import { useAppSelector } from '../hooks';
import { isAuthSelector } from '../slices';

export const useIsAuth = () => useAppSelector(isAuthSelector);
