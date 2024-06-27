import Button from '@mui/joy/Button';
import DeleteForever from '@mui/icons-material/DeleteForever';
import { _delete } from '../util/apiClient';
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Modal,
  ModalDialog,
  Typography,
} from '@mui/joy';
import { useState } from 'react';
import { WarningOutlined } from '@mui/icons-material';

type PropsT = { itemId: number; name: string; type: string };

export const TrashButton = (props: PropsT) => {
  const id = props.itemId;
  const name = props.name;
  const type = props.type;

  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const deleteItem = async () => {
    setIsLoading(true);
    try {
      await _delete(`./${type}s/${id}`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error.message);
    }
    setOpen(false);

    setIsLoading(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        component='div'
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <ModalDialog
          variant='outlined'
          role='alertdialog'
          sx={{ width: 430, height: 250, textAlign: 'center' }}
        >
          <DialogTitle color='danger'>
            <WarningOutlined />
            DELETE {type.toUpperCase()}?
          </DialogTitle>
          <Divider />
          <DialogContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography level='title-md'>Delete '{name}'?</Typography>
            <Typography level='title-md' color='danger' sx={{ mt: 3 }}>
              YOU WILL NOT BE ABLE TO UNDO THIS ACTION
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              loading={isLoading}
              variant='solid'
              color='danger'
              onClick={deleteItem}
            >
              DELETE {type.toUpperCase()}
            </Button>
            <Button
              variant='plain'
              color='neutral'
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
      <Button
        variant='plain'
        size='sm'
        aria-label={`Delete '${name}'`}
        title={`Delete '${name}'`}
        onClick={() => setOpen(true)}
      >
        <DeleteForever />
      </Button>
    </>
  );
};
