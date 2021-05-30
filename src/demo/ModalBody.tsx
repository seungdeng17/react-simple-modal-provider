import styled from '@emotion/styled';

const ModalBody = () => {
    return <Body>Modal Body</Body>;
};

const Body = styled.div`
    border-radius: 30px;
    width: 800px;
    height: 300px;
    background-color: #f00;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export default ModalBody;
