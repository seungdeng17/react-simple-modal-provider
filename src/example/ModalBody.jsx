import styled from 'styled-components';

const ModalBody = () => {
    return <Body>Modal Body</Body>;
};

const Body = styled.div`
    width: 500px;
    height: 300px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export default ModalBody;
