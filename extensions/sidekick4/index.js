const { api, type, Extension } = require("scratch-extension");
// var ws281x = require('ws281x-pi4');

// const { NeoPixel } = require('./neopixel/src/NeoPixel.js');
// import { NeoPixel } from ('neopixel');
// const neoPixel = require('./neopixel.js');
var ws281x = require('./ws281x-native');
// var neopixels = require("rpi-ws281x-native");
var NUM_LEDS = 7;
var pixelData = new Uint32Array(NUM_LEDS);
var brightness = 128;

// const neopixel = new NeoPixel()

// import NeoPixel from "neopixel";
// import Timer from "timer";

// var ws281x = require("rpi-ws281x-native");

// var NUM_LEDS = 7,
//   pixelData = new Uint32Array(NUM_LEDS);

// var brightness = 128;

// var signals = {
//   SIGINT: 2,
//   SIGTERM: 15,
// };

// Import the neopixels library
// var Neopixels = require("neopixels");

// Make an instance of the strip
// var neopixels = new Neopixels();

// import ws281x from './lib/ws281x-native';
// const ws281x = require('rpi-ws281x-native');
// var ws281x = require('rpi-ws281x-native/lib/ws281x-native');

// // var NUM_LEDS = parseInt(process.argv[2], 10) || 10,
// var NUM_LEDS = 7,
//         pixelData = new Uint32Array(NUM_LEDS);

// // ---- trap the SIGINT and reset before exit
// process.on('SIGINT', function () {
//   ws281x.reset();
//   process.nextTick(function () { process.exit(0); });
// });

// for(var i = 0; i < NUM_LEDS; i++) {
//     pixelData[i] = 0xffcc22;
// }
// ws281x.render(pixelData);

// // ---- animation-loop
// var t0 = Date.now();
// setInterval(function () {
//     var dt = Date.now() - t0;

//     ws281x.setBrightness(
//         Math.floor(Math.sin(dt/1000) * 128 + 128));
// }, 1000 / 30);

// const NeoPixel = require('neopixel');

// // const SERVER = process.env['SERVER'] || 'tcp://neopixel.local:800'
// // const PAUSE = parseInt(process.env['PAUSE']) || 1000

// const neopixel = new NeoPixel()

// ;(async () => {
//   try {
//     // let { pixels } = await neopixel.connect(SERVER)
//     // console.log('PIXELS ' + pixels)

//     let pixel = 0
//     while (1) {
//       pixel = ++pixel % neopixel.pixels
//       const { latency } = await neopixel.setPixels([{ pixel, r: 255, g: 0, b: 0 }], true)
//       console.info(`latency=${latency}ms`)
//       // await NeoPixel.wait(PAUSE - latency)
//     }
//   } catch (e) {
//     console.error(`Error occurred: [${e.code}] ${e.message}`)
//     process.exit(1)
//   }
// })()

// const DIGITAL_INPUT = 1;
// const DIGITAL_OUTPUT = 2;
// const LEDPIN = 12;

// const FormSetLed = {
//     'en': 'Set LED Number [LED_NUMBER] [RED_GREEN]',
//     'de': 'Setze LED [LED_NUMBER] [RED_GREEN]',
// };

// menus: {
//     led_numbers: {
//         acceptReporters: true,
//         items: ['1', '2', '3', '4', '5','6', '7', '8', '9']
//     },

//     red_green: {
//         acceptReporters: true,
//         items: ['red', 'green']
//     },
// };

class ExtensionSidekick extends Extension {
  makeMenuFromArray(arr, menuTopic) {
    const menu = [];
    for (const item of arr) {
      menu.push({
        messageId: `sidekickteam.sidekick.menu.${menuTopic}.${item}`,
        // messageId: "sidekickteam.sidekick.menu." + menuTopic + `.${item}`,
        value: item,
      });
    }
    return menu;
  }

