export function assets (file) {
    let fileObject = require("@/"+file);
    return fileObject.default;
}
