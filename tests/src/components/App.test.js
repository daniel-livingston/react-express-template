import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../../../src/components/App";

let container;

beforeEach(() => {
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	document.body.removeChild(container);
	container = null;
});

describe("<App>", () => {
	test("renders h1 and p tags", () => {
		act(() => {
			ReactDOM.render(<App />, container);
		});
		const h1 = container.querySelector("h1");
		const p = container.querySelector("p");
		expect(h1.textContent).toBe("App");
		expect(p.textContent).toBe(
			"This is a basic template for a React app served by an Express server"
		);
	});
});
