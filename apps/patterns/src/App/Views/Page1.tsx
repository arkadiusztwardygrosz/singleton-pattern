import { DataService, Item, pubSub } from '../Service/Service';
import { useEffect, useState } from 'react';
import { Title } from '../Components/Title/Title';
import { List } from '../Components/List/List';
import { Box } from '../Components/Box/Box';
import { Form } from '../Components/Form/Form';

export default function Page1() {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    setData(DataService.getInstance().getData());
    pubSub.subscribe((items) => {
      setData(items);
    });

    return () => {
      pubSub.unsubscribe(setData);
    };
  }, []);

  return (
    <Box>
      <Title>first component</Title>
      <Form data={data} />
      {!data ? null : (
        <List>
          <ul>
            {data?.map((item) => {
              return (
                <li key={item.id + item.word}>
                  <span>{item.id}</span> <span>{item.word}</span>
                </li>
              );
            })}
          </ul>
        </List>
      )}
    </Box>
  );
}
