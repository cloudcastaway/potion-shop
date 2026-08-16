# Potion Shop

A web-based mobile menu app for a potion shop, built as part of the Scrimba Full Stack Path, focusing on DOM manipulation, dynamic content rendering, and CSS layout and styling.

---

## Project Overview

A [Figma design](https://www.figma.com/design/Hdgwo69Dym9vVsxbuPbl0h/Mobile-Restaurant-Menu?node-id=0-1&t=r8jwmyHIEVtTc5cL-1) was provided as a layout reference. All HTML, CSS, and JavaScript were written independently from scratch, adapting the original restaurant menu concept into a potion shop, focusing on connecting a JavaScript data array to the DOM and keeping structure, style, and logic cleanly separated.

---

## Features

- Menu items (potions) rendered dynamically from a JavaScript data array
- Each item displays icon, name, ingredients, and price
- Add-to-cart functionality via a "+" button on each item
- Cart tracks selected items and quantity, rendered dynamically at the bottom of the screen
- Decrease quantity or remove items from the cart via minus and trash buttons
- Cart displays running total price
- Checkout modal with card details form, opened via a "Complete order" button and dismissed by clicking outside or the close button

---

## Project Structure

```
potion-shop/
├── assets/
│   ├── icons/
│   │   ├── bottle-health.png
│   │   ├── bottle-mana.png
│   │   ├── bottle-stamina.png
│   │   └── coin-icon.png
│   ├── buttons/
│   │   ├── add-button.png
│   │   ├── minus-button.png
│   │   └── trash-button.png
│   └── banner.png
├── data.js
├── index.css
├── index.html
├── index.js
└── README.md
```

---

## Technologies Used

- HTML5
- CSS3
  - Flexbox
- JavaScript (vanilla)

---

## Planned Improvements

- Order confirmation screen after payment
- Sparkle effect following the cursor across the page
- Distinguish the remove button from the decrease button visually
- Focus states for the card details inputs
- Input validation for the card details form
- Persist cart across page reloads
- UI and spacing refinements

---

## Credits

Potion icons created by [Magnific - Flaticon](https://www.flaticon.com/free-icons/potion "potion icons")