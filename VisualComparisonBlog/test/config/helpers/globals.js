'use strict'
/* global */

global.deviceType = process.env.DEVICE_TYPE === 'undefined' ? undefined : process.env.DEVICE_TYPE
global.deviceName = process.env.DEVICE_NAME === 'undefined' ? undefined : process.env.DEVICE_NAME
global.resolutionBreakPoint = process.env.RESOLUTIONBREAKPOINT
global.responsive = process.env.RESPONSIVE === 'undefined' ? undefined : process.env.RESPONSIVE
global.capturePageSource = process.env.CAPTURE_PAGE_SOURCE === 'true' ? true : false
global.captureScreenshot = process.env.CAPTURE_SCREENSHOT === 'true' ? true : false

