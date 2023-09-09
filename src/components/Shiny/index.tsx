import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';

type Props = {
    color?: string;
    style?: object;
};

function Shiny({ color, style }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function mouseMoveEvent(e: MouseEvent) {
            const { x, y } = containerRef.current.getBoundingClientRect();
            containerRef.current.style.setProperty('--px', `${e.clientX - x}`);
            containerRef.current.style.setProperty('--py', `${e.clientY - y}`);

            color && containerRef.current.style.setProperty('--color', color);
        }
        
        if(containerRef?.current !== null){
           
            containerRef.current.addEventListener('mousemove', mouseMoveEvent);

            return () => {
                containerRef.current.removeEventListener('mousemove', mouseMoveEvent);
            };
        }
    }, []);

    return <div ref={containerRef} className={styles.shiny_boi} style={{...style}}></div>;
}

export default Shiny;
