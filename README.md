## Piano Play

# Overview
* Anyone can be a musician. This app will allow users to play around on the piano and see what they create!
* Piano play displays a piano on the screen, and the user can use the keyboard to play music.
* Users can record their own piano tunes, and play them back.
* Demo tunes are available if users would rather not make their own.
# Functionality and MVP Features
* browser displays piano keys marked with their corresponding keyboard key
* user can use their keyboard to play the piano
* visual effects display when keys are played
* user can start, stop, play, and reset recording
* user can toggle the sound of the piano between regular piano sound and electronic keyboard sound
# Architecture and Technologies
* Javascript for overall structure and logic
* howler js for audio library
* webpack to bundle files
# Implementation Timeline
* day 1:
    * create project with entry file and script files
    * set up necessary node modules and webpack
    * create piano display
* day 2:
    * learn how to use howler js to create necessary sound files
    * map sound clips to keyboard keys using onkeypress event listeners
* day 3:
    * style keyboard
    * add visual effects that will display temporarily on key press
* day 4:
    * create menu for users to choose between classic and electronic piano sound options
* day 5: add record functionality
    * users can start, stop, play, and reset recording
    * users can listen to demo recordings
* the weekend:
    * polish up styling
    * deploy to heroku
