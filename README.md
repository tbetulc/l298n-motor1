 # Simple use of L298N Motor driver with two BBC micro:bit (1 for Motor Control, 1 for Remote Controller )

![Twitter Follow](https://img.shields.io/twitter/follow/Ludorg1?style=social) 

## Requirements

### Hardware

- 2 BBC micro:bit (see [store](https://microbit.org/buy/))
- 1  Motor Drive Controller L298N (I bought mine on [Amazon.fr](https://www.amazon.fr/gp/product/B07DK6Q8F9/))
- 1 ZK-2 Wheel-Drive Plastic Chassis bought from [Kubii](https://www.kubii.fr/robots-kits-robotique/1602-robot-chassis-de-voitures-2-roues-motrices-kubii-3272496004023.html)
- 1 [Pin:Bit connector](https://shop.pimoroni.com/products/pin-bit)
- 1 small breadboard

### Software

- MakeCode for micro:bit
- This code :)

## Assembly

1. Assemble and mount ZK-2 chassis (see [video tutorial](https://www.youtube.com/watch?v=3a-bE1VlaU8]))
2. Connect micro:bit P0 to IN1 and IN3 of L298N and P1 to IN2 and IN4 of L298N
3. Connect +6V (4*1.5V) from batteries to micro:bit power supply and to the two voltage inputs of L298N
4. Connect 0V to micro:bit and L298N GND inputs

[Example of assembly](https://t.ludorg.net/post/617590007377625088/two-microbit-for-a-small-remote-controlled-car)


## Installation

Download binary with MakeCode or via direct copy on both BBC micro:bit.
One is the remote controller, the other the motor controller.

## Usage

On the remote or on the motor control, pushing A button moves the car in a direction. 
Pushing B button moves in the opposite direction. 
Pushing A+B stop the movement.

## Contact

If you want to contact me, you can reach me at <ludorg@ludorg.net>.

## License

This project uses the MIT license.

MIT License

Copyright (c) 2020 Ludovic LIEVRE aka Ludorg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 


> Open this page at [https://tbetulc.github.io/l298n-motor1/](https://tbetulc.github.io/l298n-motor1/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/tbetulc/l298n-motor1** and import

## Edit this project ![Build status badge](https://github.com/tbetulc/l298n-motor1/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/tbetulc/l298n-motor1** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/tbetulc/l298n-motor1/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
