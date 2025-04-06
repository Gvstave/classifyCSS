# classifyCSS

A library to apply dynamic styles in the format `property[modifier]`.

### Advantages

- **Dynamic Styling**: Allows the application of CSS properties dynamically through class names.
- **Ease of Use**: Simplifies the process of adding CSS styles directly within the HTML, reducing the need for separate CSS files.
- **Modular**: Encourages the use of modular and reusable CSS classes.
- **Reset Styles**: Provides a convenient way to reset styles with a single class.
- **Familiar Concept**: Uses the concept that you already know in CSS and provides ready-to-use classes like `reset`.

### Limitations

- **Limited to Inline Styles**: Styles are applied as inline styles, which can lead to specificity issues.
- **No CSS Preprocessing**: Does not support CSS preprocessing like SASS or LESS.
- **Performance Concerns**: Performance may degrade with a large number of elements due to the use of JavaScript for applying styles.
- **Class Format Dependency**: Requires classes to follow a specific format (`property[modifier]`), which might not be intuitive for all users.
- **Limited Advanced CSS Support**: Does not handle advanced CSS properties and modifiers.

### Installation

To use `classifyCSS` in your project, include the `classify.js` script in your HTML file:

```html
<script src="https://github.com/Gvstave/classifyCSS/classify.js"></script>

