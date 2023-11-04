const devicesData = [
    {
        type: 'iOS',
        devices:[
            {
                name: "iPhone SE",
                userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",
                resolution:{
                    width: 375,
                    height: 667
                },
                breakPoint: 4
            },
            {
                name: "iPhone 11",
                userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",
                resolution:{
                    width: 414,
                    height: 896
                },
                breakPoint: 4
            },
            {
                name: "iPhone 14",
                userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",
                resolution:{
                    width: 390,
                    height: 844
                },
                breakPoint: 4
            }
        ]
    },
    {
        type: 'iPadOS',
        devices:[
            {
                name: "iPad Air",
                userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",
                resolution:{
                    width: 820,
                    height: 1180
                },
                breakPoint: 3
            },
            {
                name: "iPad Pro - Landscape",
                userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",
                resolution:{
                    width: 1366,
                    height: 1080
                },
                breakPoint: 2
            }
        ]
    },
    {
        type: 'AndroidMobile',
        devices:[
            {
                name: "Samsung Galaxy S10",
                userAgent: "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G977N Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.2 Chrome/67.0.3396.87 Mobile Safari/537.36",
                resolution:{
                    width: 360,
                    height: 740
                },
                breakPoint: 4
            }
        ]
    },
    {
        type: 'AndroidTablet',
        devices:[
            {
                name: "Samsung Galaxy A8",
                userAgent: "Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/60.0.3112.107 Mobile Safari/537.36",
                resolution:{
                    width: 800,
                    height: 1200
                },
                breakPoint: 3
            }
        ]
    },
    {
        type: 'Desktop',
        devices:[
            {
                name: "Desktop",
                userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
                resolution:{
                    width: 1980,
                    height: 1080
                },
                breakPoint: 1
            }
        ]
    }
]

module.exports =  devicesData 
