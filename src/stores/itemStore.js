import { create } from 'zustand';
import { persist } from "zustand/middleware";
import { INITIAL_ITEMS } from '../lib/constants';

export const useItemStore = create(
  persist(
    set => ({
      items: INITIAL_ITEMS,
      addItem: (newItemText) => {
        const newItem = {
          id: new Date().getTime(),
          name: newItemText,
          packed: false,
        };
        
        set(state => {
          const newItems = [...state.items, newItem];
          return { items: newItems };
        });
      },
      deleteItem: (id) => {
        set(state => {
          const newItems = state.items.filter(item => item.id !== id);
          return { items: newItems };
        });
      },
      toggleItem: (id) => {
        set(state => {
          const newItems = state.items.map(item => {
            if (item.id === id) return { ...item, packed: !item.packed };
            
            return item;
          });
      
          return { items: newItems };
        });
      },
      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      resetToInitial: () => {
        set(() => ({ items: INITIAL_ITEMS }));
      },
      markAllAsComplete: () => {
        set(state => {
          const newItems = state.items.map(item => {
            return { ...item, packed: true };
          });
      
          return { items: newItems };
        });
      },
      markAllAsIncomplete: () => {
        set(state => {
          const newItems = state.items.map(item => {
            return { ...item, packed: false };
          });
      
          return { items: newItems };
        });
      },
    }), {
      name: "items",
    }
  )
);
