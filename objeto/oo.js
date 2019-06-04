/** PRINCÍPIO DA PRAGRAMAÇÃO ORIENTADA A OBJETOS
 
Vamos começar esse capítulo de objeto, e se a gente fosse falar o papel de objetos dentro do país JavaScript, provavelmente ele seria o vice presidente,
quase disputando junto com uma função, como o sendo uma das coisas mais importantes da linguagem. Então eu vou simplesmente colocar aqui alguns conceitos, 
para mostrar algumas ideias sobre o paradigma de orientação a objeto.

Então nós tinhamos antes da OO na história dos paradigmas, passando rapidamente, nós tinhamos a programação procedural que é a função. Era uma programação
aseada em Go to. Era uma programação não estruturada, onde você tinha rudimentos de estrutura de controle muito desvio de fluxo, a partir de uma função de
de uma palavra reservada da linguagem chamada Go to.

Então você trabalhava em um fluxo, e com o Go to você pulava para um lugar, Go to e ele pulava para outras partes do código e ficava pulando entre vários 
pontos de um determinado código, a partir da palavra Go to, isso era conhecido como Código não estruturado, que foi considerado nocivo para a qualidade
do software.

Você tinha linguagens não estruturadas que era todo mundo Ju e você passou a ter linguagens estruturadas

inclusive o paradigma de orientação a objeto também está dentro do guarda chuva linguagens estruturadas

e aí dentro dessas linguagens estruturadas você tem um paradigma procedural como paradigma procedural.

O paradigma procedural ele é baseado no procedimento aproximado na função um trecho de código que você

dá um nome para ele reutilizar ele em vários lugares se você não tem isso você encolhe o executado gaucho

pula pra cá código ser executado pelo próprio trecho e vai executando e pulando de um trecho para outro

agora com linguagens siderais você tem o foco digamos assim muito forte e a função ou procedimento então

você tem código como por exemplo um processamento que é uma função que segue um conjunto de dados.

Aluno Halo 2 ou 3.

Esses valores são processados por essas funções normalmente você tem valores globais compartilhados

no âmbito da sua aplicação normalmente variáveis a partir ponteiros ou áreas e códigos mexem no mesmo

no mesmo trecho editado digamos assim.

Isso de certa forma é muito ruim porque quando você compartilha um dado que é variável dentro do seu

programa e muitos códigos mexem nesse dado.

Isso tem muita chance de dar problema não é um método mas sim de uma forma que o outro trecho escolhido

não estava esperando.

E aí geram inconsistência gera um bug mas o paradigma procedural ele tem como foco se você olhar esse

código aqui você tem um procedimento recebendo dados como entrada por isso que eu coloquei que esse

código não é executável imagina que exista uma função para o segmento.

Estou fingindo aqui que essa função existe ou fingindo que esses dados valem valor 2 ou 3 também existem

no meu programa.

Eu estou simplesmente dizendo que esse código que eu estou passando valores para um procedimento ele

vai manipular esses valores.

Esses valores podem ser compartilhados de forma mais global na sua aplicação.

Mas na verdade o que ele vai fazer você tem a função que manipula dados.

Esse é um conceito muito marcante dentro da linguagem procedural.

Partindo para um conceito um pouco mais ao que é que nós temos na orientação objeto e o que foi que

mudou na hora mudou completamente o foco.

Você tinha um foco em funções que manipulavam dados.

Agora o que é que você tem.

Você tem dados dentro desses dados.

Você tem funções.

Então como é que seria mais ou menos a ideia pega nesse mesmo exemplo que esse pseudo exemplo.

Mudando ele seria você ter um objeto um objeto passa a ser uma figura muito importante.

Ou seja não é muito importante na verdade a figura central é uma estrutura que gera objetos e os objetos

propriamente ditos as estruturas que geram objetos e classes pois possui funções e você tem que aprender

de qual linguagem você esteja trabalhando ela vai gerar de uma forma diferente.

Mas o fato é que os objetos são gerados desses objetos têm valores atributos internos do objeto e você

tem dentro do objeto comportamentos.

Então você tem por exemplo essa diferença que no momento que você tem uma linguagem procedural você

tem processamento manipulando dados sejam globais sejam internos da função você manipula esses dados

e retorna um valor.

E quando você passa para o UOL O que você tem é um objeto que tem valores ou seja atributos e tem funções

e comportamentos dentro desse objeto e você passa a invocar esses processamentos a partir do dado.

Então quem tem a função no caso que processamento ela pertence ao objeto e dentro do objeto tem os valores

que são usados.

Esses três valores aqui que são usados dentro do processamento.

Então o objeto ele funciona como essa cápsula que agrupa comportamentos e atributos.

A ideia de você ter o paradigma de orientação objeto é para que você possa estar mais próximo do mundo

real.

Quem bolou o paradigma de orientação objeto ele interpreta o mundo como um mundo orientado a objetos

que você vê por exemplo uma palestra do pai que ele já diz ao mundo não é tão ou mais concorrentes.

Ele vai levar mais para o lado do paradigma da linguagem no qual ele defende mais quem definiu orientação

objeto.

Ele começou a entender que o mundo ele é formado por objetos e se os objetos têm atributos e comportamentos

e esses objetos se relacionam com os outros.

Então você pode organizar perceber o seu sistema como tudo organizado em cima de objetos.

Esses objetos cada um tem nos seus dados terem seus comportamentos e um objeto interagindo com o outro

um objeto pode conter outros objetos.

Um objeto pode ter uma relação de parentesco.

Aí vem a herança ou seja você tem imaginado uma família você tem um objeto pai e você objeto o filho

que herda características do seu pai também são princípios que você consegue enxergar no mundo real

e tentar abstrair e trazer uma simplificação desse mundo algo que você nunca mapeia o mundo exatamente

como ele é.

Você traz uma abstração que seja relevante para dentro do seu sistema então a ideia do paradigma de

orientação objeto é trazer a realidade do mundo e digamos assim mapear o mundo em cima de objetos e

trazer essa realidade simplificada para dentro do seu software.

Então é importante você entender que a essa mudança de foco por exemplo me lembro que foi determinado.

Eu me lembro de um trauma na verdade quando saí de uma linguagem procedural quero sei que não tem princípios

de orientação objeto você tem instrutivo você tem dado funções que manipula os dados e como eu não passei

para a linguagem.

No caso do Java na época.

Foi um baque foi muito difícil entender essa mudança que é que está sendo representado aqui nesse exemplo.

Nesse seu exemplo o que é você tem funções que manipulam dados e você passou a ter dados personalizados

e dados que você constrói.

Quais são os atributos e quais são os comportamentos.

Você tem um objeto que é uma estrutura que envolve e que agrupa tanto atributos como comportamentos.

No final você tem a mudança de foco.

Se você tinha a função com base agora você tem um dados que tem funções.

Isso é importante.

Então só pra deixar registrado aqui o foco nesse exemplo passou a ser o objeto.

Antes era a função.

Então pra gente terminal é falar de alguns princípios importantes e com ela a orientação objeto.

O primeiro princípio importante que eu quero ressaltar é a administração que é que significa abstração

a abstração é você pegar por exemplo um objeto do mundo real e traduzir e entender como traduzir esse

objeto para dentro do seu sistema.

Por exemplo vamos imaginar um objeto Supersimples do mundo real que é o carro.

Aí sabe que o carro tem atributos peso ele tem largura altura comprimento ele tem uma velocidade máxima

especificada no carro ele tem a velocidade atual seja parada 0 se ele tiver mais velocidade X o carro

tem um método ligar o carro tem um metro desligar o carro tem um método de ligação e coisas gerais de

um carro que a gente já conhece da vida real.

Mas vamos supor que você seja um funcionário do Detran por exemplo e você vai construir um sistema e

precisa ter um objeto chamado o carro.

Será que faz sentido você criar uma função dentro de carros chamada acelerar para um sistema do Detran.

Não faz sentido.

Por quê.

Porque você tem que administrar aquele objeto simplificar o objeto no mundo real que tem uma complexidade

gigante e trazer esse objeto é uma simplificação dele para dentro do seu sistema que ele chama de administração.

Então o carro no mundo real ele é composto por partes que a gente não entende.

Então por exemplo o local tem um motor.

O carro tem várias portas o carro tem bateria e o carro tem luz o carro tem vários itens que a gente

não conhece a mecânica.

No futuro não se sabe a complexidade que é um carro.

Mas você pode construir um sistema que precisa ter um objeto do tipo o carro que você vai precisar de

informações do tipo a placa Renavam as informações que são pertinentes.

O Detran por exemplo o carro você não precisa se preocupar se o carro tem um motor dentro do sistema

do Detran.

Você vai se preocupar se o carro tem um dono e um condutor tem um dono e tem vários condutores isso

pode ser relevante pelo seu sistema então pegar um objeto no mundo real e administrar e ele é para dentro

do seu sistema.

é algo muito importante entender como mapear o mundo que tem seus objetos e suas relações e como trazer

isso para dentro do software.

Se você tiver construído um sistema de oficina mecânica ao mesmo objeto o carro pode ter outra abstração

diferente porque o seu sistema demanda informações diferentes por exemplo o sistema do Detran o chassi

pode ser importante no sistema de oficina mecânica pode ser que não seja.

Então você vai ter o mesmo objeto sendo extraído e simplificado de formas diferentes para necessidades

diferentes então entender como pegar o mundo real e transformar isso em software.

é um dos desafios da orientação a objeto que não é um paradigma tão simples de aplicar na prática.

é simples de entender mas você precisa de um tempo digamos assim para começar a aplicá lo de uma forma

adequada.

O segundo princípio que eu quero trabalhar com vocês é o princípio do encapsulamento que é um encapsulamento.

Você tem os detalhes de implementação escondidos e você mostrar para quem precisa usar aquele sistema

ou aquela coisa mostrar uma interface simples para que interagir com um determinado objeto então por

exemplo continuando pegando o carro.

O que é que você precisa conhecer do carro para que você consiga usar um carro.

Você precisa aprender a trabalhar com direção você precisa aprender a trabalhar com a marcha.

Você precisa aprender a ligar o carro.

Você precisa entender que depois de um tempo você precisa colocar gasolina no carro para que ele continue

andando.

Esse tipo de coisa você precisa conhecer mais como o combustível é queimado dentro do motor.

Como funciona As válvulas do carro.

é que o carro tem mais cavalos ou menos cavalos esse tipo de informação fica escondida e fica encapsulado

dentro do objeto do carro.

E você lida apenas com a interface de comunicação entre você e o carro que é a que é a ignição que é

a direção.

Obviamente dependendo do carro você vai ter uma abstração maior porque não precisa passar marcha e o

outro vai ter uma abstração que você não precisa nem ligar.

Aperta o botão e o carro liga automático.

Então o nível de administração de um carro para o outro pode variar mas o fato é que muitas e muitas

informações do carro estão encapsulados para você.

E você não precisa se preocupar inclusive hoje tem carros que nem frear você precisa.

Dado a situação de risco o próprio carro já freia para você então o nível de encapsulamento vai mudando

mas você não precisa conhecer os detalhes internos de um carro para aprender a usar ele mais a interface

de comunicação entre você e o carro.

é importante que você conheça um exemplo maluco que sempre verá minhas aulas presenciais que é o seguinte

imagine que você tem um carro e tem um problema digamos assim cada montadora não conseguiu resolver

um problema sério então por exemplo você tem um carro da montadora pra você continuar no andando no

que de vez em quando apertar um botão no teto que injeta mais gasolina.

Só um exemplo maluco certo então se dirige normal passo a passo a marcha normal só que de vez em quando

você tem que apertar um botão.

Se você comprar um carro da montadora bem esse problema do botão eles já resolveram.

Mas para passar a marcha é uma manivela que você tem que passar marcha para a frente e para trás.

Então dois dias para passar marcha para a frente e dois giros para passar a marcha para trás.

Então se você sai da montadora que já tem a marcha normal só tem um botão no teto para a montadora B

que não tem um botão no teto mas que passa a marcha com a manivela girando.

Você vai ter um processo de adaptação por quê.

Porque a interface de comunicação mudou.

O fato de você ter um carro que tem um motor CVT o carro que tem um motor diferente com tecnologia nova

é mais que a interface de comunicação não muda.

Você continua trabalhando como marcha com direção da mesma forma que você não precisa se adaptar porque

o que mudou foi a implementação interna.

A interface de comunicação permanece a mesma.

Se a interface permanece a mesma é muito mais fácil.

Na verdade não precisa você se adaptar à mudança interna de um carro.

Você tem por exemplo um Honda Civic 98 automático e tal direção hidráulica.

E aí você compra um Honda Civic 2018 com o modelo mais novo e tal D 20 anos depois.

Mas ele continua a ser automático continua tendo a direção hidráulica.

Será que existe um processo grande de adaptação para você se adaptar de um carro 98 para um carro.

2018 muito provavelmente em poucos minutos você já vai estar acostumado com o ritmo do carro.

O ritmo do motor mais internamente a implementação mudou absurdamente de 20 anos para cá.

Então é muito importante que você entenda quando você muda a implementação interna de um objeto não

necessariamente quem usa aquele objeto precisa se adaptar.

Por quê.

Porque só se você mudar a interface de comunicação aquilo que está visível para fora do objeto que se

mudar todo mundo depois daquele objeto vai precisar se adaptar.

Mas se você mudar apenas o que está dentro é por conta do encapsulamento de esconder os detalhes de

implementação.

Se você mudou só interno não há necessidade de ninguém que usa o objeto externamente precisar se adaptar.

Então porquê que o encapsulamento é algo importante porque se você tem um objeto que joga a tripla digamos

assim joga todos os detalhes pra fora fica visível pra todo mundo.

A chance de haver uma alta dependência dos objetos é muito grande então se todo mundo depende todo mundo

imagina você correr por exemplo cinco quilômetros 50 pessoas de mãos dadas.

Será que vai ser mais todo mundo moldado vai ser mais fácil todo mundo correr solto sem estar com as

mãos dadas.

Claro que quanto maior o nível de dependência quanto mais gente tiver junto é só conseguia andar junto.

O processo de evolução vai ser muito mais lenta então que a gente disse que há um alto nível de acoplamento

isso é um erro do sistema.

Quando você tem muitos objetos que tem tudo dentro deles puxa e tem baixo nível de encapsulamento ou

seja não esconde muita coisa e aí gera uma dependência muito maior de todos os objetos o que torna a

evolução do seu sistema muito mais complicado.

Então é um princípio básico se você esconde os detalhes de implementação isso põe para o mundo exterior

apenas uma interface de comunicação.

Apenas algumas algumas coisas ficam visíveis para o mundo exterior.

A chance de haver um acoplamento grande é menor porque boa parte do detalhe está interno.

Então se você muda apenas um detalhe interno um objeto que não gera impacto na interface isso não vai

gerar nenhum impacto na sua aplicação.

Certo Obviamente não existe sistema sem acoplamento.

Por exemplo você não tem sistema feitos por objetos que são ilhas que não se comunicam.

Assim a comunicação entre os objetos só que é mais importante você se preocupar com a comunicação dos

objetos do que propriamente com a implementação interna deles.

Por quê.

Porque a implementação você muda fácil mas se os objetos se comunicam de forma excessiva entre si qualquer

coisa que você muda no objeto gera impacto no outro que gera impacto no outro.

E aí pode gerar um efeito cascata muito grande então a implementação é uma coisa.

Ou seja fica encapsulado fica escondido dentro do objeto e você tem uma interface de comunicação que

ajuda a comunicar os objetos entre si.

Então encapsulamento é um dos pilares importantíssimos inclusive no canal eu falo alguns vídeos sobre

esse tema.

Então o terceiro princípio que a gente vai ver também nesse capítulo herança é um princípio baseado

numa relação e existe algumas formas dentro do mundo do software de você usar código.

Você tem uso a partir de composição.

Por exemplo um carro ele é composto por um motor motor e um outro objeto o carro é um.

Então não preciso colocar complexidade de motor dentro do carro dentro do objeto carro eu posso simplesmente

dizer que o carro tem um motor e aí a complexidade do motor está lá dentro do objeto motor o objeto

motor é quebrado e outras partes menores.

7 Eu não preciso colocar toda a complexidade do motor ele pode usar outras partes menores para a composição

dessas partes menores como o motor.

O motor somado com outros objetos portas e coisas do tipo gera um carro e assim você vai gerando objetos

mais complexos a partir da composição de objetos mais simples.

Essa é uma forma de você ter o uso de cola.

Você não tem que escrever aquilo que é do motor dentro do carro sempre usar parte da composição.

Outra forma de usar código é você ter a herança herança significa que você recebe atributos e comportamentos

de um objeto pai digamos assim e você tem por exemplo pensando na sua vida e você tem um pai e uma mãe.

Você recebeu características e atributos do seu pai atributo da sua mãe.

Você tem por exemplo um olho azul.

Você tem um cabelo do Aku parecer do seu pai a cor da sua pele parece que o pai aparece com a uma a

mistura dos dois.

Então você recebe características e atributos e comportamentos a partir de uma estrutura pai.

Algumas linguagens permite o que ele chama de herança múltipla você tem múltiplos pais.

Mas no caso JavaScript só permite que você tenha apenas um único pai.

O pai pode ter um outro pai que seria seu avô e aí você vai criando uma cadeia.

A gente vai chamar mais à frente uma cadeia de protótipos JavaScript uma linguagem que ser implementado

em cima desse conceito de Prototype Protótipo.

A gente vai ver vários exemplos.

A parte de herança fica tranquilo que você vai entender.

Mas o fato é que no mundo real você também tem relações do tipo e por exemplo você tem composição como

tem.

O carro tem o motor o carro tem portas certa a porta tem um parafuso aí você vai com bom nos objetos

mais complexos.

A partir de objetos mais simples.

Mas você tem a relação.

E por exemplo o ser humano é um animal.

O ser humano é o mamífero e mamífero.

é um animal.

Então você tem por exemplo Civic e um carro Ferrari e um carrão.

Então as características desse objeto que fica na hierarquia que é o objeto mais genérico tem ele passa

para os objetos que estão abaixo.

Então por exemplo você pega um conceito mais genérico que seria animal e você já especializa para mamífero

ou seja mamífero é um animal.

Mas nem todo animal é um mamífero você tem um filho e tem outras coisas então você tem um conceito mais

genérico que seria o animal.

Você tem uma classe filha um objeto filho digamos assim mamífero seja mamífero é um animal e você tem

de mamífero pode pelo ser humano por exemplo ser humano é um mamífero que é um animal.

Então quando você tem a relação nem toda relação é uma herança mas muito provavelmente você tem uma

relação e um como herança.

Existe uma tendência muito forte.

Quando você tiver desenvolvendo e priorize a composição ao invés de herança a herança muitas vezes pode

trazer confusão dentro do seu olho então se você puder priorizar a composição a relação tem no lugar

da herança é melhor que você favoreça a composição.

Existem pobres em tudo aquilo que é o que você precisa mapear como herança.

Você pode mapear como composição existem técnicas e padrões de projeto para fazer isso.

Mas o fato é que a herança também é um princípio importante da orientação a objeto.

O quarto ponto o último é o polimorfismo o que significa múltiplas formas e o fato de que você por exemplo

tem um celular um conceito genérico e um conceito abstrato que.

Esse pode ser um iPhone pode ser um Galaxy pode ser um Moto Z e alguma coisa mas a partir do conceito

genérico você consegue substituir digamos assim por objetos concretos.

Você consegue por exemplo criar um objeto.

Isso tem mais a ver com linguagens equipadas e mais o fato é que você consegue usar o carro o conceito

genérico de carro e ora esse Cao aponta pra uma Ferrari você pode acelerar frear ligar desligar.

Uma hora você pode substituí lo por um carro por um ano.

Você pode substituir diferentes conceitos concretos a partir e trabalhar num nível mais abstrato.

é um conceito um pouco mais abstrato para se falar assim como no vídeo mas o fato é que polimorfismo

quer dizer múltiplas formas.

Ou seja a partir de uma variável do tipo mais genérico aí tem mais a ver com estruturas chapadas e com

linguagens equipadas.

Mas o fato é que é um princípio orientação objeto eu quis trabalhar também aqui você tem por exemplo

uma classe do tipo carro e você pode trabalhar também com o JavaScript chapado meteu um script para

fazer esse tipo de trabalho para a gente.

Ou seja só que polimorfismo você tem uma variável será do tipo carrão e você é capaz de atribuir uma

Ferrari atribui um Civic que atribui o nome porque você tem uma relação de herança entre carro e esses

tipos concretos aqui embaixo quando você tem essa relação liderança uma classe filha pode ser referenciada

numa variável do tipo pai.

A ideia do polimorfismo é essa.

Você tem uma variável pai do tipo mais genérico o carro.

Você pode atribuir essa variável tipo subtipos.

Seria Ferrari sim e coisas do tipo mas só para você entender e a ela está super longa já.

Mas o fato é que nós temos aqui quatro princípios importantes de orientação a objeto que é a abstração

encapsulamento herança e polimorfismo na próxima aula a gente começa a voltar para o mundo já bem escrito

para que a gente possa desenvolver nossos sistemas e entender um pouco os objetos entender um pouco

de função também que a gente já viu no capítulo passado entender a herança com protótipos.

Tudo isso volto um pouco para o mundo JavaScript para que gente possa entender esse mundo dos objetos

na prática em JavaScript até a próxima aula.




 */