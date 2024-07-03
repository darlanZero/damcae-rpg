import CardRaces from "../../components/CardRaces"
import HumanRacePng from '../../assets/HumanRace.jpg'

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
                      observation: 'Isso é uma observação',
                      powerUpLevels: [
                        {
                          Level: 1, 
                          Description: 'olá',
                        },
                        {
                          Level: 2,
                          Description: 'hii'
                        }
                      ],
                      bonus: [
                        'olá',
                        'tudo bom?'
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