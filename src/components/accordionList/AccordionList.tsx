import { useState } from "react";
import Accordion from "../accordion/Accordion";

const AccordionList = ({
	items,
	allowMultiple,
}: {
	items: { title: string; content: string }[];
	allowMultiple: boolean;
}) => {
	const [openItems, setOpenItems] = useState<Set<number>>(new Set());
	const [openItem, setOpenItem] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		if (allowMultiple) {
			const newOpenItems = new Set(openItems);
			if (newOpenItems.has(index)) {
				newOpenItems.delete(index);
			} else {
				newOpenItems.add(index);
			}
			setOpenItems(newOpenItems);
		} else {
			setOpenItem(openItem === index ? null : index);
		}
	};

	const isOpen = (index: number) => {
		if (allowMultiple) {
			return openItems.has(index);
		}
		return openItem === index;
	};
	return (
		<div data-testid="accordion-list" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
			{items.map((item, index) => (
				<Accordion {...item} itemIndex={index} handleToggle={handleToggle} isOpen={isOpen(index)} />
			))}
		</div>
	);
};

export default AccordionList;
