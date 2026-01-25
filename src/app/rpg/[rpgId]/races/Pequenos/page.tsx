import styles from "./page.module.css"

export const generateMetadata = () => {
  return {
    title: "Raças",
  }
}

export default async function Page() {
  return (
    <main className={styles.container}>
      <h2>Pequenos</h2>
      <article>
        <section>
          <h2>ORIGEM</h2>
          <p>
            Muito antes de qualquer reino sonhar com coroas ou alianças,
            existiam nas colinas férteis do oeste famílias discretas conhecidas
            como os Ervantes, os Parvelhos e os Dorsemir. Pequenos como crianças
            humanas, mas com olhos reluzentes como brasas vivas, esses povos
            eram chamados de Minutos — não por sua altura, mas por sua
            capacidade de notar cada detalhe que o mundo grande ignorava.
          </p>
          <p>
            Enquanto gigantes marchavam ao norte, orcs guerreavam entre si e
            humanos aprendiam a erguer muralhas, os Minutos já dominavam o
            cultivo da terra como arte, magia e poder. Com o tempo, passaram a
            se chamar Pequeninos, um nome que carregava orgulho, identidade e
            resistência.
          </p>
        </section>

        <section>
          <h2>O JARDIM OCULTO</h2>
          <p>
            Segundo antigas histórias, os clãs viviam em um vale escondido onde
            crescia a lendária Vinha Rubra, uma planta que só frutificava sob
            lua cheia. Seu vinho restaurava vigor, clareava a mente e fortalecia
            laços entre aqueles que o bebiam. Essa dádiva se tornou sua maior
            riqueza — e também sua desgraça.
          </p>
        </section>

        <section>
          <h2>A COLHEITA SANGRENTA</h2>
          <p>
            Quando humanos descobriram o valor do vinho rubro, disputas
            começaram. Um lorde do leste tentou tomar o vale à força. Vinhas
            foram queimadas, Pequeninos mortos e a tragédia ficou conhecida como
            a Colheita Sangrenta. A resposta veio em silêncio: estratégia,
            venenos, diplomacia e informação. Em menos de um ano, o lorde perdeu
            tudo — inclusive a vida.
          </p>
        </section>

        <section>
          <h2>O JURAMENTO DAS COLINAS</h2>
          <p>
            Após a guerra, os clãs firmaram o Juramento das Colinas, unindo-se
            como um reino não declarado. Desde então, os Pequenos tornaram-se
            agricultores mágicos, negociantes, informantes e diplomatas
            discretos, influenciando reis sem jamais sentar em seus tronos.
          </p>
        </section>

        <section>
          <h2>O QUE ALGUNS PENSAM</h2>
          <blockquote>
            <p>
              Humanos: Eles sorriem como amigos e são engraçados demais para
              serem perigosos — pensamento popular.
            </p>
          </blockquote>
          <blockquote>
            <p>
              Orcs: Pequenos demais para a guerra, mas muitos são brilhantes —
              opinião comum entre certos chefes orcs.
            </p>
          </blockquote>
          <blockquote>
            <p>
              Goblins: Baixinhos fofos que roubam comida, ouro e segredos.
              Talvez sejamos mais parecidos do que pensamos — soldados goblins.
            </p>
          </blockquote>
        </section>
      </article>

      <section>
        <h2>REINOS</h2>

        <article>
          <h3>Kienling</h3>
          <p>
            Ao oeste do continente, onde as florestas se estendem como muralhas
            vivas, ergue-se o Reino de Kienling, o lar ancestral dos Pequeninos.
            Embora diminutos em estatura, Kienling é um dos reinos mais
            respeitados (e temidos em silêncio) de toda a região. Esse é o lar
            principal dos Pequenos, que carrega o brasão do povo e o reino que
            carrega o nome de todos.
          </p>
        </article>

        <article>
          <h4>Cultura</h4>
          <ul className={styles.list}>
            <li>
              Vilas aconchegantes construídas em troncos de pinheiros gigantes
            </li>
            <li>
              Colinas com pequenas estufas mágicas aquecidas por cristais de
              calor
            </li>
            <li>Festivais silenciosos celebrados sob a aurora boreal,</li>
            <li>
              Mercados perfumados por especiarias doces e licores quentes.
            </li>
          </ul>
          <p>
            Obs: Kienling é governado por um líder eleito entre as famílias mais
            antigas — o Vinhoreal. Atualmente, o trono pertence à sábia e
            sorridente Vinhoreal Marenna Permafrio, uma diplomata.
          </p>
        </article>

        <article>
          <h4>Características físicas</h4>
          <ul className={styles.list}>
            <li>Altura: Entre 90 cm e 1,10 m.</li>
            <li>
              Pele: Pele clara a rosada, facilmente avermelhada pelo frio.
            </li>
            <li>
              Cabelos: castanho claro, ruivo, loiro acinzentado. Nos clãs mais
              antigos, cabelos brancos desde jovens são considerados sinal de
              sangue forte.
            </li>
            <li>
              Olhos: Azuis, verdes ou âmbar — sempre brilhantes, quase luminosos
              no escuro.
            </li>
          </ul>
        </article>

        <article>
          <h4>Vestuário</h4>
          <p>
            O estilo é funcional, elegante e cheio de detalhes culturais, uma
            das raças que presa bastante pela boa aparência. Sendo seus
            materiais mais usados: Lã grossa colorida, Pele de arminho e raposa,
            Algodão espesso, Linho reforçado, Couro artesanal tratado com ervas
            aromáticas. Sendo as cores mais tradicionais: Vinho escuro, rosa
            pálido, azul gélido, verde-pinho e marrom mel. Os nobres costumam
            usar tons de roxo-neve, cor associada ao Vinho das Auroras.
          </p>
          <ul className={styles.list}>
            <li>
              Homens: Jaquetas acolchoadas curtas, Cintos largos com fivelas
              gravadas, Calças justas e botas de couro macio, Mantos curtos com
              capuz para suportar nevascas ou chuva, Pequenas facas ornamentadas
              usadas não como armas, mas como ferramenta agrícola.
            </li>
            <li>
              Mulheres: Vestidos de lã com saias volumosas e mangas folgadas,
              Aventais finamente, bordados com parreiras ou flocos de neve,
              Faixas de cabelo trançadas com fitas coloridas, Botas isoladas e
              mantos longos.
            </li>
            <li>
              Nobreza (de ambos os sexos): Jóias feitas com cristal, Capas com
              bordados que indicam o clã familiar, Laços de vinho e folhas
              estilizadas como brasões, Anéis que simbolizam seus vinhedos e
              linhagens.
            </li>
          </ul>
        </article>
        <article>
          <h4>NOMES COMUNS</h4>
          <ul className={styles.list}>
            <li>
              Masculinos: Merrin, Tobren, Faldric, Joryn, Alben, Roddin, Pelren,
              Kelvo, Thamri, Yorwick
            </li>
            <li>
              Femininos: Marella, Dorynne, Sella, Veska, Ilwen, Fiorra, Talia
              Snowbarrel, Lydda, Elireen, Perribel
            </li>
            <li>
              Sobrenomes: Permafrio, Folha-Doce, Dorseneve, Vinhoclaro,
              Barrilgelado, Ramosuave, Auroracopo, Gelirrin, Raizborralha,
              Cascalustre
            </li>
          </ul>
        </article>

        <article>
          <h3>Haukkihh</h3>
          <p>
            No extremo nordeste do domínio dos Pequenos existe Haukkihh, uma
            linha ancestral que, embora parte do grande Reino dos Pequenos,
            desenvolveu uma cultura muito própria. Seus castelos e fortalezas
            erguem-se em terras quentes, úmidas e varridas por ventos marítimos,
            onde o sol bate forte sobre muralhas de pedra escura. Haukkihh é um
            território de pântanos salinos, onde os Pequenos se tornaram mestres
            da navegação costeira, da pesca profunda e da produção de bebidas
            fermentadas fortes, famosas em toda a Coalizão. Sua nobreza é
            austera, governada pela Casa Salmor, que carrega uma reputação de
            justiça rígida e punições rápidas. Embora sejam da mesma raça dos
            outros Pequenos, os pequenos de Haukkihh, conhecidos como duendes
            por uns, desenvolveram costumes mais severos, guerreiros e
            pragmáticos, pois sua história é marcada por ataques piratas,
            tempestades, disputas de território e períodos de fome severo.
          </p>
        </article>

        <article>
          <h4>Cultura</h4>
          <ul className={styles.list}>
            <li>serem diretos e francos demais, às vezes bruscos;</li>
            <li>honrarem a palavra dada acima de qualquer coisa;</li>
            <li>
              serem rápidos para defender seus amigos e ainda mais rápidos para
              punir seus inimigos;
            </li>
            <li>terem uma relação quase religiosa com o mar.</li>
            <li>
              a fé concentra nos Afogados Antigos, espíritos que representam:
              força diante da adversidade, aceitação da mortalidade, respeito
              pelo ciclo do mar.
            </li>
          </ul>
        </article>

        <article>
          <h4>Características físicas</h4>
          <ul className={styles.list}>
            <li>Altura entre 95 cm e 1,15 m, corpo compacto e musculoso.</li>
            <li>Pele em tons de castanho claro a bronzeado escuro.</li>
            <li>
              Cabelos feralmente escuro: castanho profundo ou preto. Podendo ser
              liso, ondulado ou crespo curto.
            </li>
            <li>Olhos: Castanhos, âmbar ou verde-escuro.</li>
          </ul>
        </article>

        <article>
          <h4>Vestuário</h4>
          <ul className={styles.list}>
            <li>
              Homens: Camisas sem mangas ou de mangas curtas, Coletes de couro
              leve, Calças curtas ou presas abaixo do joelho, Faixas de tecido
              na cabeça ou no braço, Sandálias reforçadas ou botas abertas,
              Facas curtas sempre visíveis (símbolo de prontidão)
            </li>
            <li>
              Mulheres: Vestidos leves até o joelho, Saias com cortes para
              facilitar movimento, Blusas amarradas ou cruzadas, Lenços na
              cabeça para o sol, Braceletes simples de osso ou coral, Facas
              pequenas escondidas (tradição antiga)
            </li>
          </ul>
        </article>
        <article>
          <h4>NOMES COMUNS</h4>

          <ul className={styles.list}>
            <li>
              Masculinos: Ravel, Dornik, Malco, Jarek, Thomar, Cavel, Brannik,
              Orven, Kael, Sorrin etc
            </li>
            <li>
              Femininos: Yalena, Maris, Korra, Selka, Neris, Ivela, Taryn,
              Vessa, Calya, Rinna etc
            </li>
            <li>
              Sobrenomes: Salmor, Salferro, Ondaparda, Marquedo, Fundoazul,
              Conchadura, Tempesmar, Anzolnegro, Reciforte, Salvigo etc
            </li>
          </ul>
        </article>

        <article>
          <h3>Mannikaar</h3>
          <p>
            Na ilha escaldante do nordeste do domínio dos Pequenos ergue-se
            Mannikaar, um reino grande em território, quase do tamanho de
            Kienling, mas com um diferencial, sendo mais intenso em cultura e
            espírito. Cercado por mares claros e florestas tropicais densas,
            Mannikaar é conhecido por seu calor constante, solo fértil e ventos
            carregados de cinzas vulcânicas, herança de antigos fogos
            subterrâneos que moldaram tanto a terra quanto seu povo.
          </p>
        </article>

        <article>
          <h4>Cultura</h4>
          <ul className={styles.list}>
            <li>
              Mannikaarianos são respeitados como curandeiros, alquimistas,
              forjadores rituais e conselheiros espirituais, tendo uma
              inclinação para essas áreas em sua cultura.
            </li>
            <li>
              eles tem explosões súbitas de fúria quando sua fé ou família é
              atacada.
            </li>
            <li>
              fé gira em torno da Chama Ancestral, uma força viva que: purifica
              os fracos, fortalece os resistentes, revela a verdade através da
              dor. Sacerdotes, são chamados Vigias da Brasa.
            </li>
            <li>Eles costumam ter uma postura calma, quase contemplativa.</li>
          </ul>
        </article>

        <article>
          <h4>Características físicas</h4>
          <ul className={styles.list}>
            <li>Altura média entre 90 cm e 1,10 m.</li>
            <li>Pele: variam do castanho médio ao peles mais escuras.</li>
            <li>
              cabelos: Preto ou castanho escuro, quase sempre encaracolado ou
              crespo.
            </li>
            <li>Olhos: Castanho-escuros, âmbar ou dourados.</li>
          </ul>
        </article>

        <article>
          <h4>Vestuário</h4>
          <ul className={styles.list}>
            <li>
              Homens: Túnicas leves sem mangas ou de mangas curtas, Faixas
              largas na cintura, Calças soltas ou saias curtas rituais,
              Sandálias ou pés descalços, Colares de ossos, sementes e pedras
              quentes
            </li>
            <li>
              Mulheres: Vestidos curtos ou médios, Saias em camadas leves, Tops
              cruzados, Braceletes e tornozeleiras, Pintura corporal ritual em
              ocasiões sagradas
            </li>
          </ul>
        </article>
        <article>
          <h4>NOMES COMUNS</h4>
          <ul className={styles.list}>
            <li>
              Masculinos: Kairo, Zemek, Ravelin, Tamaru, Obrek, Sahen, Jorai,
              Malek, Aro, Keshan
            </li>
            <li>
              Femininos: Nyara, Selah, Korae, Ishra, Amaya, Virel, Tashé, Liora,
              Zani, Marai
            </li>
            <li>
              Sobrenomes: Brasa-Clara, Cinzasol, Fogoantigo, Pedraquente,
              Chamarra, Lumibrasa, Coração-Ígneo, Cinzelda, Marquechama
            </li>
          </ul>
        </article>

        <article>
          <h3>Elisaar</h3>
          <p>
            Elisaar, um reino estreito e vital, ergue-se entre mares opostos e
            selvas fechadas, rios largos e colinas de pedra clara compõem
            Elisaar, cortado por estradas antigas e canais artificiais. Torres
            de vigia emergem da mata como sentinelas, atentas ao passo dos
            viajantes. O ar é quente e úmido, com o som de água corrente e
            folhas em movimento.
          </p>
        </article>

        <article>
          <h4>Cultura</h4>
          <ul className={styles.list}>
            <li>
              Os pequenos de Elisaar, são normalmente observadores e
              silenciosos, alem de educados, mas emocionalmente reservados e
              extremamente pacientes.
            </li>
            <li>
              Organizada em Casas de Vigia, famílias responsáveis por trechos de
              estrada, rios ou portos.
            </li>
            <li>
              Eles veneram Os Olhos Antigos, entidades que: veem tudo que passa,
              punem mentirosos, protegem aqueles que fazem juramentos
              verdadeiros.
            </li>
          </ul>
        </article>

        <article>
          <h4>Características físicas</h4>
          <ul className={styles.list}>
            <li>Altura: 95cm e 1,10cm</li>
            <li>Pele: castanho claro a oliva escura.</li>
            <li>Cabelo: Castanho escuro ou preto.</li>
            <li>Olhos: Castanhos, verdes profundos ou âmbar.</li>
          </ul>
        </article>

        <article>
          <h4>Vestuário</h4>
          <ul className={styles.list}>
            <li>
              Homens: Túnicas curtas ou camisas leves, Calças ajustadas abaixo
              do joelho, Capas finas com capuz, Botas leves ou sandálias
              reforçadas, Facas pequenas ocultas
            </li>
            <li>
              Mulheres: Vestidos leves e ajustados, Saias práticas com bolsos
              ocultos, Faixas de tecido na cintura, Braceletes simples de
              madeira ou pedra
            </li>
          </ul>
        </article>

        <article>
          <h2>NOMES COMUNS</h2>
          <ul className={styles.list}>
            <li>
              Masculinos: Edrin, Calwen, Torik, Balen, Jorwen, Maelis, Orvan,
              Selric, Tovin, Kalen
            </li>
            <li>
              Femininos: Lysa, Marwen, Elin, Serah, Nyel, Tressa, Varyn, Ilyra,
              Kessa, Rinel
            </li>
            <li>
              Sobrenomes: Doismares, Pedraviva, Vigiarco, Caminholongo,
              Folhasombra, Rioselo, Portacerta, Passolento, Olhoquieto
            </li>
          </ul>
        </article>
      </section>

      <section>
        <h2>FIGURAS MARCANTES</h2>
        <ul className={styles.list}>
          <li>Ser Aric Brokwin, a Raposa das Vinhas de Kienling</li>
          <li>Fídel Marrak, justiceiro costeiro de Haukkihh</li>
          <li>Urrak Waynwyn, Senhor dos Dois Mares de Elisaar</li>
        </ul>
      </section>

      <section>
        <h2>TRAÇOS RACIAIS DOS PEQUENOS</h2>
        <article>
          <dl>
            <dt>Atributos</dt>
            <dd>+2 Conhecimento, +1 Destreza, +1 Constituição</dd>

            <dt>Idade</dt>
            <dd>
              Os pequenos atingem a idade adulta um pouco mais tarde que os
              anões, com 40 anos um pequeno se torna adulto e vive até 350 anos.
            </dd>

            <dt>Visão</dt>
            <dd>Possui visão no escuro de até 18 metros em tons de cinza.</dd>

            <dt>Comunhão animal</dt>
            <dd>
              Conseguem se comunicar com animais pequenos por sons e gestos.
            </dd>
          </dl>
        </article>
      </section>
      <section>
        <h2>Classes</h2>
        <ul className={styles.list}>
          <li>Arqueiro</li>
          <li>
            Guerreiro
            <ul>
              <li>Cavaleiro</li>
            </ul>
          </li>
          <li>
            Bárbaro
            <ul>
              <li>Berserker</li>
              <li>Monge</li>
            </ul>
          </li>
          <li>
            Mago
            <ul>
              <li>Mago espiritual</li>
              <li>Mago de guerra</li>
              <li>Bardo</li>
            </ul>
          </li>
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
              <li>Curandeiro guerreiro</li>
              <li>Paladino</li>
            </ul>
          </li>
          <li>Artífice</li>
          <li>Caçador</li>
          <li>
            Ladino
            <ul>
              <li>Pirata</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Variações de Pequenos</h2>
        <article>
          <h3>Linhagem da Mata</h3>
          <p>
            Pequenos ou pequeninhos da mata têm pele verde-oliva, cabelos
            castanhos ou ruivos, e olhos que mudam de cor conforme as estações
            do ano. Eles são pequenos e ágeis, com orelhas pontiagudas e uma
            conexão profunda com a natureza
          </p>
          <ul className={styles.list}>
            <li>+2 Destreza</li>
            <li>+1 Instinto</li>
            <li>-1 Força</li>
          </ul>
          <p>Resistência à Magia de ilusão e encantamento.</p>
          <p>
            No nível 5 cria uma conexão com a Natureza mais forte podendo usar a
            habilidade Sobrevivência para criar alimentos e água potável em
            ambientes selvagens.
          </p>
        </article>
        <article>
          <h3>Linhagem Anã</h3>
          <p>
            Pequenos da linhagem anã têm pele bronzeada, cabelos curtos e
            castanhos, e olhos que brilham com um fogo interior. Eles são
            pequenos, mas robustos e musculosos.
          </p>
          <ul className={styles.list}>
            <li>+2 Força</li>
            <li>+1 Constituição</li>
            <li>-1 Conhecimento</li>
          </ul>
          <p>
            Resistência física a danos físicos Pequenos da linhagem anã podem
            liderar grupos de criaturas com um bônus de +1 em moral.
          </p>
          <p>
            No nível 3 os pequenos da linhagem anã podem entrar em um estado de
            fúria em batalha, ganhando vantagem em ataques de força.
          </p>
        </article>
        <article>
          <h3>Linhagem da Oficina</h3>
          <p>
            Pequenos da linhagem da oficina têm pele pálida, cabelos longos e
            cinzentos. Eles são pequenos e magros, com dedos finos e uma paixão
            por criar coisas.
          </p>
          <ul className={styles.list}>
            <li>+2 Destreza</li>
            <li>+1 Conhecimento</li>
            <li>-1 Carisma</li>
          </ul>
          <p>
            Pequenos da oficina podem analisar objetos e máquinas para entender
            como funcionam. Pequenoa da oficina têm um bônus de +1 em observar.
          </p>
          <p>
            No nível 3 pode criar objetos simples e funcionais com materiais
            disponíveis.
          </p>
        </article>
      </section>
    </main>
  )
}