  onInit() {
    ws281x.init(7);

    // ws281x.init(NUM_LEDS);
    // const neopixel = new NeoPixel()

    // neopixels.init(NUM_LEDS);

    // const ws281x = require("rpi-ws281x-native");

    // const channel = ws281x(7, { stripType: "ws2812" });

    api.addCategory({
      categoryId: "sidekickteam.sidekick.category",
      messageId: "sidekickteam.sidekick.category",
      color: "#b6d597",
    });

    // api.addBlock({
    //   opcode: "sidekickteam.sidekick.setledcolour",
    //   type: type.BlockType.COMMAND,
    //   messageId: "sidekickteam.sidekick.setledcolour",
    //   categoryId: "sidekickteam.sidekick.category",
    //   param: {
    //     LED_NUMBER: {
    //       type: type.ParameterType.NUMBER,
    //       default: '1',
    //       menu: "led_numbers"
    //     },
    //   },
    //   function: (args) => this.setLEDColor(args.LED_NUMBER),
    // });

    // api.addBlock({
    //   opcode: "sidekickteam.sidekick.helloworld",
    //   type: type.BlockType.COMMAND,
    //   messageId: "sidekickteam.sidekick.helloworld",
    //   categoryId: "sidekickteam.sidekick.category",
    //   function: (args) => this.HelloWorld(),
    // });

    api.addBlock({
      opcode: "sidekickteam.sidekick.setLEDColor",
      type: type.BlockType.COMMAND,
      messageId: "sidekickteam.sidekick.setLEDColor",
      categoryId: "sidekickteam.sidekick.category",
      function: (args) => this.setLEDColor(args.COLOUR, args.LED_NUMBER),
      param: {
        COLOUR: {
          type: type.ParameterType.COLOR,
          default: "#E96848",
        },
        LED_NUMBER: {
          type: type.ParameterType.NUMBER,
          default: "1",
          // menu: "digital_pins"
          // hier dann die echten pins eintragen und bei den locales dann die "übersetzung" in die Nummer an den Steckverbindungen / LEDs
          menu: this.makeMenuFromArray(
            ["1", "2", "3", "4", "5", "6", "7", "10", "11"],
            "LED"
          ),
        },
        // JOIN: {
        //   type: type.ParameterType.STRING,
        //   default: "y",
        // },
      },
    });

    // api.menu({

    //   digital_pins: {
    //       acceptReporters: true,
    //       items: ['2', '3', '4', '5', '6', '7', '8', '9',
    //           '10', '11', '12', '13', '14', '15', '16',
    //           '17', '18', '19', '20',
    //           '21', '22', '23', '24', '25', '26', '27']
    //   },
    // });

    // const np = new NeoPixel({ length: 7, pin: 12, order: "GRB" });

    // Timer.delay(1);
    // np.fill(np.makeRGB(255, 255, 255));
    // np.update();
    // Timer.delay(500);
    // np.fill(np.makeRGB(255, 0, 0));
    // np.update();
    // Timer.delay(500);
    // np.fill(np.makeRGB(0, 255, 0));
    // np.update();
    // Timer.delay(500);
    // np.fill(np.makeRGB(0, 0, 255));
    // np.update();
    // Timer.delay(500);

    // let value = 0x01;
    // Timer.repeat(() => {
    //   let v = value;
    //   for (let i = 0; i < np.length; i++) {
    //     v <<= 1;
    //     if (v == 1 << 24) v = 1;
    //     np.setPixel(i, v);
    //   }

    //   np.update();

    //   value <<= 1;
    //   if (value == 1 << 24) value = 1;
    // }, 33);

    // const neopixel = new NeoPixel()



  }
  onUninit() {
    api.removeCategory("sidekickteam.sidekick.category");
    // api.removeInstance('sidekick');
  }

  //   ReturnValue(VALUE) {
  //     return VALUE;
  //   }

  //   HelloWorld() {
  //     console.log("MOIN!");
  //     alert("MOIN!");
  //   }

