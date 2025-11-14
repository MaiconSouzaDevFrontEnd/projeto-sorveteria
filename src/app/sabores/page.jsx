import Image from  'next/image';
import styles from './sabores.module.css';

import Oreo from '../../../public/sabor-oreo.png';
import Pistache from '../../../public/sabor-pistache.png';
import Avela from '../../../public/sabor-cookies-avela.png';
import Kiwi from '../../../public/sorbet-kiwi.png';
import Morango from '../../../public/sorbet-morango.png';
import Limao from '../../../public/sorbet-limao.png';




export default function Sabores(){
    return(
        <main className={styles.conteudoSabores}>
            
            <header className={styles.headerBanner}>
                <h1 className={styles.titleSabores}>NOSSOS SABORES</h1>
            </header>

            <section className={styles.containerSabores}>
                <h2 className={styles.titleOsSabores}>SABORES DE SORVETE</h2>

                <section className={styles.cardsSabores}>

                    <div className={styles.card}>
                        <Image src={Oreo} alt='Bola de sorvete sabor Oreo' className={styles.imgCard}/>
                        <h3 className={styles.titleCard}>Sorvete de Oreo</h3>
                        <p className={styles.textoCard}>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>

                    <div className={styles.card}>
                        <Image src={Pistache} alt='Bola de sorvete sabor Pistache' className={styles.imgCard}/>
                        <h3 className={styles.titleCard}>Sorvete Pistache</h3>
                        <p className={styles.textoCard}>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>

                    <div className={styles.card}>
                        <Image src={Avela} alt='Bola de sorvete sabor Avela' className={styles.imgCard}/>
                        <h3 className={styles.titleCard}>Sorvete Cookies & Avelã</h3>
                        <p className={styles.textoCard}>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>

                    <div className={styles.card}>
                        <Image src={Kiwi} alt='Bola de sorvete sabor Kiwi' className={styles.imgCard}/>
                        <h3 className={styles.titleCard}>Sorvete de Kiwi</h3>
                        <p className={styles.textoCard}>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>

                    <div className={styles.card}>
                        <Image src={Morango} alt='Bola de sorvete sabor Morango' className={styles.imgCard}/>
                        <h3 className={styles.titleCard}>Sorvete de Morango</h3>
                        <p className={styles.textoCard}>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>

                    <div className={styles.card}>
                        <Image src={Limao} alt='Bola de sorvete sabor Oreo' className={styles.imgCard}/>
                        <h3 className={styles.titleCard}>Sorvete de Limão Siciliano</h3>
                        <p className={styles.textoCard}>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>

                </section>
            </section>
        </main>
    )
}