import styles from './PageHome.module.css';
import Image from 'next/image'
import BolasSorvete from '/public/banner-sabores.jpg';

export default function PageHome() {
    return (
        <main className={styles.sectionHome}>
            <section className={styles.bannerHome}>
                <h1>SORVETE ARTESANAL</h1>
            </section>

            <section className={styles.sectionSabores}>
                <Image src={BolasSorvete} className={styles.imgSabores} alt="Bolas de sorvete" />
                <div>
                    <article>
                        <h2>nossos sabores</h2>
                        <p>Novos e deliciosos!</p>
                        <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
</p>
                    </article>   
                 </div>
            </section>
        </main>
    );
}