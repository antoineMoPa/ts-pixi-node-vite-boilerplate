// Polyfilling
import { performance } from 'perf_hooks';
import * as PIXI from "@pixi/node";
import { Assets, Sprite } from '@pixi/node';
import path from 'path';
import { writeFileSync } from 'fs';
import { createImageData, ImageData } from 'canvas';

const run = async () => {
    // This package requires the new asset loader to be used.
    // Initialize the new assets loader
    await Assets.init();

    const workspace = new PIXI.Container();;

    const renderer = new PIXI.Renderer({
        width: 1920,
        height: 1080,
        resolution: 1
    });


    // load a sprite
    const bunnyTexture = await Assets.load(path.join(process.cwd(), 'samples/bunny.png'));
    // create sprite from texture
    const bunny = Sprite.from(bunnyTexture);

    // Setup the position of the bunny
    bunny.x = renderer.width / 2;
    bunny.y = renderer.height / 2;

    // Rotate around the center
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // Add the bunny to the scene we are building.
    workspace.addChild(bunny);

    const ticker = new PIXI.Ticker();

    // Listen for frame updates
    ticker.add(() => {
        // each frame we spin the bunny around a bit
        bunny.rotation += 0.01;
    });

    debugger;

    // extract and save the stage
    renderer.render(workspace);

    globalThis.ImageData = ImageData as any;
    const base64Image = renderer.extract
        .canvas(workspace)
        .toDataURL('image/png');

    const base64Data = base64Image.replace(/^data:image\/png;base64,/, '');
    const output = `./test.png`;

    writeFileSync(output, base64Data, 'base64');
};


run();

export const myFunc = () => {
    return 42;
}
