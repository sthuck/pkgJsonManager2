import {ProjectTypeKeys, ProjectTypes} from '../actions/projects';

export interface IProject {
  id: string;
  folders: string[];
  name: string;
}

export default function projects(state: IProject[] = [], action: ProjectTypes) {
  switch (action.type) {
    case ProjectTypeKeys.ADD_PROJECT: {
      const {id, name} = action;
      return [...state, {id, name, folders: []}];
    }
    case ProjectTypeKeys.ADD_FOLDERS_TO_PROJECT: {
      const index = state.findIndex(p => action.id === p.id);
      const project = {...state[index], folders: state[index].folders.concat(action.folders)};
      return [...state.slice(0, index), project, ...state.slice(index + 1)];
    }
    case ProjectTypeKeys.REMOVE_PROJECT: {
      const index = state.findIndex(p => action.id === p.id);
      return state.slice(0, index).concat(state.slice(index + 1));
    }
    case ProjectTypeKeys.REMOVE_FOLDER: {
      const index = state.findIndex(p => action.id === p.id);
      const project = {...state[index], folders: state[index].folders.filter(f => f !== action.folder)};
      return [...state.slice(0, index), project, ...state.slice(index + 1)];
    }
    default:
      return state;
  }
}
