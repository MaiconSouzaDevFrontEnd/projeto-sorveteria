import styles from './PageHome.module.css';
import Image from 'next/image'
import BolasSorvete from '/public/banner-sabores.jpg';
import Eventos from '/public/eventos-image.jpg';
import Sobre from '/public/sobre-image.jpg';

export default function PageHome() {
    return (
        <main className={styles.sectionHome}>
            <section className={styles.bannerHome}>
                <h1>SORVETE ARTESANAL</h1>
            </section>

            <section className={styles.sectionContainers}>
                <Image src={BolasSorvete} className={styles.imgContainers} alt="Bolas de sorvete" />
                <div>
                    <article>
                        <h2>nossos sabores</h2>
                        <p className={styles.centerParagrafo}>Novos e deliciosos!</p>
                        <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                    </article>   
                 </div>
            </section>
            

            <section className={styles.sectionContainers}>
                <div>
                    <article>
                        <h2>Nossos Eventos</h2>
                        <p className={styles.centerParagrafo}>Delicias com sorvete!</p>
                        <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
                    </article>   
                 </div>
                <Image src={Eventos} className={styles.imgContainers} alt="A imagem mostra a mesa de eventos de sabores de sorvetes." />
            </section>

            <section className={styles.sectionContainers}>
                <Image src={Sobre} className={styles.imgContainers} alt="Jovens" />
                <div>
                    <article>
                        <h2>SOBRE NÓS</h2>
                        <p className={styles.centerParagrafo}>Alegria em cada casquinha!</p>
                        <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                    </article>   
                 </div>
            </section>
        </main>
    );
}