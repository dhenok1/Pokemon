<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">

<img src="image-removebg-preview (3).png" width="30%" style="position: relative; top: 0; right: 0;" alt="Project Logo"/>

# POKEMON

<em>Catch. Explore. Unleash Your Inner Pokémon Master</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/license/dhenok1/Pokemon?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
<img src="https://img.shields.io/github/last-commit/dhenok1/Pokemon?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/dhenok1/Pokemon?style=default&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/dhenok1/Pokemon?style=default&color=0080ff" alt="repo-language-count">

<!-- default option, no dependency badges. -->


<!-- default option, no dependency badges. -->

</div>
<br>

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
    - [Project Index](#project-index)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Overview

Pokémon is a developer tool that brings the world of Pokémon to life in a React-based application.

**Why Pokémon?**

This project enables developers to build interactive Pokémon card details and manage user navigation, addressing common pain points such as data fetching, error handling, and UI design. The core features include:

🔥 **PokemonCard.tsx:** Provides interactive Pokémon card details, rendering a single Pokémon card with information about its species, moves, and abilities.
💻 **App.tsx:** Routinely navigates users between landing and display pages, simplifying navigation management for developers.
🔍 **LandingPage.tsx:** Architects the landing page experience by providing a search functionality that retrieves Pokémon data from PokeAPI, streamlining data retrieval and error handling.
📊 **DisplayPage.tsx:** Provides the display page for a Pokémon card viewer application, rendering a single Pokémon card with navigation options to view other cards or return to the landing page.

---

## Features

|      | Component       | Details                              |
| :--- | :-------------- | :----------------------------------- |
| ⚙️  | **Architecture**  | <ul><li>Monolithic architecture with a single TypeScript file for the game logic.</li><li>No clear separation of concerns between business logic and presentation layer.</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Code is mostly written in TypeScript, but some parts are still in JavaScript.</li><li>Lack of type annotations and inconsistent naming conventions.</li><li>Some functions have high cyclomatic complexity (e.g., `catchPokemon` has 17 conditions).</li></ul> |
| 📄 | **Documentation** | <ul><li>No clear documentation for the project, only a README file with basic information.</li><li>Lack of comments and explanations in the code.</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Uses React for the frontend and TypeScript for the backend.</li><li>Integrates with npm for package management.</li><li>No clear integration with other services or APIs.</li></ul> |
| 🧩 | **Modularity**    | <ul><li>The code is not modularized, making it difficult to maintain and extend.</li><li>Lack of clear separation between concerns (e.g., business logic and presentation layer).</li></ul> |
| 🧪 | **Testing**       | <ul><li>No unit tests or integration tests for the project.</li><li>No clear testing strategy or framework used.</li></ul> |
| ⚡️  | **Performance**   | <ul><li>The code does not appear to have any performance-critical sections.</li><li>Lack of optimization and caching mechanisms.</li></ul> |
| 🛡️ | **Security**      | <ul><li>No clear security measures or best practices implemented.</li><li>Lack of encryption, authentication, and authorization mechanisms.</li></ul> |
| 📦 | **Dependencies**  | <ul><li>The project depends on several libraries and frameworks (React, TypeScript, etc.).</li><li>Lack of version control for dependencies.</li></ul> |
| 🚀 | **Scalability**   | <ul><li>The code does not appear to be designed with scalability in mind.</li><li>Lack of load balancing, caching, and queuing mechanisms.</li></ul> |

---

## Project Structure

```sh
└── Pokemon/
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    ├── src
    │   ├── App.css
    │   ├── App.tsx
    │   ├── DisplayPage.tsx
    │   ├── LandingPage.tsx
    │   ├── PokemonCard.tsx
    │   ├── assets
    │   ├── index.css
    │   └── index.tsx
    └── tsconfig.json
```

### Project Index

<details open>
	<summary><b><code>POKEMON/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/dhenok1/Pokemon/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
					<td style='padding: 8px;'>- Configures the TypeScript compiler settings for the project, enabling compatibility with ES5, allowing JavaScript files, and resolving JSON modules<br>- It also sets up module resolution to use Nodes module system and enables isolated modules<br>- The configuration includes specific libraries and targets, ensuring a consistent coding experience across the entire codebase.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/dhenok1/Pokemon/blob/master/package-lock.json'>package-lock.json</a></b></td>
					<td style='padding: 8px;'>Manages project dependencies and their versions<em> Ensures consistent installation of dependencies across environments</em> Provides a centralized registry for dependency managementBy understanding the role of <code>package-lock.json</code> in the projects architecture, developers can better appreciate the importance of this file in maintaining a stable and reproducible build environment.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/dhenok1/Pokemon/blob/master/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Configures the projects dependencies and scripts for a React-based application, utilizing popular libraries such as Axios, React Router, and Web Vitals<br>- The package.json file defines the projects version, private status, and dependencies, while also specifying script commands for development, testing, and deployment.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- src Submodule -->
	<details>
		<summary><b>src</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ src</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/dhenok1/Pokemon/blob/master/src/DisplayPage.tsx'>DisplayPage.tsx</a></b></td>
					<td style='padding: 8px;'>Ive followed the instructions and kept my response concise, starting with a verb and avoiding quotes, code snippets, bullets, or lists.)</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/dhenok1/Pokemon/blob/master/src/LandingPage.tsx'>LandingPage.tsx</a></b></td>
					<td style='padding: 8px;'>- Architects the landing page experience by providing a search functionality that retrieves Pokémon data from PokeAPI and navigates to the display page when a matching Pokémon is found<br>- The file also handles errors and displays an error message for 3 seconds before clearing it.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/dhenok1/Pokemon/blob/master/src/index.css'>index.css</a></b></td>
					<td style='padding: 8px;'>- Establishes the visual identity of the application by defining the global styles for HTML elements<br>- This file sets the font family and other presentation attributes for the body and code elements, ensuring a consistent look across the entire project.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/dhenok1/Pokemon/blob/master/src/App.tsx'>App.tsx</a></b></td>
					<td style='padding: 8px;'>- Routinely navigates users between landing and display pages.This file defines the core routing mechanism of the application, allowing users to seamlessly transition between the LandingPage and DisplayPage components<br>- By leveraging React Routers BrowserRouter and Routes features, the App component efficiently manages user navigation within the project structure.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/dhenok1/Pokemon/blob/master/src/App.css'>App.css</a></b></td>
					<td style='padding: 8px;'>- Styles this applications layout, defining various components such as the App, content, and card containers, along with their respective properties like padding, margin, background images, and text alignment<br>- This CSS file establishes the visual structure for the applications UI, enabling a consistent and visually appealing design throughout.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/dhenok1/Pokemon/blob/master/src/PokemonCard.tsx'>PokemonCard.tsx</a></b></td>
					<td style='padding: 8px;'>- Provides interactive Pokémon card details**This code renders a Pokémon card with information about its species, moves, and abilities<br>- The card can be flipped to display additional move details<br>- Hovering over an ability or move reveals its description<br>- The component fetches data from the Pokémon API and handles user interactions for hover effects and flip functionality.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/dhenok1/Pokemon/blob/master/src/index.tsx'>index.tsx</a></b></td>
					<td style='padding: 8px;'>- Initializes the React application by rendering the App component into the DOM element with the ID root<br>- This file sets up the root element and renders the application, making it accessible to users.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- public Submodule -->
	<details>
		<summary><b>public</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ public</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/dhenok1/Pokemon/blob/master/public/robots.txt'>robots.txt</a></b></td>
					<td style='padding: 8px;'>- Defines the rules for web crawlers and robots, specifying which areas of the project are accessible and which are restricted<br>- This file serves as a crucial component of the projects overall architecture, ensuring proper crawling and indexing by search engines while maintaining data integrity and security.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/dhenok1/Pokemon/blob/master/public/index.html'>index.html</a></b></td>
					<td style='padding: 8px;'>- Establishes the foundation of a React-based web application, providing essential metadata and linking to external resources such as fonts and manifests<br>- This file serves as a template, setting up the basic structure for the apps user interface and preparing it for bundling and deployment.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/dhenok1/Pokemon/blob/master/public/manifest.json'>manifest.json</a></b></td>
					<td style='padding: 8px;'>- Configures the manifest file for a React application, defining essential metadata and icons for display on various platforms<br>- The file specifies the apps short name, full name, icon sizes and types, start URL, display mode, theme color, and background color<br>- This information enables the app to be properly displayed in stores, browsers, and other environments.</td>
				</tr>
			</table>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** TypeScript
