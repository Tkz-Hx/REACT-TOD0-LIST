import { useState } from "react";
import ListItem from '@mui/material/ListItem';
import TextField from "@mui/material/TextField";
import Create from "@mui/icons-material/Create";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

export default function TodoForm({ addTodo }) {
       const [text, setText] = useState("");
       //====== NEW TEXTFIELD CHANGE=====//
       const handleChange = (evt) => {
              setText(evt.target.value);
       }
       //====== FORM SUBMIT TO ADD NEW TODOS====//
       const handleSumbit = (e) => {
              e.preventDefault();
              addTodo(text);
              setText("");
       }
       //====TEXTFIELD & ICONBUTTON====//
       return (
              <ListItem>
                     <form onSubmit={handleSumbit}>
                            <TextField id="outlined-basic"
                                   label="Add To-Do"
                                   variant="outlined"
                                   onChange={handleChange}
                                   value={text}
                                   InputProps={{
                                          endAdornment: <InputAdornment position="end" >
                                                 <IconButton aria-label="toggle password visibility" edge="end" type="Submit">
                                                        <Create />
                                                 </IconButton>
                                          </InputAdornment>
                                   }}
                            />
                     </form>
              </ListItem>
       );
};


