import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';
import { History } from 'history';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    counter
  });
}

export type GlboalState = ReturnType<typeof createRootReducer> extends Reducer<infer S, any> ? S : never;