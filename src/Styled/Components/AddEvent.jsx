import styled from 'styled-components';

export const FormWrapper = styled.form`
    box-shadow: ${({ theme }) => ({ modify }) =>
        modify ? theme.main.columns.boxShadowEvent : 'none'};

    border-radius: 8px;
    padding: 4px;
    margin: 6px 0 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InputWrapper = styled.input`
    text-align: center;
    margin: 4px;
    padding: 4px;
    width: 90%;
    font-size: 16px;
    color: ${({ theme }) => theme.textSoftColor};
    background-color: ${({ theme }) => theme.bgMainColor};
    border: none;
    border-radius: 6px;
    box-shadow: ${({ theme }) => ({ button }) =>
        button
            ? theme.main.addEvent.smallButton
            : theme.main.addEvent.smallInput};
    color: ${({ theme }) => ({ color }) => theme.eventColors[color]};
`;

export const SmallInputsWrapper = styled.div`
    text-align: center;
    width: 90%;
    margin: 2px 0 6px 0;
    display: flex;
    justify-content: space-between;
`;

export const InputHalfWrapper = styled.input`
    padding: 4px;
    width: 48%;
    font-size: 10px;
    background-color: ${({ theme }) => theme.bgMainColor};
    color: ${({ theme }) => theme.textSoftColor};
    box-shadow: ${({ theme }) => theme.main.addEvent.smallInput};
    border: none;
    border-radius: 4px;
`;

export const SelectWrapper = styled.select`
  text-align: center;
  padding: 4px;

  ::-ms-expand {
    display: none;
  }

  -webkit-appearance: none;
  appearance: none;

  margin: 4px 0 4px 0;
  width: 90%;
  font-size: 14px;
  background-color ${({ theme }) => theme.bgMainColor};
  color: ${({ theme }) => theme.textSoftColor};
  box-shadow: ${({ theme }) => theme.main.addEvent.smallButton};
  border: none;

`;

export const TextareaWrapper = styled.textarea`
  outline: none;
  resize: none;
  overflow: auto;
  width: 90%;
  margin: 4px 0 4px 0;
  padding: 4px;
  font-family: Open Sans, sans-serif;

  ::placeholder {
    text-align: center;
  }

  font-size: 14px;
  background-color ${({ theme }) => theme.bgMainColor};
  color: ${({ theme }) => theme.textSoftColor};
  box-shadow: ${({ theme }) => theme.main.addEvent.smallInput};
  border: none;
`;
