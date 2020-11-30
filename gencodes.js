var fs = require("fs");
var logger = fs.createWriteStream("codes.txt", {
  flags: "a",
});

var startAddrItem = 0x203b200;
var startAddrQuant = 0x203b201;
var startCode = 0x10;

for (var i = 0; i < 200; i++) {
  logger.write(`0${startAddrItem.toString(16)}:${startCode.toString(16)}\n`);
  logger.write(`0${startAddrQuant.toString(16)}:ff\n`);

  startAddrItem += 2;
  startAddrQuant += 2;
  startCode++;
}

logger.end();
