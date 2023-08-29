
import Item from './components/Item/Item';

export default function Listing(props) {
    const {items} = props;

    return (
        <div className="item-list">
            {items.map((o) => <Item item={o} key={o.listing_id} />)}
        </div>
    );

}