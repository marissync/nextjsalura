function SSRPage({ mensagem }) {
  return <div>{mensagem}</div>;
}

function delay(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

export function getServerSideProps() {
  delay(3);

  const mensagem = "Fui renderizada para esta requisição!";
  console.log(mensagem);

  return {
    props: {
      mensagem,
    },
  };
}

export default SSRPage