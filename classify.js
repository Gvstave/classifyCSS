const applyDynamicStyles = () => {
  const elements = document.querySelectorAll('[class*="["]'); // Select all elements with classes that contain "["

  elements.forEach((element) => {
    const classes = Array.from(element.classList);

    classes.forEach((className) => {
      // Regex to match classes in the form of `property[modifier]`
      const match = className.match(/([a-zA-Z-]+)\[([^\]]+)\]/);

      if (match) {
        const property = match[1]; // Capture the CSS property
        const modifiers = match[2]; // Capture the modifier value

        applyModifiers(element, property, modifiers);
      } else {
        console.error(
          `Invalid class format: "${className}". Ensure it follows the pattern: property[modifier]`
        );
      }
    });
  });
};

const applyModifiers = (element, property, modifiers) => {
  const modifierParts = modifiers.split("-").join(" ");
  if (property === "class" && modifiers === "reset") {
    resetElementStyles(element);
  } else {
    element.style[property] = modifierParts;
  }
};

const resetElementStyles = (element) => {
  element.style.margin = "0px";
  element.style.padding = "0px";
  element.style.boxSizing = "border-box";
};

window.addEventListener("DOMContentLoaded", applyDynamicStyles);
