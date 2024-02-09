import { Component } from 'react'
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

class DeckOfCards extends Component {
    constructor() {
        super()
        this.state = {
            cards: []
        }
    }

    async componentDidMount() {
        const deckId = await createDeck();
        const data = await getCards(deckId);
        console.log(data)

        this.setState({
            cards: data.cards
        })
    }


    render() {
        return(
            <>
            <h1>Deck Of Cards:</h1>
            <section>
                <ul>
                    {
                        this.state.cards.map((card, index) => {
                            return(
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
}


export default DeckOfCards;