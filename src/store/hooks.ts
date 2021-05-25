import {createTypedHooks} from 'easy-peasy';
import {NewsModel} from './store';

const typedHooks = createTypedHooks<NewsModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;