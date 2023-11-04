const baseConfig = require('./wdio.conf.js').config
const headlessModeArgs = [
    '--headless',
    '--user-agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.50 Safari/537.36"',
    '--no-sandbox',
    '--window-size=1920,1080',
]
const args = process.env.IS_HEADLESS_MODE ? headlessModeArgs : []
exports.config = {
    ...baseConfig,
    capabilities: [
        {
            browserName: 'chrome',
            maxInstances: 1,
            'goog:chromeOptions': {
                // to run chrome headless the following flags are required
                // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
                args: args,
            },
        },
    ],
    services: [
        ['devtools'],
        ['intercept'],
        [
            'chromedriver',
            {
                hostname: '127.0.0.1',
                port: parseInt(process.env.SELENIUM_PORT) || 9515,
                logFileName: 'chromedriver.log',
                outputDir: 'test-results/ui',
            },
        ],
    ],
}
