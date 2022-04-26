export const useCanvas = (elementId) => {

    const createImg = (imgUrl = '/src/static/images/animation-example.png') => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = imgUrl;
            img.setAttribute('crossorigin', 'anonymous');
            img.onload = () => resolve(img);
        });
    };

    const drawCanvas = async () => {
        const canvas = document.getElementById(elementId);
        const image = await createImg();
        const ctx = canvas.getContext("2d", {
            antialias: true // 开启抗锯齿
        });
        // 初始化,清理出一片 500*500 的透明区域
        ctx.clearRect(0, 0, 500, 500);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 500, 500);
        
        // 裁切圆形图片, COTC as Center of the circle
        const COTCX = canvas.width / 2;
        const COTCY = canvas.height / 2;
        cutCircleImg(ctx, image, COTCX, COTCY, 100);
    };

    /**
     * 切一个圆形的图片
     * @param { Object } ctx canvas.context
     * @param { Number } x 圆心 X 轴
     * @param { Number } y 圆心 Y 轴
     * @param { Number } d 直径
     */
    const cutCircleImg = (ctx, image, x, y, d) => {
        const arc = Math.PI * 2
        // 保存当前 canvas 状态到栈
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, d, arc, false)
        ctx.clip()

        //When there are five arguments, the drawImage function scales the image
        const cutPicWidth = image.width;
        const cutPicHeight = image.height;
        //Apart from element object ,the first four slices, the last four scales
        ctx.drawImage(image, x - d, y - d, 480, 270);

        // 弹出位于顶端的状态，如果没有保存，则不做出改变
        ctx.restore()
    };

    return { drawCanvas }
}