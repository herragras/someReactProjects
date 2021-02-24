import React from "react";
import BookList from "./BookList";

class BooksApp extends React.Component{

    state={
        books:[
            {
               title: "The Brothers Karamazov",
               author: "Fyodor Dostoyevsky",
               imageURL: "https://assets.thalia.media/img/artikel/c75989ffbdd85ac61b1c4b2848e76f81a3a27fa0-00-00.jpeg",
               topic: "Alexey Fyodorovitch Karamazov was the third son of Fyodor Pavlovitch Karamazov, a land owner well known in our district.",
           },
           
           {
               title: "A Promised Land",
               author: "Barack Obama",
               imageURL: "https://assets.thalia.media/img/artikel/a1f4cd6ed07f881114dc524fb0c79cd64d8f8ec7-00-00.jpeg",
               topic: "A riveting, deeply personal account of history in the making—from the president who inspired us to believe in the power of democracy",
           },
           
           {
               title: "Narziß und Goldmund",
               author: "Hermann Hesse",
               imageURL: "https://assets.thalia.media/img/artikel/6b6e7de7b3cae8c2324f5e6374237ef8bf8823a4-00-00.jpeg",
               topic: "Hermann Hesses Erzählung über den Gegensatz zwischen Geist- und Sinnenmenschen und ihre produktive Vereinigung im Künstler ist eine moderne Gestaltung des Don-Juanund Casanova-Motivs.",
           },
           
           {
               title: "Ostfriesen Zorn",
               author: "Klaus-Peter Wolf",
               imageURL: "https://assets.thalia.media/img/artikel/834d37693cc43186f56c224f0c7a280effdf1965-00-00.jpeg",
               topic: "Sie will Urlaub machen auf Langeoog und in den Dünen entspannen. Dabei ist ihr Schicksal längst besiegelt.",
           },
           
           {
               title: "Der erste letzte Tag",
               author: "Sebastian Fitzek",
               imageURL: "https://assets.thalia.media/img/artikel/61ca7066597ee1935a9f480702c7f4faf2678179-00-00.jpeg",
               topic: "Livius Reimer macht sich auf den Weg von München nach Berlin, um seine Ehe zu retten.",
           },
           
           {
               title: "Hamlet",
               author: "William Shakespeare",
               imageURL: "https://assets.thalia.media/img/artikel/32932e42018f358e30bb399df23de4a2f7a2f42a-00-00.jpeg",
               topic: "Hamlet, is a tragedy written by William Shakespeare sometime between 1599 and 1601.",
           }
           ]
    };

    render(){

        return(
            <div><BookList books={this.state.books}/></div>
        );
    };

};

export default BooksApp;