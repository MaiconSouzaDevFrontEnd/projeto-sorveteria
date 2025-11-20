import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/logo.png';
import styles from './Rodape.module.css';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.containerRodape}>
                <Image src={Logo} alt="A imagem de um sorvete" className={styles.imgLogo} lang='A imagem de um sorvete' />
                
                <div className={styles.infosRodape}>
                    <div className={styles.subInfos}>
                        <h3>ENDEREÇO</h3>
                        <p>Av. Bernardino de Campos, 98 São Paulo, SP 12345-678</p>
                    </div>

                    <div className={styles.subInfos}>
                        <h3>CONTATO</h3>
                        <p>info@meusite.com Tel: (11) 3456-7890</p>
                    </div>

                    <div className={styles.subInfos}>
                        <h3>HORÁRIOS</h3>
                        <p>ABERTO TODOS OS DIAS 10:00 - 22:00</p>
                    </div>
                </div>
            </div>

            <div className={styles.copyRight}>
                <p>© 2025 Sorveteria Doçura Gelada. Todos os direitos reservados.</p>   
                
                <p>Orgulhosamente desenvolvido por "Maicon Souza da Silva".</p>

                <Link href="https://www.devmedia.com.br/" target="_blank" className={styles.btnDevmedia} >Todo Crédito à Devmedia</Link>
            
            </div>
            
        </footer>
    );
}