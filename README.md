# Potion Shop

An interactive potion shop rendered as an open spellbook, with a responsive layout, dynamic cart, and checkout flow.

---

## Project Overview

Potion Shop began as a straightforward mobile menu app, built as part of the Scrimba Full Stack Path and based on a [restaurant menu Figma design](https://www.figma.com/design/Hdgwo69Dym9vVsxbuPbl0h/Mobile-Restaurant-Menu?node-id=0-1&t=r8jwmyHIEVtTc5cL-1) used as a starting reference. All HTML, CSS, and JavaScript were written independently from scratch, connecting a JavaScript data array to the DOM and keeping structure, style, and logic cleanly separated.

The layout was later redesigned as an open spellbook spread: a decision made to suit the theme, and one that removed the need for scrolling by placing the menu and the cart on facing pages. A closed book cover now serves as the landing screen, opening to reveal the spread on click. The layout scales responsively with viewport width, with a landscape-only prompt shown on narrow portrait screens where the spread wouldn't fit comfortably.

---

## Features

- Menu items (potions) rendered dynamically from a JavaScript data array
- Each item displays icon, name, ingredients, and price
- Add-to-cart functionality via a "+" button on each item
- Cart tracks selected items and quantity, rendered dynamically on the right-hand page
- Decrease quantity or remove items from the cart via minus and trash buttons
- Cart displays running total price
- Checkout modal with card details form, opened via a "Complete order" button and dismissed by clicking outside or the close button
- Order confirmation message displayed after payment, personalised with the customer's name
- Rotate-device prompt for narrow portrait screens, replacing the book layout with a landscape-only message
- Responsive book layout scaling with viewport width (vw/aspect-ratio) instead of fixed pixel dimensions

---

## Project Structure

```
potion-shop/
├── assets/
│   ├── buttons/
│   │   ├── add-button.png
│   │   ├── minus-button.png
│   │   └── trash-button.png
│   ├── cursors/
│   │   ├── cursor-arrow.png
│   │   └── cursor-pointer.png
│   ├── icons/
│   │   ├── bottle-health.png
│   │   ├── bottle-mana.png
│   │   ├── bottle-stamina.png
│   │   ├── coin-icon.png
│   │   └── phone-icon.png
│   ├── banner.png
│   ├── book-bg.png
│   ├── book-cover.png
│   ├── favicon.png
│   └── moon-image.png
├── data.js
├── effects.js
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
  - Animations and keyframes
  - Responsive design (media queries, viewport units)
- JavaScript (vanilla)
  - DOM manipulation & event delegation
  - LocalStorage persistence

---

## Planned Improvements

- Focus states for the card details inputs
- Input validation for the card details form
- UI and spacing refinements

---

## Credits

Potion icons created by [Magnific - Flaticon](https://www.flaticon.com/free-icons/potion "potion icons").

Banner, moon, book, and favicon artwork generated with ChatGPT. Button, phone, and coin icons generated with Claude.