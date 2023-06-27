import { List } from "@mui/material";
import { ItemList } from "./ItemList";

export function EastList () {
    const itemsList = [{
        title: 'titulo teste 1..',
        body: "Descricao que seria a body do item 1"
    }, {
        title: 'titulo teste 2..',
        body: "Descricao que seria a body do item 2"
    }, {
        title: 'titulo teste 3...',
        body: "Descricao que seria a body do item 3"
    }];

    return (
        <List sx={{color:"black"}}>
            {
                itemsList.map((item) => (
                    <div>
                        <ItemList titleItem = { item.title } body = { item.body }/>
                    </div>
                ))
            }
        </List>
    );
}