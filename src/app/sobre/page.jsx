import Image from  'next/image';
import styles from './sobre.module.css';
import Sobre from '../../../public/sobre-image.jpg';
import Sorveteria from '../../../public/sorveteria.jpg';

export default function sobre(){
    return(
        <main>
            <header className={styles.headerBanner}>
                <h1 className={styles.titleSobre}>A GELATERIA</h1>
            </header>

            <section className={styles.containerSobre}>
                <h2 className={styles.titleSubSobre}>Sobre Nós</h2>

                <h3 className={styles.titleAmamosSorvete}>Nós simplesmente amamos sorvete!</h3>

                <p className={styles.textoSobre}>
                    Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. 
                    Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios.
                    Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete.
                    Vendemos tanto para varejo como para atacado.
                </p>
                <p className={styles.textoSobre}>
                    Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar
                    para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos
                    eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços,
                    basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer
                    a sua festa mais saborosa, com o melhor sorvete da cidade.

                </p>
            </section>

            <section className={styles.containerImagens}>
                <Image src={Sobre} alt='pessoas com sorvete com casca na mão, brindando.' className={styles.img}/>
                <Image src={Sorveteria} alt='Dentro da sorveteria o local.' className={styles.img}/>
            </section>
        </main>
    );
}