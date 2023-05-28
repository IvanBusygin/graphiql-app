import { create } from 'zustand';

export enum SideMenuOptions {
  documentation = 'Documentation',
  history = 'History',
  hidden = '',
}

export interface Result {
  output: string;
  time: number;
  isLoading?: boolean;
  status?: number;
}

export interface ZState {
  sideMenu: SideMenuOptions;
  editorTools: string;
  toggleSideMenu: (value: SideMenuOptions) => void;
  toggleTools: (value: string) => void;
  queryInput: string;
  variablesInput: string;
  headersInput: string;
  setVariablesInput: (value: string) => void;
  setHeadersInput: (value: string) => void;
  setQueryInput: (value: string) => void;
  result: Result;
  setResult: (result: Result) => void;
}

const useStore = create<ZState>((set) => ({
  sideMenu: SideMenuOptions.hidden,
  editorTools: '',
  variablesInput: `{
    "name": {"name": "morty"}
}`,
  headersInput: `{
    "Content-Type": "application/json"
}`,
  toolsSelected: 'Variables',
  queryInput: `query getByName ($name:FilterCharacter) {
  characters(filter: $name) {
    results{
      name
    }
  }
}`,
  result: {
    output: '',
    time: 0,
    isLoading: false,
  },

  toggleSideMenu: (value: SideMenuOptions) =>
    set((state: ZState) => ({
      ...state,
      sideMenu: value,
    })),

  toggleTools: (value: string) =>
    set((state: ZState) => ({
      ...state,
      editorTools: value,
    })),

  setVariablesInput: (variables: string) =>
    set((state: ZState) => ({
      ...state,
      variablesInput: variables,
    })),
  setHeadersInput: (headers: string) =>
    set((state: ZState) => ({
      ...state,
      headersInput: headers,
    })),
  setQueryInput: (queryInput: string) =>
    set((state: ZState) => ({
      ...state,
      queryInput: queryInput,
    })),
  setResult: (result: Result) =>
    set((state: ZState) => ({
      ...state,
      result: result,
    })),
}));
export default useStore;
