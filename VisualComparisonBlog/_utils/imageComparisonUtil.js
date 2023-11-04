'use strict'
const { join } = require('path')
const { getResolutionBreakPoint } = require('./mobileUtil')

const getSpecificDevice = () => {
    process.env.RESOLUTIONBREAKPOINT = getResolutionBreakPoint()
    let device
    if (process.env.RESOLUTIONBREAKPOINT == 2) device = "iPadLandscape"
    if (process.env.RESOLUTIONBREAKPOINT == 3) device = "iPad"
    if (process.env.RESOLUTIONBREAKPOINT == 4) device = "iPhone"
    if (process.env.RESOLUTIONBREAKPOINT == 1) device = "Desktop"
    return device
}

const getBaseLineFolder = () => {
    return join(process.cwd(), `./data/baselineImages/${getSpecificDevice()}`)
}

const getResultsFolder = () => {
    return join(process.cwd(), `./data/resultImages/${getSpecificDevice()}`)
}

module.exports = {
    getBaseLineFolder,
    getResultsFolder,
}
