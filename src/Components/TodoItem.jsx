import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem({ todo: { id, text, completed }, handleDelete, toggle }) {
  const labelId = `checkbox-list-label-${id}`;
  return (<ListItem
    secondaryAction={
      <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(id)}>
        <DeleteIcon />
      </IconButton>
    }
    disablePadding
  >
    <ListItemButton role={undefined} dense>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={completed}
          tabIndex={-1}
          disableRipple
          slotProps={{ input: { 'aria-labelledby': labelId } }}
          onChange={toggle}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={`${text}`} />
    </ListItemButton>
  </ListItem>
  );
}

export default TodoItem
