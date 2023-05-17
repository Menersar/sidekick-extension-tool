# sidekick-extension-tool
Tool for creating and building sidekick extension.

## Instructions
### Required files and folder (holding files) for building extensions 
- The following extension's folders and associated files are located in the folder `extensions`.

#### Folders
- `locales`: Files the implemented block language files.
- `assets`: Files an extension's resources (e. g. icons or background images).

#### Files
- `info.json`: Holds basic information about an extension.
- `index.js`: Names an extension's blocks and implements their functionalities.

### Commands
- `yarn install`: Install project dependencies.
- `yarn run build:all`: Build all extension <br/>
(Output: `build files` in folder `build`, `.skx` file in folder `dist`).
- `yarn run build:extension [EXTENSION-NAME] [EXTENSION-NAME]` …: Build the extension `[EXTENSION-NAME]` <br/>
(Note: Instead of `[EXTENSION-NAME]` provide the folder name(s) of the extension(s) you want to build) <br/>
(Output: `build files` in folder(s) `build`, `.skx` file in folder(s) `dist`).