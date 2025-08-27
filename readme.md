#1 Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

#Answer:

- `getElementById`: Selects a single element by its **unique id**.  
- `getElementsByClassName`: Selects **all elements** with the same class name.  
- `querySelector`: Selects the **first element** that matches a CSS selector (id, class, or tag).  
- `querySelectorAll`: Selects **all elements** that match a CSS selector, returns a **NodeList**.

#2 How do you create and insert a new element into the DOM?

#Answer:

- **Create element:** `document.createElement(tagName)`  
- **Add content or attributes (optional):**  
  - `element.innerText = "text"`  
  - `element.className = "class"`  
  - `element.id = "id"`  
- **Insert into DOM:**  
  - `parent.appendChild(element)` → add at end  
  - `parent.prepend(element)` → add at beginning  
  - `parent.insertBefore(element, referenceElement)` → add before specific element

#3 What is Event Bubbling and how does it work?

#Answer:

- **Event Bubbling:** When an event happens on an element, it **first runs on that element** and then **bubbles up** to its parent elements, all the way to the `document`.  
- **How it works:**  
  - Example: Click on a button inside a div.  
    - The click event triggers on the **button first**,  
    - Then on the **div**,  
    - Then on the **body**,  
    - Finally on the **document**.  
- **Use case:** Allows parent elements to **listen to events of child elements** without attaching separate listeners to each child.

#4 What is Event Delegation in JavaScript? Why is it useful?

#Answer:

- **Event Delegation:** A technique where a **parent element handles events** for its child elements instead of adding separate event listeners to each child.  
- **How it works:** The parent listens for events that **bubble up** from its children.  
- **Why useful:**  
  - Reduces the **number of event listeners**, improving performance.  
  - Works for **dynamically added elements** that don’t exist initially.  

#5 What is the difference between preventDefault() and stopPropagation() methods?

#Answer:

- **preventDefault():**  
  - Prevents the browser's **default action** for an event.  
  - Example: Prevent form submission or link navigation.  
  ```javascript
  event.preventDefault();

