import { create } from 'zustand';

interface Result {
  output: string;
  time: number;
  isLoading?: boolean;
}

export interface ZState {
  sideMenu: string;
  editorTools: string;
  toggleSideMenu: (value: string) => void;
  toggleTools: (value: string) => void;
  variablesInput: string;
  headersInput: string;
  setVariablesInput: (value: string) => void;
  setHeadersInput: (value: string) => void;
  query: string;
  setQuery: (value: string) => void;
  result: Result;
  setResult: (result: Result) => void;
}

const useStore = create<ZState>((set) => ({
  sideMenu: '',
  editorTools: '',
  variablesInput: '',
  headersInput: `{
    "Content-Type": "application/json"
  }`,
  toolsSelected: 'Variables',
  query: `query
  {
    characters(page:1,filter:{name:"summer"}){
      info{count}
      results{name}
    }
  }`,
  result: {
    output: '',
    time: 0,
    isLoading: false,
  },

  toggleSideMenu: (value: string) =>
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
  setQuery: (query: string) =>
    set((state: ZState) => ({
      ...state,
      query: query,
    })),
  setResult: (result: Result) =>
    set((state: ZState) => ({
      ...state,
      result: result,
    })),
}));
export default useStore;
