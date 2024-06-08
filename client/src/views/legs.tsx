import { useState, useEffect } from 'react';
import { _get } from '../util/apiClient';
import { Card, Sheet, Table } from '@mui/joy';
import { Link } from 'react-router-dom';

export default function Legs() {
  const [legs, setlegs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await _get('/legs');
      setlegs(response.data);
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
          noWrap
          borderAxis='xBetween'
          sx={{
            textAlign: 'left',
            '& thead th:nth-of-type(1)': { width: '30%' },
            captionSide: 'bottom',
          }}
        >
          <caption>{legs.length} LEGS FOUND</caption>
          <thead>
            <tr>
              <th>Leg Name</th>
              <th>Leg Details</th>
            </tr>
          </thead>
          <tbody>
            {legs.map((leg) => {
              return (
                <tr key={leg.leg_id}>
                  <td>
                    <Link to={`${leg.leg_id}`}>{leg.leg_name}</Link>
                  </td>

                  <td>{JSON.stringify(leg.leg_details)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
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
      </Sheet>
    </>
  );
}