  setLEDColor(color, number) {
    if (typeof color == "string") {
      // alert("Color: " + color + ", LED-Number: " + parseInt(number));
      alert("PIXELDATA: " + pixelData[0]);
      // parseInt(color)
      // for (var i = 0; i < NUM_LEDS; i++) {
      //   pixelData[i] = color;
      // }
      // ws281x.render(pixelData);
      //   return parseInt(color.slice(1, 7), 16);
      // neopixels.animate(7, Buffer.concat(tracer(7)));

      // ---- animation-loop
      // lightsOn();
      // Turn on all the others as a 'background'
      // for (var i = 0; i < NUM_LEDS; i++) {
      //   pixelData[i] = rgb2Int(50, 50, 100);
      // }
      // neopixels.render(pixelData);

      // const colorArray = channel.array;
      // for (let i = 0; i < channel.count; i++) {
      //   colorsArray[i] = 0xffcc22;
      // }

      // ws281x.render();

      console.log("Rainbow started. Press <ctrl>+C to exit.");
    } else if (typeof color == "number") {
      // alert(color + number);
      alert("PIXELDATA: " + pixelData[0]);

      // for (var i = 0; i < NUM_LEDS; i++) {
      //   pixelData[i] = color;
      // }
      // ws281x.render(pixelData);
      //   return color;
      // neopixels.animate(7, Buffer.concat(tracer(7)));
      // lightsOn();
      // Turn on all the others as a 'background'
      // for (var i = 0; i < NUM_LEDS; i++) {
      //   pixelData[i] = rgb2Int(50, 50, 100);
      // }
      // neopixels.render(pixelData);

      // const colorArray = channel.array;
      // for (let i = 0; i < channel.count; i++) {
      //   colorsArray[i] = 0xffcc22;
      // }

      // ws281x.render();
    } else {
      alert("Error");
      //   return "Error";
    }
  }

  //   setLEDColor(args) {
  //     let ledPin = args["LED_NUMBER"];
  //     ledPin = parseInt(ledPin, 10);
  //     if (pin_modes[ledPin] !== DIGITAL_OUTPUT) {
  //       pin_modes[ledPin] = DIGITAL_OUTPUT;
  //       msg = { command: "set_mode_digital_output", led_number: ledPin };
  //       msg = JSON.stringify(msg);
  //       log.log(msg);
  //       let color = args["RED_GREEN"];
  //       // color = parseInt(color, 10);
  //       msg = { command: "set_led_on", led_number: ledPin, color: color };
  //       msg = JSON.stringify(msg);
  //       log.log(msg);
  //     }
  //   }
  //
}

// function tracer(numLEDs) {
//   var trail = 5;
//   var arr = new Array(numLEDs);
//   for (var i = 0; i < numLEDs; i++) {
//     var buf = new Buffer(numLEDs * 3);
//     buf.fill(0);
//     for (var col = 0; col < 3; col++) {
//       for (var k = 0; k < trail; k++) {
//         buf[3 * (i + (numLEDs * col) / 3) + col + 1 + 3 * k] =
//           (0xff * (trail - k)) / trail;
//       }
//     }
//     arr[i] = buf;
//   }
//   return arr;
// }

// generate integer from RGB value
// function rgb2Int(r, g, b) {
//   r = (r * brightness) / 255;
//   g = (g * brightness) / 255;
//   b = (b * brightness) / 255;
//   return ((r & 0xff) << 16) + ((g & 0xff) << 8) + (b & 0xff);
// }

// generate rainbow colors accross 0-255 positions.
// function wheel(pos) {
//   pos = 255 - pos;
//   if (pos < 85) {
//     return color(255 - pos * 3, 0, pos * 3);
//   } else if (pos < 170) {
//     pos -= 85;
//     return color(0, pos * 3, 255 - pos * 3);
//   } else {
//     pos -= 170;
//     return color(pos * 3, 255 - pos * 3, 0);
//   }
// }

// function lightsOn() {
//   for (var i = 0; i < NUM_LEDS; i++) {
//     pixelData[i] = color(0, 255, 0);
//   }
//   ws281x.render(pixelData);
// }

module.exports = ExtensionSidekick;
