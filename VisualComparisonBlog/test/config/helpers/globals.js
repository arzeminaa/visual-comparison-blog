'use strict'
/* global */

global.deviceType = process.env.DEVICE_TYPE === 'undefined' ? undefined : process.env.DEVICE_TYPE
global.deviceName = process.env.DEVICE_NAME === 'undefined' ? undefined : process.env.DEVICE_NAME
global.resolutionBreakPoint = process.env.RESOLUTIONBREAKPOINT
global.responsive = process.env.RESPONSIVE === 'undefined' ? undefined : process.env.RESPONSIVE
global.capturePageSource = process.env.CAPTURE_PAGE_SOURCE === 'true' ? true : false
global.captureScreenshot = process.env.CAPTURE_SCREENSHOT === 'true' ? true : false

//Helper method for blocking wait
global.pause = time => {
    return new Promise(resolve => {
        console.log(`Waiting for ${time} ms`)
        setTimeout(resolve, time)
    })
}

global.sleep = time => {
    return new Promise(resolve => {
        console.log(`Waiting for ${time} ms`)
        setTimeout(resolve, time)
    })
}

global.clone = (...sources) =>
    sources.reduce((obj, source) => Object.assign(obj, JSON.parse(JSON.stringify(source))), {})
