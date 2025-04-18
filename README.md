# Spanish Flashcards App - README

## Overview
A React-based web application for learning Spanish vocabulary through flashcards and word lists. The app allows users to:
- Browse words by categories (themes)
- Practice with interactive flashcards
- Add custom words and themes
- Track progress through word lists

## Features

### Core Functionality
- **Flashcard System**: Flip cards to reveal translations
- **Theme Filtering**: Organize cards by categories (e.g., "la familia", "la casa")
- **Navigation Controls**: Previous/Next buttons and card counter
- **Word Management**: Skip words you've mastered

### Word Management
- Add new words with translations
- Create custom themes
- Delete words via double-click
- View all words in categorized lists

### UI Components
- Responsive card design with flip animation
- Theme selector dropdown
- Intuitive navigation header
- Clean, user-friendly interface

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Usage

### Pages
- **Start Page**: Welcome screen with brief instructions
- **Wordlist**: View all vocabulary organized by theme
- **Flashcards**: Interactive flashcard practice interface

### Adding Content
1. **New Words**:
    - Fill in the word, translation, and select a theme
    - Click the "+" button to add

2. **New Themes**:
    - Enter a theme name in the "new theme" field
    - Click the "+" button to create

### Flashcard Controls
- Click card to flip between word and translation
- Use arrow buttons to navigate
- Click "X" to skip/remove a card from current session
- Click refresh button to restart the current theme

## Data Structure

### Initial State
The app comes pre-loaded with:
- 4 themes: "la familia", "la casa", "el caracter", "la comida"
- 9 sample vocabulary words with translations

### Redux Store
- Manages all cards and themes
- Handles all CRUD operations:
    - Adding new cards/themes
    - Deleting cards
    - Filtering by theme

## Dependencies
- React
- React Router
- Redux
- React-Redux
- react-hook-form (for forms)
- Ant Design icons

## Future Improvements
- User authentication
- Persistent storage
- Spaced repetition algorithm
- Pronunciation audio
- Mobile optimization
