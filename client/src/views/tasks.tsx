import { useState, useEffect } from 'react';
import { _get } from '../util/apiClient';
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Button,
  Card,
  Chip,
  Sheet,
  Table,
  Typography,
} from '@mui/joy';
import { Link } from 'react-router-dom';
import getTaskType from '../types/TaskType';
import { TrashButton } from '../components/trashButton';
import { AddCircleOutline } from '@mui/icons-material';
import { EditButton } from '../components/editButton';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, [tasks]);

  const fetchData = async () => {
    try {
      const response = await _get('/tasks');
      setTasks(response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleLegLink = () => {
    // TODO Add
    alert('we outta here');
  };

  type TaskT = {
    task_id: number;
    task_name: string;
    task_type: string;
    task_details: {
      instruction?: string | undefined;
      icon?: string | undefined;
      question?: string | undefined;
      routeA: {
        name?: string | undefined;
        icon?: string | undefined;
        question?: string | undefined;
        instruction?: string | undefined;
      };
      routeB: {
        name?: string | undefined;
        icon?: string | undefined;
        question?: string | undefined;
        instruction?: string | undefined;
      };
    };
    parent_leg: number;
  };

  return (
    <>
      <Sheet
        sx={{
          mx: 'auto', // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
      >
        <Sheet
          variant='plain'
          sx={{
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 1,
          }}
        >
          <Typography level='title-md'>All Tasks</Typography>
          <Button
            variant='solid'
            color='primary'
            size='sm'
            sx={{ height: 'fit-content' }}
            aria-label={'Add a Task'}
            title={'Add a Task'}
            onClick={() => {}}
            startDecorator={<AddCircleOutline />}
          >
            Create a task
          </Button>
        </Sheet>
        <Table
          variant='plain'
          stickyHeader
          stripe='odd'
          hoverRow
          borderAxis='x'
          sx={{
            textAlign: 'left',
            '& thead th:nth-of-type(1)': { width: '20%' },
            '& thead th:nth-of-type(2)': { width: '10%' },
            '& thead th:nth-of-type(3)': { width: '45%' },
            '& thead th:nth-of-type(4)': { width: '15%', textAlign: 'center' },
            '& tbody td:nth-of-type(4)': { textAlign: 'center' },
            '& thead th:nth-of-type(5)': { width: '10%', textAlign: 'center' },
            '& tbody td:nth-of-type(5)': { textAlign: 'center' },
            captionSide: 'bottom',
          }}
        >
          <caption>{tasks.length} TASKS FOUND</caption>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Task Type</th>
              <th>Task Details</th>
              <th>Parent Leg</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task: TaskT) => {
              return (
                <tr key={task.task_id}>
                  <td>
                    <Link to={`${task.task_id}`}>{task.task_name}</Link>
                  </td>
                  <td>{getTaskType(`${task.task_type}`)}</td>
                  <td>
                    <Card variant='outlined' size='sm'>
                      {task.task_details.instruction == undefined && (
                        <Card color='danger' size='sm' variant='soft'>
                          Task details are missing. Edit task to resolve.
                        </Card>
                      )}
                      <AccordionGroup size='sm'>
                        {task.task_details.icon != undefined && (
                          <Accordion>
                            <AccordionSummary variant='outlined'>
                              ICON
                            </AccordionSummary>
                            <AccordionDetails variant='soft'>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: `${task.task_details.icon}`,
                                }}
                              />
                            </AccordionDetails>
                          </Accordion>
                        )}
                        {task.task_details.question != undefined && (
                          <Accordion>
                            <AccordionSummary variant='outlined'>
                              QUESTION
                            </AccordionSummary>
                            <AccordionDetails variant='soft'>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: `${task.task_details.question}`,
                                }}
                              />
                            </AccordionDetails>
                          </Accordion>
                        )}
                        {task.task_details.instruction != undefined && (
                          <Accordion>
                            <AccordionSummary variant='outlined'>
                              INSTRUCTION
                            </AccordionSummary>
                            <AccordionDetails variant='soft'>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: `${task.task_details.instruction}`,
                                }}
                              />
                            </AccordionDetails>
                          </Accordion>
                        )}
                        {task.task_details.routeA != undefined &&
                          task.task_details.routeA != undefined && (
                            <Accordion>
                              <AccordionSummary variant='outlined'>
                                DETOUR INFO
                              </AccordionSummary>
                              <AccordionDetails variant='soft'>
                                <Sheet
                                  variant='soft'
                                  sx={{
                                    my: 2, // margin top & bottom
                                    mx: '2', // margin left & right
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 2,
                                  }}
                                >
                                  <Card
                                    sx={{ display: 'flex', width: '50%' }}
                                    size='sm'
                                    variant='outlined'
                                  >
                                    <b>
                                      {task.task_details.routeA.icon}
                                      {task.task_details.routeA.name}
                                    </b>
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: `${task.task_details.routeA.question}`,
                                      }}
                                    />
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: `${task.task_details.routeA.instruction}`,
                                      }}
                                    />
                                  </Card>
                                  <Card
                                    sx={{ display: 'flex', width: '50%' }}
                                    size='sm'
                                    variant='outlined'
                                  >
                                    <b>
                                      {task.task_details.routeB.icon}
                                      {task.task_details.routeB.name}
                                    </b>
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: `${task.task_details.routeB.question}`,
                                      }}
                                    />
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: `${task.task_details.routeB.instruction}`,
                                      }}
                                    />
                                  </Card>
                                </Sheet>
                              </AccordionDetails>
                            </Accordion>
                          )}
                      </AccordionGroup>
                    </Card>
                  </td>
                  <td>
                    <Chip
                      color='primary'
                      variant='solid'
                      onClick={handleLegLink}
                    >
                      {task.parent_leg}
                    </Chip>
                  </td>
                  <td>
                    <TrashButton
                      itemId={task.task_id!}
                      name={task.task_name!}
                      type={'task'}
                      key={`delete-${task.task_id!}`}
                    />
                    <EditButton
                      itemId={task.task_id!}
                      name={task.task_name!}
                      type={'task'}
                      item={task}
                      key={`edit-${task.task_id!}`}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Sheet>
      {error.length > 0 && (
        <Card
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
            color: '#ffffff',
            backgroundColor: 'red',
          }}
        >
          {<span>{error}</span>}
        </Card>
      )}
    </>
  );
}
