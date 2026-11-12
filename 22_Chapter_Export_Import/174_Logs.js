import log from './logs/logger.js';
import { logBetter, logBetter2 } from './logs/logger.js';

log('Starting');


logBetter("Starting the TC of the app.vwo.com");

// Note: We did not use curly braces { } around log.
// That is because we are importing a default export.

// Curly braces are required for named imports. 
// logBetter and logBetter2 are named exports, so we have to use curly braces around them.