import CardRaces from "../../components/CardRaces"
import HumanRacePng from '../../assets/HumanRace.jpg'
import AvatarRacePng from '../../assets/AvatarRace.jpg'
import LycanRacePng from '../../assets/LycanRace.jpg'
import AnfibioRacePng from '../../assets/AnfibioRace.jpg'

const Races = () => {
  return (
    <>
        <div className="flex flex-col flex-1 text-center">
            <div className="glass rounded-md">
                <h2 className="text-2xl font-title font-bold text-dark-theme-primary">Raças</h2>
            </div>

            <div className="gap-2 p-2">
                <CardRaces 
                  header={
                    {
                      banner: HumanRacePng,
                      title: 'humanos',
                      altName: 'Humanos'
                    }
                  } 

                  content={
                    {
                      description: 'Dotados dos dons naturais da essência, são excelentes aprendizes tanto da magia proveniente dela, como do mundo envolta de si, com potencial imensurável para tal, mas no entanto, têm corpos frágeis, mentes fracas, mas muito versáteis em seus estilos de combate, podendo se adaptar facilmente às condições adversas',
                      initialLevelPower: 'criacionismo',
                      powerDescription: ' É a arte da criação, humanos são perfeitos inventores, inventaram o arco e flecha com o uso de cipós, madeiras curvas e palitos com pontas de pedra amolada sob pedra. Com inteligência o bastante qualquer um poderia ser inventor, mas eles podem ir além com seus poderes.',
                      observation: 'No entanto, qualquer criação deve ser analisada pela staff para ser aprovado, e só depois poderá circular pelas terras de Damcae',
                      powerUpLevels: [
                        {
                          Level: 25, 
                          Description: 'Pode aprender uma habilidade',
                        },
                        {
                          Level: 50,
                          Description: 'Pode aprender uma habilidade'
                        }, 
                        {
                          Level: 75,
                          Description: 'Pode aprender uma habilidade'
                        },
                        {
                          Level: 100,
                          Description: 'Pode aprender uma habilidade'
                        }
                      ],
                      bonus: [
                        '+ 05 de força',
                        '+ 05 de inteligência',
                        '+ 02 em velocidade',
                        '+ 05 de resistência',
                      ]
                    }
                    
                  }
                />
            </div>

            <div className="gap-2 p-2">
                <CardRaces 
                  header={
                    {
                      banner: AvatarRacePng,
                      title: 'avatares',
                      altName: 'Avatares'
                    }
                  }

                  content={
                    {
                      description: 'Criaturas o mais próximo possível dos seres primordiais da terra de Damcae, seus corpos não foram totalmente mutados e a sua afinidade com a magia essencial é gigantesca, são maiores, mais ágeis e mais inteligentes que os humanos. Muitos Xamãs, ou aprendizes de Xamãs, saem desta raça.',
                      initialLevelPower: 'Domadores bestiais.',
                      powerDescription: 'Essa raça tem facilidade extrema em domar animais. Conectando suas essências, e entendendo seus sentimentos, assim como transmitindo os seus. Pode domar pets, e criá-los tranquilamente que serão leais ao Avatar. ',
                    }
                  }
                />
            </div>

            <div className="gap-2 p-2">
                <CardRaces 
                  header={
                    {
                      banner: LycanRacePng,
                      title: 'Lycans',
                      altName: 'Lycans'
                    }
                  }

                  content={
                    {
                      description: 'Os Lycans são criaturas bestiais selvagens, geralmente pouco racionais, exceto pelos Lycans mais velhos ou aqueles que se candidatam a próximo Alfa da alcatéia. A aproximação dos lobos, fiéis amigos dos humanos, com os seres de energia causou uma desestruturação em suas essências, criando esta mescla de lobo com seres primordiais. São a raça mais comum de se encontrar por todo o mapa.',
                      initialLevelPower: 'Sangue bestial.',
                      powerDescription: 'Não são muito inteligentes, tão pouco são dotados de grandes magias. Tendo uma origem recente em animais selvagens, os Lycans tendem a uma violência desgovernada quando ameaçados, demonstrando uma força e velocidade descomunais. São caçadores naturais, visto que são animais carnívoros. Aliada à raiva, as criaturas possuem poderosas garras em suas patas e dentes afiados para dilacerar suas presas.',
                      observation: 'Força de mordida segue a força principal',
                      bonus: [
                        '+ 08 de Força',
                        '+ 08 de Velocidade',
                        '+ 05 de Resistência',
                        '+ 05 de Sentidos Aguçados',
                      ]
                    }
                  }
                />
            </div>

            <div className="gap-2 p-2">
                <CardRaces 
                  header={
                    {
                      banner: AnfibioRacePng,
                      title: 'Anfibios',
                      altName: 'Anfibios'
                    }
                  }

                  content={
                    {
                      description: 'Únicos detentos de toda a extensão marítima, os anfíbios são criação de muitos anos de convívio com a energia e evolução biológica. Devido à calmaria do fundo do oceano, os anfíbios não possuem intrigas internas ou externas, capacitando-os a um crescimento exponencial em pouco tempo. Sua civilização logo irá se equiparar aos humanos. São as criaturas mais pacíficas.',
                      initialLevelPower: 'Hidrocinese',
                      powerDescription: 'Sendo criaturas originárias das águas, naturalmente compõe em seu arsenal a capacidade de manipular a água conforme suas necessidades. Em sua evolução, sempre mantiveram foco no uso da água da maneira mais branda, priorizando em seu uso prático e medicinal, desenvolvendo a técnica da cura pela água, que todos os anfíbios possuem',
                      bonus: [
                        '+ 08 de inteligência',
                        '+ 05 de Velocidade',
                        '+ 05 de Percepção',
                        '+ 05 de Sentidos Aguçados',
                      ]
                    }
                  }
                />
            </div>
        </div>
    </>

  )
}

export default Races