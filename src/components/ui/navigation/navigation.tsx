import { ListItemIcon, ListItemText, MenuItem, MenuList, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import GroupIcon from "@mui/icons-material/Group";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export const Navigation = () => {
  return (
    <MenuList>
      <MenuItem component={RouterLink} to={'/customers'}>
        <ListItemIcon>
          <GroupIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Customers</ListItemText>
        <Typography variant="body2" color="text.secondary">
          ⌘X
        </Typography>
      </MenuItem>
      <MenuItem component={RouterLink} to={'/account-setting'}>
        <ListItemIcon>
          <ManageAccountsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Manage account</ListItemText>
        <Typography variant="body2" color="text.secondary">
          ⌘X
        </Typography>
      </MenuItem>
    </MenuList>
  )
}