import { useState, useEffect } from 'react';
import { _get } from '../util/apiClient';
import { Card } from '@mui/joy';

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
        }}
      >
        {legs.length == 0 && <span>0 legs found.</span>}
        {legs.length > 0 && <span>{legs.length} legs found</span>}
        <div>
          {legs.map((leg) => {
            return <li key={leg.leg_id}>{leg.leg_name}</li>;
          })}
        </div>
      </Card>
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
