"use strict";

const util = require("util");
const clc = require("cli-color");
const debug = process.env.ADMIRAL_REPORTER_DEBUG ? true : false;

const PREFIX = "Admiral2 Plugin";

module.exports = {
  output: console,

  debug(msg) {
    /* istanbul ignore if */
    if (debug) {
      const deb = clc.blueBright("[DEBUG]");
      this.output.log(util.format("%s [%s] %s", deb, PREFIX, msg));
    }
  },
  log(msg) {
    const info = clc.greenBright("[INFO]");
    this.output.log(util.format("%s [%s] %s", info, PREFIX, msg));
  },
  warn(msg) {
    const warn = clc.yellowBright("[WARN]");
    this.output.warn(util.format("%s [%s] %s", warn, PREFIX, msg));
  },
  err(msg) {
    const err = clc.redBright("[ERROR]");
    this.output.error(util.format("%s [%s] %s", err, PREFIX, msg));
  },
  loghelp(msg) {
    this.output.log(msg);
  }
};