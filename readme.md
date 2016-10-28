# Initial Setup

## Install Git
[Install Git Here](https://github.com/git-for-windows/git/releases/download/v2.10.1.windows.1/Git-2.10.1-64-bit.exe)

Make sure you enable option to "Use git from Windows command line".


## Install NodeJS and NPM
[Install Node Here](https://nodejs.org/dist/v7.0.0/node-v7.0.0-x64.msi)

Open a cmd.exe and use these commands after installing NodeJS.
```
npm install npm -g
npm install typescript -g
```


## Install Visual Studio Code
[Install Visual Studio Code Here](https://code.visualstudio.com/docs/?dv=win)

Make sure you enable "Open in Visual Studio Code" option.


## Clone Repository
1. Create a Folder where you want the game to be placed.
1. Shift+RightClick inside folder and select "open command prompt here".
1. Use this command.
```
git clone https://github.com/renzoyzz/23knots.git
```

## Open In Visual Studio Code
1. Shift+RightClick inside folder and select "open in Visual Studio Code".
1. If you see folders with code. Good Job!

## Running the Game
1. Open command line in the folder just like in step 2 of Clone Repository.
1. If you havent already, run this command.(You only have to run this when dependencies update).
```
npm install
```
1. Then run this command. replace "replace" with either "build" or "debug" depending on whether you want to launch using nwjs or the chrome browser.
```
npm run replace
```

1. Have FUN!