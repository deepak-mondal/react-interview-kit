import "./App.css";
import AccordionList from "./components/accordionList/AccordionList";

const accordionItems = [
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
];

function App() {
	return <AccordionList items={accordionItems} allowMultiple={true} />;
}

export default App;
