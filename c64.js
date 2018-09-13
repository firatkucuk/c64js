var memory = new Array(65536);

function refreshView() {

  console.log('refreshed');
}

function loadProgram(programUrl) {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', programUrl, true);
  xhr.responseType = 'arraybuffer';
  xhr.onload       = function (e) {
    if (this.status === 200) {
      // get binary data as a response
      var responseArray   = new Uint8Array(this.response)
      var canvasColorData = [];

      for (var i = 0; i < responseArray.length; i++) {
        Array.prototype.push.apply(canvasColorData, convertToRgba(responseArray[i]));
      }

      var c   = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");

      ctx.putImageData(new ImageData(new Uint8ClampedArray(canvasColorData), 320, 200), 0, 0);
    }
  };

  xhr.send();
}

function numHex(s) {
  var a = s.toString(16);
  if ((a.length % 2) > 0) {
    a = "0" + a;
  }
  return a;
}

function convertToC64Palette(hexVal) {

  if (hexVal === '000000') {
    return 0;
  } else if (hexVal === 'FFFFFF') {
    return 1;
  } else if (hexVal === '880000' || hexVal === '894036') {
    return 2;
  } else if (hexVal === 'AAFFEE' || hexVal === '7ABFC7') {
    return 3;
  } else if (hexVal === 'CC44CC' || hexVal === '8A46AE') {
    return 4;
  } else if (hexVal === '00CC55' || hexVal === '68A941') {
    return 5;
  } else if (hexVal === '0000AA' || hexVal === '3E31A2') {
    return 6;
  } else if (hexVal === 'EEEE77') {
    return 7;
  } else if (hexVal === 'DD8855' || hexVal === 'BB776D') {
    return 8;
  } else if (hexVal === '664400') {
    return 9;
  } else if (hexVal === 'FF7777') {
    return 10;
  } else if (hexVal === '333333' || hexVal === '555555') {
    return 11;
  } else if (hexVal === '777777' || hexVal === '808080') {
    return 12;
  } else if (hexVal === 'AAFF66' || hexVal === 'D0DC71') {
    return 13;
  } else if (hexVal === '0088FF' || hexVal === '7C70DA') {
    return 14;
  } else if (hexVal === 'BBBBBB') {
    return 15;
  } else {
    if (!colors[hexVal]) {
      colors[hexVal] = 1;
    } else {
      colors[hexVal] = colors[hexVal] + 1;
    }

    console.error(hexVal);
  }
}

function convertToRgba(cg4Color) {

  if (cg4Color === 0) {
    return [0, 0, 0, 255];
  } else if (cg4Color === 1) {
    return [255, 255, 255, 255];
  } else if (cg4Color === 2) {
    return [136, 0, 0, 255];
  } else if (cg4Color === 3) {
    return [170, 255, 238, 255];
  } else if (cg4Color === 4) {
    return [204, 68, 204, 255];
  } else if (cg4Color === 5) {
    return [0, 204, 85, 255];
  } else if (cg4Color === 6) {
    return [0, 0, 170, 255];
  } else if (cg4Color === 7) {
    return [238, 238, 119, 255];
  } else if (cg4Color === 8) {
    return [221, 136, 85, 255];
  } else if (cg4Color === 9) {
    return [102, 68, 0, 255];
  } else if (cg4Color === 10) {
    return [255, 119, 119, 255];
  } else if (cg4Color === 11) {
    return [51, 51, 51, 255];
  } else if (cg4Color === 12) {
    return [119, 119, 119, 255];
  } else if (cg4Color === 13) {
    return [170, 255, 102, 255];
  } else if (cg4Color === 14) {
    return [0, 136, 255, 255];
  } else if (cg4Color === 15) {
    return [187, 187, 187, 255];
  } else {
    console.error(cg4Color);
  }
}

function run() {

  setInterval(refreshView, 10000);

  // loadProgram('picture.c64.raw');

  /*
  if (this.status == 200) {
    // get binary data as a response
    var responseArray = new Uint8Array(this.response)
    var rgbaData = [];

    for (var i = 0; i < responseArray.length; i++) {
      rgbaData.push(responseArray[i]);

      if (i % 3 == 2) {
        rgbaData.push(255);
      }
    }

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    ctx.putImageData(new ImageData(new Uint8ClampedArray(rgbaData), 320, 200), 0, 0);
  }
  */

  /*
  if (this.status == 200) {
    // get binary data as a response
    var responseArray = new Uint8Array(this.response)
    var rgbData  = [];
    var rgbHexData  = [];
    var hexBuffer = "";

    for (var i = 0; i < responseArray.length; i++) {
      hexBuffer += numHex(responseArray[i]);

      if (i % 3 == 2) {
        var c64Color = convertToC64Palette(hexBuffer.toUpperCase());
        rgbData.push(c64Color);
        rgbHexData.push(numHex(c64Color));
        hexBuffer = "";
      }
    }

    //console.log(rgbData);
    var vada = document.getElementById("vada");
    vada.innerHTML = rgbHexData;
    //console.log(rgbHexData);

    var canvasColorData = [];

    for (var i = 0; i < rgbData.length; i++) {
      Array.prototype.push.apply(canvasColorData, convertToRgba(rgbData[i]));
    }

    //console.log(canvasColorData);

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    ctx.putImageData(new ImageData(new Uint8ClampedArray(canvasColorData), 320, 200), 0, 0);
  }
};
*/

  /*
  if (this.status == 200) {
      // get binary data as a response
      var responseArray = new Uint8Array(this.response)
      var canvasColorData = [];

      for (var i = 0; i < responseArray.length; i++) {
        Array.prototype.push.apply(canvasColorData, convertToRgba(responseArray[i]));
      }

      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");

      ctx.putImageData(new ImageData(new Uint8ClampedArray(canvasColorData), 320, 200), 0, 0);
    }
  };
  */
}