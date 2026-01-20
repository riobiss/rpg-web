import races from "@/data/rpg/World of Clans/races"
import styles from "./page.module.css"
export const generateMetadata = () => {
  return {
    title: "Raças",
  }
}
export default async function Page({
  params,
}: {
  params: { raceSlug: string }
}) {
  const { raceSlug } = await params

  const race = races.find((r) => r.name === raceSlug)
  if (!race) return <div>Não Encontrado</div>
  return (
    <div className={styles.container}>
      <h2>{race.name}</h2>
      <div>
        <h2>ORIGEM</h2>
        <p>
          A sociedade eladrin coexiste na divisão entre a Agrestia das estações
          e seu território possui um clima único, com alguns cantos gelados e
          com neves, outros com florestas abundantes, outras regiões cheias de
          rios e, por fim, uma região de fogo. Os eladrin construíram suas
          cidades e castelos elegantes em lugares de esplendor natural. Há
          muitos anos, quando o sopro da criação deu vida a eles, quando a mãe
          natureza e os céus se juntaram, dando vida aos seus filhos eladrin. Os
          eladrin, então, dominam vales montanhosos isolados, ilhas verdejantes
          dentro do próprio território ao longo dos litorais tempestuosos e nos
          recônditos mais profundos das florestas ancestrais. Alguns reinos
          eladrin ainda cruzam a barreira mortal e possuem raízes em outros
          planos, assim como seus primos elfos, mas a diferença é que eles
          possuem esse acesso de modo mais fácil.
        </p>
        <p>
          Sobre o conselho da Agrestia das Fadas, eles conseguiram deixar a
          fonte de magia do solo mais fértil, fazendo a magia arcana do local
          ser talvez mais fértil que as terras dos elfos. Mas essas duas raças
          têm muita consideração uma pela outra, e pelo cuidado da natureza.
          Porém, eles partilham um ódio fervoroso pelos anões.
        </p>

        <p>
          Pois, há muitos anos atrás, em 5017 a.C., após muitas batalhas entre
          elfos e anões, na região do continente Ultramar, os antigos anões só
          queriam saber de conquistar os recursos naturais das florestas, e o
          grande líder dessas invasões era Durin, o cruel. Durin era um anão
          bárbaro com diversas cicatrizes. Ele tentou matar as três irmãs elfas
          para conquistar sua terra, mas essa batalha foi tão mortal que
          resultou na derrota de Durin, fazendo ele fugir com alguns dos seus
          homens e ir parar no continente Nawrin, onde acaba embarcando em
          Jeongsang, e isso iria iniciar o conflito em 4910 a.C.
        </p>

        <p>
          Nesse tempo, ainda não existia a Agrestia das estações, e os eladrin
          do verão, pelo seu temperamento mais quente e impulsivo, acreditavam
          que tudo devia ser deles. Já os eladrin do inverno tinham uma visão
          diferente sobre isso, então sempre estiveram brigando até que Durin
          começou a desmatar as árvores e a matar todos os animais e tudo que
          tivesse em seu caminho. Isso fez os eladrin se juntarem contra o
          inimigo que havia surgido. Quando Durin chegou ao bosque sagrado,
          guardado por Leezose, o bosque era um local cheio de foco arcano. Lá,
          travaram uma grande batalha, Leezose matou Durin, fazendo seu corpo se
          juntar à grande árvore sagrada, e ali os eladrin restantes se juntaram
          e fizeram sua Agrestia das estações.
        </p>

        <p>
          &quot;Bem, tudo isso é interessante de se saber, mas agora vou contar
          a história atual de nosso povo. Eu me chamo Drizztam, o sábio das
          árvores&quot;
        </p>

        <p>
          Reconhecida por seu solo fértil de magia e pelos grandes druidas que
          possuem a ligação com o elemental, fomos uma das primeiras nações
          independentes que se uniram aos goblins para o conflito que crescia.
          Tudo isso por um conflito já muito antigo entre os homens, onde, na
          guerra, eu mesmo pude presenciar grandes feitos, como a morte do
          imperador de jade, a derrubada do forte dos orcs de Mahrland, a
          explosão arcana criando a rachadura mística e a invenção dos anjos de
          guerra. Tive a oportunidade, ou azar, de presenciar todos esses
          conflitos e batalhas entre nosso povo e os inimigos
        </p>
        <p>
          Os druidas, atualmente, do nosso povo sobreviveram ao Vazio do plano
          das sombras, tendo que aprender a controlar essa energia devido a
          várias situações causadas. Além desses conflitos, a tão antiga
          Conselho da Agrestia das Fadas e Agrestia das Estações juntaram todos
          os reinos e povos em uma chamada única estação, nomeando Cassedre como
          governante da coroa. Tendo agora uma líder em cima de todos, onde ela
          começou a adotar uma medida de maior distanciamento dos reinos
          vizinhos, servindo-se da vida selvagem de Jeongsang ao redor como se
          fosse um escudo Apesar de muito ter sido perdido pelos conflitos, eles
          se comprometeram em preservar o pouco que restou
        </p>

        <p>
          Agora, com esse isolamento que já dura 39 anos, isolados em nossa
          selva de milhares de anos, a nossa sofisticada cidade arcológica de
          Jeongsang permanece praticamente livre de influências externas.
          Tirando a situação atual sobre os Draconatos verdes que perderam seu
          lar para os pretos e foram abrigados e cedidos uma parte de nossa
          região, ficando também sob nossa proteção e tratados. Existe um certo
          preconceito, eu posso perceber, mas acredito que essa diferença acabe
          ficando de lado com o tempo, pois não somos os únicos a dividir esse
          solo.
        </p>
        <p>
          Além disso, quem está fora das fronteiras de Jeongsang sabe muito
          pouco sobre a história da região e sobre nós, pois sempre fomos muito
          discretos, mesmo antes do isolamento. Ao longo dos anos, incontáveis
          expedições de reinos humanos foram feitas para cá, mas os que
          tentaram, simplesmente desapareceram sem deixar o menor rastro.
        </p>

        <p>
          Bom, existe muita coisa para falar, então vá buscar saber pequeno
          graveto, e se quiser me encontrar, estarei na capital ou andando por
          aí.
        </p>
      </div>
      <div>
        <h2>O QUE ALGUNS PENSAM </h2>
        <p>
          Pequenos: Belos como histórias bem contadas e tão perigosos quanto as
          partes que eles escolhem não contar — Provérbio pequenino usado em
          tavernas e cortes.
        </p>

        <p>
          Goles: Eles mudam muito ou são muito diferentes e falam como se o
          tempo lhes pertencesse. Pedra não confia no que não permanece.
        </p>

        <p>
          Esqueletos: Eles vivem demais, lembram demais e ainda assim fogem da
          morte como crianças mas uma hora talvez possam se juntar a nós – fala
          comum do povo Esqueleto.
        </p>
      </div>

      <div>
        <h2>REINOS</h2>
        <h3>Jeongsang</h3>
        <p>
          Jeongsang é um reino com uma região vasta em todos os tipos de
          florestas, montanhas e tantas outras coisas. É um povo totalmente
          conectado com a natureza e com uma ligação forte entre si, mas também
          são guerreiros ferozes, com uma vasta cultura além dos Eladrin, como
          as tribos dos touren, grung, Draconatos verdes, fadas, lizardfolk,
          leonin e os yuan-ti.
        </p>

        <h3>Cultura</h3>
        <p>
          •Cada comunidade mantém Conselhos Elementais, onde druidas e magos
          interpretam os sinais da natureza antes de qualquer decisão importante
          •os Eladrin veem o mundo exterior como instável e corrompido devido a
          guerra fazendo suas cidades são ocultas por ilusões, selvas vivas e
          barreiras arcanas •Estrangeiros só são aceitos após provas de respeito
          à natureza e resistência à magia elemental •Entre os Eladrin, conjurar
          magia é um ato artístico. Feitiços são executados com danças rituais,
          pinturas corporais naturais e entre outras coisas e erros mágicos são
          vistos como desrespeito à tradição, não simples falhas técnicas.
        </p>
        <h3>Nomes comuns</h3>
        <p>Masculinos</p>
        <ul className={styles.list}>
          <li>Aelthir</li>
          <li>Caelion</li>
          <li>Ithrael</li>
          <li>Vaelor</li>
          <li>Thirien</li>
          <li>Lioren</li>
          <li>Maerith</li>
          <li>Sylvaron</li>
          <li>Eryndor</li>
          <li>Kaelith</li>
          <li>Nymarion</li>
          <li>Faelros</li>
        </ul>
        <p>Femininos</p>
        <ul className={styles.list}>
          <li>Aelyra</li>
          <li>Saelune</li>
          <li>Ithilwen</li>
          <li>Vaelora</li>
          <li>Liora</li>
          <li>Nyssara</li>
          <li>Elaria</li>
          <li>Sylphae</li>
          <li>Myrieth</li>
          <li>Caelyth</li>
          <li>Faelira</li>
          <li>Thyssiel</li>
        </ul>
      </div>

      <div>
        <h2>FIGURAS MARCANTES</h2>
        <p>
          - Drizztam, o sábio das árvores - Cassedre, imperatriz das estações -
          Nox, a montanha
        </p>
      </div>
      <div>
        <h2>TRAÇOS RACIAIS DOS ELADRIN</h2>
        <p>
          Os eladrin atingem a maturidade física aos 20 anos, mas seu processo
          de envelhecimento se estabiliza após 100. Quando se consideram adulto
          e vivem até 600 anos. Visão no escuro de até 18 metros em tons de
          cinza +2 Arcanismo +4 natureza Suas alturas varia entre 1,60 ate 1,90
          Tem a capacidade de se mover entre uma camada fraca do plano etéreo se
          Teletransportando ate 5 metros pelo campo, não podendo ser atacado
          oportunidade e fica invisível quando acaba seu turno durando só seu
          turno e só sendo usado apenas uma vez por descanso longo. Em vez de
          dormir, os eladrin entram num estado de meditação conhecido como
          transe, bastando apensas 4 horas para um descanso curto e 6 horas para
          um longo.
        </p>
      </div>
      <div>
        <h2>Classes</h2>
        <ul className={styles.list}>
          <li>Arqueiros</li>
          <li>Arqueiro mágico</li>
          <li>Guerreiro</li>
          <li>Cavaleiro</li>
          <li>Lanceiro</li>
          <li>Mago</li>
          <li>Mago espiritual</li>
          <li>Mago infernal</li>
          <li>Bardo</li>
          <li>Feiticeiro</li>
          <li>Druida</li>
          <li>Xamã</li>
          <li>Druida sombrio</li>
          <li>Bruxo</li>
          <li>Caçador</li>
          <li>Domador de monstros</li>
          <li>Cozinheiro de feras</li>
          <li>Caçador espiritual</li>
          <li>Ladino</li>
          <li>Pirata</li>
        </ul>
      </div>
      <div>
        <h2>ESTAÇÂO</h2>
        <h3>Primavera</h3>
        <p>
          Os Eladrin da Primavera são seres mais leves guiados pela emoção, pelo
          impulso e pelo amor à liberdade mas também grande guerreiros e um povo
          muito forte. +2 Carisma +1 Destreza ou Instinto •Vantagem contra
          efeitos de controle mental •Comunicação básica com plantas e pequenos
          animais.
        </p>
        <p></p>
        <h3>Verão</h3>
        <p>
          Os Eladrin do Verão carregam o peso da glória e da guerra, lutando
          desde o início com todos e nunca recuando, o emblema dourado vai além
          do calor. +2 força ou Carisma +1 Constituição •Quando ferido
          gravemente, recebe bônus temporário de ataque ou dano quando chega a
          10 de vida. •possui resistência ao calor, reduz dano de fogo.
        </p>
        <h3>Outono</h3>
        <p>
          Os Eladrin do Outono falam baixo, mas suas palavras moldam a
          diplomacia, os maiores magos e conhecedores da magia entre todos os
          eladrin. +2 Instinto +1 carisma ou conhecimento • +2 percepção •
          Vantagem contra efeitos de ilusão e confusão.
        </p>
        <h3>Inverno</h3>
        <p>
          Os Eladrin do Inverno conhecem o silêncio, tão resistentes quanto as
          árvores, e tão honrados quanto um Paladino. +2 Constituição ou
          Instinto +1 conhecimento • Imunidade ou bônus contra efeitos de
          charme. • Resistência a dano de frio e vantagem contra medo
        </p>
      </div>
    </div>
  )
}
