import Image from 'next/image';
import myImage from './girl-with-bottle-tablet.png';
import css from './about.module.css';

export default function AboutPage() {
    return(
        <div className={css.root}>
            <Image src={myImage} alt='photo'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum temporibus corrupti quas deserunt esse iure corporis aliquid ut animi. Sapiente fugit cupiditate at accusamus illum animi voluptate obcaecati, rem esse?</p>
        </div>
    )
}