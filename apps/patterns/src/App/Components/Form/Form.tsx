import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DataService, Item } from '../../Service/Service';

interface IForm {
  data: Item[];
}

export const Form: FC<IForm> = ({ data }) => {
  const [newData, setNewData] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setNewData(data);
  }, [data]);

  useEffect(() => {
    setNewData([...data, { id: data.length + 1, word: inputValue }]);
  }, [data, inputValue]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newData && inputValue) {
      DataService.getInstance().syncData(newData);
      setInputValue('');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <input
        type="text"
        name="item"
        placeholder="Add new element"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.currentTarget.value);
        }}
      />
    </FormContainer>
  );
};

const FormContainer = styled.form`
  width: 100%;
  input {
    border: 1px solid #4caf50;
    padding: 20px;
    margin: 10px 0px 10px 0px;
    color: white;
    background: transparent;
    width: 100%;
  }
`;
