import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Image } from '@chakra-ui/react';
import { tester } from './apis/crypto';
function App() {
  const [data, setData] = React.useState<any[]>([]);
  const getData = async () => {
    const coins = await tester();
    setData(coins);
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <Table size='sm' variant='striped'>
      <Thead>
        <Tr>
          <Th>s.no</Th>
          <Th>icon</Th>
          <Th>name</Th>
          <Th>symbol</Th>
          <Th>price (usd)</Th>
          <Th>circulating supply</Th>
          <Th>total volume (usd)</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((d, i) => (
          <Tr>
            <Td>{i + 1}</Td>
            <Td>
              <Image src={d.image.thumb} />
            </Td>
            <Td>{d.name}</Td>
            <Td>{d.symbol.toUpperCase()}</Td>
            <Td>${d.market_data.current_price.usd}</Td>
            <Td>{d.market_data.circulating_supply}</Td>
            <Td>${d.market_data.total_volume.usd}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default App;
