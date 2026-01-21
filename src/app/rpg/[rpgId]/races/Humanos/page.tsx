import styles from "./page.module.css"
export const generateMetadata = () => {
  return {
    title: "Raças",
  }
}
export default async function Page() {
  return (
    <main className={styles.container}>
      <h2>Humanos</h2>
      <article>
        <section>
          <h2>ORIGEM</h2>
          <p>
            Entre todas as raças que moldam os reinos de Sakaar, a raça humana é
            talvez a mais contraditória e, por isso mesmo, a mais imprevisível.
            Não possuem a força bruta dos Gigantes, a longevidade mística dos
            Eladrin ou a engenhosidade sobrenatural dos Pequenos. Tampouco
            caminham com o poder ancestral dos Draconatos ou manipulam magias
            infernais como os Tieflings. Ainda assim, os Humanos ergueram
            cidades, reinos e impérios que rivalizam com os de povos muito mais
            antigos.
          </p>
          <p>
            Diz-se que os Humanos surgiram das Cinzas dos Primeiros Fogos,
            quando os deuses menores decidiram criar uma raça que fosse frágil,
            mas extremamente adaptável. Desde o início, os Humanos demonstraram
            uma capacidade única de sobreviver em quase qualquer ambiente:
            florestas densas, estepes ventosas, montanhas geladas ou litorais
            tempestuosos. Sua sociedade é tão diversa quanto o solo sobre o qual
            constroem suas casas. No período antigo de Sakaar, os reinos humanos
            são estruturados por monarquias, feudos, ordens cavaleirescas e
            guildas de artesãos. A vida de um camponês pouco se assemelha à de
            um nobre — mas ambos compartilham a mesma crença: que a Coroa e o
            Dever são os pilares da civilização humana.
          </p>
        </section>
        <section>
          <h2>O QUE ALGUNS PENSAM </h2>
          <blockquote>
            <p>
              Pequenos: São grandes demais para perceber os detalhes, mas
              pequenos o bastante para cometer os erros que nós evitamos –
              ditado popular dos Pequenos sobre os humanos.
            </p>
          </blockquote>
          <blockquote>
            <p>
              Pigs: Humanos? Fazem barulho, fazem bagunça, fazem guerras… mas
              sabem negociar como ninguém – cometário popular entre mercadores
              pigs.
            </p>
          </blockquote>
          <blockquote>
            <p>
              Eladrin: Mortais apressados, inquietos e instáveis… e, ainda
              assim, perigosamente determinados – pensamentos comum da
              população.
            </p>
          </blockquote>
        </section>
      </article>
      <section>
        <h2>REINOS</h2>
        <article>
          <h3>Teschilz</h3>
          <p>
            Um reino famoso por sua arte, luxo e intrigas palacianas.
            Fraternelle é governado por casas nobres orgulhosas, envolvidas em
            duelos políticos tão mortais quanto batalhas. Suas cidades têm
            catedrais imensas, vitrais mágicos e mercados elegantes. A
            culinária, a poesia e a etiqueta são armas tão fortes quanto
            espadas.
          </p>
        </article>

        <article>
          <h3>Cultura</h3>
          <ul>
            <li>Grande diversidade étnica.</li>
            <li>Valorização extrema da liberdade e iniciativa individual.</li>
            <li>Cavaleiros pioneiros desbravam fronteiras selvagens.</li>
            <li>Guildas mercenárias e inventores são muito influentes.</li>
          </ul>
          <p>Obs: Terra de oportunidades e conflitos internos.</p>
        </article>

        <article>
          <h3>Características físicas</h3>
          <ul className={styles.list}>
            <li>Pele clara, bronzeada ou escura.</li>
            <li>Alturas variadas, muitos acima da média.</li>
            <li>Corpo forte e resistente devido à vida de fronteira.</li>
            <li>Roupas práticas de couro e tecido grosso.</li>
          </ul>
        </article>

        <article>
          <section>
            <h2>NOMES COMUNS</h2>

            <h3>Masculinos</h3>
            <ul className={styles.list}>
              <li>Jameson</li>
              <li>Alder</li>
              <li>Brann</li>
              <li>Cole</li>
              <li>Marcus</li>
            </ul>

            <h3>Femininos</h3>
            <ul className={styles.list}>
              <li>Marah</li>
              <li>Ellyne</li>
              <li>Sarai</li>
              <li>Annebeth</li>
              <li>Rylan</li>
            </ul>

            <h3>Sobrenomes</h3>
            <ul className={styles.list}>
              <li>Stonefield</li>
              <li>Walker</li>
              <li>Greenriver</li>
              <li>Hartwell</li>
            </ul>
          </section>
        </article>
        <article>
          <h3>Haritall</h3>
          <p>
            Um vasto domínio formado por várias províncias semi-independentes,
            cada uma com sua cultura. É um reino jovem e ambicioso, que cresceu
            rápido e atrai aventureiros, mercenários e inventores do mundo todo.
            O Conselho do punho de ferro governa o reino, mas as províncias
            constantemente competem por autonomia. É um lugar de oportunidades —
            e caos político.
          </p>
        </article>

        <article>
          <h3>Cultura</h3>
          <ul className={styles.list}>
            <li>Grande diversidade étnica.</li>
            <li>Valorização extrema da liberdade e iniciativa individual.</li>
            <li>Cavaleiros pioneiros desbravam fronteiras selvagens.</li>
            <li>Guildas mercenárias e inventores são muito influentes.</li>
          </ul>
        </article>

        <article>
          <h3>CARACTERISTICAS FISICAS</h3>
          <ul className={styles.list}>
            <li>Grande diversidade: pele clara, bronzeada ou escura.</li>
            <li>
              Alturas variadas, mas muitos são mais altos que a média dos outros
              reinos.
            </li>
            <li>Corpo forte e resistente devido à vida de fronteira.</li>
            <li>Estilo prático, roupas simples de couro e tecido grosso.</li>
          </ul>
        </article>

        <article>
          <section>
            <h2>Nomes Comuns</h2>

            <h3>Masculinos</h3>
            <ul className={styles.list}>
              <li>Jameson</li>
              <li>Alder</li>
              <li>Brann</li>
              <li>Cole</li>
              <li>Marcus</li>
            </ul>

            <h3>Femininos</h3>
            <ul className={styles.list}>
              <li>Marah</li>
              <li>Ellyne</li>
              <li>Sarai</li>
              <li>Annebeth</li>
              <li>Rylan</li>
            </ul>

            <h3>Sobrenomes</h3>
            <ul className={styles.list}>
              <li>Stonefield</li>
              <li>Walker</li>
              <li>Greenriver</li>
              <li>Hartwell</li>
            </ul>
          </section>
        </article>
        <article>
          <h3>Schlemitt</h3>
          <p>
            Um império antigo, vasto e milenar, governado por uma dinastia que
            afirma descender de dragões. Sua burocracia é rígida e eficiente, e
            seus exércitos são imensos, disciplinados e movidos por tradições
            ancestrais. As terras são marcadas por templos dourados, muralhas
            colossais e florestas de bambu onde espíritos antigos ainda
            sussurram.
          </p>
        </article>

        <article>
          <h3>Cultura</h3>
          <ul className={styles.list}>
            <li>Profundo respeito aos ancestrais e à ordem imperial.</li>
            <li>Busca por equilíbrio entre o mundo espiritual e material.</li>
            <li>Armas e armaduras decoradas com símbolos dracônicos.</li>
            <li>Artes marciais e magia ritual são amplamente praticadas.</li>
          </ul>
        </article>

        <article>
          <h3>Características físicas</h3>
          <ul className={styles.list}>
            <li>Pele clara a bronze clara.</li>
            <li>Cabelos lisos, na maioria pretos.</li>
            <li>Olhos escuros, expressivos e serenos.</li>
            <li>
              Postura reta e roupas com bordados dracônicos e tecidos longos.
            </li>
          </ul>
        </article>

        <article>
          <section>
            <h2>NOMES COMUNS</h2>

            <h3>Masculinos</h3>
            <ul className={styles.list}>
              <li>Jian</li>
              <li>Wei</li>
              <li>Long</li>
              <li>Chen</li>
              <li>Xian</li>
            </ul>

            <h3>Femininos</h3>
            <ul className={styles.list}>
              <li>Mei</li>
              <li>Lin</li>
              <li>Hua</li>
              <li>Xue</li>
              <li>Lián</li>
            </ul>

            <h3>Sobrenomes</h3>
            <ul className={styles.list}>
              <li>Zhao</li>
              <li>Wen</li>
              <li>Liang</li>
              <li>Sun</li>
            </ul>
          </section>
        </article>

        <article>
          <h3>Dolong</h3>
          <p>
            Dolong é uma terra de brumas eternas, castelos sombrios e lendas
            sobrenaturais. Governado por uma monarquia forte, mas cercada de
            intrigas internas entre casas rivais e conselheiros místicos.
            Cavaleiros juramentados, druidas da velha fé e magos cortesãos
            disputam influência sobre o trono.
          </p>
        </article>

        <article>
          <h3>Cultura</h3>
          <ul className={styles.list}>
            <li>Tradições antigas coexistem com uma nobreza moderna.</li>
            <li>Ampla presença de ordens cavaleirescas.</li>
            <li>
              Lendas de fadas, espectros e reinos ocultos fazem parte da vida
              cotidiana.
            </li>
            <li>O povo é resistente e muito leal às suas ilhas.</li>
          </ul>
        </article>

        <article>
          <h3>Características físicas</h3>
          <ul className={styles.list}>
            <li>Pele clara ou pálida.</li>
            <li>Cabelos loiros, castanhos ou ruivos.</li>
            <li>Olhos claros (azuis, verdes, acinzentados).</li>
            <li>Estrutura corporal magra ou média, com aparência austera.</li>
          </ul>
        </article>

        <article>
          <section>
            <h2>NOMES COMUNS</h2>

            <h3>Masculinos</h3>
            <ul className={styles.list}>
              <li>Edmund</li>
              <li>Arthur</li>
              <li>Cedric</li>
              <li>Rowan</li>
              <li>Harold</li>
            </ul>

            <h3>Femininos</h3>
            <ul className={styles.list}>
              <li>Elinor</li>
              <li>Maerwen</li>
              <li>Gwendra</li>
              <li>Isolde</li>
              <li>Miriam</li>
            </ul>

            <h3>Sobrenomes</h3>
            <ul className={styles.list}>
              <li>Thornfield</li>
              <li>Crownhill</li>
              <li>Brackenridge</li>
              <li>Oakhart</li>
            </ul>
          </section>
        </article>
        <article>
          <h3>Gaerland</h3>
          <p>
            É um reino tropical gigantesco, composto por florestas mágicas, rios
            imensos, montanhas douradas e cidades costeiras vibrantes. Seu povo
            é alegre, guerreiro e culturalmente diverso, formado pela fusão de
            várias tribos e povos que migraram ao longo dos séculos. É comandado
            por uma monarquia que governa em harmonia com chefes tribais e
            conselhos urbanos.
          </p>
        </article>

        <article>
          <h3>Cultura</h3>
          <ul className={styles.list}>
            <li>Mistura de povos, crenças e tradições.</li>
            <li>Forte presença de magia natural e espiritual.</li>
            <li>Grandes festas e celebrações marcam todas as estações.</li>
            <li>Guerreiros conhecidos pela coragem e adaptabilidade.</li>
          </ul>
        </article>

        <article>
          <h3>Características físicas</h3>
          <ul className={styles.list}>
            <li>
              Grande mistura de traços: pele clara, morena, parda ou escura.
            </li>
            <li>
              Cabelos variando do crespo ao liso, pretos ou castanhos na
              maioria.
            </li>
            <li>Olhos escuros e vivos.</li>
            <li>Corpo resistente, adaptado ao calor e ao esforço físico.</li>
          </ul>
        </article>

        <article>
          <section>
            <h2>Nomes comuns</h2>

            <h3>Masculinos</h3>
            <ul className={styles.list}>
              <li>Aruá</li>
              <li>Tadeo</li>
              <li>Raviel</li>
              <li>Bento</li>
              <li>Jandir</li>
            </ul>

            <h3>Femininos</h3>
            <ul className={styles.list}>
              <li>Iara</li>
              <li>Mirian</li>
              <li>Talua</li>
              <li>Brisa</li>
              <li>Celina</li>
            </ul>

            <h3>Sobrenomes</h3>
            <ul className={styles.list}>
              <li>Dos Montes</li>
              <li>Arcofundo</li>
              <li>Solnascente</li>
              <li>do Vale Verde</li>
            </ul>
          </section>
        </article>
        <article>
          <h3>Leerrii</h3>
          <p>
            Leerrii é uma confederação de cidades-estados, cada uma governada
            por famílias sacerdotais que veneram os deuses do Sol, da Lua e do
            Sangue. Suas pirâmides escalonadas encantam e assustam visitantes. É
            um reino profundamente espiritual, onde sacrifícios rituais são
            vistos como parte natural da ordem do mundo.
          </p>
        </article>

        <article>
          <h3>Cultura</h3>
          <ul className={styles.list}>
            <li>Arquitetura grandiosa em pedra vulcânica.</li>
            <li>
              •Guerreiros-jaguar e guerreiros-águia dominam os campos de
              batalha.
            </li>
            <li>Cerimônias religiosas elaboradas, com cantos e danças.</li>
            <li>Valorização extrema da bravura</li>
          </ul>
        </article>

        <article>
          <h3>Características físicas</h3>
          <ul className={styles.list}>
            <li>Pele bronzeada ou morena.</li>
            <li>Cabelos pretos, lisos ou ondulados.</li>
            <li>Olhos escuros, marcantes.</li>
            <li>Corpo forte e compacto devido ao treinamento marcial.</li>
          </ul>
        </article>

        <article>
          <section>
            <h2>Nomes comuns</h2>

            <h3>Masculinos</h3>
            <ul className={styles.list}>
              <li>Cuautli</li>
              <li>Tenoch</li>
              <li>Ilaro</li>
              <li>Maxtli</li>
              <li>Zonco</li>
            </ul>

            <h3>Femininos</h3>
            <ul className={styles.list}>
              <li>Citlali</li>
              <li>Nayah</li>
              <li>Ixchel</li>
              <li>Meztli</li>
              <li>Yara (variação local)</li>
            </ul>

            <h3>Sobrenomes</h3>
            <ul className={styles.list}>
              <li>Tecuani</li>
              <li>Solpiedra</li>
              <li>Quauhtémoc</li>
              <li>Xocotzin</li>
            </ul>
          </section>
        </article>
        <article>
          <h3>Republik Hosland</h3>
          <p>
            República de Hosland é uma união de vários clãs e reinos do norte,
            unidos pela sobrevivência e pela força. Governado pelo Conselho do
            Martelo Branco, o reino vive sob frio permanente, onde a neve nunca
            derrete completamente. O governo é rígido, centralizado e muitas
            vezes tirânico, mas o povo é incrivelmente resiliente e solidário.
          </p>
        </article>

        <article>
          <h3>Cultura</h3>
          <ul className={styles.list}>
            <li>Forte senso de coletividade e sacrifício.</li>
            <li>Milícias gigantescas formadas por camponeses endurecidos.</li>
            <li>Arquitetura pesada, com torres de pedra e ferro.</li>
            <li>
              Magos rúnicos e xamãs do gelo moldam o clima e protegem
              fronteiras.
            </li>
          </ul>
        </article>

        <article>
          <h3>Características físicas</h3>
          <ul className={styles.list}>
            <li>Pele clara, frequentemente avermelhada pelo frio.</li>
            <li>Cabelos loiros claros, castanho-escuros ou ruivos intensos.</li>
            <li>Barbas grossas nos homens.</li>
            <li>
              Corpo robusto, ombros largos e aparência endurecida pelo clima.
            </li>
          </ul>
        </article>

        <article>
          <section>
            <h2>Nomes comuns</h2>

            <h3>Masculinos</h3>
            <ul className={styles.list}>
              <li>Mikhail</li>
              <li>Olegar</li>
              <li>Yuriak</li>
              <li>Borin</li>
              <li>Draskev</li>
            </ul>

            <h3>Femininos</h3>
            <ul className={styles.list}>
              <li>Svetta</li>
              <li>Ilyana</li>
              <li>Katerin</li>
              <li>Masha</li>
              <li>Varyna</li>
            </ul>

            <h3>Sobrenomes</h3>
            <ul className={styles.list}>
              <li>Vostrov</li>
              <li>Dragonov</li>
              <li>Karskin</li>
              <li>Morav</li>
            </ul>
          </section>
        </article>
        <article>
          <h3>Alfigen</h3>
          <p>
            Alfigen é um reino insular e costeiro do extremo norte, onde o frio
            corta como lâmina e o mar é tanto estrada quanto inimigo. Governado
            por uma linhagem de reis navegadores, é um domínio marcado por sua
            força naval, seu orgulho ancestral e sua devoção às Velhas Runas. É
            uma terra onde o inverno não é uma estação… mas um rei silencioso
            que nunca abandona o trono.
          </p>
        </article>

        <article>
          <h3>Cultura</h3>
          <ul className={styles.list}>
            <li>Bravura, a honra e a profundidade das runas mágicas.</li>
            <li>Seus navios longos são temidos em todos os mares.</li>
            <li>
              As canções são sagradas, Bardos são chamados Skalds, e seus poemas
              são considerados quase mágicos.
            </li>
            <li>São um povo que amam a guerra e a batalha.</li>
          </ul>
        </article>

        <article>
          <h3>Características físicas</h3>
          <ul className={styles.list}>
            <li>Pele muito clara, às vezes com sardas.</li>
            <li>Cabelos loiros, ruivos ou castanho-claros.</li>
            <li>Olhos claros (azul-gelo, verde-acinzentado).</li>
            <li>Corpo atlético e resistente ao frio.</li>
          </ul>
        </article>

        <article>
          <section>
            <h2>Nomes comuns</h2>

            <h3>Masculinos</h3>
            <ul className={styles.list}>
              <li>Ragnar</li>
              <li>Ulfrid</li>
              <li>Soren</li>
              <li>Bjarke</li>
              <li>Stellan</li>
            </ul>

            <h3>Femininos</h3>
            <ul className={styles.list}>
              <li>Freyja</li>
              <li>Sigrid</li>
              <li>Astryn</li>
              <li>Brynhild</li>
              <li>Kaela</li>
            </ul>

            <h3>Sobrenomes</h3>
            <ul className={styles.list}>
              <li>Frostborn</li>
              <li>Stormdal</li>
              <li>Haldersson</li>
              <li>Skovgaard</li>
            </ul>
          </section>
        </article>
      </section>

      <section>
        <h2>FIGURAS MARCANTES</h2>
        <ul className={styles.list}>
          <li>Navorian Bonhart do reino Teschilz</li>
          <li>General Gawen Warnton do reino Haritall</li>
          <li>Mestre Jia-Kin Shan do Reino Schlemitt</li>
        </ul>
      </section>
      <section>
        <h2>TRAÇOS RACIAIS DOS HUMANOS</h2>
        <dl>
          <dt>Idade</dt>
          <dd>
            Chegam na maior idade com 16 anos os homens e as mulheres com 12 ou
            14 anos assim que tiver a primeira menstruação, e podem viver até 80
            anos.
          </dd>
          <dt>Tendência</dt>
          <dd>Não possuem uma tendência definida.</dd>
          <dt>Atributos</dt>
          <dd>+1 em todos os atributos</dd>
          <dt>Altura</dt>
          <dd>
            O tamanho dos seres humanos variam muito mas de costume o máximo
            costumam ter entre 1,50 até 1,80.
          </dd>
          <dt>Ancestralidade</dt>
          <dd>
            Os humanos possui uma grande perseverança, por isso sua
            ancestralidade sempre foi: Ancestralidade: Quando você falha em um
            teste de Atributo, você pode re-rolar uma vez por sessão, assim
            pegando o resultado novo.
          </dd>
        </dl>
      </section>
      <section>
        <h2>Classes</h2>
        <ul className={styles.list}>
          <li>
            Arqueiros
            <ul className={styles.list}>
              <li>Mosqueteiro</li>
              <li>Arqueiro mágico</li>
            </ul>
          </li>

          <li>
            Guerreiro
            <ul className={styles.list}>
              <li>Cavaleiro</li>
              <li>Lanceiro</li>
              <li>Soldado</li>
              <li>Gladiador</li>
              <li>Samurai</li>
            </ul>
          </li>

          <li>
            Bárbaro
            <ul className={styles.list}>
              <li>Berserker</li>
              <li>Bárbaro rúnico</li>
              <li>Monge</li>
            </ul>
          </li>

          <li>
            Mago
            <ul className={styles.list}>
              <li>Mago espiritual</li>
              <li>Mago de guerra</li>
              <li>Mago infernal</li>
              <li>Bardo</li>
            </ul>
          </li>
          <li>Feiticeiro</li>
          <li>
            Druida
            <ul className={styles.list}>
              <li>Xamã</li>
              <li>Druida sombrio</li>
            </ul>
          </li>
          <li>
            Bruxo
            <ul className={styles.list}>
              <li>Cavaleiro das trevas</li>
            </ul>
          </li>
          <li>
            Clérigo
            <ul className={styles.list}>
              <li>Curandeiro guerreiro</li>
              <li>Paladino</li>
              <li>Guardião</li>
            </ul>
          </li>
          <li>Artífice</li>
          <li>
            Caçador
            <ul className={styles.list}>
              <li>Domador de monstros</li>
              <li>Cozinheiro de feras</li>
              <li>Caçador espiritual</li>
            </ul>
          </li>

          <li>
            Ladino
            <ul className={styles.list}>
              <li>Pirata</li>
              <li>Ninja</li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h2>Variações de humanos</h2>
        <p>
          Entre os povos humanos, espalhados pelos reinos e fortalezas da Idade
          Média, existem linhagens raras que carregam em seu sangue traços de
          antigos pactos, bençãos esquecidas ou heranças de guerras celestes.
          Esses humanos não são comuns: são chamados de Variegados, ou “aqueles
          cuja alma carrega mais do que carne”. Cada linhagem concede
          habilidades únicas, mas também responsabilidades, maldições veladas e
          tradições rígidas. Conhecê-los é entender a história viva dos pactos
          entre mortais e forças maiores.
        </p>
        <article>
          <h3> Humanos da linhagem das sombras</h3>
          <p>
            Diz-se que seus ancestrais fizeram um pacto com uma entidade antiga
            feita de sombras e ar frio. Desde então, aqueles nascidos com o
            Sangue do Véu possuem a habilidade de dissolver sua presença,
            tornando-se invisíveis por momentos — ou desaparecendo por completo
            quando dominam a arte.
          </p>
          <ul className={styles.list}>
            <li>+2 Destreza</li>
            <li>+1 Sabedoria ou Carisma</li>
          </ul>
        </article>
        <article>
          <h3>Humanos da linhagem divina</h3>
          <p>
            A mais rara de todas. Os que carregam o Sangue Divino são
            reconhecidos pela estranha luminosidade sob sua pele. São abençoados
            por uma energia dourada que se manifesta como calor, força e uma
            aura quase celestial. Alguns acreditam que descendem diretamente de
            antigos semideuses; outros, que foram tocados por entidades da luz
            em eras esquecidas.
          </p>
          <ul className={styles.list}>
            <li>+2 Carisma</li>
            <li>+1 força ou constituição.</li>
          </ul>
        </article>
      </section>
    </main>
  )
}
