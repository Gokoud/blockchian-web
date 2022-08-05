import analyze from 'rgbaster'

export async function getImageMainColor(imgUrl) {
    const result = await analyze(imgUrl)
    return result[0].color
}