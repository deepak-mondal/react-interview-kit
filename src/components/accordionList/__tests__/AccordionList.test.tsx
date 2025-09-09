import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AccordionList from "../AccordionList";

describe("Accordion tests", () => {
	it("should render accordion without any errors", () => {
		const accordionProps = {
			items: [
				{
					title: "Accordion 1",
					content: "Accordion 1 content",
				},
				{
					title: "Accordion 2",
					content: "Accordion 2 content",
				},
				{
					title: "Accordion 3",
					content: "Accordion 3 content",
				},
			],
			allowMultiple: true,
		};
		render(<AccordionList {...accordionProps} />);
		const accordionList = screen.getByTestId("accordion-list");
		const accordionWrapper = screen.getAllByTestId("accordion");
		const accrodionTitle = screen.getAllByTestId("accordion-title");

		expect(accordionList).toBeInTheDocument();
		expect(accrodionTitle.length).toBe(3);
		expect(accordionWrapper.length).toBe(3);
	});
	it("should open only one accordion at a time", () => {
		const accordionProps = {
			items: [
				{
					title: "Accordion 1",
					content: "Accordion 1 content",
				},
				{
					title: "Accordion 2",
					content: "Accordion 2 content",
				},
				{
					title: "Accordion 3",
					content: "Accordion 3 content",
				},
			],
			allowMultiple: false,
		};

		render(<AccordionList {...accordionProps} />);

		const accordionWrapper = screen.getAllByTestId("accordion");
		const firstElement = accordionWrapper[0];
		const thirdElement = accordionWrapper[2];

		fireEvent.click(firstElement);

		const accordionContent = screen.getAllByTestId("accordion-content");
		expect(accordionContent.length).toBe(1);
		expect(accordionContent[0]).toBeInTheDocument();

		fireEvent.click(thirdElement);

		const accordionContentAfterClickingThirdElement = screen.getAllByTestId("accordion-content");
		expect(accordionContentAfterClickingThirdElement.length).toBe(1);
		expect(accordionContentAfterClickingThirdElement[0]).toBeInTheDocument();

		fireEvent.click(thirdElement);
		const accordionContentAfterReClickingthirdElement = screen.queryAllByTestId("accordion-content");
		expect(accordionContentAfterReClickingthirdElement?.length).toBe(0);
	});

	it("should open multiple accordion at a time", () => {
		const accordionProps = {
			items: [
				{
					title: "Accordion 1",
					content: "Accordion 1 content",
				},
				{
					title: "Accordion 2",
					content: "Accordion 2 content",
				},
				{
					title: "Accordion 3",
					content: "Accordion 3 content",
				},
			],
			allowMultiple: true,
		};

		render(<AccordionList {...accordionProps} />);

		const accordionWrapper = screen.getAllByTestId("accordion");
		const firstElement = accordionWrapper[0];
		const thirdElement = accordionWrapper[2];

		fireEvent.click(firstElement);

		const accordionContent = screen.getAllByTestId("accordion-content");
		expect(accordionContent.length).toBe(1);
		expect(accordionContent[0]).toBeInTheDocument();

		fireEvent.click(thirdElement);

		const accordionContentAfterClickingThirdElement = screen.getAllByTestId("accordion-content");
		expect(accordionContentAfterClickingThirdElement.length).toBe(2);
		expect(accordionContentAfterClickingThirdElement[0]).toBeInTheDocument();

		fireEvent.click(firstElement);
		const accordionContentAfterReClickingFirstElement = screen.getAllByTestId("accordion-content");
		expect(accordionContentAfterReClickingFirstElement.length).toBe(1);
	});
});
