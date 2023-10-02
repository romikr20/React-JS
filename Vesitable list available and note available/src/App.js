import Buttons from './Buttons'
import ShoppingList from './ShoppingList'
import Compo from './Image'
import Alert from './Alert'
import SingleCounte from './SingleCounte'
import Xyz from './Use state'
import GamesBox from "./GamesBox"
import Vasitable from "./Vesitable"
export default function MyApp() {
    return (
        <div>
            <Vasitable />
            {/* <GamesBox />
            <Xyz />
            <SingleCounte />
            <Buttons />
            <ShoppingList />
            <Compo />
            <Alert /> */}
        </div>

    );
}
function Square() {
    return <button className="square">X</button>;
}

