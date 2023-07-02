import { List } from "@mui/material";
import { ItemList } from "./ItemList";

export function EastList () {
    const itemsList = [{
        title: 'Mundo de Aurora',
        body: "Um mundo místico criado por forças além da compreensão humana, outras raças cultuam deuses que supostamente as mesmas descendem. Há uma tensão enorme entre os habitantes deste planeta e os humanos ficaram presos no fogo cruzado, uma vez que são criaturas muito mais frágeis que as outras raças com quem compartilham o mundo."
    }, {
        title: 'Mundo de Pandora',
        body: "Uma sociedade extremamente avançada tecnológicamente, as barreiras naturais, físicas e químicas foram a muito tempo quebradas, a humanidade chegou a um estágio de estagnação tecnológica, aparentemente não há mais nada a ser descoberto ou inventado no universo, resta apenas uma solidão calma e ao mesmo tempo assombradora, será que os humanos são realmente os ultimos seres do universo?"
    }, {
        title: 'País de Zzrrat',
        body: "Um país extremamente devoto ao culto de um panteão de deuses inomináveis, onde habitam criaturas de outras dimensões e planos de existência, os humanos são vistos como criaturas inferiores e são escravizados e sacrificados pelos deuses em rituais macabros, a sociedade é extremamente hierarquizada e a desigualdade social é gritante, os humanos são vistos como animais de carga e são tratados como tal."
    },{
        title: 'Planeta Terra',
        body: "Apenas o seu dia-a-dia corriqueiro, um mundo desigual e injusto como sempre foi e provavelmente continuará sendo, uma replica exata do nosso planeta Terra atual."
    }, {
        title: 'Galáxia Andromeda',
        body: "Diversas raças alienígenas lutam pelo controle desta galáxia fazendo uso de tecnologias extremamente avançadas, naves de batalha enormes, robôs letáis feitos unicamente para se degladiarem eternamente e desperdiçar recursos em batalhas fúteis."
    }, {
        title: "Coloque o nome do seu mundo aqui!",
        body: "Sumarize a situação do seu mundo aqui!"
    }];

    return (
        <List sx={{color:"black"}}>
            {
                itemsList.map((item) => (
                    <>
                        <ItemList titleItem = { item.title } body = { item.body }/>
                    </>
                ))
            }
        </List>
    );
}