/*
=========================================================================
Nome do Projeto: Carrinho de Compras em Javascript
Finalidade: Cursos de Informática do IFSP campus Caraguatatuba 
Fonte Base: Projetos do Curso B7Web - https://b7web.com.br/ 
Autor: Denny Paulista Azevedo Filho
License: MIT License
========================================================================= 
*/

let modelsJson = [
    {id:1, 
        name:'Calabresa', 
        tipo: 'Salgada',
        img:'imagens/sabores-carrinho/calabresa.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, molho de tomate orgânico, calabresa defumada, cebola e queijo muçarela. '},
    {id:2, 
        name:'Camarão Cremosos', 
        tipo: 'Salgada',
        img:'imagens/sabores-carrinho/camarao-cremoso.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, molho de quatro queijos, camarão italiano, manjericão e queijo brie.'},
    {id:3, 
        name:'Portuguesa', 
        tipo: 'Salgada',
        img:'imagens/sabores-carrinho/portuguesa.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, tomates orgânicos, cebola roxa, azeitona, ovo picado, presunto e queijo muçarela.'},
    {id:4, 
        name:'Italianissima', 
        tipo: 'Salgada',
        img:'imagens/sabores-carrinho/italianissima.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, recheio de alcachofra, muçarela de búfala e presunto parma.'},
    {id:5, 
        name:'Tribeca', 
        tipo: 'Salgada',
        img:'imagens/sabores-carrinho/tribeca.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, cheddar, pepperoni, bacon e queijo crocante.'},
    {id:6, 
        name:'Caprese', 
        tipo: 'Salgada',
        img:'imagens/sabores-carrinho/caprese.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, muçarela tradicional, muçarela de búfala, rodelas de tomate, folhas de manjericão e pesto de azeitona.'},
    {id:7, 
        name:'Alcachofrinha', 
        tipo: 'Salgada',
        img:'imagens/sabores-carrinho/alcachofrinho.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, alcachofra, muçarela de búfala e azeitonas fatiadas.'},
    {id:8, 
        name:'Pão de alho', 
        tipo: 'Salgada',
        img:'imagens/sabores-carrinho/pao-de-alho.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, creme de alho, requeijão, queijo muçarela e calabresa picante.'},     
    {id:9, 
        name:'Quatro queijos', 
        tipo: 'Vegetariana',
        img:'imagens/sabores-carrinho/quatro-queijos.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, queijo muçarela, gorgonzola picada, requeijão e parmesão ralado.'},     
    {id:10, 
        name:' Vegetariana', 
        tipo: 'Vegetariana',
        img:'imagens/sabores-carrinho/vegetariana.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, palmito, brócolis, milho, champignon e muçarela.'},     
    {id:11, 
        name:' Francesa', 
        tipo: 'Vegetariana',
        img:'imagens/sabores-carrinho/francesa.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, mix de shitake, shimeji, champignon, requeijão e tomate cereja.'},     
    {id:12, 
        name:' Tropical', 
        tipo: 'Vegetariana',
        img:'imagens/sabores-carrinho/tropical.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, queijo meia-cura, pimentão vermelho, tomate cereja e berinjela.'},     
    {id:13, 
        name:' Romana', 
        tipo: 'Promoção',
        img:'imagens/sabores-carrinho/romana.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, muçarela aliche, queijo parmesão e oregano indiano.'},     
    {id:14, 
        name:'Escarola', 
        tipo: 'Promoção',
        img:'imagens/sabores-carrinho/escarola.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, escarola refogada, muçarela e oregano indiano.'},     
    {id:15, 
        name:'Mineira', 
        tipo: 'Promoção',
        img:'imagens/sabores-carrinho/mineira.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, muçarela, catupiry e milho verde.'},     
    {id:16, 
        name:'Siciliana', 
        tipo: 'Promoção',
        img:'imagens/sabores-carrinho/siciliana.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, muçarela, bacon e chanpignon ao molho rose.'},     
    {id:17, 
        name:'Marguerita', 
        tipo: 'Zero lactose',
        img:'imagens/sabores-carrinho/marguerita.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, rodelas de tomate, molho de tomate, manjericão, queijo e azeite indiano '},     
    {id:18, 
        name:'Hamburguer', 
        tipo: 'Zero lactose',
        img:'imagens/sabores-carrinho/hamburguer.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, molho de tomate caseiro, hamburguer fresco, queijo muçarela, tomate freco, azeitona orégano.'},     
    {id:19, 
        name:'Parma com rúcula',
        tipo: 'Zero lactose', 
        img:'imagens/sabores-carrinho/parma-com-rucula.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, presunto Parma, folhas de rúcula, muçarela, orégano e tomates frescos.'},     
    {id:20, 
        name:' Scamorza', 
        tipo: 'Zero lactose',
        img:'imagens/sabores-carrinho/scamorza.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, queijo Scarmoza, molho de tomate, rodelas de tomate, folhas de manjericão e azeitonas'},     
    {id:21, 
        name:'Batata doce',
        tipo: 'Vegana', 
        img:'imagens/sabores-carrinho/batata-doce.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira de batata-doce, quinoa, tomates em rodelas, folhas de majericão e queijo vegano.'},     
    {id:22, 
        name:'Matzá',
        tipo: 'Vegana', 
        img:'imagens/sabores-carrinho/matza.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, molho de tomate caseiro, rodelas de tomate, azeitona indiana, manjericão, quijo vegano e orégano.'},     
    {id:23, 
        name:'Beringela e cogumelos',
        tipo: 'Vegana', 
        img:'imagens/sabores-carrinho/berigela-e-cogumelos.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira de grão de bico com Tapioca, tofu, cogumelos mexicanos, pasta de berinjela e sal do Himalaia.'},     
    {id:24, 
        name:'Couve-flor',
        tipo: 'Vegana', 
        img:'imagens/sabores-carrinho/couve-flor.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira de couve flor, alho negro, cogumelos, alho-poró, cebola roxa, molho de tomate, tomate cereja e manjericão.'},     
    {id:25, 
        name:' Banoffe',
         tipo: 'Doce', 
        img:'imagens/sabores-carrinho/banoffe.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, doce de leite caseiro, banana, chantily fresco e canela indiana, .'},     
    {id:26, 
        name:'Coco com doce de leite',
         tipo: 'Doce', 
        img:'imagens/sabores-carrinho/coco-com-doce-de-leite.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, doce de leite caseiro, coco fresco e cereja .'},     
    {id:27, 
        name:'Romeu e Julieta',
         tipo: 'Doce', 
        img:'imagens/sabores-carrinho/romeu-e-julieta.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, goiabada caseira e queijo minas  '},     
    {id:28, 
        name:'Morango com chocolate',
         tipo: 'Doce', 
        img:'imagens/sabores-carrinho/morango-com-chocolate.png', 
        price:[25.00, 35.00, 45.00], 
        sizes:['30cm', '40cm', '50cm'], 
        description:'Massa caseira, creme de chocolate com avelã, morangos e chocolate branco.'},     
    {id:29, 
        name:'Coca-cola',
         tipo: 'Bebidas', 
        img:'imagens/sabores-carrinho/coca-cola.png', 
        price:[5.0, 7.0, 12.00], 
        sizes:['350ml', '600ml', '2litro'], 
        description:''},     
    {id:30, 
        name:'Coca-cola zero',
        tipo: 'Bebidas', 
        img:'imagens/sabores-carrinho/coca-cola-zero.png', 
        price:[5.0, 7.0, 12.00], 
        sizes:['350ml', '600ml', '2litro'], 
        description:''},     
    {id:31, 
        name:'Guaraná',
        tipo: 'Bebidas', 
        img:'imagens/sabores-carrinho/guarana.png', 
        price:[5.0, 7.0, 12.00], 
        sizes:['350ml', '600ml', '2litro'],
        description:''},     
    {id:32, 
        name:'Água com gás',
        tipo: 'Bebidas', 
        img:'imagens/sabores-carrinho/agua-com-gas.png', 
        price:[3.50, 4.00, 7.00], 
        sizes:['350ml', '600ml', '2litro'],
        description:''},     
    {id:33, 
        name:'Batata frita',
        tipo: 'Acompanhamento', 
        img:'imagens/sabores-carrinho/batata-frita.png', 
        price:[8.50, 15.00, 20.00], 
        sizes:['350gramas', '500gramas', '700gramas'],
        description:''},     
    {id:34, 
        name:'Aipin frito',
        tipo: 'Acompanhamento', 
        img:'imagens/sabores-carrinho/aipin-frito.png', 
        price:[6.50, 12.00, 18.00], 
        sizes:['350gramas', '500gramas', '700gramas'],
        description:''},     
    {id:35, 
        name:'Bolinho de queijo',
        tipo: 'Acompanhamento', 
        img:'imagens/sabores-carrinho/bolinho-de-queijo.png', 
        price:[8.50, 13.50, 18.00], 
        sizes:['350gramas', '500gramas', '700gramas'],
        description:''},     
    {id:33, 
        name:'Anéis de cebola',
        tipo: 'Acompanhamento', 
        img:'imagens/sabores-carrinho/aneis-de-cebola.png', 
        price:[5.50, 11.00, 16.00], 
        sizes:['350gramas', '500gramas', '700gramas'],
        description:''},     

];