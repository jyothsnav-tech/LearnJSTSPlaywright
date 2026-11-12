// Default Export -> Export One Main Thing

export default function log(message) {
    console.log("[LOG] " + message);
}


export function logBetter(message) {
    console.log("-----------");
    console.log("[LOGS] " + message);
    console.log("-----------");
}

export function logBetter2(message) {
    console.log("-----------");
    console.log("[LOGS] " + message);
    console.log("-----------");
}

// logger.js -> contains three functions:
// Function	        Export type
// log()	        Default export
// logBetter()	    Named export
// logBetter2()	    Named export
// The keyword combination export default means:
// This is the main/default thing this file is exporting.
// A JavaScript file can have only ONE default export.