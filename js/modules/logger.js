class Logger {
  constructor(data) {
    /**
     * Incoming data to be used for logging
     */
    this.data_ = data;

    /**
     * Module name
     * @type {String}
     */
    this.name_ = 'Logging module';
  }

  log() {
    console.log(`${this.name_} is Logging its 'this.data' ${this.data_}`)
  }

}

export { Logger }