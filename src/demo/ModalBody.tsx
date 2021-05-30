import styled from '@emotion/styled';

const ModalBody = () => {
    return <Body>Modal Body</Body>;
};

const Body = styled.div`
    border-radius: 30px;
    margin-bottom: 10px;
    width: 200px;
    height: 200px;
    background-color: #f00;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export default ModalBody;
