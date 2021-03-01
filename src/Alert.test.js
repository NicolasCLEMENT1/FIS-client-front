import React from 'react';
import Alert from './Alert';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = document.createElement("div");
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders the message", () => {
    act(() => {
        render(<Alert message='Hello' onClose={jest.fn()}/>, container);
    });
    expect(container.hasChildNodes()).toBe(true);
    expect(container.textContent).toEqual(expect.stringContaining("Error! Hello"));
});

it("does not render if message is null", () => {
    act(() => {
        render(<Alert message={null} onClose={jest.fn()}/>, container);
    });
    expect(container.hasChildNodes()).toBe(false);
})

it("sends event if button is clicked", () => {
    const onClose = jest.fn();
    act(() => {
        render(<Alert message="test" onClose={onClose}/>, container);
    });

    const button = document.querySelector("[data-testid=close]");

    act(() => {
        button.dispatchEvent(new MouseEvent("click", {bubbles: true}));
    });
    expect(onClose).toHaveBeenCalledTimes(1);
});