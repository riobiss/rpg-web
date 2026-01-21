import styles from "./page.module.css"
export const generateMetadata = () => {
  return {
    title: "Raças",
  }
}

export default function Page() {
  return (
    <main className={styles.container}>
      <h2>Humanos</h2>
      <p>
        &quot;Entre todas as raças que moldam os reinos de Sakaar, a raça humana
        é talvez a mais contraditória e, por isso mesmo, a mais imprevisível.
        Não possuem a força bruta dos Gigantes, a longevidade mística dos
        Eladrin ou a engenhosidade sobrenatural dos Pequenos. Tampouco caminham
        com o poder ancestral dos Draconatos ou manipulam magias infernais como
        os Tieflings. Ainda assim, os Humanos ergueram cidades, reinos e
        impérios que rivalizam com os de povos muito mais antigos.&quot;
      </p>
      <article>
        <section>
          <h2>ORIGEM</h2>
          <p>
            Diz-se que os Humanos surgiram das Cinzas dos Primeiros Fogos,
            quando os deuses menores decidiram criar uma raça que fosse frágil,
            mas extremamente adaptável. Desde o início, os Humanos demonstraram
            uma capacidade única de sobreviver em quase qualquer ambiente:
            florestas densas, estepes ventosas, montanhas geladas ou litorais
            tempestuosos. Sua sociedade é tão diversa quanto o solo sobre o qual
            constroem suas casas.
          </p>
          <p>
            No período antigo de Sakaar, os reinos humanos são estruturados por
            monarquias, feudos, ordens cavaleirescas e guildas de artesãos. A
            vida de um camponês pouco se assemelha à de um nobre — mas ambos
            compartilham a mesma crença: que a Coroa e o Dever são os pilares da
            civilização humana.
          </p>
        </section>
      </article>

      <section>
        <h2>O QUE ALGUNS PENSAM</h2>
        <blockquote>
          <p>
            Pequenos: São grandes demais para perceber os detalhes, mas pequenos
            o bastante para cometer os erros que nós evitamos – ditado popular
            dos Pequenos sobre os humanos.
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
            Eladrin: Mortais apressados, inquietos e instáveis… e, ainda assim,
            perigosamente determinados – pensamentos comum da população.
          </p>
        </blockquote>
      </section>

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
          <h4>Cultura</h4>
          <ul className={styles.list}>
            <li>Obsessão por honra e duelos.</li>
            <li>
              A nobreza vive em castelos exuberantes com jardins encantados.
            </li>
            <li>
              Bardos e artistas são tratados como figuras de grande prestígio.
            </li>
            <li>
              Intrigas, traições e casamentos arranjados fazem parte da política
              cotidiana.
            </li>
          </ul>

          <p>Obs: O reino mais elegante e mais perigoso dos salões nobres.</p>
        </article>
        <article>
          <h4>Características físicas</h4>
          <ul className={styles.list}>
            <li>
              Cabelos lisos ou ondulados, variando entre castanho, loiro e ruivo
              claro.
            </li>
            <li>Pele clara a levemente rosada.</li>
            <li>Traços finos, postura elegante e roupas mais refinadas.</li>
            <li>Altura média.</li>
          </ul>
        </article>
        <article>
          <h4>Nomes comuns</h4>
          <ul className={styles.list}>
            <li>Masculinos: Alphon, Lucien, Marceau, Édran, Thierris</li>
            <li>Femininos: Éloise, Marceline, Fannette, Lisandre, Corinne</li>
            <li>Sobrenomes: De Valcour, Du Charme, De Roselle, La Montagne</li>
          </ul>
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
          <h4>Cultura</h4>
          <ul className={styles.list}>
            <li>Grande diversidade étnica.</li>
            <li>Valorização extrema da liberdade e iniciativa individual.</li>
            <li>Cavaleiros pioneiros desbravam fronteiras selvagens.</li>
            <li>Guildas mercenárias e inventores são muito influentes.</li>
          </ul>

          <p>Obs: Terra de oportunidades e conflitos internos.</p>
        </article>
        <article>
          <h4>Características físicas</h4>
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
          <h4>Nomes comuns</h4>
          <ul className={styles.list}>
            <li>Masculinos: Jameson, Alder, Brann, Cole, Marcus</li>
            <li>Femininos: Marah, Ellyne, Sarai, Annebeth, Rylan</li>
            <li>Sobrenomes: Stonefield, Walker, Greenriver, Hartwell</li>
          </ul>
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
          <article>
            <h4>Cultura</h4>
            <ul className={styles.list}>
              <li>Profundo respeito aos ancestrais e à ordem imperial.</li>
              <li>Busca por equilíbrio entre o mundo espiritual e material.</li>
              <li>Armas e armaduras decoradas com símbolos dracônicos.</li>
              <li>Artes marciais e magia ritual são amplamente praticadas.</li>
            </ul>

            <p>
              Obs: O possível império mais antigo humano e misterioso do
              continente.
            </p>
          </article>
          <article>
            <h4>Características físicas</h4>
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
            <h4>Nomes comuns</h4>
            <ul className={styles.list}>
              <li>Masculinos: Jian, Wei, Long, Chen, Xian</li>
              <li>Femininos: Mei, Lin, Hua, Xue, Lián</li>
              <li>Sobrenomes: Zhao, Wen, Liang, Sun</li>
            </ul>
          </article>
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
          <article>
            <h4>Cultura</h4>
            <ul className={styles.list}>
              <li>Tradições antigas coexistem com uma nobreza moderna.</li>
              <li>Ampla presença de ordens cavaleirescas.</li>
              <li>
                Lendas de fadas, espectros e reinos ocultos fazem parte da vida
                cotidiana.
              </li>
              <li>O povo é resistente e muito leal às suas ilhas.</li>
            </ul>

            <p>Obs: Lar de reis lendários e alianças traiçoeiras.</p>
          </article>

          <article>
            <h4>Características físicas</h4>
            <ul className={styles.list}>
              <li>Pele clara ou pálida.</li>
              <li>Cabelos loiros, castanhos ou ruivos.</li>
              <li>Olhos claros (azuis, verdes, acinzentados).</li>
              <li>Estrutura corporal magra ou média, com aparência austera.</li>
            </ul>
          </article>

          <article>
            <h4>Nomes comuns</h4>
            <ul className={styles.list}>
              <li>Masculinos: Edmund, Arthur, Cedric, Rowan, Harold</li>
              <li>Femininos: Elinor, Maerwen, Gwendra, Isolde, Miriam</li>
              <li>Sobrenomes: Thornfield, Crownhill, Brackenridge, Oakhart</li>
            </ul>
          </article>
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

          <article>
            <h4>Cultura</h4>
            <ul className={styles.list}>
              <li>Mistura de povos, crenças e tradições.</li>
              <li>Forte presença de magia natural e espiritual.</li>
              <li>Grandes festas e celebrações marcam todas as estações.</li>
              <li>Guerreiros conhecidos pela coragem e adaptabilidade.</li>
            </ul>
            <p>Obs: Um reino vibrante, imprevisível e cheio de recursos.</p>
          </article>

          <article>
            <h4>Características físicas</h4>
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
            <h4>Nomes comuns</h4>
            <ul className={styles.list}>
              <li>Masculinos: Aruá, Tadeo, Raviel, Bento, Jandir</li>
              <li>Femininos: Iara, Mirian, Talua, Brisa, Celina</li>
              <li>
                Sobrenomes: Dos Montes, Arcofundo, Solnascente, do Vale Verde
              </li>
            </ul>
          </article>
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
          <article>
            <h4>Cultura</h4>
            <ul className={styles.list}>
              <li>Arquitetura grandiosa em pedra vulcânica.</li>
              <li>
                Guerreiros-jaguar e guerreiros-águia dominam os campos de
                batalha.
              </li>
              <li>Cerimônias religiosas elaboradas, com cantos e danças.</li>
              <li>Valorização extrema da bravura</li>
            </ul>

            <p>Obs: Povo feroz, disciplinado e guiado pelo sagrado.</p>
          </article>

          <article>
            <h4>Características físicas</h4>
            <ul className={styles.list}>
              <li>Pele bronzeada ou morena.</li>
              <li>Cabelos pretos, lisos ou ondulados.</li>
              <li>Olhos escuros, marcantes.</li>
              <li>Corpo forte e compacto devido ao treinamento marcial.</li>
            </ul>
          </article>

          <article>
            <h4>Nomes comuns</h4>
            <ul className={styles.list}>
              <li>Masculinos: Cuautli, Tenoch, Ilaro, Maxtli, Zonco</li>
              <li>
                Femininos: Citlali, Nayah, Ixchel, Meztli, Yara (variação local)
              </li>
              <li>Sobrenomes: Tecuani, Solpiedra, Quauhtémoc, Xocotzin</li>
            </ul>
          </article>
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
          <article>
            <h4>Cultura</h4>
            <ul className={styles.list}>
              <li>Forte senso de coletividade e sacrifício.</li>
              <li>Milícias gigantescas formadas por camponeses endurecidos.</li>
              <li>Arquitetura pesada, com torres de pedra e ferro.</li>
              <li>
                Magos rúnicos e xamãs do gelo moldam o clima e protegem
                fronteiras.
              </li>
            </ul>

            <p>Obs: Uma potência fria, dura e temida.</p>
          </article>

          <article>
            <h4>Características físicas</h4>
            <ul className={styles.list}>
              <li>Pele clara, frequentemente avermelhada pelo frio.</li>
              <li>
                Cabelos loiros claros, castanho-escuros ou ruivos intensos.
              </li>
              <li>Barbas grossas nos homens.</li>
              <li>
                Corpo robusto, ombros largos e aparência endurecida pelo clima.
              </li>
            </ul>
          </article>
          <article>
            <h4>Nomes comuns</h4>
            <ul className={styles.list}>
              <li>Masculinos: Mikhail, Olegar, Yuriak, Borin, Draskev</li>
              <li>Femininos: Svetta, Ilyana, Katerin, Masha, Varyna</li>
              <li>Sobrenomes: Vostrov, Dragonov, Karskin, Morav</li>
            </ul>
          </article>
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

          <article>
            <h4>Cultura</h4>
            <ul className={styles.list}>
              <li>Bravura, a honra e a profundidade das runas mágicas.</li>
              <li>Seus navios longos são temidos em todos os mares.</li>
              <li>
                As canções são sagradas, Bardos são chamados Skalds, e seus
                poemas são considerados quase mágicos.
              </li>
              <li>São um povo que amam a guerra e a batalha.</li>
            </ul>
          </article>

          <p>
            Obs: Terra dos navegadores indomáveis e um reino onde o frio cria
            homens de ferro.
          </p>

          <article>
            <h4>Características físicas</h4>
            <ul className={styles.list}>
              <li>Pele muito clara, às vezes com sardas.</li>
              <li>Cabelos loiros, ruivos ou castanho-claros.</li>
              <li>Olhos claros (azul-gelo, verde-acinzentado).</li>
              <li>Corpo atlético e resistente ao frio.</li>
            </ul>
          </article>
          <article>
            <h4>Nomes comuns</h4>
            <ul className={styles.list}>
              <li>Masculinos: Ragnar, Ulfrid, Soren, Bjarke, Stellan</li>
              <li>Femininos: Freyja, Sigrid, Astryn, Brynhild, Kaela</li>
              <li>Sobrenomes: Frostborn, Stormdal, Haldersson, Skovgaard</li>
            </ul>
          </article>
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
        <article>
          <dl>
            <dt>Atributos</dt>
            <dd>+1 em todos os atributos</dd>
            <dt>Idade</dt>
            <dd>
              Chegam na maior idade com 16 anos os homens e as mulheres com 12
              ou 14 anos assim que tiver a primeira menstruação, e podem viver
              até 80 anos.
            </dd>
            <dt>Tendência</dt>
            <dd>Não possuem uma tendência definida.</dd>
            <dt>Altura</dt>
            <dd>
              O tamanho dos seres humanos variam muito mas de costume o máximo
              costumam ter entre 1,50 até 1,80.
            </dd>
            <dt>Ancestralidade</dt>
            <dd>
              Os humanos possui uma grande perseverança, por isso sua
              ancestralidade sempre foi:
            </dd>
            <dd>
              Ancestralidade: Quando você falha em um teste de Atributo, você
              pode re-rolar uma vez por sessão, assim pegando o resultado novo.
            </dd>
          </dl>
        </article>
      </section>

      <section>
        <h2>Classes</h2>
        <ul className={styles.list}>
          <li>
            Arqueiros
            <ul className={styles.list}>
              <li>mosqueteiro</li>
              <li>arqueiro mágico</li>
            </ul>
          </li>
          <li>
            Guerreiro
            <ul className={styles.list}>
              <li>cavaleiro</li>
              <li>lanceiro</li>
              <li>soldado</li>
              <li>Gladiador</li>
              <li>Samurai</li>
            </ul>
          </li>
          <li>
            Bárbaro
            <ul className={styles.list}>
              <li>Berserker</li>
              <li>bárbaro rúnico</li>
              <li>monge</li>
            </ul>
          </li>
          <li>
            Mago
            <ul className={styles.list}>
              <li>mago espiritual</li>
              <li>mago de guerra</li>
              <li>mago infernal</li>
              <li>Bardo</li>
            </ul>
          </li>
          <li>Feiticeiro</li>
          <li>
            Druida
            <ul className={styles.list}>
              <li>xamã</li>
              <li>druida sombrio</li>
            </ul>
          </li>
          <li>
            Bruxo
            <ul className={styles.list}>
              <li>cavaleiro das trevas</li>
            </ul>
          </li>
          <li>
            Clérigo
            <ul className={styles.list}>
              <li>curandeiro guerreiro</li>
              <li>Paladino</li>
              <li>Guardião</li>
            </ul>
          </li>
          <li>Artífice</li>
          <li>
            Caçador
            <ul className={styles.list}>
              <li>Domador de monstros</li>
              <li>cozinheiro de feras</li>
              <li>caçador espiritual</li>
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
        <h2>VARIAÇÕES DE HUMANOS</h2>
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
          <h3>Humanos da linhagem das sombras</h3>
          <p>
            &quot;Diz-se que seus ancestrais fizeram um pacto com uma entidade
            antiga feita de sombras e ar frio. Desde então, aqueles nascidos com
            o Sangue do Véu possuem a habilidade de dissolver sua presença,
            tornando-se invisíveis por momentos — ou desaparecendo por completo
            quando dominam a arte.&quot;
          </p>
          <ul className={styles.list}>
            <li>+2 Destreza</li>
            <li>+1 Sabedoria ou Carisma</li>
          </ul>
        </article>

        <article>
          <h3>Humanos da linhagem das Valkyrias</h3>
          <p>
            Apenas mulheres podem nascer dessa linhagem, pois dizem que o sangue
            original veio de uma Valquíria caída durante uma guerra antiga
            contra criaturas das tempestades. Essas mulheres são altas, fortes e
            diz-se que seus gritos de batalha podem estremecer o coração dos
            fracos.
          </p>
          <ul className={styles.list}>
            <li>+2 Força</li>
            <li>+1 Constituição</li>
          </ul>
          <p>Obs: no nível 5 você pode conjurar asas.</p>
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
