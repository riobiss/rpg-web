import styles from "./page.module.css"
export const generateMetadata = () => {
  return {
    title: "Raças",
  }
}
export default async function Page() {
  return (
    <main className={styles.container}>
      <h2>Orcs</h2>
      <article>
        <section>
          <h2>ORIGEM</h2>
          <p>
            {'"'}Os orcs são uma das raças mais antigas e duradouras do
            continente, moldados não pela sutileza dos deuses, mas pela própria
            terra. São conhecidos como Filhos da selvagens da mata, pois
            acreditam que o primeiro orc nasceu quando um raio partiu uma
            montanha e misturou pedra, fogo e sangue de fera. Dessa união,
            surgiu uma raça feita para resistir ao mundo e para moldá-lo com as
            próprias mãos.{'"'}
          </p>

          <p>
            As terras dos Orcs, apesar de suas aparências rudes e
            despretensiosa, desempenham há séculos um papel essencial no
            equilíbrio do continente. Embora não sejam influentes em termos
            diplomáticos, nem ostentem vastas riquezas naturais, sua lealdade
            aos antigos códigos de sangue e sua capacidade de desafiar qualquer
            autoridade tornam o povo orc um fator decisivo nas ambições do
            Conclave das Coroas. Por essa razão, inimigos da ordem continental
            sempre voltaram seus olhos para as tribos das terras orcs, buscando
            nelas uma brecha para enfraquecer a união dos reinos. Contudo, os
            orcs, possuem seus próprios propósitos e transformaram sua posição
            aparentemente frágil em uma arma política temida por todos. Sua
            força coletiva, tradição indomável e unidade tribal fazem deles
            imprevisível, porém indispensável, na dança de poder que molda a era
            atual.
          </p>
        </section>

        <section>
          <h2>O QUE ALGUNS PENSAM</h2>
          <blockquote>
            <p>
              ~ Gigantes: Fortes como a pedra, ferozes como o trovão… mas ainda
              jovens demais para entender o peso do mundo – pensamentos dos
              anciões gigantes.
            </p>
          </blockquote>
          <blockquote>
            <p>
              ~ Aarakocra: Do alto, vemos que fazem mais barulho do que estrago…
              mas quando atacam juntos, até o céu treme – frases comun entre
              caçadores.
            </p>
          </blockquote>
          <blockquote>
            <p>
              ~ Eladrin: Brutos impacientes, guiados pelo fogo da destruição …
              mas capazes de usar o cérebro por incrível que pareça – frase
              comum entre os mais velhos Eladrin.
            </p>
          </blockquote>
        </section>
      </article>
      <section>
        <h2>REINOS</h2>
        <article>
          <h3>Storland</h3>
          <p>
            No extremo norte do continente, entre geleiras azuladas e florestas
            negras, ergue-se Storland, o reino orc mais resistente de todos.
            Seus habitantes são conhecidos como Orcs de Gelo, de pele
            acinzentada ou azulada, respiração pesada e olhos sempre
            semicerrados pela nevasca eterna.
          </p>
        </article>
        <article>
          <h4>Cultura</h4>
          <ul className={styles.list}>
            <li>
              Sobrevivência acima de tudo: Orcs de Storland ensinam crianças a
              caçar, rastrear e suportar o frio desde cedo.
            </li>
            <li>
              Xamanismo do Inverno: Os xamãs se comunicam com espíritos da neve,
              pedindo orientação em batalhas.
            </li>
            <li>
              Hospitalidade: Um hóspede tem comida, abrigo e proteção — mas deve
              lutar ao lado do clã em caso de invasão.
            </li>
            <li>
              Armas pesadas e peles grossas: Suas armas são martelos de gelo
              endurecido, machados com lâminas de obsidiana e armaduras feitas
              de peles de monstros das geleiras.
            </li>
          </ul>
          <p>
            Obs: Storland é governado pelo Trono do Uivo, onde o líder é
            escolhido por combate ritual mas a luta é mais sobre resistência do
            que força bruta.
          </p>
        </article>
        <article>
          <h4>Características Físicas</h4>
          <ul className={styles.list}>
            <li>Altos (entre 1,95 e 2,20m)</li>
            <li>Pele em tons de cinza-azulado, marcada por runas de batalha</li>
            <li>Olhos claros: azuis glaciais, cinzentos ou brancos opacos</li>
            <li>
              Cabelos longos e lisos, geralmente prateados ou loiro-pálido
            </li>
            <li>Corpo pesado, tórax largo e resistência absurda ao frio</li>
          </ul>
        </article>
        <article>
          <h4>Vestuário</h4>
          <ul>
            <li>Pelos grossos de lobo ou alce</li>
            <li>Capas pesadas com runas bordadas</li>
            <li>Armaduras de placas escuras reforçadas com ossos congelados</li>
            <li>Botas altas e luvas de couro de urso do norte</li>
          </ul>
        </article>
        <article>
          <h4>Nomes Comuns</h4>
          <ul className={styles.list}>
            <li>Masculinos: Vaarnok, Jäari, Throlf, Kaarn, Voskär</li>
            <li>Femininos: Yrla, Naavi, Skadi, Taarna, Lyska</li>
            <li>Clãs: do Gelo, da Aurora Pálida, dos Uivos Antigos etc</li>
          </ul>
        </article>
        <article>
          <h3>Mahrland</h3>
          <p>
            Nas terras do centro-oeste, entre vulcões eternamente ativos e
            selvas densas, ergue-se Mahrland, um reino orc de cores vivas,
            tradições profundas e templos colossais esculpidos diretamente na
            rocha quente. Seus orcs são conhecidos pela pele verde-escura e
            tatuagens de cinzas que brilham quando expostos ao calor.
          </p>
        </article>

        <article>
          <h4>Cultura</h4>
          <ul className={styles.list}>
            <li>
              Arquitetos da pedra quente: Constroem pirâmides, fortalezas e
              cidades suspensas com precisão ritual.
            </li>
            <li>
              Adoração aos Deuses da Fumaça: Magos e druidas controlam fogo e
              magma, realizando cerimônias que iluminam noites inteiras.
            </li>
            <li>
              Guerreiros: Suas batalhas são marcadas por movimentos
              ritualísticos que combinam luta e ritmo.
            </li>
            <li>
              Rituais de Tempestade de Cinzas: Jovens passam por provações
              dentro dos campos vulcânicos para serem considerados adultos.
            </li>
          </ul>

          <p>
            Obs: é regido por três líderes: o Alto Xamã, o General das Cinzas, e
            o Arquiteto-Mestre. Ela decide tudo por consenso, e conflitos
            internos são resolvidos através de rituais de coragem, nunca por
            derramamento de sangue gratuito.
          </p>
        </article>
        <article>
          <h4>Características Físicas</h4>
          <ul className={styles.list}>
            <li>Estatura média-alta (1,85 a 2,00m)</li>
            <li>Pele em tons de verde-mata, verde-escuro ou bronze musgoso</li>
            <li>Tatuagens coloridas que representam espíritos da selva</li>
            <li>Olhos dourados, âmbar ou castanho-quente</li>
            <li>Corpo ágil, musculatura definida e leve</li>
          </ul>
        </article>
        <article>
          <h4>Vestuário</h4>
          <ul className={styles.list}>
            <li>Saias de couro e fibras vegetais</li>
            <li>Peitorais e braceletes feitos de jade, osso e penas</li>
            <li>Capas ornamentadas com penas tropicais</li>
            <li>
              Máscaras cerimoniais usadas em guerra para intimidar inimigos
            </li>
          </ul>
        </article>
        <article>
          <h4>Nomes Comuns</h4>
          <ul className={styles.list}>
            <li>Masculinos: Xotl, Cha’ru, Mak’Tul, Huron, Zaq’Tal</li>
            <li>Femininos: Ix’ani, Talhua, Ka’ru, Mixel, Zana’Kot</li>
            <li>Clãs: da Selva, do Jaguar, da Serpente Solar etc</li>
          </ul>
        </article>
        <article>
          <h3>Outrek</h3>
          <p>
            Entre pântanos intermináveis, montanhas cobertas por nuvens eternas
            e rios gigantes, está Outrek, o reino mais selvagem e impetuoso dos
            orcs. Seus orcs têm pele marrom-terrosa, dentes alongados como
            presas de jaguar e cabelos misturados com penas e ossos.
          </p>
        </article>
        <article>
          <h4>Cultura</h4>
          <ul className={styles.list}>
            <li>
              Clãs de Caçadores-Tempestade: Cada clã é liderado por um guerreiro
              que sabe “ler o trovão” — interpretando presságios em tempestades.
            </li>
            <li>
              Reverência aos grandes animais: Orcs de Outrek caçam apenas o
              necessário e honram seus ancestrais através de totens esculpidos
              em árvores sagradas.
            </li>
            <li>
              Proeza e coragem: Jovens enfrentam feras colossais para ganhar o
              direito de portar máscaras cerimoniais.
            </li>
            <li>
              Música tribal poderosa: Tambores do reino podem ser ouvidos a
              quilômetros, ecoando nas montanhas.
            </li>
          </ul>

          <p>
            Obs: Outrek é governado pelo Conselho dos Rugidos, composto pelos
            líderes dos dez clãs maiores. Eles elegem um Suserano da Selva, que
            governa até que um novo líder ganhe o respeito unânime (ou o medo)
            das tribos.
          </p>
        </article>
        <article>
          <h4>Características Físicas</h4>
          <ul className={styles.list}>
            <li>Altos, de 1,90 a 2,15m</li>
            <li>Pele em tons de vermelho-terra, marrom-escuro ou carvão.</li>
            <li>Cicatrizes queimadas que viram marcas de honra.</li>
            <li>Olhos em tons quentes: vermelho, laranja ou amarelo</li>
            <li>Corpulentos, com ombros enormes e mãos largas</li>
          </ul>
        </article>
        <article>
          {" "}
          <h4>Vestuário</h4>
          <ul className={styles.list}>
            <li>Armaduras leves de ferro escurecido</li>
            <li>Faixas vermelhas amarradas no braços e na cintura</li>
            <li>Capas de tecido resistente ao calor dos vulcões</li>
            <li>Adornos com obsidiana negra polida</li>
          </ul>
        </article>

        <article>
          <h4>Nomes Comuns</h4>
          <ul className={styles.list}>
            <li>Masculinos: Raktor, Mal’Zen, Voknar, Targun, Zorkath</li>
            <li>Femininos: Zakira, Ral’ma, Kivra, Solkah, Mar’ena</li>
            <li>
              Clãs: da Lança de Obsidiana, da Cinza Ardente, dos Guardiões de
              Vulcão
            </li>
          </ul>
        </article>
      </section>

      <section>
        <h2>FIGURAS MARCANTES</h2>
        <ul className={styles.list}>
          <li>Thraäl; Olho-Branco do reino de Storland</li>
          <li>Krax’Tal Punho-de-Ferro do reino de Mahrland</li>
          <li>Shar’Vhala do reino de Outrek</li>
        </ul>
      </section>

      <section>
        <h2>TRAÇOS RACIAIS DOS ORC</h2>
        <article>
          <dl>
            <dt>Atributos</dt>
            <dd>
              +3 força, +1 Destreza, +1 Agilidade, +3 Constituição, +2 intimidar
            </dd>
            <dt>Visão</dt>
            <dd>Visão no escuro 9 metros em tons de cinza</dd>
          </dl>
          <dt>Ancestralidade</dt>

          <dd>
            Os orc{"'"}s sempre foram muito robusto, por isso sua ancestralidade
            sempre foi:
          </dd>
          <dd>
            Ancestralidade: mesmo sem armadura você pode ter uma defesa de 1d6
            +5, isso irá diminuir o dano que receber, sem ser mágico.
          </dd>
        </article>
      </section>

      <section>
        <h2>Classes</h2>

        <ul className={styles.list}>
          <li>
            Arqueiros
            <ul>
              <li>Arqueiro mágico</li>
            </ul>
          </li>

          <li>
            Guerreiro
            <ul>
              <li>Soldado</li>
              <li>Gladiador</li>
            </ul>
          </li>

          <li>
            Bárbaro
            <ul>
              <li>Berserker</li>
            </ul>
          </li>

          <li>
            Mago
            <ul>
              <li>Bardo</li>
            </ul>
          </li>
          <li></li>

          <li>Feiticeiro</li>

          <li>
            Druida
            <ul>
              <li>Xamã</li>
            </ul>
          </li>

          <li>Bruxo</li>

          <li>
            Clérigo
            <ul>
              <li>Paladino</li>
            </ul>
          </li>
          <li>
            Caçador
            <ul>
              <li>Domador de monstros</li>
            </ul>
          </li>
        </ul>
      </section>
    </main>
  )
}
