import { useState } from "react"
import ListItem from "@mui/material/ListItem"
import { TextField } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import CreateIcon from '@mui/icons-material/Create';
function TodoForm({ add }) {
  const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    add(text)
    setText('')
  }
  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField id="standard-basic" label="Add Todo" variant="standard" sx={{ m: 1, width: '25ch' }} value={text} onChange={handleChange} slotProps={{
          input: {
            endAdornment: <InputAdornment position="end">
              <IconButton aria-label='Create Todo' edge="end" type="submit">
                <CreateIcon />
              </IconButton>
            </InputAdornment>
          }
        }}
        />
      </form>
    </ListItem>
  )
}

export default TodoForm