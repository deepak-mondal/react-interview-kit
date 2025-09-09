import "./accordion.styles.css";

export type AccordionProps = {
	title: string;
	content: string;
	itemIndex: number;
	handleToggle: (index: number) => void;
	isOpen: boolean;
};

const Accordion = ({ title, content, itemIndex, handleToggle, isOpen }: AccordionProps) => {
	const handleAccordionClick = () => {
		handleToggle(itemIndex);
	};

	return (
		<div onClick={handleAccordionClick} data-testid="accordion" className="accordion">
			<div data-testid="accordion-title" className="accordion-title">
				{title ?? ""}
			</div>
			{isOpen && (
				<div data-testid="accordion-content" className="accordion-content">
					<div className="divider" />
					<div className="content">{content ?? ""}</div>
				</div>
			)}
		</div>
	);
};

export default Accordion;
