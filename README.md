# React + TypeScript - Calendar Widget

## Overview
- A calendar widget that is created using no external libraries and is completely responsive 

## Setup
- Unzip repository
- cd to the repository (ex: cd <path/to/repository>)
- Run: **npm i** OR **npm install**
- Run: **npm run dev**

## Features
- No external libraries used.
- Custom animations on viewing of calendar widget.
- Widget contains a calendar where the user can select dates.
- Widget contains tabs which the user can select and change views.
- Users can select the number of dates they can choose (min is 1 and max is 7 dates). On selecting the number of dates, users can select the range of dates.
- On clicking on apply, the app will display the start and end dates to the console.
- Responsive (Laptop/Tablet/Mobile).

## Properties / Extensibility
- You can select year and max months to display. Below we are displaying a calendar with 12 months for the year 2024
- EX: ```<Calendar counter={counter} maxMonth={12} year={2024} />```
- You can add new tab items by adding it the Enum and creating a component to display on selection of tab

