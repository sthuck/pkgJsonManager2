export enum ProjectTypeKeys {
  ADD_PROJECT = 'ADD_PROJECT',
  REMOVE_PROJECT = 'REMOVE_PROJECT',
  ADD_FOLDERS_TO_PROJECT = 'ADD_FOLDERS_TO_PROJECT',
  REMOVE_FOLDER = 'REMOVE_FOLDER',
}

interface AddProject {
  type: ProjectTypeKeys.ADD_PROJECT;
  id: string;
  name: string;
}

interface RemoveProject {
  type: ProjectTypeKeys.REMOVE_PROJECT;
  id: string;
}

interface AddFoldersToProject {
  type: ProjectTypeKeys.ADD_FOLDERS_TO_PROJECT;
  id: string;
  folders: string[];
}

interface RemoveFolder {
  type: ProjectTypeKeys.REMOVE_FOLDER;
  id: string;
  folder: string;
}

export type ProjectTypes = AddProject | AddFoldersToProject | RemoveProject | RemoveFolder;

export const addProject = (id: string, name: string) => ({
  type: ProjectTypeKeys.ADD_PROJECT,
  id,
  name,
});

export const addFolders = (id: string, folders: string[]) => ({
  type: ProjectTypeKeys.ADD_FOLDERS_TO_PROJECT,
  id,
  folders,
});

export const removeFolder = (id: string, folder: string) => ({
  type: ProjectTypeKeys.REMOVE_FOLDER,
  id,
  folder,
});

export const removeProject = (id: string) => ({
  type: ProjectTypeKeys.REMOVE_FOLDER,
  id,
});

export default {addProject, addFolders, removeFolder, removeProject};
