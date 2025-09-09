import { describe, expect, it } from "vitest";
import Accordion from "../Accordion";
import { render, screen } from "@testing-library/react";

describe("Accordion tests", () => {
	it("should render accordion without any errors", () => {
		const accordionProps = {
			title: "Accordion 1",
			content: "Accordion 1 content",
			itemIndex: 0,
			handleToggle: () => {},
			isOpen: true,
		};
		render(<Accordion {...accordionProps} />);
		const accordionWrapper = screen.getByTestId("accordion");
		const accrodionTitle = screen.getByTestId("accordion-title");
		const accordionContent = screen.getByTestId("accordion-content");

		expect(accordionWrapper).toBeInTheDocument();
		expect(accrodionTitle).toBeInTheDocument();
		expect(accordionContent).toBeInTheDocument();
	});
});
