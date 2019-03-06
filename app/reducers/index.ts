import {combineReducers, Reducer} from 'redux';
import {connectRouter} from 'connected-react-router';
import projects from './projects';
import {History} from 'history';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    projects,
  });
}

export type GlboalState = ReturnType<typeof createRootReducer> extends Reducer<infer S, any> ? S : never;
