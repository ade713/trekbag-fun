import * as zustand from 'zustand';
import { act } from '@testing-library/react';

const { create: actualCreate, createStore: actualCreateStore } = jest.requireActual('zustand');

export const storeResetFns = new Set();

export const createUncurried = (stateCreator) => {
  const store = actualCreate(stateCreator);
  const initialState = store.getInitialState();
  storeResetFns.add(() => {
    store.setState(initialState, true);
  });

  return store;
};

export const create = ((stateCreator) => {
  console.log('zustand create mock...');

  return typeof stateCreator === 'function' ?
    createUncurried(stateCreator) :
    createUncurried;
});

const createStoreUncurried = (stateCreator) => {
  const store = actualCreateStore(stateCreator);
  const initialState = store.getInitialState();
  storeResetFns.add(() => {
    store.setState(initialState, true);
  });

  return store;
};

export const createStore = ((stateCreator) => {
  console.log('zustand createStore mock...');

  return typeof stateCreator === 'function' ?
    createStoreUncurried(stateCreator) :
    createStoreUncurried;
});

afterEach(() => {
  act(() => {
    storeResetFns.forEach(resetFn => {
      resetFn();
    });
  });
});
