import { useState, useEffect } from 'react';
import { _get } from '../util/apiClient';
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Card,
  Sheet,
  Table,
} from '@mui/joy';
import { Link } from 'react-router-dom';
import getTaskType from '../types/TaskType';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await _get('/tasks');
      setTasks(response.data);
    } catch (error) {
      setError(error.message);
    }
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
        <Table
          variant='plain'
          stickyHeader
          stripe='odd'
          hoverRow
          borderAxis='x'
          sx={{
            textAlign: 'left',
            '& thead th:nth-of-type(1)': { width: '15%' },
            '& thead th:nth-of-type(2)': { width: '10%' },
            '& thead th:nth-of-type(4)': { width: '10%' },
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
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => {
              return (
                <tr key={task.task_id}>
                  <td>
                    <Link to={`${task.task_id}`}>{task.task_name}</Link>
                  </td>
                  <td>{getTaskType(`${task.task_type}`)}</td>
                  <td>
                    <Card variant='outlined' size='sm'>
                      {task.task_details.instruction == undefined && (
                        <p>
                          Task details are missing, task is likely malformed.
                        </p>
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
                        {task.task_details.routeA != undefined && (
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
                    <Link to={`/legs/${task.parent_leg}`}>
                      {task.parent_leg}
                    </Link>
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
