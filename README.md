# sidekick-extension-tool
Tool for creating and building sidekick extension.

## Instructions
### Required files and folder (containing files) for building extensions 
#### Files
- `info.json`: Holds basic information about an extension.
- `index.js`: Names an extension's blocks and implements their functionalities.
#### Folders
- `locales`: Files the implemented block language files.
- `assets`: Files an extension's resources (e. g. icons or background images).

### Commands
- `yarn install`: Install project dependencies.
- `yarn run build`: Build an extension (output: `.skx` file).