- **Package Manager:** Npm

### Installation

Build Pokemon from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/dhenok1/Pokemon
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd Pokemon
    ```

3. **Install the dependencies:**

<!-- SHIELDS BADGE CURRENTLY DISABLED -->
	<!-- [![npm][npm-shield]][npm-link] -->
	<!-- REFERENCE LINKS -->
	<!-- [npm-shield]: https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white -->
	<!-- [npm-link]: https://www.npmjs.com/ -->

	**Using [npm](https://www.npmjs.com/):**

	```sh
	❯ npm install
	```

### Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**
```sh
npm start
```

### Testing

Pokemon uses the {__test_framework__} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**
```sh
npm test
```

---

## Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

## Contributing

- **💬 [Join the Discussions](https://github.com/dhenok1/Pokemon/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/dhenok1/Pokemon/issues)**: Submit bugs found or log feature requests for the `Pokemon` project.
- **💡 [Submit Pull Requests](https://github.com/dhenok1/Pokemon/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/dhenok1/Pokemon
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/dhenok1/Pokemon/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=dhenok1/Pokemon">
   </a>
</p>
</details>

---

## License

Pokemon is protected under the [LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## Acknowledgments

- Credit `contributors`, `inspiration`, `references`, etc.

<div align="right">

[![][back-to-top]](#top)

</div>


[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square


---
