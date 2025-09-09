import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AccordionList, { type AccordionListProps } from "../AccordionList";
import { accordionItems } from "../../../shared/mocks/accordion.data";

describe("Accordion tests", () => {
	it("should render accordion without any errors", () => {
		const accordionProps: AccordionListProps = {
			items: accordionItems,
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
		const accordionProps: AccordionListProps = {
			items: accordionItems,
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
		const accordionProps: AccordionListProps = {
			items: accordionItems,
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
