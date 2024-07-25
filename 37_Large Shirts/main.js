function make_shirt(size, printmessage) {
    if (size === void 0) { size = "large"; }
    if (printmessage === void 0) { printmessage = " i love typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printmessage, " print on shirt"));
}
