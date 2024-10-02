import * as PIXI from 'pixi.js';
import { gsap } from 'gsap';
import { getRandomNumber } from '@/utils/getRandomNumber';

let app: PIXI.Application;
let removing = false; // 清空動畫

const starGenerator = () => {
    const starContainer = new PIXI.Container();
    const star = new PIXI.Sprite(PIXI.Texture.from('round_star_white.png'));
    const size = window.innerWidth >= 576 ? getRandomNumber(20, 25) : getRandomNumber(15, 20);
    const speed = getRandomNumber(2, 6) / 10;
    const startX = getRandomNumber(15, app.renderer.width - 15);
    const startY = app.renderer.height;
    const endX = startX;
    const endY = 0;

    star.width = size;
    star.height = size;

    starContainer.addChild(star);
    starContainer.position.set(startX, startY);

    const tl = gsap.timeline({
        onComplete() {
            starContainer.removeChild(star);
        }
    });

    tl
        .addLabel('start')
        .to(
            starContainer,
            { x: endX, y: endY, ease: 'none', duration: 14 * speed },
            'start'
        )
        .fromTo(
            starContainer,
            { alpha: 1 },
            { alpha: 0, delay: 12 * speed, ease: 'none', duration: 2 * speed },
            'start'
        );

    return starContainer;
};

const clearAllStars = () => {
    if (removing) return;
    removing = true;

    app.stage.children.forEach((e) => {
        gsap.to(e, {
            alpha: 0,
            onComplete: () => {
                app.stage.removeChild(e);
                removing = false;
            },
            duration: 0.3
        });
    });
};

const floatingStarsCanvas = (view: HTMLCanvasElement) => {
    let { clientWidth, clientHeight } = view;

    app = new PIXI.Application({
        width: clientWidth,
        height: clientHeight,
        view,
        transparent: true,
        forceCanvas: true
    });

    window.addEventListener('resize', () => {
        clientWidth = view.clientWidth;
        clientHeight = view.clientHeight;

        app.renderer.resize(clientWidth, clientHeight);
        clearAllStars();
    });

    let count = 0;

    PIXI.Ticker.shared.add(() => {
        if (count === 0) {
            count += 1;
            app.stage.addChild(starGenerator());
        } else if (count >= 10) {
            count = 0;
        } else count += 1;
    });
};

export default floatingStarsCanvas;
export { floatingStarsCanvas };
