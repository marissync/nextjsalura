import FAQScreen from "../src/screens/FAQScreen";

export default FAQScreen;

// import { faZ } from '@fortawesome/free-solid-svg-icons';
// import { useEffect, useState } from 'react';
// import NextLink from '../src/components/Link';
// import PageTitle from '../src/components/PageTitle'

//o next por meio de SSR vai sincronizar o load disso com o do html = instantâneo
//podemos usar p/ carregar a parte + importante da página
//mesmo que caia uma bomba na api será gerado um json com o seu conteúdo no build e o site sempre vai ficar no ar
export async function getStaticProps(){
    const FAQ_API_URL = "https:gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
    var faq = await fetch(FAQ_API_URL)
              .then((response) => response.json())
              .then((response) => response);

    return{
        props: {
            faq
        }
    }
}


// export default function FaqPage({faq}){
//     console.log(faq)
//     //const [faq, setFaq] = useState([]);

//     /*
//      //sem parâmetros, vai acontecer apenas quando carregar
//      useEffect(() => {
        
//         const FAQ_API_URL = "https:gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

//         //timeout foi posto pra observar melhoro delay 
//         setTimeout(() => {
        
//             fetch(FAQ_API_URL)
//             .then((response) => response.json())
//             .then((response) => {
//                 setFaq(response);
//             });

//         }, 2000);

        
//     }, []); 
//    */

//     return(
//         <div>
//             <PageTitle>FAQ - Alura Cases</PageTitle>
//             <h1>Alura cases - Página de Perguntas FAQ</h1>
//            <NextLink href='/'>
//                 Ir para a Home
//            </NextLink>
//            <ul>
//                {faq.map(({ answer, question }) => (
//                     <li key={question}>
//                         <article>
//                             <h2>{question}</h2>
//                             <h2>{answer}</h2>
//                         </article>
//                     </li>
//                ))}
//            </ul>
//         </div>
//     )
// }