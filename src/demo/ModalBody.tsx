// import styled from '@emotion/styled';

const ModalBody = ({ data }) => {
    return (
        <div>
            <p>Modal Body</p>
            <p>{data.title}</p>
        </div>
    );
};

// const Body = styled.div`
//     border-radius: 30px;
//     margin-bottom: 10px;
//     width: 200px;
//     height: 200px;
//     background-color: #f00;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
// `;

export default ModalBody;
