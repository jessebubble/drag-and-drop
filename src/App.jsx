import { useState } from "react";

const DragAndDrop = () => {
    const [items, setItems] = useState([
        { id: "1", name: "item 1" },
        { id: "2", name: "item 2" },
        { id: "3", name: "item 3" },
        { id: "4", name: "item 4" },
        { id: "5", name: "item 5" },
        { id: "6", name: "item 6" },
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
        <div>
            <h1 className="text-4xl text-indigo-500">Drag and Drop</h1>
            <div className="flex flex-col">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between mb-4"
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
    );
};

export default function App() {
    return (
        <div className="container mx-auto px-4">
            <DragAndDrop />
        </div>
    );
}