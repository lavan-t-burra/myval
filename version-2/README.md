# Will You Be My Valentine?

Welcome to the "Will You Be My Valentine?" project, a playful and interactive way to ask that special someone the big question this Valentine's Day. Hosted as a GitHub Page, this project offers a unique blend of creativity and technology to make your Valentine's Day proposal unforgettable.

## Overview

"Will You Be My Valentine?" is a web-based application that presents users with the question "Will you be my valentine?" followed by two options: "Yes" and "No". What makes this project special is the interactive and engaging way it handles responses, especially if someone tries to click "No".

## Features

- **Interactive Question**: The core of the project is the interactive Valentine's Day proposal.
- **Responsive Design**: Crafted to look great on both desktop and mobile devices.
- **Playful Interaction**: If the user attempts to click "No", watch out for a little surprise that might just sway their decision!

## Technology

This project is built using simple yet powerful web technologies:
- HTML
- CSS
- JavaScript

## How to View

To experience "Will You Be My Valentine?", simply visit [https://lavan-t-burra.github.io/myval/version-2/](https://lavan-t-burra.github.io/myval/version-2/)
from any modern web browser.

## Automatic Email Delivery (Netlify)

This project can automatically send the final selections via email using a
Netlify Function and SendGrid.

1. Deploy the repository to Netlify.
2. Add the following environment variables in Netlify:
   - `SENDGRID_API_KEY`
   - `SENDGRID_FROM_EMAIL` (a verified sender in SendGrid)
   - `SENDGRID_TO_EMAIL` (optional, defaults to `burralavanteja@gmail.com`)
3. The final page will POST the selections to
   `/.netlify/functions/send-email` and display a status message.
