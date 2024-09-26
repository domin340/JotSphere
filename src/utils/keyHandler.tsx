import { Component } from "react";
import KeyStore, { type KeyboardInput } from "./KeyStore";

export type None = 0;

export class KeyListener extends Component {
  private handleKeyDown: (event: KeyboardEvent) => void;
  constructor(props: None) {
    super(props);
    this.handleKeyDown = (event: KeyboardEvent) => {
      const state = KeyStore.getState();
      const key = event.key as KeyboardInput;
      state.setPressed(key);
      state.listeners
        .filter((listener) => listener.key == key)
        .forEach((listener) => listener.cb(event));
    };
  }
  componentDidMount(): void {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount(): void {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  render() {
    return null;
  }
}
