import { create } from "zustand";
export type KeyListenerCb = (event: KeyboardEvent) => void;

export const KeyboardKeys = [
  "Backspace",
  "Tab",
  "Enter",
  "Shift",
  "Control",
  "Alt",
  "Pause",
  "CapsLock",
  "Escape",
  "Space",
  "PageUp",
  "PageDown",
  "End",
  "Home",
  "ArrowLeft",
  "ArrowUp",
  "ArrowRight",
  "ArrowDown",
  "Insert",
  "Delete",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", 
  "F11", "F12",
  "Meta",
  "ContextMenu",
  "ScrollLock",
  "PrintScreen",
  "NumLock",
  "Numpad0", "Numpad1", "Numpad2", "Numpad3", "Numpad4", 
  "Numpad5", "Numpad6", "Numpad7", "Numpad8", "Numpad9",
  "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide",
  "NumpadDecimal", "NumpadEnter",
  "`", "-", "=", "[", "]", "\\", ";", "'", ",", ".", "/",
] as const;

export type KeyboardInput = typeof KeyboardKeys[number];

type KeyListenerType = {
  key: KeyboardInput;
  cb: KeyListenerCb;
};

interface KeyStoreProps {
  pressed: KeyboardInput | null;
  setPressed: (pressed: KeyboardInput) => void;
  listeners: KeyListenerType[];
  on: (key: KeyboardInput, cb: KeyListenerCb) => void;
}

export default create<KeyStoreProps>((set) => ({
  pressed: null,
  setPressed: (pressed) => set({ pressed }),
  listeners: [],
  on: (key, cb) =>
    set((state) => ({ listeners: [...state.listeners, { key, cb }] })),
}));
