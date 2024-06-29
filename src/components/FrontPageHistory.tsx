import CardHistory from "./CardHistory"
import initialBanner from "../assets/BannerImage.jpg"
import Village from "../assets/Village1.jpg"

const FrontPageHistory = () => {
  return (
    <>
        <CardHistory 
          title="O Início" 
          content={[
            {
              textContent:"Em suma maioria, grandes seres tanto em forma física quanto espectral. Era um mundo de poder absoluto, onde os mais fortes detinham o centro do poder, e comandavam todos aqueles abaixo, era um reinado de supremacia daqueles cujo poder ultrapassa ao de uma divindade celeste menor, podendo facilmente destruir continentes com a palma de suas mãos, este em si não é um lugar comum, sequer se assemelha à terra dos humanos e suas leis da física, era a terra de 'Damcae', um lugar além do céu, da terra e do tempo, um verdadeiro outro mundo, que antecedeu a todas as criações. Embora a essência da vida só tenha chegado mais tarde nas planícies de sua Pangeia, mesmo que ali não houvesse uma contagem de tempo, pois o próprio não existia nesse lugar, o relógio do tempo de Damcae só passou a contar as horas quando a primeira vida terrestre surgiu, a primeira essência, vida em sua mais pura forma, uma vontade tênue da existência primordial o mero 'conceito de existência', o que muitos mais tarde chamariam de 'espírito de liberdade', o desejo de ser livre em sua total singularidade. A vida em si é um mistério, não há grandes motivos para que ela se forme, ela apenas se molda a sua própria vontade, seja por interferência divina ou simplesmente acúmulo de matéria bruta sobrando, isso não gera bem um motivo para que algo exista, e nem mesmo dá algum propósito há essa existência, mas é isso que tornou Damcae num lugar puramente mágico e especial, aquela essência de vida não poupou esforços, logo o que eram planícies desérticas de pedra, areia e magma, foram arborizadas e transformadas em paisagens exuberantes de verde e azul, havia uma fauna inteiramente projetada para sobreviver do consumo de essência, e tudo que ali vivia gerava uma essência própria, especificamente porque não havia vontade de buscar alimentos ditos por si próprio como a carne ou frutas, o primeiro ser terrestre de Damcae não precisava se alimentar ou beber de alguma água, embora o pudesse fazer caso tentasse.",
              imageContent:initialBanner,
              altName:"Initial Banner"
            },
            {
              textContent:"Atualmente em Damcae existem vilas destes seres, eles se reproduziram a partir de suas essências, mesclando-as e as dando vontade, trazendo a vida mais e mais seres para povoar a terra, mas... com que propósito? Por que se importar com população, quando não se come, dorme ou bebe? Não havia motivo, até que os céus trouxeram a Damcae uma criatura de outras terras, já sem vida, coberto com uma roupa branca pesada com alguns rasgos, símbolos estranhos e uma cabeça redonda de metais e vidro, mas por baixo, um corpo feito de carne, músculos, ossos, veias, vértebras e cartilagem. A princípio ninguém tocou naquela criatura estranha, mas conforme o tempo passava, algumas criaturas selvagens se aproximavam com o cheiro da carne, criaturas carnívoras de Damcae, o controle natural da vida, uma cadeia alimentar básica para o controle populacional selvagem. O povo de Damcae recolheu o corpo e o acolheu em sua vila, sem saber o que fazer, seu corpo foi transformado em essência e repartido pela vila, um tipo de rito de fortalecimento, mas o que não esperavam, era que isso teria um enorme custo... Todos na vila sofreram mutações, horríveis mutações, transformaram-se em um tipo de besta, uma besta coberta de pele com finos pelos, exceto por um volume naqueles acima do crânio, transformaram-se em 'humanos', mas ainda sentiam a essência, embora agora se sentissem cansados, com fome, e com sede.",
              imageContent: Village,
              altName:"Village"
            }
          ]} 
        />
    </>
  )
}

export default FrontPageHistory