const applyDynamicStyles = () => {
  const elements = document.querySelectorAll('[class*="["]');  // Select all elements with classes that contain "["

  elements.forEach((element) => {
    const classes = Array.from(element.classList);

    classes.forEach((className) => {
      // Regex to match classes in the form of `property[modifier]`
      const match = className.match(/([a-zA-Z-]+)\[([^\]]+)\]/);

      if (match) {
        const property = match[1];  // Capture the CSS property
        const modifiers = match[2];  // Capture the modifier value

        applyModifiers(element, property, modifiers); // Apply the modifier to the property
      } else {
        console.error(Error`: Invalid class format in "${className}". Ensure it follows the correct pattern: property[modifier]`);
      }
    });
  });
};

const applyModifiers = (element, property, modifiers) => {
  if(property === 'class' && modifiers === 'reset'){
    element.style.margin = `0px`;
    element.style.padding = `0px`;
    element.style.boxSizing = `border-box`;
  }
  
  const modifierParts = modifiers.split("-").join(" ");
  element.style[property] = modifierParts; 

};

window.addEventListener("DOMContentLoaded", applyDynamicStyles);
