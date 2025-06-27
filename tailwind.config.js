// tailwind.config.js
//
// Scope: Set up a Tailwind CSS configuration file. This file will define the paths to all template files, enabling Tailwind to tree-shake unused styles in production builds. It should also include custom configurations such as theme extensions or any specific design tokens used in the project, aligning the styling with the project's design requirements.

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};