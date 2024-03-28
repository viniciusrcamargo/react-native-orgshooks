import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

const gerarNumeroAleatorio = (min, max) => {                //função para gerar um número aleatório
    return Math.floor(Math.random() * (max - min + 1) + min);//Math.floor arredonda para baixo
}

const produtores = {
    titulo: "Produtores",
    lista: [
        {
            nome: "Green",
            imagem: green,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Salad",
            imagem: salad,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Jenny Jack Farm",
            imagem: jennyJack,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Grow",
            imagem: grow,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Potager",
            imagem: potager,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5),
        }
    ]
}

export default produtores;