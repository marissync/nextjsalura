function SSGPage({ mensagem }) {
    return <div>{mensagem}</div>;
  }

function delay(seconds) {
    return new Promise(function (resolve) {
      setTimeout(resolve, seconds * 1000);
    });
  }

export async function getStaticProps(){
    delay(2)

    const mensagem = "Fui gerada durante o build!";
    console.log(mensagem);

    return {
        props: {
            mensagem
        }
    }
}

export default SSGPage;