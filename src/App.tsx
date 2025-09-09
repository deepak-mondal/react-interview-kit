import "./App.css";
import AccordionList from "./components/accordionList/AccordionList";
import { accordionItems } from "./shared/mocks/accordion.data";

function App() {
	return <AccordionList items={accordionItems} allowMultiple={true} />;
}

export default App;
