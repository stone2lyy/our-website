import React,{type Ref, useRef, useState} from 'react'
import styles from './fire.module.css';
import Load from "@site/src/pages/fire/Load";

export default () => {
    const containerRef = useRef<HTMLDivElement>();
    const mainElemRef = useRef<HTMLElement>();
    const fireBomElemRef = useRef<HTMLCanvasElement>();
    const starsElemRef = useRef<HTMLCanvasElement>();

    const [loading, setLoading] = useState(true);

    const handleOnSize = useRef<(() => void) | undefined>();

    // const resize = () => {
    //     onWindowResize();
    //     if (fireBomElemRef.current) onBomResize(fireBomElemRef.current);
    //     if (starsElemRef.current) {
    //         onStarResize(starsElemRef.current);
    //     }
    // };
    //
    // useEffectOnce(() => {
    //     window.addEventListener('resize', resize, false);
    //     resize();
    //     return () => {
    //         window.removeEventListener('resize', resize, false);
    //     };
    // });
    //
    // useEffectOnce(() => {
    //     if (containerRef.current) {
    //         bgRender({
    //             container: containerRef.current,
    //             setLoading: () => setLoading(false),
    //         });
    //     }
    // });

    // useEffectOnce(() => {
    //     fillTextPoints();
    // });

    // useEffectOnce(() => {
    //     const cancelId = setInterval(
    //         () => addRocket(fireBomElemRef.current!),
    //         2000,
    //     );
    //     bomRender(fireBomElemRef.current!);
    //     return () => clearInterval(cancelId);
    // });
    //
    // useEffectOnce(() => {
    //     starsRender(starsElemRef.current!, Math.floor(window.innerWidth * 0.216));
    // });

    return (
        <main
            className={styles.mainBg}
            ref={mainElemRef as Ref<HTMLElement>}
            style={{backgroundImage: `url(${require('@site/static/img/sky.png').default})`}}
        >
            <Load/>
            {/*{loading && <Load/>}*/}
            {/*<div*/}
            {/*    className="bg-starry-sky"*/}
            {/*    ref={containerRef as Ref<HTMLDivElement>}*/}
            {/*    style={{display: loading ? 'none' : 'block'}}*/}
            {/*>*/}
            {/*    <canvas*/}
            {/*        className="bg-fire-bom"*/}
            {/*        ref={fireBomElemRef as Ref<HTMLCanvasElement>}*/}
            {/*    />*/}
            {/*    <canvas*/}
            {/*        className="bg-fire-bom"*/}
            {/*        ref={starsElemRef as Ref<HTMLCanvasElement>}*/}
            {/*    />*/}
            {/*</div>*/}
        </main>
    );
}