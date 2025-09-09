const Accordion = ({
	title,
	content,
	itemIndex,
	handleToggle,
	isOpen,
}: {
	title: string;
	content: string;
	itemIndex: number;
	handleToggle: (index: number) => void;
	isOpen: boolean;
}) => {

	const handleAccordionClick = () => {
		handleToggle(itemIndex);
	};

	return (
		<div onClick={handleAccordionClick} data-testid="accordion">
			<div data-testid="accordion-title">{title ?? ""}</div>
			{isOpen && <div data-testid="accordion-content">{content ?? ""}</div>}
		</div>
	);
};

export default Accordion;
