import Button from '@mui/joy/Button';
import { _put } from '../util/apiClient';
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Modal,
  ModalDialog,
  Typography,
} from '@mui/joy';
import { useEffect, useState } from 'react';
import { Edit } from '@mui/icons-material';

type PropsT = {
  itemId: number;
  name: string;
  type: string;
  item: { task_details?: object };
};

export const EditButton = (props: PropsT) => {
  const id = props.itemId;
  const name = props.name;
  const type = props.type;
  const item = props.item;

  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formLabels: string[] = [];

  useEffect(() => {
    setFormLabels();
  }, [formLabels]);

  const setFormLabels = () => {
    if (type == 'task') {
      const targetObj = Object.keys(item.task_details!);

      targetObj.forEach((key) => {
        formLabels.push(key);
      });
    }
  };

  const editItem = async () => {
    setIsLoading(true);
    try {
      // do edit here
      console.log(`edit of ${id}`);
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
          sx={{ width: 1000, height: 600, textAlign: 'center' }}
        >
          <DialogTitle color='danger'>
            <Edit />
            EDIT {type.toUpperCase()}
          </DialogTitle>
          <Divider />
          <DialogContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography level='title-md'>Form here</Typography>
            <Typography level='title-sm'>{formLabels.length}</Typography>
          </DialogContent>
          <DialogActions>
            <Button
              loading={isLoading}
              variant='solid'
              color='success'
              onClick={editItem}
            >
              Save
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
        aria-label={`Edit '${name}'`}
        title={`Edit '${name}'`}
        onClick={() => setOpen(true)}
      >
        <Edit />
      </Button>
    </>
  );
};
