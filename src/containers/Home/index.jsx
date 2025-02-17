//TRUNCATE TABLE categories RESTART IDENTITY CASCADE; para corrigir as ids no banco de dados para funcionar o npm start
import { OffersCarousel } from "../../components/OffersCarousell";
import { CategoriesCarousel} from "../../components/CategoriesCarousel";
import { Banner, Container } from "./styles";
 


export function Home() {

    return (
        <main>
            <Banner>
            <h1>Veja Bem Vindo(a)!</h1>
            </Banner>
            <Container>
                <div>
                    <CategoriesCarousel />
                    
                    <OffersCarousel />
                </div>

            </Container>
        </main>
    );
}