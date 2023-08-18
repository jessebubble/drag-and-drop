import { PageIntro } from "./components/PageIntro";
import { Container } from "./components/Container";
import { Border } from "./components/Border";
import { FadeIn } from "./components/FadeIn";
import { useState } from "react";
import { BoltIcon, BugAntIcon, CakeIcon, RadioIcon, RectangleGroupIcon, TrophyIcon, TruckIcon } from "@heroicons/react/24/solid";

const DragAndDrop = () => {
    const [items, setItems] = useState([
        { id: "1", name: <RadioIcon className="h-6 w-6 text-neutral-950" /> },
        { id: "2", name: <BoltIcon className="h-6 w-6 text-neutral-950" /> },
        { id: "3", name: <CakeIcon className="h-6 w-6 text-neutral-950" /> },
        { id: "4", name: <BugAntIcon className="h-6 w-6 text-neutral-950" /> },
        { id: "5", name: <TruckIcon className="h-6 w-6 text-neutral-950" /> },
        { id: "6", name: <TrophyIcon className="h-6 w-6 text-neutral-950" /> },
    ]);

    const handleDragStart = (event, index) => {
        event.dataTransfer.setData("text/plain", index);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event, toIndex) => {
        event.preventDefault();
        const fromIndex = event.dataTransfer.getData("text/plain");
        const updatedItems = [...items];
        const [movedItem] = updatedItems.splice(fromIndex, 1);
        updatedItems.splice(toIndex, 0, movedItem);
        setItems(updatedItems);
    };

    return (
        <Container className="mt-40">
            <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                    Drag and Drop API examples
                </h2>
            </FadeIn>
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                <FadeIn>
                    <article>
                        <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                            <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                                <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                                    <RectangleGroupIcon
                                        className="h-12 w-12 flex-none text-neutral-950"
                                    />
                                    <h3 className="flex items-center mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                                        Making Elements Draggable
                                    </h3>
                                </div>
                                <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                                        Implementing event handlers to control behavior
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                                <p className="font-display text-4xl font-medium text-neutral-950">
                                    Define the Drop Zone
                                </p>
                                <div className="mt-6 space-y-6 text-base text-neutral-600">
                                    <p>
                                        By default, the browser prevents anything from happening when dropping something onto most HTML elements. 
                                        HTML drag-and-drop uses the DOM event model and drag events inherited from mouse events. 
                                        A typical drag operation begins when a user selects a draggable element, continues as the user drags the element to a droppable element, and ends when the user releases the dragged element.
                                    </p>
                                </div>
                                <div className="mt-8 flex">
                                    <div className="flex w-full items-center justify-around bg-cosa-white border rounded-lg p-2">
                                        {items.map((item, index) => (
                                            <div
                                                key={item.id}
                                                className="bg-centro-blue hover:bg-centro-pink border border-neutral-950/10 rounded-lg p-2 mr-2"
                                                draggable
                                                onDragStart={(event) => handleDragStart(event, index)}
                                                onDragOver={(event) => handleDragOver(event, index)}
                                                onDrop={(event) => handleDrop(event, index)}
                                            >
                                                <span>{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Border>
                    </article>
                </FadeIn>
            </div>
        </Container>
    );
};

function Footer() {
    return (
        <footer className="mt-24 w-full sm:mt-32">
            <div className="border-t border-neutral-950/10 pt-12 pr-3">
                <p className="text-sm text-gray-700 text-end">
                    <a className="hover:text-centro-pink" href="https://www.jessebubble.dev/" target="_blank" rel="noreferrer">
                        jessebubble.dev <span aria-hidden="true">→</span>
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default function App() { 
    return (
        <>
            <PageIntro
                eyebrow="Drag and Drop API"
                title="Click, Drag, Drop and Release"
                >
                <p>
                    HTML Drag and Drop interfaces allow applications to implement drag-and-drop features in web browsers.
                    A user can select draggable elements with a mouse, then drag those elements to a droppable element, and release the mouse button to drop them. 
                    During the drag operation, a translucent representation of the draggable elements follows the pointer
                </p>
            </PageIntro>
            <DragAndDrop />
            <Footer />
        </>
    )
} 