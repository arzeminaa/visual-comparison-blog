describe('wdio page', () => {
    it('Verify landing page is displayed as expected', async () => {
        await browser.url('https://www.atlantbh.com')
        await expect(
            await browser.checkScreen('landingPage', {
                /* some options */
            })
        ).toEqual(0)
    })
    it('Verify one element on page is displayed as expected', async () => {
        await browser.url('https://www.atlantbh.com')
        await expect(
            await browser.checkElement(
                await $("#header-outer"),
                'elementOnPage',
                {
                    /* some options */
                }
            )
        ).toEqual(0)
    })
    it("Verify 'Services' page is displayed as expected with given tolerance", async () => {
        await browser.url('https://www.atlantbh.com/services/')
        await expect(
            await browser.checkScreen('ServicesPageWithTolerance', { 
                saveAboveTolerance: 1.0 
            })
        ).toBeLessThanOrEqual(1.0)
    })
})