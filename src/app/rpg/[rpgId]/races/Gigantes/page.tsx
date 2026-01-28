import styles from "./page.module.css"

export const generateMetadata = () => {
  return {
    title: "Raças",
  }
}
export default async function Page() {
  return (
    <main className={styles.container}>
      <h2>Gigantes</h2>
      <article>
        <section>
          <h2>Origem</h2>
          <p>
            Muito antes das alianças, das guerras e até da ascensão dos
            primeiros reinos humanos, o mundo era moldado por duas forças
            primordiais: Aelmar, o Céu Eterno, e Kharuna, a Terra Viva. Aelmar
            representava o vento, o clima e o frio, enquanto Kharuna era o fogo,
            a pedra e o sangue do mundo
          </p>

          <p>
            Quando o mundo ainda era jovem, Aelmar desceu dos céus para acalmar
            a fúria dos vulcões de Kharuna. Mas ao tocar a terra, seu poder
            celeste encontrou o calor e a força vital da deusa. Do choque entre
            essas duas entidades, surgiu algo novo, sendo formas colossais,
            vivas, feitas de carne, gelo e pedra. Assim nasceram os primeiros
            gigantes.
          </p>

          <p>
            Eles eram chamados de: Skjoldar; os gigantes glaciais, criados do
            sopro gelado de Aelmar sobre as montanhas do norte, Andekarr; os
            gigantes da rocha e do fogo, moldados pelas entranhas incandescentes
            de Kharuna no sul.
          </p>

          <p>
            Aelmar e Kharuna nunca concordaram sobre o papel de seus filhos.
            Aelmar queria que os gigantes fossem pastores do mundo, guiando as
            raças menores e Kharuna desejava que fossem governantes e guardiões,
            acima dos mortais. A disputa dos deuses se espalhou para seus
            descendentes, Assim nasceu a {'"'}Grande Fratura{'"'}, o primeiro
            conflito entre gigantes glaciais e gigantes de montanha. Quando os
            deuses perceberam o estrago, selaram seus domínios e desapareceram.
            Sem seus criadores, os gigantes se dividiram em dois reinos e outros
            pequenos clãs dispersos pelo mundo. Desde então, os gigantes
            carregam um destino duplo: serem a força mais antiga do mundo e, ao
            mesmo tempo, uma raça que carrega as cicatrizes dos próprios deuses.
          </p>
        </section>
        <section>
          <h2>O QUE ALGUNS PENSAM</h2>
          <blockquote>
            <p>
              Máquinas: Os gigantes são estruturas orgânicas ineficientes… porém
              impressionantemente duráveis.
            </p>
          </blockquote>
          <blockquote>
            <p>
              Aarakocra: Imensos demais para voar, lentos demais para perceber o
              céu. Mas quando se irritam todos temes – Provérbio das
              tempestades-livres dos Aarakocra.
            </p>
          </blockquote>
          <blockquote>
            <p>
              Goblins: Grandões burros! Mas quando um cai, dá pra morar dentro
              do elmo dele por semanas – Piada goblin.
            </p>
          </blockquote>
        </section>
      </article>
      <section>
        <h2>REINOS</h2>
        <article>
          <h3>Bromei</h3>
          <p>
            Bromei é um reino estendido ao longo de um paredão colossal de
            montanhas contínuas ao seu norte. Seus gigantes são conhecidos tanto
            por sua artesania de pedra quanto por sua ferocidade militar. O
            reino é dividido em verticais regiões chamadas “Terraços”, cada uma
            governada por uma linhagem influente. Cidades inteiras são
            esculpidas diretamente no rochedo, conectadas por pontes suspensas e
            passagens cavadas por gerações.
          </p>
        </article>
        <article>
          <h4>Cultura</h4>
          <ul className={styles.list}>
            <li>
              Suas cidades são fortificações naturais, quase inacessíveis.
            </li>
            <li>
              O nome familiar é mais importante do que o indivíduo; perder a
              honra da linhagem é destino pior que escravidão.
            </li>
            <li>
              Templos altíssimos onde sacerdotes gigantes cantam para manter o
              equilíbrio entre terremotos e erupções.
            </li>
            <li>
              Os gigantes usam lanças tão grandes quanto mastros de navio. Em
              fileiras, parecem muralhas vivas.
            </li>
          </ul>
        </article>
        <article>
          <h4>Características Físicas</h4>
          <ul className={styles.list}>
            <li>Altura média: 4 a 5,5 metros</li>
            <li>Pele: entre tons terrosos e pele clara</li>
            <li>Cabelos: pretos, castanhos escuros ou avermelhados</li>
            <li>Olhos: dourados, âmbar, castanho intenso</li>
            <li>
              Estrutura corporal: pernas e braços um pouco mais longos, feitos
              para escalar montanhas
            </li>
            <li>
              Tatuagens minerais (pigmentos de pedra) usadas para indicar
              linhagem
            </li>
            <li>
              Muitos usam marcas queimadas ou entalhadas representando
              terremotos e vulcões
            </li>
          </ul>
        </article>
        <article>
          <h4>Vestuário</h4>
          <ul className={styles.list}>
            <li>Tecidos grossos de lã de criaturas das montanhas</li>
            <li>
              Mantos coloridos com padrões geométricos — símbolos de Terraços e
              famílias
            </li>
            <li>Armaduras de placas de obsidiana, cobre e pedra lapidada</li>
            <li>Capacetes angulares inspirados em picos montanhosos</li>
            <li>Joias enormes de jade, obsidiana, ouro e cobre</li>
          </ul>
        </article>

        <article>
          <h4>Nomes Comuns</h4>
          <ul>
            <li>
              Masculinos: Maq’ran, Teylor, Kanmor, Urel’kar, Yantor, Illamak
            </li>
            <li>Femininos:, Nayka, Oraya, Kalliri, Taylla, Mirka, Yawira</li>
            <li>
              Sobrenomes (linhagens/terraços): da Rocha, dos Abismos do Sol, da
              Lança Vermelha, da Coluna da Montanha, das Três Cordilheiras
            </li>
          </ul>
        </article>

        <article>
          <h3>Njorka</h3>
          <p>
            Njorka é um vasto reino de picos congelados, fiordes colossais e
            florestas escuras onde o vento constante parece sussurrar os nomes
            dos mortos. Habitado por gigantes de pele azulada, olhos claros e
            força absurda, o povo de Njorka é moldado pela dureza do inverno
            eterno.
          </p>
        </article>
        <article>
          <h4>Cultura</h4>
          <ul className={styles.list}>
            <li>
              Quebras de juramento são punidas com exílio, pior que a morte.
            </li>
            <li>
              Muitos acreditam que o inverno é uma entidade viva, que escolhe
              quem deve sobreviver.
            </li>
            <li>
              A magia rúnica é parte do cotidiano; ferreiros são quase
              sacerdotes.
            </li>
            <li>
              Disputas entre clãs são resolvidas em duelos ritualísticos
              supervisionados por um “Heraldo da Neve”
            </li>
          </ul>
        </article>
        <article>
          <h4>Características Físicas</h4>
          <ul className={styles.list}>
            <li>Altura média: 4,5 a 6 metros</li>
            <li>Pele: acinzentada, azulada ou branca, como pedra fria</li>
            <li>Cabelos: claros (loiro, prateado, branco gelo)</li>
            <li>Barbas longas entre os homens, e tranças entre as mulheres</li>
            <li>Olhos: azuis muito claros, quase luminosos</li>
            <li>
              Corpo: robusto, ombros largos, aparência endurecida pelo frio
            </li>
            <li>
              Muitos possuem cicatrizes profundas, consideradas símbolos de
              honra
            </li>
          </ul>
        </article>

        <article>
          <h4>Vestuário</h4>
          <ul className={styles.list}>
            <li>
              Pelagens grossas de ursos, lobos gigantes e mamutes glaciais
            </li>
            <li>
              Armaduras de ferro rúnico, pesadas, com gravuras de gelo e neve
            </li>
            <li>Elmos com chifres curtos ou coroas de gelo cristalizado</li>
            <li>Capas enormes presas por broches rúnicos</li>
            <li>
              Mulheres guerreiras usam trançados cerimoniais para indicar status
            </li>
          </ul>
        </article>
        <article>
          <h4>Nomes Comuns</h4>
          <ul className={styles.list}>
            <li>
              Masculinos: Hrólf, Skjorn, Vaelgund, Haldrek, Jornvik, Fjalmar
            </li>
            <li>
              Femininos: Brynja, Astrild, Freylda, Sigrund, Yrsa, Tharilma
            </li>
            <li>
              Sobrenomes (clãs): dos Sete Invernos, Manto de Neve, Martelo
              Rúnico, Lobo, Filhos do Fiorde etc
            </li>
          </ul>
        </article>
      </section>
      <section>
        <h2>TRAÇOS RACIAIS DOS GIGANTES</h2>
        <article>
          <dl>
            <dt>Atributos</dt>
            <dd>
              +5 força +4 Constituição –1 Destreza +2 intimidar +2 Tolerância +2
              observar
            </dd>
            <dt>Ancestralidade</dt>
            <dd>
              Os gigantes sempre tiveram uma grande resistência e alcance, por
              isso sua ancestralidade sempre foi:
            </dd>
            <dd>
              Ancestralidade: você começa com 120 de vida adicional na criação
              do personagem e as armas corpo a corpo tem um alcance aumentado em
              +5.
            </dd>
          </dl>
        </article>
      </section>
      <section>
        <h2>Classes</h2>

        <ul className={styles.list}>
          <li>Arqueiros</li>
          <li>
            Guerreiro
            <ul>
              <li>Gladiador</li>
            </ul>
          </li>
          <li>Bárbaro</li>
          <li>
            Clérigo
            <ul>
              <li>Paladino</li>
              <li>Guardião</li>
            </ul>
          </li>
        </ul>
      </section>
    </main>
  )
}
