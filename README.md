!['alt ](./public/extra.png)

# **PlanMate**

Here's a README file for PlanMate. It includes all the necessary instructions for installation and running the project.

This is a project built using [Vite](https://vitejs.dev/) and [React](https://reactjs.org/), with [Tauri](https://tauri.app/) to enable building desktop applications. This guide will help new contributors install the necessary dependencies and run the project.

## Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js** (Recommended: version 16 or higher)
- **pnpm** (for package management)
  You can install `pnpm` globally using npm:

  ```bash
  npm install -g pnpm
  ```

- **Rust** (needed for Tauri)
  Install Rust by following the official guide:

  ```bash
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  ```

  After installing Rust, ensure the following commands are available:

  ```bash
  cargo --version
  rustc --version
  ```

- **Tauri CLI**
  Install the Tauri Command Line Interface globally:
  ```bash
  cargo install tauri-cli
  ```

## Project Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/NirajSalunke/PlanMate.git ./
   ```

2. **Install Dependencies**
   Install all the required packages using `pnpm`:

   ```bash
   pnpm install
   ```

3. **Running the Development Server**
   To start the Tauri development server, use the following command:

   ```bash
   pnpm tauri dev
   ```

   This will compile the Tauri app and open it in a development window.

## Building the Project

If you'd like to build the project for production, use:

```bash
pnpm tauri build
```

This will generate a packaged desktop app in the `src-tauri/target/release/` directory.

## Additional Resources

- [Tauri Documentation](https://tauri.app/v1/guides/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
