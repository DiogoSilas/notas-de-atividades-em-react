import { useState, useEffect } from 'react'
import './cards.css';

async function createDeck() {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
    const data = await response.json();
    return data.deck_id
}

async function getCards(deckId) {
    const numberOfCards = 52
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numberOfCards}`);
    return await response.json();
}

const DeckOfCards = () => {
    // Quando ele executa, vai retornar duas coisas. 1º A variável que vai retornar usar para copular as cartas e 2º uma função responsavel por atualizar o array de cartas.
    const [deck, setDeck] = useState({
        cards: []
    })

    // O Hook useEffect vai provocar uma cadeia infinita de atualizaçõe. Para corrigir, passe um array vazio como segundo argumento do "Hook useEffect". 
    useEffect(() => {
        const fechtData = async () => {
            const deckId = await createDeck();
            const data = await getCards(deckId);

            setDeck({
                cards: data.cards
            })
        }
        fechtData()
    }, []) // Ao passar um array vazio, estamos dizendo para o useEffect para carregar só uma vez.


    return (
        <>
        <h1>Deck Of Cards</h1>
        <section>
            <ul>
                {
                deck.cards.map((card, index) => {
                    return (
                        <li key={index}>
                             <img src={card.image} alt={card.value} />
                        </li>
                    )
                    })
                }
            </ul>
        </section>
        </>
    )
}


export default DeckOfCards;