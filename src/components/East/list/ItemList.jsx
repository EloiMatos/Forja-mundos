import {ListItemText, ListItem} from "@mui/material";

export function ItemList ({titleItem, body}) {
    return (
        <ListItem className="border-white border-spacing-3 bg-white rounded-xl mt-2">
            <ListItemText primary={titleItem} secondary={body}/>
        </ListItem>
    );
}