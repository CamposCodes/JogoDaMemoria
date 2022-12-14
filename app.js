document.addEventListener('DOMContentLoaded', ()=>{
    const cardArray = [
        {
            name: 'ganhou',
            img: 'images/ganhou.png'
        },
        {
            name: 'ganhou',
            img: 'images/ganhou.png'
        },
        {
            name: 'direita',
            img: 'images/direita.png'
        },
        {
            name: 'direita',
            img: 'images/direita.png'
        },
        {
            name: 'tras',
            img: 'images/tras.png'
        },
        {
            name: 'tras',
            img: 'images/tras.png'
        },
        {
            name: 'correndo',
            img: 'images/correndo.png'
        },
        {
            name: 'correndo',
            img: 'images/correndo.png'
        },
        {
            name: 'pulo',
            img: 'images/pulo.png'
        },
        {
            name: 'pulo',
            img: 'images/pulo.png'
        },
        {
            name: 'esquerda',
            img: 'images/esquerda.png'
        },
        {
            name: 'esquerda',
            img: 'images/esquerda.png'
        }
    ]


    //embaralhar cards

    cardArray.sort(()=>0.5 - Math.random());

    //

    const grid = document.querySelector('.grid');

    function creatBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src','images/card.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }
    
    
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var pares = [];
    
    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src',cardArray[cardId].img);
        //conferindo cards
        if(cardsChosen.length == 2){
            setTimeout(checkForMatch,500);
        }
    }
    
    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(optionOneId == optionTwoId){
            cards[optionOneId].setAttribute('src','images/card.png');
            cards[optionTwoId].setAttribute('src','images/card.png');
            alert('voc?? clicou na mesma imagem')
        }
        else if(cardsChosen[0] === cardsChosen[1]){
            alert('voc?? conseguiu um par !');
            cards[optionOneId].setAttribute('src','images/white.png');
            cards[optionTwoId].setAttribute('src','images/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            pares.push(cardsChosen);
        }
        else{
            alert('Ops! Jogue Novamente');
            cards[optionOneId].setAttribute('src','images/card.png');
            cards[optionTwoId].setAttribute('src','images/card.png');
        }
        //reseta
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = pares.length;

        //fim de jogo
        if(pares.length === cardArray.length/2){
            resultDisplay.textContent = "Parab??ns ! Voc?? encontrou todos os pares !";
        }

    }


    creatBoard();
});