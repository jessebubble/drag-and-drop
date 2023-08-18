# HTML Drag and Drop API

**HTML Drag and Drop** interfaces allow applications to implement drag-and-drop features in web browsers.

A user can select *draggable* elements with a mouse, then drag those elements to a *droppable* element, and release the mouse button to drop them. During the drag operation, a translucent representation of the *draggable* elements follows the pointer.

HTML drag-and-drop uses the [DOM event model](https://developer.mozilla.org/en-US/docs/Web/API/Event) and [drag events](<https://developer.mozilla.org/en-US/docs/Web/API/DragEvent>) inherited from [mouse events](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent). A typical drag operation begins when a user selects a *draggable* element, continues as the user drags the element to a *droppable* element, and ends when the user releases the dragged element.

### How to make elements draggable using the HTML Drag and Drop API:

1. **Making Elements Draggable:**
   To make an element draggable, you need to set the `draggable` attribute to `true` on the element you want to drag. For example:

   ```html
   <div draggable="true">Drag me!</div>
   ```

2. **Implementing Event Handlers:**
   You'll need to implement event handlers to control the drag-and-drop behavior. The main event handlers used in the drag-and-drop process are:

   - `dragstart`: Fired when the drag operation starts on the draggable element.
   - `dragover`: Fired when a draggable element is being dragged over a drop target.
   - `dragenter`: Fired when a draggable element enters a drop target.
   - `dragleave`: Fired when a draggable element leaves a drop target.
   - `drop`: Fired when a draggable element is dropped on a drop target.
   - `dragend`: Fired when the drag operation ends.

3. **Event Handling Steps:**

   - `dragstart`: This event is used to specify the data that will be dragged and provide feedback during the drag operation. You can set data using the `dataTransfer.setData()` method:

     ```html
     <div draggable="true" dragstart="event.dataTransfer.setData('text/plain', 'Hello')">Drag me!</div>
     ```

   - `dragover`: This event is required to allow dropping on the element. You need to prevent the default behavior to enable dropping:

     ```html
     <div
       draggable="true"
       dragstart="event.dataTransfer.setData('text/plain', 'Hello')"
       dragover="event.preventDefault()"
     >
       Drag me!
     </div>
     ```

   - `drop`: This event is used to handle the drop operation. You can retrieve the dragged data using `event.dataTransfer.getData()`:

     ```html
     <div
       draggable="true"
       dragstart="event.dataTransfer.setData('text/plain', 'Hello')"
       dragover="event.preventDefault()"
       drop="console.log(event.dataTransfer.getData('text/plain'))"
     >
       Drop here!
     </div>
     ```

4. **Customizing Drag Image:**
   You can also customize the appearance of the drag image using the `event.dataTransfer.setDragImage()` method within the `dragstart` event handler.

