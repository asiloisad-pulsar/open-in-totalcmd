const { Disposable } = require("atom");
const { exec } = require("child_process");
const fs = require("fs").promises;

module.exports = {
  exePath: null,

  activate() {
    this.handlerDisposable = null;
    this.configDisposable = atom.config.observe("open-in-totalcmd.path", (value) => {
      this.exePath = value;
    });
  },

  deactivate() {
    if (this.handlerDisposable) {
      this.handlerDisposable.dispose();
    }
    if (this.configDisposable) {
      this.configDisposable.dispose();
    }
  },

  consumeOpenExternalService(service) {
    this.handlerDisposable = service.registerHandler({
      priority: 0,
      openExternal: async (filePath) => {
        if (!(await fs.lstat(filePath)).isDirectory()) return;
        return exec(`"${this.exePath}" /O /T /S /L="${filePath}"`);
      },
      showInFolder: (filePath) => {
        return exec(`"${this.exePath}" /O /T /S /A /P /L="${filePath}"`);
      },
    });
    return new Disposable(() => {
      this.handlerDisposable.dispose();
      this.handlerDisposable = null;
    });
  },
};
