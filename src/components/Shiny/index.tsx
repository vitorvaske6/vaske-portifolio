import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { useStateContext } from '@/contexts/ContextProvider';

type Props = {
    color?: string;
    style?: object;
};

function Shiny({ color, style }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { windowDimensions } = useStateContext()

    useEffect(() => {
        function mouseMoveEvent(e: MouseEvent) {
            if (containerRef.current) {
                const { x, y } = containerRef.current.getBoundingClientRect()
                containerRef.current.style.setProperty('--px', `${e.clientX - x}`)
                containerRef.current.style.setProperty('--py', `${e.clientY - y}`)

                color && containerRef.current.style.setProperty('--color', color)
            }
        }
        
        if(containerRef?.current !== null){
           
            containerRef.current.addEventListener('mousemove', mouseMoveEvent);

            return () => {
                if (containerRef.current) {
                    containerRef.current.removeEventListener('mousemove', mouseMoveEvent)
                }
            };
        }
    }, []);

    return <div ref={containerRef} className={styles.shiny_boi} style={{...style, maxWidth: "100%"}}></div>;
}

export default Shiny;
