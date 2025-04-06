# classifyCSS

A library to apply dynamic styles in the format `property[modifier]`.

## Advantages

- **Dynamic Styling**: Allows the application of CSS properties dynamically through class names.
- **Ease of Use**: Simplifies the process of adding CSS styles directly within the HTML, reducing the need for separate CSS files.
- **Modular**: Encourages the use of modular and reusable CSS classes.
- **Reset Styles**: Provides a convenient way to reset styles with a single class.
- **Familiar Concept**: Uses the concept that you already know in CSS and provides ready-to-use classes like `reset`.

## Limitations

- **Limited to Inline Styles**: Styles are applied as inline styles, which can lead to specificity issues.
- **No CSS Preprocessing**: Does not support CSS preprocessing like SASS or LESS.
- **Performance Concerns**: Performance may degrade with a large number of elements due to the use of JavaScript for applying styles.
- **Class Format Dependency**: Requires classes to follow a specific format (`property[modifier]`), which might not be intuitive for all users.
- **Limited Advanced CSS Support**: Does not handle advanced CSS properties and modifiers.

## Installation

To use `classifyCSS` in your project, include the `classify.js` script in your HTML file:

```html
<script src="https://github.com/Gvstave/classifyCSS/classify.js"></script>
```

To use `classifyCSS` in your project, include the `classify.js` script in your HTML file:

## Usage

Add classes to your HTML elements in the format property[modifier] to apply dynamic styles. For example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>classifyCSS Example</title>
    <script src="https://github.com/Gvstave/classifyCSS/classify.js"></script>
</head>
<body class="class[reset]">
This body has reset styles applied.
    <div class="background-color[blue] font-size[20px] padding[10px-20px]">
        This div has dynamic styles applied.
    </div>
</body>
</html>
```

In this example, the The body element will have its margin, padding, and box-sizing reset. the div will have a blue background color, a font size of 20px, and padding of 10px 20px.

## License

This project is licensed under the MIT License. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.
